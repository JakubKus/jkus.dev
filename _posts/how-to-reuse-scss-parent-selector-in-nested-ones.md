---
title: "How to reuse scss parent selector in nested ones"
date: "2020-09-07"
excerpt: "Today I'll show you my new approach for writing selectors using
 parent selectors with BEM modifiers."
---

Today I'll show you my new approach for writing selectors using parent
selectors with BEM modifiers. So let's look at code. Here is final css code
We want to achieve:

```scss
.component {
  background-color: white;
}

.component--dark {
  background-color: dimgrey;
}

.component__paragraph {
  color: black;
}

.component--dark .component__paragraph {
  color: white;
}
```

In the past I would've thought like that: ok this is a component with dark
mode, so I'll prepare a selector for that and then I'll put other sub-selectors
into it. It would look like this:

```scss
.component {
  background-color: white;

  &--dark {
    background-color: dimgrey;

    .component {
      &__paragraph {
        color: white;
      }
    }
  }
  
  &__paragraph {
    color: black;
  }
}
```

As you can see, I had to repeat whole `.component__paragraph` selector, and I
didn't reuse the parent selector. I had quite a few situations like
that before and one day I decided to do research to check if I can reuse the
parent selector. Here is a solution I found out:

```scss{12}
.component {
  background-color: white;

  &--dark {
    background-color: dimgrey;
  }
  
  &__paragraph {
    color: black;
  }
  
  &--dark & {
    &__paragraph {
      color: white;
    }
  }
}
```

On example above I've marked a line with new magic double `&` selector.\
The `&` always copies last parent selector in "bracket" scope. Now the marked
line looks like this: `.component--dark .component`. With selector like this we
can reuse the parent selector and just put here paragraph part.

The code looks a bit more readable, and it reduces an amount of code to
maintain. If `component` class would change, only the parent selector will
require an update.

The only bad thing of above solution is that We have to prepare a separate
selector for a dark mode. We cannot do something like this:

 ```scss{1-2}
&--dark & {
  background-color: dimgrey;

  &__paragraph {
    color: white;
  }
}
```

It would produce `.component--dark .component` and this is not what We want.
Except that one disadvantage, We get a benefit in code readability which is
quite an important thing in my opinion.

Thanks for reading :) 