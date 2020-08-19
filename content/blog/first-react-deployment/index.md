---
title: "First React deployment"
date: "2018-05-12"
description: "Hi! This time I decided, I will try to deploy my app. In the past 
I deployed my another app to Heroku, so it wasn't my first time."
---

Hi!\
This time I decided, I will try to deploy my app. In the past I deployed my 
another app to Heroku, so it wasn't my first time. I thought it will be hard 
and complicated because it's React app but actually it was quick and simple. 
Here are steps I followed to get deployed app

- First of all I found 
[this tutorial](https://github.com/gitname/react-gh-pages). Every step is 
described very fine there.
- I could skip first 2 steps, because I already had project on GitHub and on my 
pc. So I moved to step 3 and installed "gh-pages" DevDependecy
- After that I added "homepage" property into my package.json and 2 scripts to 
scripts section:

```jsx
"homepage": "http://jakubkus.github.io/Food-Picker",
```

```jsx
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build",
```

- 5th step I could skip either
- 6th step was the first problem I had with deployment but I fixed it very 
fast. I thought if my local repository is connected to remote one, then I don't 
have to do anything in this step. But the problem was that I named my 
connection "gh" and I had to add another with original name "origin". After 
that it worked perfectly.
- Finally the last thing left to do was to use 1 command "npm run deploy". It 
made production version of my app and pushed it to new branch "gh-pages". On my 
project's GitHub in settings I had to enable GitHub Pages and choose branch and 
my project was actually published!

![site published](./site_published.jpg)

Now you can go and try my app [here](https://themealseeker.web.app) :) Thanks 
for reading.
Have a good day/night! ;D
