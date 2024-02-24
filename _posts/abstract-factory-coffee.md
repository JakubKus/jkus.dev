---
title: "Abstract Factory - coffee"
date: "2021-01-21"
excerpt: "Hello. A few days ago I had a thought I want to write something 
on my blog. I wasn't sure what should I write about."
---

Hello. A few days ago I had a thought I want to write something on my blog. I
wasn't sure what should I write about. Then I came up with an idea to describe
all design patterns which can be found on
[Refactoring.guru](https://refactoring.guru/design-patterns). I decided to
prepare simple real-life examples to make them easier to remember and
understand. As a front-end dev I'm gonna write those examples in typescript.\
I'm really glad there are examples in ts on the website which I've mentioned
above. I'm not gonna lie, my examples are going to be based on them :)

I will start with Abstract factory as blogpost title says.

```ts
interface CoffeeDeviceFactory {
  createCoffeeMachine(): AbstractCoffeeMachine;
}
```

Firstly I created one main factory interface for the topic thing - coffee
device factory. It contains a method which will be used to create a coffee
brewing machine.

```ts
interface AbstractCoffeeMachine {
  brewEspresso(): string;
  brewCappuccino(): string;
}
```

Now the interface for a coffee machine and its coffee brewing methods.

```ts
class HomeCoffeeFactory implements CoffeeDeviceFactory {
  createCoffeeMachine(): AbstractCoffeeMachine {
    return new HomeCoffeeMachine();
  }
}

class HomeCoffeeMachine implements AbstractCoffeeMachine {
  brewEspresso(): string {
    return 'Espresso brewed at home';
  }

  brewCappuccino(): string {
    return 'Cappuccino brewed at home';
  }
}
```

Here I created 2 classes implementing interfaces explained above for brewing at
home.

```ts
class CafeCoffeeFactory implements CoffeeDeviceFactory {
  createCoffeeMachine(): AbstractCoffeeMachine {
    return new CafeCoffeeMachine();
  }
}

class CafeCoffeeMachine implements AbstractCoffeeMachine {
  brewEspresso(): string {
    return 'Espresso brewed in a cafe';
  }

  brewCappuccino(): string {
    return 'Cappuccino brewed in a cafe';
  }
}
```

The same for brewing in a cafe.

```ts
const toOrderedString = (...items: string[]) =>
  items.map((x, i) => `${i + 1}. ${x}`).join('\n');

const brewCoffees = (coffeeDeviceFactory: CoffeeDeviceFactory) => {
  const coffeeMachine = coffeeDeviceFactory.createCoffeeMachine();
  const coffeeMachineCoffees =
    toOrderedString(coffeeMachine.brewEspresso(), coffeeMachine.brewCappuccino());

  console.log(coffeeMachineCoffees);
};

console.log('[Brewing coffees at home]');
brewCoffees(new HomeCoffeeFactory());

console.log('');

console.log('[Getting coffees in a cafe]');
brewCoffees(new CafeCoffeeFactory());

/*
 Result:
 [Brewing coffees at home]
 1. Espresso brewed at home
 2. Cappuccino brewed at home

 [Getting coffees in a cafe]
 1. Espresso brewed in a cafe
 2. Cappuccino brewed in a cafe
*/
```

Finally I create `brewCoffees` function and call it to test the abstract
factory.

And that's it! You can find raw code of all patterns on my github in
[this repo](https://github.com/jakubkus/patterns). \
Thanks for reading :)
