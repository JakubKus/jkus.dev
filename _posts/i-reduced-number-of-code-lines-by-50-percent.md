---
title: "I reduced number of code lines by 50%"
date: "2018-04-28"
excerpt: "Greetings! I'm coming back to you with quite big project update. 
At least when you look into the code."
---

Greetings!\
I'm coming back to you with quite big project update. At least when you look
into the code. The way application works which end user experiences didn't
change at all. The code is now much more readable and it starts to make sense
;D . Let's get through what I did.

One of the most important things I did is that I moved all states with answers
into one array of objects as a state. I also added meals as a separate state
with its properties. I learned it from Koans which I wrote about in previous
post. This is how it looks in practise:

```jsx
form: [
  {type: "question",  content: "Calories / 100g"},
  {type: "answer",    content: "Less than 200",  isChecked: false},
  {type: "answer",    content: "200 - 500",      isChecked: false},
  {type: "answer",    content: "More than 500",  isChecked: false}
```

Another very important thing is that I binded function to button's onClick with
clicked element's index. It allowed me to stop checking DOM to look for changes
in application. It's next thing I learned from Koans. This is how I implemented
it:

```jsx
<SingleButton answer={element.content}
  checkAnswer={this.toggleAnswer.bind(this, index)}
```

and in \<SingleButton>

```jsx
<button name="answer"
        onClick={this.props.checkAnswer}
        className={this.props.isChecked ? 'checked' : ''}
>
  {this.props.answer}
</button>
```

I learned also that calling function right after setState method executes it
actually when state is updated. It is very comfortable and useful. I found it
[here](http://reactkungfu.com/2016/03/dive-into-react-codebase-handling-state-changes/)

```jsx
this.setState({ form: updatedForm }, this.showMeals);
```

Another pretty important thing is updating data in render() method. It is
helpful if you want to do something more than show state values on the screen:

```jsx
let meals = this.state.meals.map((element, index) => {
  return (
    <p key={index} className={element.isActive ? '' : 'inactive'}>
      {element.name}
    </p>
  );
});
```

As you can see I used map function here. I've heard about that before but I
didn't when and how to use it. Now I know that it allows to prepare modified
array from an array. You can use if statement within it.

Okay, that's all, thanks for reading
Have a good day/night! ;D
