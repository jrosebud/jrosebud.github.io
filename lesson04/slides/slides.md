![GeneralAssemb.ly](../../img/icons/FEWD_Logo.png)

#FEWD - Layout

Floats, positioning, classes, IDs, oh my!

---


##Agenda

*	Review
*	Classes and Ids
*	HTML5 Structural Elements
*	Floats
*	Lab Time

---


##class & id

With classes and ids we can target specific elements on a page, so we can manipulate it uniquely.

Remember, you can add a class or an ID to any HTML tag. By doing this, you would "override" any CSS rules applied to that particular tag.

---

##class & id

![](../../img/unit_1/tags_attributes.png)

---

##class & id

###IDs are unique

Usually, you add an ID to something going to be used only once in your entire HTML page. (Note: This becomes pretty important in JavaScript and dynamic programming.)


###Classes are not unique

Re-use classes all you like. If you have a CSS rule you'd like to apply to many elements, regardless of what tag it's applied to, use a class.

---

##class & id

How to __select__ classes and ids in CSS

```
.className
#idName
```

---

##HTML5 Structural Elements

HTML5 added some new tags that are related to dividing things on a page. Previously, people did things like split up their HTML files with containers like ```<div id="header"></div>```. Now, you can just use ```<header></header>```. 

* header
* aside
* footer
* section
* article
* nav

---

##HTML5 Structural Elements

Please note:

There's nothing wrong with using ```<div id="header"></div>```. The old-school way is perfectly acceptable. Using the HTML5 equivalents just saves you a lot of typing, that's all. 

You can also add classes to these HTML5 tags. They're just like regular tags. For instance, you could say:

```
<article class="blog-post">
    <p>Some stuff here, yay!</p>
</article>
```

---

##Other important tags

These aren't strictly HTML5 tags, but you'll use them a lot, especially when it comes to sectioning off your pages in HTML or trying to style things.

* div
* span

---

##Block and inline elements

Many tags are __block elements__ by default in HTML. Examples of these tags are: p, ul, div, header, footer, article, h1 (and all the h tags). 

Think of them as giant boxes of things. They are good containers. They also tend to occupy the entire width of your page by default (unless you tell it not to). This often means they sit on their own line and push everything else out of their way.

__Inline elements__ play nice with other content. They tend to sit within block elements. As the name implies, they sit in line with whatever surrounds them. Examples of inline elements are these tags: a, img, span.

---

##Div vs. Span

###Div

* Divs are block elements. Think of them as divas (div = diva, get it?). 
* Like all good divas, divs like to be on their own line and push everything out of the way. They occupy the stage alone. 

---

###Span

* Spans are inline elements. They're helpful for when you want make something look different within a div (or any block element, for that matter), but you don't want that styled thing to sit on its own line.

---

##Span example

Say you had an h1 tag that had a specific style attached to it (like it was bold and the color blue). But maybe you want one word in your h1 tag to be a different color.

If you used a div with a class attribute, it would force a line break in the word that was surrounded by the div tags. But using a span around that single word would keep it in line with all the other text while still allowing you to add a class attribute to it (and change the style of that single word).

---


##Floats

Float is a CSS positioning property, used to lay out a web page. 

![](http://css-tricks.com/wp-content/csstricks-uploads/web-layout.png)

<aside class="notes">
Image from Chris Coyier's CSS-Tricks
</aside>

---

##Floats 

Generally you float things left or right. But keep in mind that if you float something, you __immediately__ turn it into an inline element (even if it was a block element in the first place).

And when you float things, remember that you have to clear the float or else things can look horribly awry. Clear is a CSS property, often seen like this:

```
clear: both;
```

This essentially tells an element that follows some floated objects, "Hey, start a new line here after these floated objects. We have a diva coming who demands her own stage."

---

##The Clear Property

You'll often see clears implemented in layouts where you have something floating to the left and something floating to the right (like a sidebar and an article area).

There are many ways to implement clears, but you'll often see it done as an empty div with a class applied to it. So you'll see this in a stylesheet:

```
.clear {
    clear: both;
}
```

... and then in HTML:

```
<div class="clear"></div>
```

---

![GeneralAssemb.ly](../../img/icons/code_along.png)
##Floating Sections

---

##Div-vy Up The Content

* When do I need a class or id?
* When do I use a div, a span, or an HTML5 tag (like article or header or footer)?

---


![GeneralAssemb.ly](../../img/icons/exercise_icon_md.png)
##Fashion Blog