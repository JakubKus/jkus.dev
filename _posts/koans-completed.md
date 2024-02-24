---
title: "Koans completed"
date: "2018-04-21"
excerpt: "Welcome! As title says, I completed React.js Koans created by 
awesome group of software developers called Arkency." 
---

Welcome!\
As title says, I completed React.js Koans created by
awesome group of software developers called [Arkency](https://arkency.com). You
can find Koans [here](https://github.com/arkency/reactjs_koans). I recommend
it for anyone who wants to learn React. It's great collection of tasks, which
are arranged from basic level to actually working grocery list making web
application. Here is what new I learned from it.

- Putting states into arrays is more comfortable, usable and readable:

```jsx
groceries: [
  {
    name: 'Apples',
    completed: false,
  },
];
```

- I found out that you can "rerender" things in render() method before return
  statement and it actually show current states values. It will be very helpful
  in developing my app.

```jsx
render() {
  let groceriesComponents = [];
  for(var index = 0; index < this.state.groceries.length; index++) {
    groceriesComponents.push(
      <GroceryListItem
        grocery={this.state.groceries[index]}
      />
    );
  }
  return (
    <div>
      <ul>
        {groceriesComponents}
      </ul>
    </div>
  );
}
```

- You should bind in constructor functions you will be using:

```jsx
constructor(props) {
  super(props);
  this.addGroceryItem = this.addGroceryItem.bind(this);
  this.inputChanged = this.inputChanged.bind(this);
}
```

- You can bind a function in instance call if returned element of this instance
  will be using function from calling class:

```jsx
<GroceryListItem
  grocery={this.state.groceries[index]}
  onComplete={this.toggleGroceryCompleteness.bind(this, index)}
/>
```

I think I listed everything I learned, and I will use each of those "tricks" in
my Food Picker app :) . To sum up, doing those task was a lot of fun and
completing it gave me big satisfaction. I hope someone reading this post also
will find it useful. Thanks for reading.

Have a good day/evening! :D
