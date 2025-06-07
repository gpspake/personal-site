---
title: 'Talk: NPM, Yarn, Babel, Webpack &#8211; Why You Should Care'
date: '2018-04-10T05:08:12'
draft: false
categories:
- Code
- Talks
- Web Development
tags:
- babel
- javascript
- npm
- webpack
- yarn
author: George Spake
slug: talk-npm-yarn-babel-webpack-why-you-should-care
---

_This content was written for the Memphis Web Workers User Group on April 10,
2018_

The purpose of this talk is to convey how essential NPM, Yarn, Babel, and
Webpack are to the JavaScript ecosystem; how lucky we are to have them given
the scope of the problems they solve; and why JavaScript developers should
prioritize learning and understanding them.

Building modern applications with JavaScript does not happen in a vacuum. Even
some EcmaScript-compliant features need to be compiled to a supported syntax
using Babel. If you’re building a UI, you might use a library like React; if
you’re using React, Babel is used to compile JSX code down to supported
JavaScript syntax. Finally, you’ll probably use Webpack to optimize your app
and bundle it for distribution. Babel, React, Webpack: already our project has
multiple dependencies, which means we’ll need NPM to manage them and we’ll
most likely be using Yarn to interact with NPM.

That’s a lot of requirements just to write some JavaScript. It might seem like
overkill and some purists might even cite all these requirements as an
indication that the language is flawed or that there is unproductive discord,
even chaos, in the JavaScript ecosystem. Quite the opposite. First, no
programming language is perfect and, yes, JavaScript has some egregious
problems. However, since it monopolizes browser side interaction with the DOM
API and is, therefore, the only truly ‘full stack’ language, JavaScript has
become somewhat of a universal language. That role comes with a lot of
responsibility. For such a clunky little language to grow up and fulfill that
responsibility so well is truly exceptional. That is why tools like Babel and
Webpack are a testament to the JavaScript ecosystem’s strengths—not its
weaknesses.

All the tools covered here are open-source and well documented. Consider that
the same effort and attention to quality that goes into their source code is
also applied to their documentation; I highly encourage you to read it. This
presentation can’t compete with the comprehensive, community-vetted
documentation that can be found on the Yarn, NPM, Babel, and Webpack websites.
And, of course, if you really want to go all in, you can always read the
source code.
