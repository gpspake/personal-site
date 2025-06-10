---
title: Better JavaScript with ESlint, Airbnb, &#038; Prettier
date: '2017-10-04T18:07:26'
draft: false
categories:
- Code
- Software
- Talks
- Web Development
tags:
- airbnb
- create-react-app
- eslint
- javascript
- memphis web workers
- memtech
- prettier
author: George Spake
slug: eslint
description: Add ESlint, Airbnb’s Style Guides, & Prettier to Create-React-App without Ejecting. Integrate ESlint with your editor.
---

**Learn How to Set Up ESlint, Airbnb 's Style Guides, & Prettier using a
Create-React-App without ejecting and Integrate ESlint With Your Editor.**

_Prepared for the[Memphis Web Workers](http://memphiswebworkers.com/) User
Group on [October 10, 2017](https://www.meetup.com/memphis-technology-user-
groups/events/243211814/)_

See the [code](https://github.com/gpspake/memphisww-eslint) on Github

Linting provides an extra measure of code quality by analyzing code and
highlighting potential errors. It can also ensure consistency across projects
with multiple developers. Using a create-react-app project, we'll learn how to
get started with ESlint and configure it to use popular style guides. First,
let's make sure we understand what we'll be working with…

**[ESlint](https://eslint.org/)  
** Eslint has become the de-facto linting tool for JavaScript. It's easy to
set up, completely customizable, and has a strong ecosystem of plugins and
extensions.

[**Airbnb JavaScript Styleguides**](https://github.com/airbnb/javascript)  
Airbnb has open sourced its internal guide of JavaScript best practices that
can be enforced using ESlint. This styleguide includes rules for React and
it's become so widely used that ESlint provides an option to enable it by
default, as we'll see shortly.

[**Prettier**](https://github.com/prettier/prettier)  
Prettier is another open source library of opinionated linting rules, much
like Airbnb's. While Airbnb's style guide is concerned with code quality and
potential run time errors, however, Prettier takes care of more aesthetic code
style decisions like indentation, new lines, and when to use semicolons. While
this may seem overly nit-picky at first, it's actually liberating because it
alleviates the need to make a lot of trivial decisions, allowing developers to
devote that energy to the functionality of their code and not how it looks. It
also guarantees consistency across entire projects.

[**Create-React-App**](https://github.com/facebookincubator/create-react-app)  
React is an open source library for building user interfaces, released and
maintained by Facebook. Create React App (CRA) is a convenient command line
tool, also maintained by Facebook, that makes it easy to, well, create a React
app.

### Requirements

What you'll need:

  * **Node**
  * **Yarn**  - Npm will suffice I'll be using Yarn for examples.
  * **create-react-app** - CRA can be installed by running `yarn global add create-react-app` *

*If you're using Yarn, make sure your yarn install directory is in your path for globally installed packages.

### Create a React Project with CRA

This part is easy, we just need to run a few commands

`$ create-react-app my-app`  
`$ cd my-app`  
`$ yarn start`

You should be able to access the app at `https://localhost:3000`

Great, our app is up and running; now we can add ESlint.

## ESlint and Airbnb Javascript Style Guide

Use yarn to install ESlint. Run the following command from your project root
directory:

`$ yarn add eslint --dev`

You should see ESlint appear in the dev dependencies section of your
package.json file.

With ESlint installed, we can use the handy init command to set up the inital
ESlint configuration for our project.

Since ESlint is installed locally and not in our `$PATH`, we'll need run it
from our node modules directory (Don't worry, we'll make this look nicer in
just a minute)

`./node_modules/.bin/eslint --init`

This command will launch a walk-through that will set up your ESlint
configuration automatically by asking a few questions?

![](https://georgespake.com/wp-content/uploads/2017/10/Screen-
Shot-2017-09-26-at-1.56.38-PM.png)

We're going to choose to use a popular style guide:

![](https://georgespake.com/wp-content/uploads/2017/10/Screen-
Shot-2017-09-26-at-1.57.12-PM.png)

You guessed it. We'll select Airbnb here:

![](https://georgespake.com/wp-content/uploads/2017/10/Screen-
Shot-2017-09-26-at-1.57.24-PM.png)

Next we'll confirm that we're using React

![](https://georgespake.com/wp-content/uploads/2017/10/Screen-
Shot-2017-09-26-at-1.57.40-PM.png)

And, finally, we'll use JSON for our config file:

![](https://georgespake.com/wp-content/uploads/2017/10/Screen-
Shot-2017-09-26-at-1.58.05-PM.png)

Cool! we're all set. You should see some new dev dependencies in your
`package.json` file and there will be a `.eslintrc.json` file in your project
directory.

Let's run ESlint against our code directory.

`./node_modules/.bin/eslint .`

![](https://georgespake.com/wp-content/uploads/2017/10/eslint-error.png)

Nice; We're linting! We're getting lots of errors but that's what we want.
That command still looks pretty funky, though, so let's add a script for it to
our package.json file.

In the scripts section in package.json add a new script named `"lint"` with
the command `"lint ."` (The `.` at the end tells ESlint that we want to check
the entire current directory)

It should look something like this now:

![](https://georgespake.com/wp-content/uploads/2017/10/Screen-
Shot-2017-10-03-at-10.27.56-AM.png)

Scripts in package.json will reference the node_modules directory before your
computer's `$PATH` so there's need to include the full path in the command.
This will allow us to use yarn to run`$ yarn lint` with the same results as
before.

### Fix ESlint errors

Right away, ESLint tells us that there are 37 problems along with a
description and some info about where to find them.

**Ignoring Files**

One of the files ESlint is warning us about is `registerServiceWorker.js`,
which comes with create-react-app and we probably won't be messing with. In
some cases, like this one, we'll want to tell ESlint to ignore certain files
completely. To do so, we'll need to create a file named `.eslintignore` in the
root directory, add `src/registerServiceWorker.js` to the first line and save.

When we run `yarn lint` again, we'll notice that that file is excluded from
ESlint results and we're down to just seven problems!

![](https://georgespake.com/wp-content/uploads/2017/10/Screen-
Shot-2017-10-03-at-10.42.43-AM.png)

Note: Ignoring files is a brute-force solution to linting errors and, if
abused, defeats the purpose of using a linter. Make sure that if you ignore
files, you have a good reason. There's no need to add `node_modules` to your
ignore file because ESlint is smart enough to ignore it by default.

**Configuring Rules**

Next we can see that each of our files is getting that `react/jsx-filename-
extension` error. A quick search tells us that this is because files that
contain React's JSX syntax should have a .jsx file extension. The easiest way
to fix this would be to just change our file extensions but I don't like that
idea and [Dan Abramov doesn't
either](https://github.com/airbnb/javascript/pull/985#issuecomment-239145468)
so I'd rather tell my linter that I want to use `.js` file extensions. No
problem!

To fix this I'm just going to add a rules section to my `.eslintrc.json` file,
and specify that I want to use `".js"`

Now if we run `yarn lint` again, we're down to just four errors.

![](https://georgespake.com/wp-content/uploads/2017/10/Screen-
Shot-2017-10-03-at-11.07.33-AM.png)

Next let's knock out those `no-undef` errors. In this case, ESlint doesn't
know what the variables `it` or `document` are, but we do, so we need to tell
it. Again, we'll edit our `.eslintconfig.json` file to let ESlint know to
expect variables from certain environments. `it` is a variable used by Jasmine
for testing and `document` is, of course, available in the browser. So we'll
add an `"env"` section and specify that we're targeting Jasmine and the
browser:

If we run `yarn lint`, we'll see we're down to just one error. and this one
will require us to refactor some code.

![](https://georgespake.com/wp-content/uploads/2017/10/Screen-
Shot-2017-10-03-at-11.21.51-AM.png)

**Refactoring code**

Here's where we start to see the value of these tools. So far, we've mostly
just told our linter to be quiet because we know what we're doing but now
we've reached a point where we actually need to fix some code.

A quick search for that error takes us to the [eslint-plugin-react
documentation](https://github.com/yannickcr/eslint-plugin-
react/blob/master/docs/rules/prefer-stateless-function.md) which includes the
following justification for the enforcing this rule along with details about
how to fix it:

> Stateless functional components are simpler than class based components and
> will benefit from future React performance optimizations specific to these
> components.

If we look in App.js, we can see that our App component has no state which
means it can be refactored to a stateless functional component. Here's what it
looks like now:

Here's what it looks like once we've refactored it based on the plugin
documentation.

That's it! If we run `yarn lint` again, we should be in the clear… oh…

![](https://georgespake.com/wp-content/uploads/2017/10/Screen-
Shot-2017-10-03-at-11.35.39-AM.png)

Dang. Now we have more errors. But, by now, we know what we're doing so we've
got this. These new errors are all related to the fact that we are no longer
using the `Component` import, so removing that will clear up a few of them up.

**Fix errors automatically**

Now we're down to one error again, the `react/jsx-tag-spacing` error  just
wants us to add a space before the closing bracket of our `img` jsx tag. But
notice that message at the bottom:

> 1 error, 0 warnings potentially fixable with the `-fix` option.

The ESlint output is letting us know that some of our errors might be able to
be fixed automatically. Let's add a new script to our `package.json` to do
just that. I'm going to add a `lintfix` script that looks just like our lint
script but with the `--fix flag` included:

![](https://georgespake.com/wp-content/uploads/2017/10/Screen-
Shot-2017-10-03-at-12.05.09-PM.png)

I chose to keep these scripts separate, rather than including it in my main
lint script, because I like to see errors before fixing them.

This time, I'll run `yarn lintfix` and it will fix the error for us
automatically!

![](https://georgespake.com/wp-content/uploads/2017/10/Screen-
Shot-2017-10-03-at-12.11.03-PM-copy.png)

Pretty cool, right?

## Prettier

So far, we've set up eslint with the Airbnb styleguide rules, added some npm
scripts to check our code, and fixed some errors by configuring ESlint and
refactoring our code.

Now let's bring in Prettier.

The first thing we need to do is install some packages:

`yarn add prettier eslint-plugin-prettier eslint-config-prettier --dev`

Then we can add Prettier to our existing `eslintconfig.json` file based on the
[example configuration](https://github.com/prettier/eslint-config-
prettier#example-configuration) in the Prettier documentation:

let's run `yarn lint` again and see what we get:

![](https://georgespake.com/wp-content/uploads/2017/10/Screen-
Shot-2017-10-04-at-9.51.54-AM.png)

Cool! Now we're getting Prettier errors. This time, prettier is griping at us
about single quotes - it wants us to use double quotes - and, once again, it
looks like we can fix all of these errors by running our `eslintfix` command.
Since Prettier is mostly concerned with style, you'll find that most Prettier
errors can be fixed automatically.

I like single quotes, though, and I want to override this particular rule and
enforce single quotes instead. That means we get to update our
`eslintconfig.json` file again.

I've added `"singleQuote": true` to my Prettier rules so now Prettier will
actually enforce single quotes.

This is a great example of using your linter to enforce your own preferences.
The preference itself is not as important as ensuring all of the project's
code conforms to the same rules regardless of who's writing it.

## Editor Integration

Now that ESlint is all set up and working, let's tell our editor about it.
Most editors include support for eslint. I'm using a Jetbrains IDE so all I
need to do is enable ESlint and point to my `.eslintrc.json` file in my
editor's ESlint settings:

![](https://georgespake.com/wp-content/uploads/2017/10/Screen-
Shot-2017-10-03-at-12.18.24-PM-1024x674.png)

Since we've fixed all of our errors, it's not going to do much for us now, but
let's see what happens when we mess some stuff up deliberately. In the gif
below, I've added some unnecessary whitespace and replaced some double quotes
with single quotes. Since we've made the IDE aware of our ESlint rules, it
will highlight violations for us and display details about the error on hover.
I can also right click and choose "Fix ESlint Problems" to fix them
automatically.

![](https://georgespake.com/wp-content/uploads/2017/10/eslint-editor-
integration.gif)

Pressing `alt+enter` on an error will provide even more options, including the
ability to suppress certain errors in a specific file, which adds a comment to
the top of your file automatically to silence it.

![](https://georgespake.com/wp-content/uploads/2017/10/Screen-
Shot-2017-10-04-at-12.26.39-PM.png)

## What's Next?

Now that you're an ESlint pro, use it! Try linting some code you've already
written and see what happens; chances are you'll find some things you can
improve and maybe even some potential bugs. Working on a project with multiple
developers? [Enforce compliance](https://medium.com/@shettyrahul8june/how-to-
run-eslint-using-pre-commit-hook-25984fbce17e) with linting rules by rejecting
commits that fail.

One final thought. Linting may seem like an unnecessary and burdensome
requirement on top of all of the other challenges associated with writing code
but the perceived hassle is most definitely worth the benefits. Your linter is
your friend that's always watching your back and helping you catch mistakes;
it's like pair programming for free. Sometimes you might disagree but,
remember, ESlint is completely configurable - it's designed to enforce _your_
preferences, not give you a hard time so if you don't like something, change
it. The feeling you get from writing code that lints is rewarding and I
encourage everyone to make it a habit.
