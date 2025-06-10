---
title: Use SASS Mixins to Generate Class Names
date: '2016-05-02T18:15:49'
draft: false
categories:
- Code
- Web Development
tags:
- mixins
- sass
- scss
author: George Spake
slug: use-sass-mixins-generate-class-names
---

_**If you need to generate a bunch of rules for n number of numbered classes,
you can do it dynamically by using mixin arguments to generate class names**_

Here's a neat little trick I used recently. I was working with a simple single
page form and each page of the form was hidden; I wanted to be able to un-hide
the form pages based on a parent class that included the page number.
<!--more-->
Regardless of whether this is the best use-case, it's pretty cool that you can
use mixins to accept arguments and generate a bunch of class names. Now, if an
additional page is added to the form, it will only require one line to
generate all of the css needed. Here' I'm only setting a single rule for a few
classes but it's easy to see how useful this could be if you were dealing with
more.

    
    
    //un-hide form context and pages based on parent class
    //creates rules for:
    //.active-form-page-n
    //.form-context-page-n
    //.form-page-n .form-page-n
    @mixin showFormPage($pagenumber) {
      .active-form-page-#{$pagenumber} {
        .form-context-page-#{$pagenumber} {
          display: block;
        }
        .form-page-#{$pagenumber} {
          display: block;
        }
      }
    }
    
    //set show page properties for each page in the form
    @include showFormPage('1');
    @include showFormPage('1-5');
    @include showFormPage('2');
    @include showFormPage('2-5');
    @include showFormPage('3');
    @include showFormPage('4');
    @include showFormPage('complete');

Outputs The following…

    
    
    .active-form-page-1 .form-context-page-1 {
      display: block;
    }
    
    .active-form-page-1 .form-page-1 {
      display: block;
    }
    
    .active-form-page-1-5 .form-context-page-1-5 {
      display: block;
    }
    
    .active-form-page-1-5 .form-page-1-5 {
      display: block;
    }
    
    .active-form-page-2 .form-context-page-2 {
      display: block;
    }
    
    .active-form-page-2 .form-page-2 {
      display: block;
    }
    
    .active-form-page-2-5 .form-context-page-2-5 {
      display: block;
    }
    
    .active-form-page-2-5 .form-page-2-5 {
      display: block;
    }
    
    .active-form-page-3 .form-context-page-3 {
      display: block;
    }
    
    .active-form-page-3 .form-page-3 {
      display: block;
    }
    
    .active-form-page-4 .form-context-page-4 {
      display: block;
    }
    
    .active-form-page-4 .form-page-4 {
      display: block;
    }
    
    .active-form-page-complete .form-context-page-complete {
      display: block;
    }
    
    .active-form-page-complete .form-page-complete {
      display: block;
    }
