---
title: Solidity basics for programmers
date: "2022-08-11"
description: "Hello after long break! 😅 Today I want to present you everything I learned about Solidity"
---

Hello after long break! 😅 Today I want to present you everything I learned about Solidity from "web2" developer
perspective. My knowledge is based pretty much on [CryptoZombies](https://cryptozombies.io) online course/game. In this
post I use many js analogies and in a few places I also use c++ ones. You have been warned.

- Solidity version in contract:

```solidity
pragma solidity >=0.5.0 <0.6.0;
// declare version range 
pragma solidity ^0.8.4;
// or without specifying upper bound
```

- `contract HelloWorld {}` - it's pretty much like `class HelloWorld {}`
- `struct` is similar to struct in c++. In js I'd say it's like a fn with constructor:

```solidity
// in solidity:
struct Person {
  uint age;
  string name;
}
Person person = Person(25, 'Jakub');
```

```js
// in js:
function Person(age, name) {
  this.age = age
  this.name = name
}
const person = new Person(25, 'Jakub');
```

- Function structure: `name`, `parameters`, `visibility`, `modifier`, `return`:

```solidity
function functionName(uint param) private|public|internal|external  pure|view|-  returns|- {
  // body
}
```

- `internal` - protected
- `external` - can be called only outside contract (e.g. from frontend web app)
- `view` - only to read data, no gas being used
- `pure` - like static function, cannot access outer data

```solidity
// complete function example
function _multiply(uint a, uint b) private pure returns(uint) {
  return a * b;
}
```

- Reference types:
  - array
  - struct
  - mapping
  - string
- `memory` keyword needs to be used if we want to pass reference type to function or return it
- `calldata` is equivalent to `memory` for `external` functions:

```solidity
function createZombie(string memory _name) private {
  // create zombie
}

function takeTwo(uint[] calldata values) external pure returns (uint[2] memory) {
  return [values[0], values[1]];
}
```

- `string[5] stringArray;` - it is possible to declare the array size like in other languages
- `msg.sender` - address of contract caller, e.g. 0x0cE446255506E92DF41614C46F1d6df9Cc969183
- Semi-random number generator in solidity:

```solidity
uint rand = uint(keccak256(abi.encodePacked('key_to_hash')));
// generating number is based on hashing a string.
// 1 char replacement can return totally different value.
```

- String comparison in solidity 🙈:

```solidity
keccak256(abi.encodePacked('kitty')) == keccak256(abi.encodePacked('kitty'))
```

- Emitting events is quite straightforward:

```solidity
event IntegersAdded(uint x, uint y, uint result);

function _add(uint _x, uint _y) private {
  uint result = _x + _y;
  emit IntegersAdded(_x, _y, result);
}
```

- `mapping` is actually a key-value dictionary:

```solidity
mapping(address => uint) ownerNFTCount;
mapping(address => uint) public addressToBalance;

function storeValues() public {
  ownerNFTCount[0x0cE446255506E92DF41614C46F1d6df9Cc969183] = 2;
  addressToBalance[0x0cE446255506E92DF41614C46F1d6df9Cc969183] = 10;
}

function retrieveValues(address _address) public view returns (uint, uint) {
  return (ownerNFTCount[_address], addressToBalance[_address]);
  // returns (0, 0) if not defined
}
```

- `mapping` equivalent in TypeScript:

```ts
const ownerNFTCount: { [address: number]: number } = {};
const addressToBalance: { [address: number]: number } = {};

const storeValues = () => {
  ownerNFTCount[0x0cE446255506E92DF41614C46F1d6df9Cc969183] = 2;
  addressToBalance[0x0cE446255506E92DF41614C46F1d6df9Cc969183] = 10;
};

const retrieveValues = (address: number) => ({
  0: ownerNFTCount[address] ?? 0,
  1: addressToBalance[address] ?? 0,
});
```

- `require()` function:

```solidity
function fn(uint a) private {
  require(a == 0, 'value should be 0');
}
```

```js
// equivalent in js:
function fn(a) {
  if (a !== 0 ) return 'value should be 0';
  // notice != in js and == in solidity 
}
```

- Contract inheritance:

```solidity
contract ZombieFeeding is ZombieFactory {}
```

- Mutating state using `storage`:

```solidity
Sandwich storage mySandwich = sandwiches[_index];
// changing mySandwich mutates sandwiches
Sandwich memory anotherSandwich = sandwiches[_index];
// no mutation
```

- Interfaces in solidity are kind of contract skeletons. We only declare functions we want to use:

```solidity
interface KittyInterface {
  function getKitty(uint kittyId) external view returns (
    string calldata kittyName,
    uint kittyDna
  );
}

contract KittyContract {
  string kittyName;
  uint kittyDna;
  // initializing contract with address points to this external contract
  KittyInterface kittyContract = KittyInterface(0x06012c8cf97BEaD5deAe237070F9587f8E7A266d);
  function getKittyData() public {
    (kittyName, kittyDna) = kittyContract.getKitty(1);
  }
}
```

- `modifier` in solidity is a mini function which can modify other functions. Usually it just checks some condition. A
  bit like TypeScript's type predicates:

```solidity
bool mintPaused = true;

function isOwner() public view returns(bool) {
  return msg.sender == _owner;
}

modifier onlyOwner() {
  require(isOwner());
  _; // _; tells contract to return to fn body
}

function startMint() external onlyOwner {
  mintPaused = false;
}
```

- `renounceOwnership()` - interesting function from
  [OpenZeppelin's Ownable.sol](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol)
  contract.
  It sets contract owner to address `0`, which makes it impossible to call `onlyOwner` functions after that anymore
- Saving gas with `unint`:
  - Declaring `uint` less than 256, e.g. `uint8` or `uint16` doesn't save gas, because solidity reserves 256 bits of
    storage anyway
  - However, it makes sense inside `struct`. Using smaller `uints` can save you gas. It's important to put them next to
    each other
  - Note that `uint` is default for `uint256`

```solidity
struct DoesntSaveGas { // ❌
  uint32 a;
  uint b;
  uint32 c;
}

struct SavesGas { // ✅
  uint32 a;
  uint32 c;
  uint b;
}
```

- `external views` are free when they are called externally. If they are called internally by other **non view
  functions**, it costs additional gas
- Fun fact: writing to `storage` is one of the most expensive operations in Solidity
- Functions with `memory` stored array can be used as gas usage optimisation.\
  Creating function, which iterates over an array every time may sound like a bad practice, but gas-wise this is better
  option. Creating separate array in storage and manipulating on it would be more expensive:

```solidity
function getZombiesByOwner(address _owner) external view returns (uint[] memory) {
  uint[] memory result = new uint[](ownerZombieCount[_owner]);
  uint counter = 0;
  for (uint i = 0; i < zombies.length; i++) {
    if (zombieToOwner[i] == _owner) {
      result[counter] = i;
      counter++;
    }
  }
  return result;
}
```

- `payable` - function modificator for operations with transferring ethers
- transferring ethers from txn to contract:

```solidity
owner.transfer(address(this).balance);
```

- `address(this).balance` - contract’s balance
- Generating random numbers in contract is not so safe, can be potentially abused,
  [more info here](https://ethereum.stackexchange.com/questions/191/how-can-i-securely-generate-a-random-number-in-my-smart-contract)
- `using SafeMath for uint256;` - if you're familiar with c++, `using` keyword shouldn't be new to you. The difference
  is that in Solidity we declare it for specific data type.\
  SafeMath is a lib which helps with preventing number overflows
- `require()` function will refund gas if condition don’t pass, `assert()` will **not**
- In frontend side communication with smart contracts:
  - `call` - is used for view and pure functions
  - `send` - will create a transaction and change data on the blockchain

- `indexed` event parameter:

```solidity
event Transfer(address indexed _from) {}
// indexed is necessary to filter events

// on frontend:
cryptoZombies.events.Transfer({ filter: { _to: userAccount } })
```

- Using events can be used in some cases as a cheaper form of storage.

And that's it! Thanks for reading :) 
