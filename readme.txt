=== Animations for Blocks ===
Contributors: skadev
Tags: gutenberg, block, animation, animate, slide
Requires at least: 6.6
Tested up to: 6.8
Requires PHP: 8.1
Stable tag: 1.2.1
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Allows to add animations to block editor blocks on scroll.

== Description ==

Lightweight plugin that adds additional inspector controls to block editor blocks that allow to animate the block once it becomes visible to the user during scrolling. The controls can be used to select an animation type (fade, flip, slide, zoom), variation (different directions), as well as delay, duration and more advanced settings. Upon changing an option the animation can be immediately previewed in the editor.

[Demo](https://playground.wordpress.net/?plugin=animations-for-blocks&url=%2Fwp-admin%2Fpost.php%3Fpost%3D2%26action%3Dedit)

This plugin uses [AOS - Animate on scroll library](https://github.com/michalsnik/aos) and adds its' stylesheet (**2.8 kB**) and script (**5.2 kB**) to the front end as well as a script that initializes the animations (**1.3 kB**).

== Frequently Asked Questions ==

= How do I add an animation? =
In your selected block's inspector controls (block settings) open the "Animation" panel and select an animation. The current block should display a preview of the selected animation and further options related to that animation will become available below.

= How does it work? =
Animations for Blocks plugin works by using the Animate on Scroll (AOS) library that is mostly CSS based with some JavaScript to handle initialization. The plugin adds attributes to block's root element that tell the AOS library how to animate it. Loading the necessary styles and scripts is also handled automatically by the plugin.

= Does it work for all blocks? =
It should work with normal blocks that render a valid WP Element that can utilize the `blocks.getSaveContent.extraProps` filter as well as dynamic blocks that utilize a `render_callback`. Third party blocks that do something unorthodox may not work.
[Known unsupported blocks](https://github.com/ska-dev-1/animations-for-blocks/blob/main/animations-for-blocks.php#L172-L175)

= Disable block support =
The `anfb_unsupported_blocks` filter can be used in your child theme's `functions.php` file to disable block animation support.

    add_filter('anfb_unsupported_blocks', function($blocks) {
    	$blocks[] = 'core/button';
    	return $blocks;
    });

= What happens when I disable this plugin? =
After disabling this plugin blocks with animations can become invalid. From there you can attempt to recover the block by clicking "Attempt Block Recovery" which should remove the custom animation attributes. If you don't want to risk blocks becoming invalid you need to disable all animations before disabling the plugin.

= All the animated elements are invisible on the front end =
When none of the animated elements show up on your site it's possibly due to a JavaScript error preventing the initialization of AOS. Please open the Developer Tools (F12 on Chrome/Firefox) and look for any errors in the Console tab. You can contact support with the error message, include your site link if possible.

== Installation ==

= Install via admin dashboard =
1. Go to your **WordPress admin dashboard -> Plugins**.
2. Click "Add New".
3. Click "Upload Plugin".
4. Select the `animations-for-blocks.zip` file.
5. Click "Install Now".
6. Activate the plugin from **WordPress admin dashboard -> Plugins**.

= Manual install via FTP upload =
1. Upload the folder "animations-for-blocks" from `animations-for-blocks.zip` file to your WordPress installations `../wp-content/plugins` folder.
2. Activate the plugin from **WordPress admin dashboard -> Plugins**.

== Screenshots ==

1. Animations on the front end
2. Adding an animation
3. Animation controls

== Changelog ==

= 1.2.1 =
* WP 6.8.
* Update Lenis to 1.2.3.
* Update `@wordpress/*` packages.

= 1.2 =
* Front end scripts are now deferred.
* Lazyload assets option now defaults to true.
* Added new animation - "Scale", a subtle animation which starts from a slightly scaled up/down state with opacity 0 and transforms into its' initial size while fading in.
* Added new animation - "Default". Plugin settings now allow to configure an animation that will be used for any block that has selected the "Default" animation.
* Added new animation - "Inherit". The "Animation container" block now has an option to become an "Animation provider", in which case all the blocks nested inside of it that use the "Inherit" animation will use the animation of the provider block. The provider block can also stagger each subsequent animation by a specified amount.
* Bundled Lenis - a lightweight smooth scroll library - can be enabled in plugin settings.
* AOS is now exposed to window object on the front end (`window.AOS`).
* Tested up to WordPress 6.7.1.
* Requires WordPress 6.6.
* Requires PHP 8.1.
* Update `@wordpress/*` packages.

= 1.1.6 =
* Tested up to WordPress 6.6.
* Update `@wordpress/*` packages.
* Use `block.json` for Animation container block.
* Move block styles to separate stylesheet.
* Fix label and value mix up in RangeControl.
* Remove some defunct code.
* Bundled `react-jsx-runtime` to keep the plugin working with WP < 6.6.

= 1.1.5 =
* Tested up to WordPress 6.5.
* Added option to choose where to display the animation controls - you can move them to the "Styles" tab or to "Advanced" inspector controls area.
* Update `@wordpress/*` packages.

= 1.1.4 =
* Accidentally a version.

= 1.1.3 =
* Fix for crash with latest Gutenberg plugin due to `__unstableElementContext` being removed.
* Update `@wordpress/*` packages.

= 1.1.2 =
* Add option to disable automatic animation preview.
* Add option to lazyload assets when an animated block is preset on the current page.
* Update `@wordpress/*` packages.
* Update screenshots.

= 1.1.1 =
* Use `WP_HTML_Tag_Processor` for adding HTML attributes.
* Blocks that render multiple root elements are no longer wrapped automatically. Use Animation container block to do it.
* Move all PHP code to main file for simplicity.

= 1.1.0 =
* Animation preview works in iframe-d block editors.
* Rework controls.
* Add ability to copy-paste animation settings.
* Update Animation container block to API version 2.
* Use `render_block` filter to apply animation attributes instead of overriding block's `render_callback`.
* Add `anfb_aos_attributes` filter that can modify attributes that are added to animated HTML elements.
* Convert some code to typescript.
* Update `@wordpress/*` packages.
* Test with WordPress 6.2-RC1.

= 1.0.6 =
* Fix `once` and `mirror` options detection in dynamic blocks.
* Update `@wordpress/*` packages.
* Test with WordPress 6.1.1.

= 1.0.5 =
* Update `@wordpress/*` packages.
* Test with WordPress 6.0.
* Add GitHub link.
* Remove `src` folder from plugin.

= 1.0.4 =
* Update block anchor selector.

= 1.0.3 =
* Use generated version number for AOS library.

= 1.0.2 =
* Fix encoding for dynamic blocks.

= 1.0.1 =
* Add more unsupported blocks.
* Move Animation Container block to "Design" category.

= 1.0.0 =
* Initial release.
