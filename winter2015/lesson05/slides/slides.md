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

Some people write proposals outlining these things. Others make a list. Whatever works for you!

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
* **OmniGraffle** - paid standalone app. Available for Mac and iPad. 

---

##Design

Here's where you really hone in on the look and feel of your website. Use your wireframes as a guide to placing elements. Determine a color scheme. Find some nice fonts. Design a logo if you have to. Determine your style. You might want to start thinking of proportions and grids here just to make you (or your designer's) life easier.

Some grid frameworks come with Photoshop templates. Otherwise, you can figure out a grid using a lot of math.

**Note:** It's best to design your mockup in Photoshop. It will make the building process a lot easier down the road.

---

##Design

If you work with a designer, or you're nifty with Photoshop and want to mock up your design yourself, a great resource to check out is Photoshop Etiquette:

http://photoshopetiquette.com

This is a great resource for knowing how to properly set up a Photoshop document for web development, from properly setting up layers to how to set up your colors and backgrounds.

---

##Grids and Frameworks

There are lots of grid systems and frameworks out there. They can make your life easier as a coder. They can also help in the design process by giving a designer some proportions and specs to work with (which makes your life easier in the end).

---

##Grids and Frameworks

This is a small sampling of frameworks/grids:

* **Extra Strength Responsive Grids** (dfcb.github.io/extra-strength-responsive-grids/) - A grid system that can actually be adjusted to whatever width you want. My personal favorite!
* **960 Grid** (www.960.gs) - The original grid system. Also comes with a handy grid generator if you don't feel like using 960 pixels as a base.
* **Twitter Bootstrap** (www.getbootstrap.com) - Super popular framework.

---

##Build

You've got an idea. You sketched it out, you nurtured it, and now you even have an idea of what it's going to look like. Now it's time to make it so. You've got to write the HTML and CSS to make that sucker come alive.

---

##Templatize!

As you start to code a lot of sites (that's the hope, anyway), you may get tired of typing the same things over and over again when you start a new project. That's why you should start with a base template.

---

##Template Tips

It's good to maintain a base folder for projects. That way, you could just duplicate and rename this folder on your computer and have instant website fertilizer!

Some things to have in a starter folder:

* an index.html file that already has the appropriate codes in it.
* a stylesheet file.
* an images folder

---

##A Word About Resets

You may have heard of what's called a **CSS Reset**. Much like the name implies, CSS resets (sometimes called normalizers) are a series of rules that define common tags and ensure that all coders are starting from the same point when writing CSS rules, no matter what browser you are looking at.

---

##Why Resets?

Well, before anyone figured out this reset business, things were not uniform.

For instance, Internet Explorer often added weird padding around objects. Margins for paragraphs were inconsistent across browsers (Firefox used to be quite the offender of this.) Lists had different padding in different browsers.

To remove many of these quirks, CSS resets were born. Old-school resets were quite draconian, insisting everything be in normal font and the same size (even h1 tags were the same size as p tags). Modern resets are a little more sophisticated, though they're often hundreds of lines long as a result.

---

##HTML5 Boilerplate

There are tons of resets and normalize stylesheets out there, but my personal favorite is the **HTML5 Boilerplate** - (http://html5boilerplate.com/)

This boilerplate actually comes with a bunch of other stuff, but look for the stylesheet, called normalize.css. You can call this as a separate stylesheet. Just make sure to call it first, then your regular stylesheet. You can also use the main.css stylesheet instead and put your styles in there.

---

##Div-vy Up the Work

Once you've got a starter file, now comes the real work. This is where you refer to your design files and your wireframes as reference. 

More tips to starting:

* Feel free to print out your design or your wireframe and mark the hell out of it with colored pens. It will help you determine what divs you have to set up for different sections, and what tags you might use to represent different things (like H1 tags for headlines or page titles).
* If you used a grid system, define your max width in your CSS file.
* Most people find it easier to write the HTML file and tag it up first before applying all the styles.

---

##Plug Away!

There's no other way to get started than to actually start. More tips:

* Preview in a browser often. 
* Use Chrome and the Inspect Element tool religiously. 
* Use the Inspect Element tool to test things out in CSS and then type those rules into your actual CSS file.

And please, ask questions if you get stuck. Google is a developer's best friend.

---

##Snippet Away

Over time, many developers maintain their own personal libraries of code that they use over and over again. This is a good practice. If you find yourself looking up specific CSS rules (like how to make a gradient, for example), or use a lot of specific jQuery scripts (like a slideshow script), it's good to put these snippets somewhere.

You can do something as simple as have a running text file, or you could set up snippets in your text editor, or you could use an online service, such as Snipplr (http://snipplr.com).

---

##Snippet Away

If you want to get fancy with your snippets and store them in a separate program and sync between machines, or share snippets with a team, you could check out some of these programs:

* GistBox (http://www.gistboxapp.com/)
* Snippets (http://snippets.me/)

---

#Go Forth and Create!