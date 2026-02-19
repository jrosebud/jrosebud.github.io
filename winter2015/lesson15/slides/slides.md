![GeneralAssemb.ly](../../img/icons/FEWD_Logo.png)

#FEWD - CSS Transformations

Because you don't always need jQuery to make cool effects.

---


##What are CSS transformations?

**CSS transformations** are basic effects and simple animations that can be achieved using pure CSS. Many of these transformations came with the advent of CSS3, and work in most modern browsers. 

---


##More on CSS transformations

The advantage is that you don't have to call a separate library to make some of these work (such as jQuery).

Of course, some of these do take a little time to load in the browser, so don't go overboard. Moderation is key.

Lastly, keep in mind that if you trigger a transformation on hover, that transformation may not work on a touch device.

---


##Vendor Prefixes

When you write CSS transformations in your stylesheet, one thing to keep in mind is that you have to use a vendor prefix. **Vendor prefixes** are added to target a specific browser in CSS. The reason some of these are used is because a CSS property may be very new and is still being tested across different browsers or may only be available in certain browsers. It hasn't become a standard CSS property yet.

---

##Vendor Prefixes

These are the most commonly used vendor prefixes:

* ```-webkit``` : Chrome / Safari
* ```-moz``` : Firefox / Mozilla
* ```-ms``` : Internet Explorer
* ```-o``` : Opera

---

##Vendor Prefixes

When you use a CSS property that needs vendor prefixes, you generally list all the prefixes first, and then the name of the CSS property without a prefix. For example:

```
.box {
	-webkit-border-radius: 7px;
	-moz-border-radius: 7px;
	border-radius: 7px;
}	
```

---

##Vendor Prefixes

Here is a handy reference of commonly used CSS properties that use vendor prefixes:

http://css3.bradshawenterprises.com/which-vendor-prefixes-are-needed/

---

##What can I do with transformations?

These are the most commonly used transformations in CSS:

* rotate (clockwise and counterclockwise)
* scale
* translate (move on the x, y, or z axis)

---

##CSS Transformation Syntax

Rotate:

```
.item {
	-webkit-transform: rotate(10deg);
	-moz-transform: rotate(10deg);
	-ms-transform: rotate(10deg);
	transform: rotate(10deg);
}
```

---

##CSS Transformation Syntax

Scale can be defined as scaleX or scaleY if you want to scale an item only on one plane (horizontal or vertical). You could also use two numbers with the scale property - scale(x,y) - if you wanted to scale the item different in both directions. Always use a decimal.

```
.item {
	-webkit-transform: scale(1.5);
	-moz-transform: scale(1.5);
	-ms-transform: scale(1.5);
	transform: scale(1.5);
}
```

---

##CSS Transformation Syntax

Translate can be broken down into translateX, translateY, or translateZ. Otherwise, just use translate(x, y):

```
.item {
	-webkit-transform: translate(10px,20px);
	-moz-transform: translate(10px,20px);
	-ms-transform: translate(10px,20px);
	transform: translate(10px,20px);
}
```

---

##CSS Transformation Syntax

You can combine transformations. Just put a space in between each transformation you want to do:

```
.item {
	-webkit-transform: rotate(30deg) scale(1.5);
	-moz-transform: rotate(30deg) scale(1.5);
	-ms-transform: rotate(30deg) scale(1.5);
	transform: rotate(30deg) scale(1.5);
}
```

---

##CSS Transformation Syntax

You can read more about transformations and see some demos here:

http://www.w3schools.com/cssref/css3_pr_transform.asp

http://www.css3files.com/transform/

---

##CSS Transitions

Transformations are only one part of the equation when it comes to doing simple animations in CSS. The other half of the equation is the transition property.

Transitions can be triggered on a hover (that's the most common use).

---

##CSS Transitions

When you think about transitions, it's important to think about the styles for the beginning state and the styles for the end state. You may define the beginning state in one class for example, and then the end state is defined as a :hover element.

Many properties in CSS are animatable, including color, background-color, opacity, and font-size.

---

##CSS Transition Property Syntax

Like the transformation property, the transition property does use a vendor prefix, but you only have to use ```-webkit``` in this case. 

The general syntax is the name of the property you are animating and the duration of the animation in seconds:

```
.box {
	-webkit-transition: background-color 2s, transform 1s;
	transition: background-color 2s, transform 1s;
}
```

---

##CSS Transition Property Syntax

You could specify different transition times for different properties, or you could make all those animations happen at the same time by saying all instead of the name of the property:

```
.box {
	-webkit-transition: all 1s;
	transition: all 1s;
}
```

---

##A Word About Easing

Easing is a term used in regular animation. It's best described as the easing of the transition at the beginning and the end of the animation. Think of it as hitting the brakes slowly on your car and coming to a smooth stop.

```ease-in-out``` is the most commonly used one. You just add it to the end of the transition property:

```
.box {
	-webkit-transition: all 1s ease-in-out;
	transition: all 1s ease-in-out;
}
```

---

##Other Transition Resources

http://www.w3schools.com/css/css3_transitions.asp

https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Using_CSS_transitions

http://css-tricks.com/almanac/properties/t/transition/

http://css3.bradshawenterprises.com/transitions/
