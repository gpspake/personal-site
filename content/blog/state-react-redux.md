---
title: 'Talk: Managing State in Frontend Webapps with React and Redux'
date: '2017-03-30T18:46:01'
draft: false
categories:
- Talks
- Web Development
tags:
- react
- redux
- theits
author: George Spake
slug: state-react-redux
---

_This brain dump was written with love for a presentation at the Tennessee
Higher Ed Tech Symposium 2017 and an internally talk for the fine folks I work
with._

Technology is constantly evolving and changing so it's easy to dismiss hype as
"new hotness." I must hear "There'll be a new thing in 6 months" on a monthly
basis from skeptics. And they aren't necessarily wrong. While that may be
true, it's probably irresponsible for a web developer to deny the significance
of our current iteration of changing web technology that’s being driven by the
ubiquity and prevalence of mobile tech and cloud computing.

Over the past 10 years or so, the surge in mobile web access has brought a lot
of new challenges to web development that we’re still trying to figure out and
they aren’t novel or trivial.

For example, to meet the challenge of displaying content on an infinite number
of screen sizes [responsive web
design](https://abookapart.com/products/responsive-web-design) and [mobile
first web design](https://abookapart.com/products/mobile-first) emerged as the
accepted ideal approach to that problem. It’s hard to believe those terms are
barely five years old.

Another challenge: As people became accustomed to interacting with native
mobile apps, the demand grew for that snappy native-app experience on web
pages which created a new set of challenges in the realm of performance and
user experience. Suddenly, constant full page reloads are a problem and users
don’t have time to wait for a bunch of unnecessary requests back and forth to
the server which led to the rise of single page app architecture and an
explosion in the chaotic  world of front-end javascript frameworks and
tooling.

Add to this that we’ve recently we’ve seen dramatic progress in Javascript as
a language that has opened a lot of doors to better code, better architecture
and more reliable software on the web (More on this later). Sites like Github
have made Open Source software contribution easier than ever and connected
developers all over the world like never before which has improved quality and
increased the pace of acceptance of solutions by the global developer
community. Some of the challenges that we’re dealing with right now have led
to some amazing solutions in terms of technology, tooling, architecture, and
software design patterns that seem both mind blowing and obvious in
retrospect.

I’ve been enthralled with all of this excitement - er chaos - for years now.
And a couple of libraries, that have emerged from our present chaotic
iteration in web development, encompass some paradigms that have greatly
influenced the way I think about web development and programming in general.
Which brings us to the actual topic of this presentation. (Don’t worry I’ll
digress more before this is all over)

[React](https://facebook.github.io/react/) is “a javascript library for
building user interfaces” used, and released as an open source project, by
Facebook.  
[Redux](http://redux.js.org/) is “a predictable state container for JavaScript
apps.” written by Dan Abramov, who now works at Facebook, as a proof of
concept for a talk

It's worth noting that Redux can be considered to be an implementation of the
[Flux](https://facebook.github.io/flux/) architecture recommended by Facebook
for use with react apps. I hope that if you get anything out of this today
it's that these tools encapsulate paradigms that transcend "new hotness" or JS
framework of the week burnout.  
When a company like Facebook makes their secret sauce public, I believe it’s
incumbent upon a good developer to pay attention if only to understand the
patterns used and the problems that a company like Facebook is currently
trying to solve.

## The Problem

The problem Domain I want to focus on that react and Redux aim to solve
relates to state management in client side web applications. More
specifically, the tendency web developers have fragment the source of truth of
our state often relying too heavily on the DOM to contain and keep track of
state rather than just present it.  
It sounds like the DOM is at the core of this issue. So what’s the DOM?

### The DOM

![](https://georgespake.com/wp-content/uploads/2017/03/Screen-
Shot-2017-03-30-at-1.27.47-PM.png)

TheDocument object model (DOM) is a fully object-oriented representation of
the web page, and it can be manipulated with JavaScript through its API.

When we go to a webpage, what we see is ultimately determined by an underlying
html document that's sent to the browser from a web server. But when we
interact with that page in a browser, we’re actually interacting with the DOM.

![](https://georgespake.com/wp-content/uploads/2017/03/dom-html.png)

Right click and view source on any page to see the underlying html document
that was returned in the response - it can’t be changed without a new request
to the server. Right click and inspect an element on a page to see an html-
like representation of the the rendered DOM in your browser's dev tools. Here
we can see that we can manipulate the DOM by simply clicking on elements and
deleting them in dev tools, editing nodes as html, or typing JS directly in
the console. (I actually do this often to delete annoying registration modals
that pop up on news sites before you can read the article.) With a general
understanding of how the DOM differs from the html document it’s based on
established, I want to shift back to JS for a moment.

### JS

We have to talk about JS because, for now, it’s the language we use to
manipulate the DOM. In the future Web Assembly could change that but that’s
another talk. For now DOM manipulation is monopolized by JS.

JS - which is spec'd to  ECMA Script - has not done the best job of evolving
despite its prevalence and ubiquity - I’ll spare you the history of JS but
just know that it was born in 1997, famously written in 10 days and from
version 3 published in 1999, it would be another 10 years before ES5 would be
published (version 4 was abandoned).

[Doug Crockford](http://shop.oreilly.com/product/9780596517748.do) has cited
this API for interacting with the DOM as one of the worst APIs ever created
and points out that, unfortunately, this is the experience most people have
with JS; they think they hate JS when what they really hate is the DOM API.
Consider the code needed to toggle a class in plain ol’ JS.

![](https://georgespake.com/wp-content/uploads/2017/03/toggle-class-js.png)

In 2006 jquery came along and added some cool features APIs and syntactic
sugar on top of this awful API to empower web developers to manipulate the DOM
more easily. Consider the same toggle-class example in jQuery.

![](https://georgespake.com/wp-content/uploads/2017/03/toggle-class-
jquery.png)

So that’s great right? Well, yeah. That's how the API itself should look.
Anytime normal people can wield powerful tools to get stuff done, that’s
awesome. It’s a gift and a curse, though. Often, when things are easy, they
open the door to bad practice, bad patterns, bad code, and bugs… when you hear
people hate on JS and jQuery - a lot of times it’s because they’ve come into
contact with blasphemous atrocious code that somebody was able to throw
together without really knowing too much about how to write good code.

The technical debt from this sort of thing comes due when it has to be
maintained or reused and something goes wrong.

In 2015 Ecmascript 6 (ES6, ES2015) was published with a plan for regular
updates in the future. It came with a lot of new features and syntax that JS
developers have been clamoring for for years. Meanwhile, a lot of functional
programming paradigms have really started to take hold and for the first time
in a while, it’s actually cool to write plain JS.

As an aside, there is a caveat - Ecmascript, the spec, is moving fast - faster
than browsers - so in order to be able to use all these cool new features and
have them work, they have to be polyfilled - which is typically handled by
babel and Webpack - babel transpiles or polyfills our esnext JS to ES5 and
Webpack bundles up nice clean minified and optimized assets for the browser. I
expect this won’t change anytime soon. The reality is browser support is just
too sketchy to rely on so, for the time being at least, Webpack and Babel will
be a requirement for writing modern JS. The tooling is good and getting
better, though, and tools like [create-react-
app](https://github.com/facebookincubator/create-react-app) hide a lot of the
complexity making it easy to get started, so it's becoming less of a source of
frustration.

### STATE

What’s state?

The concept of state is both simple and difficult to articulate. It can be
described as nothing more than a snapshot of your application at a given time
and could include things like characters typed in a search field, the results
that are displayed on the page from that search, selected items etc.

We rely heavily on the DOM to contain and modify our state but we shouldn’t
because, as we’ve seen, the DOM can be manipulated from every direction, it’s
just not reliable, and entire classes of bugs exist in this area. The DOM
should have one job which is representing the state of our app and telling a
more responsible party if some event happened so it can decide what to do with
the event.

I like to think of the DOM as a playpen full of irresponsible toddlers. They
shouldn’t be given any responsibility to dress themselves or make decisions -
the parent puts their clothes on and changes their diapers and they just wear
them and cry if something happens at which point the parent decides what
action needs to be taken. The DOM should only be concerned with representing
your state.

Let me demonstrate what I mean.

![](https://georgespake.com/wp-content/uploads/2017/03/Screen-
Shot-2017-03-30-at-11.16.23-AM.png)

Here’s an example of a UI project I inherited. The researcher who wrote this
managed to get pretty far but it’s a great example of relying on the DOM to
track state and handle actions unsupervised.

Users use this interface to build custom queries to extract DNA sequences
based on some criteria. When the query is submitted,  the app uses jQuery to
look at all of the elements in one DOM node to get the cohort data, then looks
at an element in another DOM node to get the genes, then it puts them all in
an object. and collects them and sends them off to the server.

The first problem here is that the DOM has been given the responsibility of
being the source of truth of the app’s state. The second and equally
concerning problem is that my app’s state is fragmented. There’s no single
source of truth for my app’s state. Some of it’s here, some of it’s there.
It’s crazy. In reality, that's what a lot of jQuery heavy web apps look like
in reality because jQuery makes it easy to get in to this situations and
there's a lot of technical debt due as a result. That's the problem.

## The Solution

When we look at react, we can see that the problems it aims to solve - the
concerns it aims to separate - are not related to trivial endeavors like
separating HTML, CSS, and JS which are inherently coupled, or recreating an
MVC architecture in the front-end - Facebook has prioritized bigger state-
related problems like separating the _management_ of state from the
_representation_ of state.

React does this by breaking each part of the UI down into reusable components
that are dumb - in that they aren’t reliant on or concerned with any state and
the state just gets pumped in from somewhere up the tree via “props.” As we
keep moving up the tree, eventually we should eventually get to a single
source of truth for the state of the entire app that gets pumped down into the
UI. We can be confident that react is smart about re-rendering the parts of
the UI that represents state that has changed; so it’s not re-rendering a
bunch of stuff all the time that hasn’t changed and it's fast and performant.
Essentially, we’ve taken our UI and pulled all of the state out of it and now
we can understand that, in doing so, we now have the opportunity to handle
changes to state sanely.

Redux compliments these concepts.

Redux has become the go-to state management solution for React - although it’s
not tied to React and can be used without React, they’re so complimentary that
it’s hard to talk about one without the other. Despite its apparent
complexity, Redux is actually pretty simple once you understand how it works
but the paradigm it encapsulates triggered a paradigm shift for me and that’s
why I would encourage everyone to learn it, even if you don’t expect to use
it.

Three principles

Redux has [three
principles](http://redux.js.org/docs/introduction/ThreePrinciples.html):

  * Single source of truth
  * State is read only
  * Changes are made with pure functions

Redux introduces a store which contains your application’s state in single
immutable object also called the state tree. The state is updated by
**dispatching actions** to **pure functions called reducers** that take the
**existing state** and an **action** that describes the change and return a
**new state**. The react app is subscribed to that store, the single source of
truth. The state and actions are mapped to props for react and, whenever a new
state is created the state is pumped down to the UI.

If all this sounds like too much, I want to talk about where this starts to
pay off.

  * The DOM is no longer given the responsibility of keeping track of or even knowing about state nor is it allowed to make any decisions - It only does the one thing that it’s supposed to: represent state
  * All the updates to the state that happens as a result of those actions is contained in reducers which are just pure functions that always take in the same 2 arguments (action and state) and return the same thing (new state)
  * This code is very declarative, expressive, and self documenting
  * Now that there’s a single point of truth, it makes handling requests and responses easy to deal with
  * You get awesome debugging and free tests with Redux dev tools (rewinding)

How this has changed the way I think about code

  * Think about code in terms of state as opposed to how the state is presented
  * These concepts can be applied to software in general
  * Even if you’re refactoring a spaghetti jQuery codebase you can use these principles
  * Think about what your app’s state looks like
  * Consolidate state into a single object bit by bit
  * Render elements when the state changes

Now that I’ve rambled on for six pages, I have to mention that I’d be doing a
disservice by attempting to teach anyone react or Redux. Instead, I’ll offer
some suggestions about where to go to learn from much more qualified
instructors.

Redux author Dan Abramov himself has an exceptional two hour free course on
egghead called [Getting Started with
Redux](https://egghead.io/courses/getting-started-with-redux) that, in
addition to React, Redux, and JSX, covers ES6 syntax, test driven development,
and pure functional programming concepts.

Netflix developer Brian Holt has a twelve hour
[workshop](https://frontendmasters.com/courses/react-intro/) on Frontend
Masters in which he walks through building a Netflix client with React and
Redux and React Router. He covers server side rendering and implementing
search. It’s not a trivial app so you get to see what a real app might end up
looking like. This is also available on
[github](https://github.com/btholt/complete-intro-to-react) in written form.

[A Guide For Building A React Redux CRUD
App](https://medium.com/@rajaraodv/a-guide-for-building-a-react-redux-crud-
app-7fe0b8943d0f) by rajaraodv demonstrates some best practice patterns for
code organization and handling requests in a CRUD app client that consumes an
API.
