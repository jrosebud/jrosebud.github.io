![GeneralAssemb.ly](../../img/icons/FEWD_Logo.png)

#Lesson 9 - jQuery 

It's like JavaScript, only way easier.

---


##Agenda

*	jQuery

---

##jQuery


jQuery __is__ JavaScript.

jQuery is a cross-browser JavaScript library designed to simplify the client-side scripting of HTML.

In other words, jQuery combines a lot of things in the background to make writing functions and doing commands a lot easier.

---

##jQuery

*	jquery.com - A JavaScript library that makes DOM manipulation simple.*	"Cross browser" - works the same in most (!) browsers. *	Allows:
	*	Document traversal	*	CSS Manipulation	*	Event Handling	*	Animation	*	and more!

---


##jQuery

How to add jQuery to your website:

You could download the jQuery file and add it like any other script:

```< script src="js/jquery-1.8.3.min.js" >< /script > ```

Or, you can use a version that is hosted somewhere else for everyone to use (such as on Google). This is the recommended method, as it's often faster as far as pageload goes.


```< script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js" >< /script >``` 

---

##jQuery

###$

The dollar sign tells you there's some jQuery coming. jQuery statements start with it.

---

##jQuery

When you want to select an element with jQuery to manipulate it, you use the same conventions as you would for CSS.

```
$(".class").click();
$("#id").toggle();
$('tag').show();
```
---


##jQuery

When you use jQuery on a page, you usually don't want the script to trigger until the DOM is ready. You'll often see a script wrapped in this function:

```
$(document).ready(function() {
    put some jQuery here
});
```

---

##jQuery

And, like with JavaScript, you'll usually put the function after all the HTML tags have rendered (so toward the bottom of your document.)

---


##jQuery

Everything you need to know is here: 

###http://jquery.com/

---

![GeneralAssemb.ly](../../img/icons/code_along.png)
##Color Switcher

---


![GeneralAssemb.ly](../../img/icons/exercise_icon_md.png)
##Divided Times