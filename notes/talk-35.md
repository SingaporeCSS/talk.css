# HTML and CSS News for January 2019

- [HTML & CSS-related updates for developers in Firefox 65](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/65)
    + The Flexbox inspector is now enabled by default
    + The `image-rendering` property's `crisp-edges` value has now been unprefixed (bug 1496617)
    + A `scrollbar-color` value of `auto` now resolves to `auto`, rather than two colors (bug 1501418)
    + The `break-*` properties have been implemented, and the legacy `page-break-*` properties have been aliased to them (bug 775618)
    + The `overflow-wrap` property's anywhere value has been implemented (bug 1505786)
    + The new step position keywords `jump-start`, `jump-end`, `jump-none`, and `jump-both` — usable inside the `steps()` timing function — have been implemented (bug 1496619)
    + Some new `-webkit-appearance` values have been added, for compatibility with other browsers
    + The behaviour of `user-select` has been changed to make it align more with other browsers (bug 1506547)
    + CSS environment variables (the `env()` function) have been implemented (bug 1462233)

- [HTML & CSS-related updates for developers in Chromium 71 and Opera 58](https://dev.opera.com/blog/opera-58/)
    + Support for [COLR/CPAL](https://glyphsapp.com/tutorials/creating-a-microsoft-color-font) fonts in Opera
    + Shorter syntax for double stops in color gradients, from
        ```
        linear-gradient(45deg, black 25%, black 50%, white 50%, white 75%)
        ```
        to
        ```
        linear-gradient(45deg, black 25% 50%, white 50% 75%)
        ```
    + `left` and `right` for `text-underline-position`
    + Improve `:host`, `:host-context`, and `::slotted` specificity (relevant for Shadow DOM)

- [Safari Technology Preview 74 released](https://developer.apple.com/safari/technology-preview/release-notes/)
    + Added support for new `rgb()` and `rgba()` syntax described in the CSS Color Level 4 specifications (r239574)
    + Added support for `calc()` expressions in gradient color stops (r239571)
    + Changed absolute positioned items to reference implicit grid lines (r239831)

- [CSS Transforms Module Level 1 Working Draft updated](https://www.w3.org/TR/css-transforms-1/)
    + allows elements styled with CSS to be transformed in two-dimensional space

- [Motion Path Module Level 1](https://www.w3.org/TR/motion-1/)
    + allows authors to position any graphical object and animate it along an author specified path

- [Filter Effects Module Level 1 Working Draft updated](https://www.w3.org/TR/filter-effects-1/)
    + a way of processing an element’s rendering before it is displayed in the document
    + a set of operations to apply on an image buffer and therefore can be applied to nearly any presentational environment, including CSS
    + describes filters in a manner that allows them to be used in content styled by CSS, such as HTML and SVG
    + also defines a CSS property value function that produces a CSS `<image>` value

- [Geometry Interfaces Module Level 1 Candidate Recommendation updated](https://www.w3.org/TR/geometry-1/)
    + provides basic geometric interfaces to represent points, rectangles, quadrilaterals and transformation matrices that can be used by other modules or specifications

- [CSS Fragmentation Module Level 3 Candidate Recommendation updated](https://www.w3.org/TR/css-break-3/)
    +  describes the fragmentation model that partitions a flow into pages, columns, or regions
    +  adds functionality for pagination, breaking variable fragment size and orientation, widows and orphans

- [CSS Fragmentation Module Level 34 Working Draft published](https://www.w3.org/TR/css-break-4/)
    +  Adds the `margin-break` property
    +  Adds the `always` and `all` values of `break-before`/`break-after`. 

- [CSS Text Module Level 3 Working Draft updated](https://www.w3.org/TR/css-text-3/)
    + defines properties for text manipulation and specifies their processing model
    + covers line breaking, justification and alignment, white space handling, and text transformation

- [CSS Box Alignment Module Level 3 Working Draft updated](https://www.w3.org/TR/css-align-3/)
    + contains the features of CSS relating to the alignment of boxes within their containers in the various CSS box layout models

- [CSS Box Model Module Level 3 Working Draft updated](https://www.w3.org/TR/css-box-3/)
    + describes the margin and padding properties, which create spacing in and around a CSS box

- [CSS Snapshot 2018 Working Group Note updated](https://www.w3.org/TR/css-2018/)
    + collects together into one definition all the specs that together form the current state of Cascading Style Sheets (CSS) as of 2018
    + primary audience is CSS implementers, not CSS authors, as this definition includes modules by specification stability, not Web browser adoption rate

- [How do you figure?](https://www.scottohara.me/blog/2019/01/21/how-do-you-figure.html)
- [A look at CSS hyphenation in 2019](https://justmarkup.com/log/2019/01/a-look-at-css-hyphenation-in-2019)
- [CSS Position Sticky - How It Really Works!](https://medium.com/@elad/css-position-sticky-how-it-really-works-54cd01dc2d46)
