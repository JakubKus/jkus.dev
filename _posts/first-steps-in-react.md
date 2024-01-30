---
title: "First steps in React"
date: "2018-04-06"
excerpt: "Hi! In last few days I learned a little bit about React. It 
definitely has big potencial to build apps' interfaces fast and pleasantly."
---

Hi!\
In last few days I learned a little bit about React. It definitely has big
potencial to build apps' interfaces fast and pleasantly and I hope one day I
will be able to fully use it :). I will present to you now what I learned and
what app I build now.

All the basics of React like: classes, constructors, rendering, "props",
convention of "states" and how to prepare first empty project I learned from
[this video](https://www.youtube.com/watch?v=ZnRFerIP8aA) and
[this](https://www.youtube.com/watch?v=3HMtarQAt3A).
Official [Documentation](https://reactjs.org/docs/getting-started.html) also
helped me, but not that much as those great videos. Here are some rules of
using React I noticed so far:
- Every class should have constructor which looks like this:

```jsx
constructor(props) {
  super(props);
  this.state = {
    property: "value"
  }
}
```

- Every class must extend React.Component:

```jsx
class Button extends React.Component {
```

- The only way to change value of state is to use "setState":

```jsx
this.setState({property: "new value"})
```

- Every class should have render() method and return block inside:

```jsx
render() {
  return(
    <p>{this.state.property}</p>
  )
}
```

- Custom html tags in React have two basic requirements. They must start with a
  capital letter and end with slash. Tag names must be defined as React class
  names. Those tags create instance of React class and they return content of
  class' render() method:

```jsx
<Button/>
```

Ok, rules are listed, now let's move to my app. It's gonna be an interactive
form for hungry people who don't know what they currently want to eat.
Depending on chosen answers, app will show a meal you probably want to eat, a
recipe for it and needed ingredients.

It looks now ugly and the only thing it does is changing the color of button
when clicked, but I done it all with React states, classes, custom html tags
and stuff which were a new experience for me so I'm happy anyway ;) This is how
it looks like now:

![app first version](/assets/blog/first-steps-in-react/first_version_app.jpg)

I hope you enjoyed reading this post and you didn't fall asleep.

Have a good day/evening! :D
