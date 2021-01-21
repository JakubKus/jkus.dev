---
title: "Abstract Factory - coffee"
date: "2021-01-21"
description: "Hello. Few days ago I had a thought I want to write something on 
my blog. I wasn't sure what should I write about."
---

Hello. A few days ago I had a thought I want to write something on my blog. I 
wasn't sure what should I write about. Then I came up with an idea to describe 
all design patterns which can be found on
[Refactoring.guru](https://refactoring.guru/design-patterns). I decided to 
prepare simple real-life examples to make them easier to remember and 
understand. As a front-end dev I'm gonna write those examples in typescript.\
I'm really glad there are examples in ts on the website which I've mentioned 
above. I'm not gonna lie, my examples are gonna be based on them :)

We will start with Abstract factory as blogpost title says.
First we will create one main factory interface for the topic thing - coffee factory.

```jsx
interface CoffeeFactory {
  createCoffeeMachine(): AbstractCoffeeMachine;
  createAltBrewers(): AbstractAlternativeCoffee;
}
```

Main factory contains two methods which will be used to brew a coffee. Each 
of them has two brewing methods.

```jsx
interface AbstractCoffeeMachine {
  brewEspresso(): string;
  brewCappuccino(): string;
}

interface AbstractAlternativeCoffee {
  brewFrenchPressCoffee(): string;
  brewDripCoffee(): string;
}
```

In the next step we'll create 2 classes implementing our main coffee factory interface.

```jsx
class Home implements CoffeeFactory {
  createCoffeeMachine(): AbstractCoffeeMachine {
    return new HomeExpress();
  }

  createAltBrewers(): AbstractAlternativeCoffee {
    return new HomeAltBrewers();
  }
}

class Cafe implements CoffeeFactory {
  createCoffeeMachine(): AbstractCoffeeMachine {
    return new CafeExpress();
  }

  createAltBrewers(): AbstractAlternativeCoffee {
    return new CafeAltBrewers();
  }
}
```

Now we will implement all coffee factories (home and cafe) with all brewing methods variations prepared above.

```jsx
class HomeExpress implements AbstractCoffeeMachine {
  brewEspresso(): string {
    return 'Espresso brewed at home';
  }

  brewCappuccino(): string {
    return 'Cappuccino brewed at home';
  }
}

class CafeExpress implements AbstractCoffeeMachine {
  brewEspresso(): string {
    return 'Espresso from coffee machine brewed in a cafe';
  }

  brewCappuccino(): string {
    return 'Cappuccino from coffee machine brewed in a cafe';
  }
}

class HomeAltBrewers implements AbstractAlternativeCoffee {
  brewFrenchPressCoffee(): string {
    return 'Coffee from french press brewed at home';
  }

  brewDripCoffee(): string {
    return 'Coffee from drip brewed at home';
  }
}

class CafeAltBrewers implements AbstractAlternativeCoffee {
  brewFrenchPressCoffee(): string {
    return 'Coffee from french press brewed in a cafe';
  }

  brewDripCoffee(): string {
    return 'Coffee from drip brewed in a cafe';
  }
}
```

Finally we'll create coffee method and call it to test our abstract factory.

```jsx
const coffee = (coffeeFactory: CoffeeFactory) => {
  const toOrderedString = (...items: string[]) => items.map((x, i) => `${i + 1}. ${x}`).join('\n');
  const coffeeMachine = coffeeFactory.createCoffeeMachine();
  const altBrewers = coffeeFactory.createAltBrewers();

  const expressCoffees = toOrderedString(coffeeMachine.brewEspresso(), coffeeMachine.brewCappuccino());
  console.log(`Coffees from coffee machine:\n${expressCoffees}`);

  const frenchPressCoffees = toOrderedString(altBrewers.brewFrenchPressCoffee(), altBrewers.brewDripCoffee());
  console.log(`Coffees using alternative methods:\n${frenchPressCoffees}`);
};

console.log('[Brewing coffee at home]');
coffee(new Home());

console.log('');

console.log('[Getting coffee in a cafe]');
coffee(new Cafe());

/*
 Result:
 [Brewing coffee at home]
 Coffees from coffee machine:
 1. Espresso brewed at home
 2. Cappuccino brewed at home
 Coffees using alternative methods:
 1. Coffee from french press brewed at home
 2. Coffee from drip brewed at home

 [Getting coffee in a cafe]
 Coffees from coffee machine:
 1. Espresso from coffee machine brewed in a cafe
 2. Cappuccino from coffee machine brewed in a cafe
 Coffees using alternative methods:
 1. Coffee from french press brewed in a cafe
 2. Coffee from drip brewed in a cafe
*/
```

And that's it! You can find raw code of all patterns on my github in 
[this repo](https://github.com/jakubkus/patterns). \
Thanks for reading :)
