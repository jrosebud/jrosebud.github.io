![GeneralAssemb.ly](../../img/icons/FEWD_Logo.png)

#FEWD - jQuery Review 


A whirlwind review of jQuery.

---

##Best Practices

- Put your jQuery scripts at the bottom of your page. This will help ensure the HTML document has time to load and your script will actually have something to target.
- Wrap your functions and your jQuery in `$(document).ready(function{ your jQuery awesomeness in here });`
- **DON'T FORGET TO INCLUDE THE JQUERY LIBRARY IN THE `<head></head>` OF YOUR PAGE!** Remember, you can Google "Google jQuery script" and get the link from the Google Developer Library.

---

##Selectors in jQuery

Remember, in jQuery, you must target something or else your script is for naught!

You can target a tag, ID, or class. Remember, the selector goes at the beginning of your jQuery statement:

```
$("#id-here")
$(".class-here")
$("p")
```
---

##Useful jQuery Functions

There are a myriad of functions you can do in jQuery once you've selected something to manipulate. You can change a CSS property, add an attribute, add or remove a class to an element, hide it, show it, etc.

---

##Useful jQuery Functions

If you want to manipulate the CSS of an element, you would use ```.css```:

```
$("p").css("color", "#333");
```

The syntax when using ```.css``` is:
.css("attribute", "value");

---

##Useful jQuery Functions

If you wanted to add an attribute to an element, you would use ```.attr```:

```
$("li.menu").attr("class", "open");
```

The syntax when using ```.attr``` is:
.attr("attributename", "value");

---

##Useful jQuery Functions

To show and hide elements, there are two different sets of functions you can use. 

```.show()``` / ```.hide()``` / ```.toggle()```

or

```.slideUp()``` / ```.slideDown()``` / ```.slideToggle()```

These are the equivalent of setting ```display: block``` (show) and ```display: none``` (hide) in CSS.

---

##Useful jQuery Functions

The only difference between show/hide and slideUp/slideDown is how the element appears and disappears.

Show/Hide is like taking the bottom right corner of the box and dragging it out to reveal the item or hide the item.

SlideUp/SlideDown is the equivalent of taking the bottom edge of the element and dragging it downward or upward to show or hide it.

---

##Useful jQuery Functions

Remember that ```.toggle()``` toggles only between ```.show()``` and ```.hide()```.

Conversely, ```.slideToggle()``` toggles between ```.slideUp()``` and ```.slideDown()```.

---

##Useful jQuery Functions

The show/hide and slide functions can take a speed parameter. This controls how fast the item appears and disappears.

This speed is measured in milliseconds. So, 1 second is 1000 milliseconds. The fastest speed you can indicate is 100. The syntax is as follows:

```
$(".open").hide(100);
```

You can also use 'fast' or 'slow':

```
$(".peekaboo").slideToggle('fast');
```

---

##Useful jQuery Functions

You can add, remove, and toggle classes in jQuery. This is helpful if you want to add an active state in a menu or want to toggle between classes.

The functions are:

```
.addClass()
.removeClass()
.toggleClass()
```

You only need to put the name of the class you want to work with - with no period - in the parentheses:

```
$("p").toggleClass("red");
```

---

##Useful jQuery Functions

**Tip:** If you wish to add and remove classes, it's best to write a line of jQuery that removes the class from all similar elements first, then write another line of jQuery immediately after that adds the class to the particular element you're targeting in the function.

Same goes for when you want to show and hide items. Hide everything first, then show the thing you want.

Remember, write the general rule first, then the exceptions to the rule.

---

##Useful jQuery Functions

You can also detect the presence of a class in a particular element. You can use ```.hasClass()``` to do this. This is useful for writing if/else statements in jQuery.

---

##Keyword: "This"

In jQuery "this" refers to the selected object.

---


##This in jQuery

How about this code?

```
$('a').on('click',function(e){
    $(this).fadeOut(500);
});
```

In the above code, this means that when you click on a link, it will fade that link out at a speed of 500 milliseconds.

---

##Tree Traversal

Using ```$(this)``` is especially useful for traversing the DOM tree - in other words, navigating through the tags you have written in your HTML document.

You can use several jQuery functions to help you select nearby or related elements.

---

##Tree Traversal

The first method of traversal is using ```.prev()``` and ```.next()```.

This looks at the first selector you declared and then selects the next tag or previous tag from your starting point.

---

##Tree Traversal

For instance, if you had HTML like this:

``<ul>
	<li class="menu-item">Something</li>
	<li>Something else</li>
</ul>``

And you wrote this jQuery statement:

```
$("li.menu-item").prev()
```

You would wind up working with the ```ul``` tag.

---

##Tree Traversal

If you had HTML like this:

`<ul>
	<li class="menu-item">Something</li>
	<li>Something else</li>
</ul>`


And you wrote this jQuery statement:

```
$("li.menu-item").next()
```

You would wind up working with the ```li``` tag immediately after the one with the class of .menu-item.

---

##Tree Traversal

The other means of traversal is by using these three functions:

```
.parent()
.child()
.siblings()
```

In the case of an unordered list:

- ```ul``` would be the parent
- ```li``` would be the child of ```ul```
- all the ```li``` items within that ```ul``` are siblings

---

##Useful jQuery Scripts

You don't have to write jQuery from scratch, though you might for simple menus or other simple tasks.

But if you want to use some jQuery plugins, there are several out there that are really nifty.

---

##jQuery Slideshows

There are a billion slideshow plugins out there, but here are a few of my favorites:

- **jQuery Cycle2:** http://jquery.malsup.com/cycle2/
- **Nivo Slider:** http://dev7studios.com/plugins/nivo-slider/
- **FlexSlider:** http://www.woothemes.com/flexslider/

---

##UI Elements

Sometimes, you might want fancy elements. Maybe tabs for people to navigate through? Accordions? Carousels?

These are two really nifty libraries that have a wide range of stuff you could use:

- **jQuery UI:** http://jqueryui.com/
- **jQuery Tools:** http://jquerytools.org/

---

##Pop Me Up

You ever see those fancy popup boxes that black out the background of a page? These are often used in photo galleries, but you see other uses for them. They are called modal windows. Modal yourself here:

- **Lightbox** (actually a JavaScript library, not jQuery): http://lokeshdhakar.com/projects/lightbox2/
- **Colorbox:** http://www.jacklmoore.com/colorbox/
- **FancyBox:** http://fancybox.net/

---

##Fancy Scrollers

You may see some nifty "one-page" sites out there, that have sliding panels or links that scroll smoothly to a different part of the page.

- **One Page Nav Sample:** http://davist11.github.io/jQuery-One-Page-Nav/
- **Another One Page Demo:** http://www.thepetedesign.com/demos/onepage_scroll_demo.html

---

##Sticky Stuff

Sometimes, you have a header or footer or other element that you want to "stick" in place. jQuery is a nifty way to do this.

- **HCSticky:** http://someweblog.com/hcsticky-jquery-floating-sticky-plugin/

---

##Equalize me!

Sometimes, you have multiple columns that you need to make sure are the same size. You could use CSS to set a min-width, but what if you're never sure what the height of your content is going to be? No problem, Equalize will rescue you:

- **Equalize:** http://tsvensen.github.io/equalize.js/

---

#...And So Much More!

Remember, Google is your friend. Chances are, if you need something in jQuery, someone has created it. Most really good jQuery plugins come with documentation that should tell you how to implement and use the plugin. So have fun (but don't go overboard)!