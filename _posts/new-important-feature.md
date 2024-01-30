---
title: "New important feature"
date: "2018-05-19"
excerpt: "Welcome! In IT world it's often said that adding new features to 
projects is the most exciting activity in whole development process. So here 
comes new feature to my app!"
---

Welcome!\
In IT world it's often said that adding new features to projects is the most
exciting activity in whole development process. So here comes new feature to my
app! Now, when you get chosen meal and you click on it, you will get link or
links to a sites with recipe and instructions. This is how I did it:
- I used Google Custom Search REST api to get links based on search meal names.
  [This document](
  https://developers.google.com/custom-search/json-api/v1/using_rest) shows very
  clearly how to build request and how to get results
- I found also Fetch API for JavaScript which is great! I followed
  [this](https://blog.hellojs.org/fetching-api-data-with-react-js-460fe8bbf8f2)
  nice tutorial which showed me how exactly this API works. Combining it with
  Google API my request looks like this:

```jsx
fetch('https://www.googleapis.com/customsearch/v1?key=API_KEY&q=' + this.state.randomMeal + ' recipe')
```

- It wasn't of course everything I had to do. I added few more states to be
  able to track if there was any good request. I chose three trusted services and
  if any was found with Google API, state becomes truthy.
- I also had to be able to show those link, so I added empty \<a> tags to box
  with chosenMeal. If links were found, chosen meal hides and links appears
  instead of it. I manipulate it with class names depending on states.

```jsx
let allrecipesFound= this.state.allrecipes ? "" : "hidden";
let simplyrecipesFound = this.state.simplyrecipes ? "" :"hidden";
let tasteofhomeFound = this.state.tasteofhome ? "" : "hidden";

let hideRandomMeal = !(allrecipesFound && simplyrecipesFound && tasteofhomeFound) ? "hidden" : "";
<button className={hideRandomMeal} disabled={this.state.disableRandomMeal} id="randomMeal" onClick={this.showLinks}>{this.state.randomMeal}</button>  
<a className={allrecipesFound} href={this.state.allrecipes.toString()}>AllRecipes.com</a>  
<a className={simplyrecipesFound} href={this.state.simplyrecipes.toString()}>SimplyRecipes.com</a>  
<a className={tasteofhomeFound} href={this.state.tasteofhome.toString()}>TasteOfHome.com</a>
```

And basically that's all I needed to make this satysfying (for me) feature. Oh
wait, I also changed my CSS styling file into SCSS. I'm new to it and I know
that I don't fully use its potencial, but my styles became a little bit more
readable. Thanks for reading.

Have a good day/night! ;D
