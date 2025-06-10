---
title: Quick HTML Terminology Reference
date: '2016-10-18T13:52:46'
draft: false
categories:
- Code
- Web Development
tags:
- html
author: George Spake
slug: quick-html-terminology-reference
---

It always helps to know what to call things. Someone asked a question about
html terminology recently and I thought this might be useful to keep around…
<!--more-->
consider the following markup:

`<div class="my-class" id="my-id"></div>`  
div is an **element**  with two **attributes** (class and id) which you can
use as **selectors** , in addition to the element **tag** (div), to **target**
the element.

## Targeting elements

 | class| id| tag  
---|---|---|---  
**jQuery**|  $(".my-class")| $("#my-id")| $("div")  
**Vanilla js**|  document  
.getElementsByClassName("my-class")| document  
.getElementById("my-id")| document  
.getElementsByTagName("div")  
**CSS**| .my-class{…}| #my-id{…}| div{…}
