![GeneralAssemb.ly](../../img/icons/FEWD_Logo.png)

#FEWD - Intro to WordPress

A few basics for creating a simple WordPress theme.

---


##WordPress

WordPress staked its claim to fame by starting out as blog software, but over the years, it's become flexible enough to be a full-fledged content management system.

Using some HTML and CSS knowledge and knowing about the general WordPress structure will help you get started with writing a theme from scratch.

---

##Why WordPress?

The barrier to entry is relatively low for WordPress compared to learning a whole new language. WordPress, like many open-source content management systems, is written in PHP, but you don't necessarily have to know pure PHP to get a site up and running. You do have to learn how the files are structured and a few snippets of code and how these snippets work in general.

---

##General Setup

Keep in mind that there are two flavors of WordPress:

* WordPress.com is **hosted** WordPress. In other words, you don't need to buy separate hosting for a WordPress site. However, you don't have full control over the way your site looks (or functions). You're limited to ready-made themes and limited CSS styles.
* WordPress.org is **self-hosted** WordPress. This means you'll have to find yourself some hosting and install WordPress on your host. You'll need this version of WordPress if you want to write your own themes and have the most flexibility.

---

##Installing WordPress

You **could** download WordPress from wordpress.org and install it manually on your server. This process is pretty well-documented on WordPress' website, but if you're uncomfortable with dealing with databases, it can be a daunting task.

---


##Installing WordPress

Because the installation process can be difficult when done manually, most major hosting companies have implemented one-click installation of WordPress. The process is different for each host, so look up your host's FAQ to see where to find out the process. 

Basically, the host will take care of setting up the database for you, and you'll decide what directory the build will go into and what your username and password will be.

---

##Where do I go?

Once you install WordPress on your server, you need use an FTP client of your choice to peek at the server. You'll see several files that start with "wp-" in your root folder. You're most concerned with the folder called **wp-content**.

---

##Where do I go?

Inside the wp-content folder, you'll see several files. This may vary depending on your host's installation, but you'll almost always see:

* index.php
* plugins
* themes

The themes folder is where you'll be spending most of your time.

---


##Let's get theming!

To apply your new look, you'll need to create a theme. In WordPress, all the files for a theme are put into one folder, and this folder gets uploaded to the themes folder inside wp-content.

You'll eventually need to log into your WordPress admin panel to activate your theme, but it has to be uploaded first.

---

##Theme structure

For a basic theme, you'll need these files:

* style.css - your theme's stylesheet
* header.php - the header for your theme, shared across your pages
* footer.php - the footer for your theme, shared across your pages
* index.php - your blog's template
* page.php - the default page template for your theme
* single.php - the default template for a single blog post

---

##Other files you'll see

* archive.php - the template for archive pages (date, category, etc.)
* sidebar.php - a shared sidebar across your pages if you want to have one
* functions.php - special functions related to your theme
* comments.php - the comments template (if you have a blog)

---

##The Stylesheet

You can put whatever styles you want in your stylesheet, but it must have this at the top:

```
	/* Theme Name: Your Theme Name Here
    Description: If you feel like writing one.
    Author: Your name!
    Author URI: http://www.mysite.com/ */
```

This is how WordPress recognizes your theme in the admin panel, so don't write your stylesheet without it!

---

##Slice and Dice

You can start with a barebones WordPress theme and customize around it. But you've got to have some HTML and CSS first! Often times, you've already got a site you've written in HTML and CSS and you want to move it into a dynamic environment.

You'll essentially be slicing and dicing your existing HTML pages and putting various chunks into the appropriate WordPress template files.

---

##Includes

PHP uses something called **includes** to, as the name implies, include pieces of code that get repeated in several files. For instance, if you had five pages you wrote in HTML and you had a navigation menu at the top of each page, you probably had to change the navigation five times (once per file) if you made one change and wanted to keep your navigation consistent across your pages.

By using includes, you put the code a specific section in one file and only have to edit it once, and this change shows up in all the files you dropped the include in.

---

##Includes in WordPress

There are three includes commonly used in WordPress files:

* ```< ?php get_header(); ?>``` -- calls the contents of the header.php file
*  ```< ?php get_footer(); ?>``` -- calls the contents of the footer.php file
*  ```< ?php get_sidebar(); ?>``` -- calls the contents of the sidebar.php file if you use a common sidebar in your theme

---

##The Loop

In WordPress, the loop is the key to everything. This is how content is displayed in WordPress templates. It looks something like this:

```
<?php if(have_posts()) : ?>
   <?php while(have_posts()) : the_post(); ?>
		// Your code goes here
   <?php endwhile; ?>
<?php else : ?>
<?php endif; ?>
```

---

##Important Code Snippets

There are several snippets of code that are important to WordPress, some of which are used in The Loop:

* ```< ?php the_title(); ?>``` - Displays or returns the title of the current post or page
* ```< ?php the_permalink(); ?>``` - Displays the URL for the link to the post or page
* ```< ?php the_content(); ?>``` - Displays the content of the post or page
*  ```< ?php the_excerpt(); ?>``` - Displays the excerpt of a post

These four are the most used snippets for posts and pages.

---

##A Loop Example

For a post or page, you might see something like this:

```
< div id="content" >
< ?php if(have_posts()) : ?>
   < ?php while(have_posts()) : the_post(); ?>
		<h1><?php the_title(); ?></h1>
		<?php the_content(); ?>
   < ?php endwhile; ?>
< ?php else : ?>
< ?php endif; ?>
< /div>
```