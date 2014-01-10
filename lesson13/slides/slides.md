![GeneralAssemb.ly](https://github.com/generalassembly/ga-ruby-on-rails-for-devs/raw/master/images/ga.png "GeneralAssemb.ly")

#FEWD - Responsive Basics 

Because at some point, someone's going to say "I don't want to pinch the damn screen on my phone!"

---


##Agenda

*	Review
*	Responsive Layouts
*	REM/EM
*	Media Queries

---

##Responsive Design

What is this responsive design business?

Think about the name itself: It's a design that responds to different screen sizes. This is a little different from what some people call adaptive design, which uses fixed widths at various screen size breakpoints. 

What we'll talk about is also sometimes referred to as **fluid design**.

---

##Why Responsive?

The use of mobile devices -- phones and tablets -- has risen exponentially in the last few years. It's no longer enough to just design a desktop experience for people. More and more people are consuming the internet via tiny screens, and think about how different (and harder) it can be to use a website on a smaller screen.

---

##How do you go responsive?

There are a few techniques used in responsive design:

* Using percentages instead of pixels
* Using ems instead of pixels for font-size
* Using media queries to determine your screen sizes

---side>

---

##How do you go responsive?

There are also many grid systems and frameworks out there that are built to be responsive. We have mentioned a few in class before:

* 1140 Grid
* 960 Grid
* Extra Strength Responsive Grid
* Twitter Bootstrap
* Zurb Foundation

Before you use a grid, it's best to try and code a responsive design yourself so you understand the concept and what's going on under the hood.


---

##Responsive Layout

![GeneralAssemb.ly](../../img/icons/code_along.png)

---

##Fixed vs Responsive

Checkout these __Fixed__ sites

*	[UPS.com](http://www.ups.com)

*	[Boston.com](http://www.boston.com)

---

##Fixed vs Responsive

Checkout these __Responsive__ Sites

*	[Generalassemb.ly](http://www.generalassemb.ly)

*	[Dwolla.com](http://www.dwolla.com)

*	[Sweethatclub.com](http://www.sweethatclub.com)

---

##Fixed Layout

*	Used up to this point

*	Relies on a container of fixed width

*	Usually 960px or 980px


<aside class="notes">

</aside>

---

##Responsive Layout

*	Different styles for different screen widths

*	Uses an elastic/fluid layout

*	Fluid

*	Sized in percentages

*	Elastic

*	Sized in ems


<aside class="notes">

</aside>

---	

##EMS

__EM__

* Ems were originally sized based on the width of the letter "m"
* Same as percentages
* 1em=100% font-size
* In general, 1em is usually equivalent to 14 or 16 pixels of a given font. It's obviously different for different fonts. Some fonts are super tiny, while some are really large, so 1em in one font could be different in another font.

---

##EMS

Again, it helps to think of ems as kind of like percentages.

Based on parent:

Parent{ font-size:16px;}

Child{font-size:2em;}

Child’s font size is 32px

There is a nifty converter here:
http://pxtoem.com/


---


#Media Queries

---

##Media Queries - what should be in code?

@media only screen and
(max-width: xPx)
(min-width: xPx)
(max-device-width:xPx)
(min-device-width:xPx)

For iPad
(orientation: portrait)
(orientation: landscape)

Separate multiple clauses with "and"


<aside class="notes">

</aside>

---

##Mobile Display

```
< meta name="viewport" content="width=device-width, initial-scale=1" >
```

Optional: user-scalable=none


Why necessary?
Mobile browser assumption of fixed layout of 980px

##Media Queries

Standard media queries sizes:

* iPhone portrait: 320px max width
* iPhone 4/4s landscape: 480px max width
* iPhone 5 landscape: 568px max width
* iPad portrait: 768px max width
* iPad landscape: 1024px max width

931px is also a common breakpoint, as it is applicable to many Android tablets.



---

##Usage

/* float boxes into columns */

```
.box{
	float:left;
}
@media only screen and (max-width:768px){
	/*insert responsive css here
	ex: stack floated boxes
	*/
	.box{
		float:none;
	}
} 
```

---

![GeneralAssemb.ly](../../img/icons/exercise_icon_md.png)
##Responsive Boxes