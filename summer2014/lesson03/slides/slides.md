![GeneralAssemb.ly](../../img/icons/FEWD_Logo.png)

#FEWD - Advanced CSS

Dr. Strangelove, or how I learned to love the box model and learn how to divvy things up.

---


##Agenda

*	Review
*	Box Model
*	Nested Selectors
*	Inline vs. block elements
*	Classes and IDs
*	Lab Time

---

##Box Model

Every element in web design is a box. 

---


##Box Model

![](http://www.mandalatv.net/itp/drivebys/css/lib/img/box_model.gif)

---

##Box Model

###Width = width + padding-left + padding-right + border-left + border-right

###Height = height + padding-top + padding-bottom + border-top + border-bottom

---

##Box Model

When writing padding or margin rules in CSS, there are some shortcuts:

- ```margin: 10px;``` means that your box will have a margin of 10 pixels on all four sides.
- ```margin: 5px 10px;``` means that your box will have a margin of 5 pixels at the top and bottom, and 10 pixels on the right and left. (In this shortcut, the first number always applies to top and bottom, and the second number always applies to left and right.)
- ```margin: 5px 10px 6px 12px;``` means your box will have a margin of 5 pixels on top, 10 pixels on the right, 6 pixels on the bottom, and 12 pixels to the left.

---

##Nested Selectors 

Think of the movie Inception: It's a selector within a selector. There can be different layers and sections to a single page, with tags within each section.

---

##Nested Selectors

For instance, you might have a ```<blockquote>``` on your page. Sometimes this blockquote has many paragraphs (```<p>``` tags) within it. You might have an overall style set for your p tags, but you want the p tags within your blockquote to look different than the other p tags. You do this by using nested selectors.

In HTML, your code might look like this:


```
<blockquote>
    <p>Some paragraph here.</p>
    <p>Some paragraph here.</p>
</blockquote>
```


---

##Nested Selectors

If you write a CSS rule for a nested selector, you list the outer tag first, then the second tag (the nested tag or selector) next. Like this:


```
blockquote p {
    color: #999999;
    font-style: italic;
    font-weight: bold;
    margin: 12px 40px;
}
```

---

##Divide and Conquer

There are many tags you can use to section off your content. There are a few tags that were introduced in HTML5, such as ```header```, ```footer```, ```section```, ```article```. 

There are two other tags that you'll use a lot, maybe even more than those HTML5 tags:

* div
* span

---

##Block and inline elements

Many tags are __block elements__ by default in HTML. Examples of these tags are: ```p```, ```ul```, ```div```, ```header```, ```footer```, ```article```, ```h1``` (and all the h tags). 

Think of them as giant boxes. They are good containers. They also tend to occupy the entire width of your page by default (unless you tell it not to). This often means they sit on their own line and push everything else out of their way.

---

##Block and inline elements

__Inline elements__ play nice with other content. They tend to sit within block elements. As the name implies, they sit in line with whatever surrounds them. Examples of inline elements are these tags: ```a```, ```img```, ```span```.

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

![GeneralAssemb.ly](../../img/icons/exercise_icon_md.png)
##Fashion Blog