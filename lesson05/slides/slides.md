![GeneralAssemb.ly](../../img/icons/FEWD_Logo.png)

#FEWD - Process

Sometimes, you have an idea of what the end result should look like, but how the hell do you get there?

---

##The Process

Building a website is just like building a house: You don't just run willy-nilly to Home Depot, buy a bunch of materials, and start hammering away. If you did that, you'd probably wind up with all kinds of problems, not to mention an unlivable house.

There are some basic guidelines you should follow when taking on a web project. It may seem deliberate, but in the end, it should save you headaches and keep your clients from getting out of control.

---

##The General Flow

* Plan
* Wireframe & Sketch
* Design
* Build

---

##Planning

Think about what you want to build.

* What will it look like?
* Who will it serve?
* What will it do?
* Can I do this by myself, or do I need to bring in other people? Do I need a designer? Do I need a UX person? Do I need (smarter) programmers?
* What will be the pages needed for the site? What needs to be on each page?

---

##Wireframe & Sketch

This is really where your idea starts to take shape and be more tangible. Don't worry about dimensions or code or anything like that at this stage. Just draw out your idea. All you need is basic layout and basic elements. Where will your logo go? Where will your navigation go? Where will your content go?

Answer those basic questions for each page you think the website will entail.

---

##Wireframing Resources

Wireframing can be as simple as taking pen and paper and drawing a bunch of boxes. But if you prefer something a little less primitive, here are some things to look at:

* **SlickPlan** (www.slickplan.com) - For doing site maps
* **Mockingbird** (www.gomockingbird.com) - Web-based wireframes, nice drag and drop interface. 
* **iMockups** (iPad app) - Like Mockingbird, except for the iPad only. Not a free app.
* **Balsamiq** (www.balsamiq.com) - Web and desktop app. Not free.
* **OmniGraffle** - paid standalone app. Available for Mac and PC and iPad. 

---

##Design

Here's where you really hone in on the look and feel of your website. Use your wireframes as a guide to placing elements. Determine a color scheme. Find some nice fonts. Design a logo if you have to. Determine your style. You might want to start thinking of proportions and grids here just to make you (or your designer's) life easier.

Some grid frameworks come with Photoshop templates. Otherwise, you can figure out a grid using a lot of math.

**Note:** It's best to design your mockup in Photoshop. It will make the building process a lot easier down the road.

---

##Grids and Frameworks

There are lots of grid systems and frameworks out there. They can make your life easier as a coder. They can also help in the design process by giving a designer some proportions and specs to work with (which makes your life easier in the end).

This is a small sampling:

* **1140 Grid** (www.cssgrid.net) - The author has retired it, but it's still in use. Comes with a handy Photoshop template. It's my personal favorite.
* **Extra Strength Responsive Grids** (dfcb.github.io/extra-strength-responsive-grids/) - Another grid system that can actually be adjusted to whatever width you want.
* **960 Grid** (www.960.gs) - The original grid system. Also comes with a handy grid generator if you don't feel like using 960 pixels as a base.
* **Twitter Bootstrap** (www.getbootstrap.com) - Super popular framework.

---

##Build

You've got an idea. You sketched it out, you nurtured it, and now you even have an idea of what it's going to look like. Now it's time to make it so. You've got to write the HTML and CSS to make that sucker come alive.

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