# HTML and CSS News for August 2019

## Browser updates

- [HTML & CSS-related updates for developers in Firefox 68](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/68)
    + A button has been added to the rules panel of the Page inspector that allows you to toggle the display of any print media queries (bug 1534984).
    + The fonts panel now includes a slider to modify letter-spacing (bug 1536237).
    + A warning icon appears next to unsupported CSS properties or rules that have invalid values, to help you understand why certain styles are not being applied (bug 1306054).
    + CSS Scroll Snapping has been updated to the latest version of the specification (bug 1312163) and (bug 1544136)
    + The `-webkit-line-clamp` property has been implemented for compatibility with other browsers (bug 866102).
    + Support has been added for the `::marker` pseudo-element (bug 205202) and animation for `::marker` pseudos (bug 1538618)
    + We changed `currentcolor` to be a computed value (except for the `color` property)  (bug 760345).
    + Support has been fixed for the `ch` length unit so it now matches the spec (fallback for no '0' glyph, vertical metrics) (bug 282126)
    + The  `counter-set` property has been implemented. (bug 1518201).
    + Selector matching and parsing support has been implemented for `::part()` (bug 1545430) and (bug 1545425).
    + CSS Transforms are now supported in indirectly rendered things e.g.)  `<mask>`,  `<marker>`, `<pattern>`, `<clipPath>` (bug 1323962).
    + While we're keeping the prefixed versions of the various gradient properties (`linear-gradient()`, `radial-gradient()`, and `repeating-radial-gradient()` available for compatibility reasons, we have revised how they're parsed so that they're handled much more like the non-prefixed versions. This means that certain existing styles won't work correctly.

- [Firefox 68: BigInts, Contrast Checks, and the QuantumBar](https://hacks.mozilla.org/2019/07/firefox-68-bigints-contrast-checks-and-the-quantumbar/)

## Specifications

- [CSS Generated Content Module Level 3 Working Draft updated](https://www.w3.org/TR/css-content-3/)
    + describes how to insert content in a document

- [CSS Display Module Level 3 Candidate Recommendation updated](https://www.w3.org/TR/css-display-3/)
    + describes how the CSS formatting box tree is generated from the document element tree
    + defines the display property that controls it

- [CSS Syntax Module Level 3 Candidate Recommendation updated](https://www.w3.org/TR/css-syntax-3/)
    + describes, in general terms, the basic structure and syntax of CSS stylesheets
    + defines, in detail, the syntax and parsing of CSS - how to turn a stream of bytes into a meaningful stylesheet

## Interesting links

- [CSS Lists, Markers, And Counters](https://www.smashingmagazine.com/2019/07/css-lists-markers-counters/)
- [An Intro To Screen Reader Testing for Sighted Developers](http://uncaughtreferenceerror.com/a-crash-course-to-screenreaders-for-sighted-developers/)
- [CSS Architecture for Multiple Websites](https://medium.com/@elad/css-architecture-for-multiple-we)
- [Fun places to learn CSS Layout –  Part 2: Grid Layout](https://stephaniewalter.design/blog/fun-places-to-learn-css-layout-part-2-grid-layout/)
- [Color Inputs: A Deep Dive into Cross-Browser Differences](https://css-tricks.com/color-inputs-a-deep-dive-into-cross-browser-differences/)
- [Accessible CSS Generated Content](https://yatil.net/blog/accessible-css-generated-content)
- [Everything You Need To Know About CSS Margins](https://www.smashingmagazine.com/2019/07/margins-in-css/)

## Cool CodePens

- [Pure CSS Katy](https://codepen.io/MalaikaIshtiaq/pen/OexbXz)
- [Only CSS: Infinite Wave 🏄](https://codepen.io/YusukeNakaya/pen/MMqwVw)
- [CSS Outline](https://codepen.io/ananyaneogi/pen/NZmLQQ)