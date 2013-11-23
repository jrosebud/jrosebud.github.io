![GeneralAssemb.ly](../../img/icons/FEWD_Logo.png)

#FEWD - Advanced CSS

Dr. Strangelove, or how I learned to love the box model and understand spacing in CSS.

---


##Agenda

*	Review
*	Box Model
*	Nested Selectors
*	Getting Started
*	Lab Time

---

##Review

What do students need help with?

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


![GeneralAssemb.ly](../../img/icons/code_along.png)
##Nested Selectors

---


![GeneralAssemb.ly](../../img/icons/exercise_icon_md.png)
##Fashion Blog

---

