# CSS News for April 2016

## [Global CSS Property Usage](https://developer.microsoft.com/en-us/microsoft-edge/platform/usage/) by [Microsoft Edge Dev](https://developer.microsoft.com/en-us/microsoft-edge/)
- data on usage of CSS properties across the Web

## [Vivaldi 1.0 launched](https://vivaldi.com/)
- described as a web browser built for - and with - the Web
- the UI uses React and JavaScript, as well as Node.js 
- the core of the browser uses Chromium, ensuring pages render quickly and accurately

## [Opera browser ships with VPN](http://www.opera.com/blogs/desktop/2016/04/free-vpn-integrated-opera-for-windows-mac/)
- motivated by increased awareness and emphasis on privacy
- to make VPNs available to everyone
- can be tested out on the [developer channel for Opera on computers](https://www.opera.com/developer/?utm_medium=sm&utm_source=desktop_blog&utm_campaign=vpn-dev-launch/)

## CSS specifications you may not have heard of

- [CSS @apply Rule](https://tabatkins.github.io/specs/css-apply-rule/)
    - allows an author to store a set of properties in a named variable, then reference them in other style rules
    - the @apply rule takes sets of declarations and inlines them in another style rule, serving a purpose analogous to what the `var()` function does for individual values.
    - [CSS @apply rule (native CSS mixins)](https://blog.gospodarets.com/css_apply_rule) by [Serg Gospodarets](https://blog.gospodarets.com/)
- [CSS Containment Module Level 3 (Editor's Draft)](https://drafts.csswg.org/css-containment-3/)
    - allows an author to indicate that an element and its contents are, as much as possible, independent of the rest of the document tree
    - [CSS Containment](https://justmarkup.com/log/2016/04/css-containment/) by [Michael Scharnagl](https://justmarkup.com/log/)

## CSS specification updates for April 2016

*Note that all Editor's Drafts are work in progress*

-  [Cascading Style Sheets Level 2 Revision 2 (CSS 2.2) Specification](https://www.w3.org/TR/2016/WD-CSS22-20160412/)
    - CSS 2.2 is the second revision of CSS level 2 [CSS2] 
    - It corrects a few errors in CSS 2.1, the first revision of CSS level 2
    - It is not the latest version of CSS
- [CSS Color Module Level 4 (Editor's Draft)](https://www.w3.org/TR/2016/WD-CSS22-20160412/)
    - describes CSS `<color>` values and properties for foreground colour and group opacity
    - `rgb()` and `rgba()` functions now accept `<number>` rather than `<integer>`
    - `hsl()` and `hsla()` functions now accept `<angle>` as well as `<number>` for hues
    - All uses of `<alpha-value>` now accept `<percentage>` as well as `<number>`
    - 4 and 8-digit hex colour have been added, to specify transparency
    - `gray()` function, for specifying grays compactly (And maybe allowing specification via luminance)
    - `hwb()` function, for specifying colour in the HWB notation
    - `color-mod()` function, for manipulating colour
    - `device-cmyk()` function, for specifying colour in an output-device-specific CMYK colourpace
    - Addition of named colour `rebeccapurple`
- [CSS Grid Layout Module Level 1 (Editor's Draft)](https://drafts.csswg.org/css-grid/)
    - in-depth discussions for subgrids on-going
    - details on proposal can be read [here](https://lists.w3.org/Archives/Public/www-style/2016Apr/0254.html)
