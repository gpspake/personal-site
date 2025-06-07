---
title: Refactoring PHP for loops with array_map()
date: '2016-10-14T20:57:09'
draft: false
categories:
- Code
tags:
- array_map
- php
author: George Spake
slug: refactoring-php-loops-array-map
---

Consider the following block of code:  
      
    
    <?php
    
    $my_array = [1, 7, 3];
    
    function square_array($numbers) {
    
        $squared_numbers = [];
    
        foreach($numbers as $number) {
    
            $squared_number = $number * $number;
    
            array_push($squared_numbers, $squared_number);
        }
    
        return $squared_numbers;
    }
    
    $squared_array = square_array($my_array); // [1, 49, 9]

You have an array that you need to change in some way so you loop through the
array, using a for-loop, alter each item, and push it in to a new array, using
[array_push()](http://php.net/manual/en/function.array-push.php) or my_array[]
= $value, which you then return or assign to a variable.

This is not uncommon; I see it a lot and I've done it myself more than a few
times. Technically it works but I'm using the $squared_numbers variable in
three different places for something that doesn't seem like it should be that
complicated. It just feels janky and it might be hard to read later; there's a
better way. Enter [array_map()](http://php.net/manual/en/function.array-
map.php).

Array map "returns an array containing all the elements of an array after
applying the callback function to each one." What this allows us to do is
ditch the for loop and make our code better and easier to read.

Here's what it would look like after refactoring with array_map()

    
    
    <?php
    
    $my_array = [1, 7, 3];
    
    function square_number($number) {
        return $number * $number;
    
    }
    
    function square_array($numbers) {
        return array_map("square_number", $numbers);
    
    }
    
    $squared_array = square_array($my_array); // [1, 49, 9]

So what's happening here? Well, first we created the square_number() function
which does one thing and one thing well; given a number it returns the square
of that number. done. nothing to figure out there. Now that we have a function
that performs the action we need to do to every item in our numbers array, we
can pass that to array_map as a callback (don't ask me why this is a string;
I'm sure there's some explanation). The second argument in array_map is, of
course, the array we want to change.

Now, our square_array() function returns the exact same result but this code
is a lot cleaner and easier to figure out than that cluttered for-loop pushing
to a new array.

Just a little side note: Sometime's you'll have a case where a conditional in
your callback will result in a [falsey](http://stackoverflow.com/a/6693908)
value. for example, let's consider that we don't want any values greater than
30 to be added to our new array. Going back to the original for-loop example,
we might do something like this…

    
    
    <?php
    
    $my_array = [1, 7, 3];
    
    function square_array($numbers) {
    
        $squared_numbers = [];
    
        foreach($numbers as $number) {
    
            $squared_number = $number * $number;
    
            if ($squared_number < 30) {
                array_push($squared_numbers, $squared_number);
            }
    
        }
    
        return $squared_numbers;
    
    }
    
    $squared_array = square_array($my_array); // [1, 9]
    

Here we've added a conditional to make sure that the squared number is less
than 30 before pushing it to our array; so when 7 get's squared, the
conditional returns false (49 is greater than 30) so it isn't added to the
array. That's great.

With array_map(), our callback is always going to return a value. Consider the
following:

    
    
    <?php
    
    $my_array = [1, 7, 3];
    
    function square_number($number) {
    
        $squared_number = $number * $number;
    
        if($squared_number < 30) {
            return $squared_number;
        }
    }
    
    function square_array($numbers) {
        return array_map("square_number", $numbers);
    }
    
    $squared_array = square_array($my_array); // [1, NULL, 9]

In the for loop example you would only push items in to your array if they met
a certain condition but here we're applying the same check to make sure the
squared number is less than 30 but the problem is that our callback is still
going to return a value. In this case, since it doesn't return a value we end
up with NULL in our new array. _(I want to point out that, because of the
conditional we 've added, square_number() doesn't really do what it says it
does anymore but I'm trying to keep this simple. That's not the only thing bad
about this code but that's another blog post) _

The easy fix for this is to run your new array through array_filter() which
will magically strip out falsey stuff (you can also pass additional args to
strip out other values but, for the sake of this example, we just want to get
rid of NULL:

    
    
    $squared_array = array_filter( square_array($my_array) ); // [1, 9]

## But wait, there's more…

I'm using PHP to demonstrate this concept but this isn't really a "PHP thing,"
it applies to other languages as well. Check out the docs on map in:
[javascript,](https://developer.mozilla.org/en-
US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
[ruby](https://ruby-doc.org/core-2.2.0/Array.html#method-i-map),
[python](http://www.bogotobogo.com/python/python_fncs_map_filter_reduce.php).

Anytime you're passing in an array, iterating through it, and getting a
modified version of that array back, ask yourself if you could be using map
instead.
