#CSS BASICS 

Because we like pretty things.

---

##CSS

If HTML is the framework of a house, CSS is the paint and other things that makes it a unique house. (Is it red? How many bedrooms?)

---

##CSS

![](../../img/unit_1/css_syntax.png)

---

##CSS

It's best practice to put CSS in its own file and link to it from the `<head>`.

```<link rel="stylesheet" href="style.css">```
	
---

##CSS Break Down

```
p {
	color: red;
	font-weight: bold;
}
```
---

##CSS Break Down

The **selector**, `p` in this case, specifies what parts of the HTML document should be styled by the declaration. This selector will style all `p` elements on the page.


---


##CSS Break Down

#### Declarations

Every declaration is a **property** followed by a **value**, separated by a colon, ending in a semicolon.

---

##Cascading Style Sheets (CSS)
###Colors

Colors can be specified in CSS in a variety of ways:

![](../../img/unit_1/color.png)

<aside class="notes">
* keyword
* hex codes
* rgb
* hsl
* rgba
* hsla

</aside>

---

##Color
###Color Keywords

These are used less frequently, but are handy for basic colors like `black` and `white`. There are several

See [here](https://css-tricks.com/snippets/css/named-colors-and-hex-equivalents/) for more

---

##Color
###Hex Codes (RGB)

![Hex Color explanation](../../img/unit_1/hex_colors.png)

<aside class="notes">
"Hex" values are so-called because they use hexadecimal, or base-16, to describe the color values for red, green, and blue. Each of the 3 color values is expressed by two hexadecimal digits, from `00` (no color) to `FF` (full color), and are written in the order red, green, then blue, after an initial `#` sign.

Hex values can be abbreviated to only 3 digits if each digits is doubled. So `#FFFFFF` (white) can be expressed more succinctly as `#FFF`, and `#000000` (black) can be expressed as `#000`. `#FA6198`, however, cannot be abbreviated without altering the color.

</aside>

---

##Color
###RGB Color Values

####```rgb(0,0,0)```

*	The first value is red, the second green, the third blue.
 
*	Each value can range from 0 to 255, which expresses the same number of color steps as 00 to FF in base-16.


<aside class="notes">
FF in base-16 is equivalent to 255 in base-10.

In RGB, `rgb(0,0,0)` is black, `rgb(255,255,255)` is white, `rgb(255,0,0)` is red, etc.

White-space is allowed *inside* the parentheses, so `rgb(255, 0, 0)` will do just as well.
</aside>

---

##Color
###RGBa Colors


*	RGBa works identically to RGB, expect that it takes a 4th value called the "alpha".
*	This is a value between 0 and 1 which will be used to determine a color's opacity on the page. 0 is completely transparent (invisible), 1 is totally opaque (solid). 0.5 would be 50% opacity.


![](../../img/unit_1/rgba_color.png)

<aside class="notes">
0 is completely transparent, and 1 being solid. 0.5 or .5 is 50% opacity.

Thus, __rgba(0,0,0,.25)__ is black at 25% opacity and __rgba(255, 255, 255, 0.8)__ is white at 80% opacity.

The alpha value can be in decimal form but cannot use a percentage. When a decimal is used, the leading zero is optional.
</aside>

---

##Fonts

There is a set of basic fonts that can be read across just about all browsers.

To declare a font for a webpage, you usually assign it to the ```<body>``` tag using the ```font-family``` attribute, like this:

```
body {
    font-family: "Georgia", serif;
}
```

---

##Web Safe Fonts

There are about 12 fonts that can be safely declared in the font-family attribute because they're available across all browsers. You can read more about that here:

http://www.w3schools.com/cssref/css_websafe_fonts.asp

You can also use Google Fonts:

http://google.com/fonts

---

##Divide and Conquer

There are many tags you can use to section off your content. We've talked about a few of these already, such as ```header```, ```footer```, ```section```, ```article```. There are two other tags that you'll use a lot, maybe even more than those HTML5 tags:

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