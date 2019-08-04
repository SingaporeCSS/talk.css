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

- [New CSS Features in Firefox 68](https://hacks.mozilla.org/2019/07/new-css-features-in-firefox-68/)

## Specifications

- [CSS Scrollbars Module Level 1 Editor's Draft](https://drafts.csswg.org/css-scrollbars-1/)
    + standardizes the ability to color scrollbars introduced in 2000 by Windows IE 5.5
    + useful when building web applications which use color schemes very different from the appearance of default platform scrollbars
    + [Github working draft link](https://github.com/w3c/csswg-drafts/tree/master/css-scrollbars-1)
    + [Web Platform News Issue № 1022](https://webplatform.news/issues/2019-07-25)

- [CSS Generated Content Module Level 3 Working Draft updated](https://www.w3.org/TR/css-content-3/)
    + describes how to insert content in a document

- [CSS Display Module Level 3 Candidate Recommendation updated](https://www.w3.org/TR/css-display-3/)
    + describes how the CSS formatting box tree is generated from the document element tree
    + defines the display property that controls it

- [CSS Syntax Module Level 3 Candidate Recommendation updated](https://www.w3.org/TR/css-syntax-3/)
    + describes, in general terms, the basic structure and syntax of CSS stylesheets
    + defines, in detail, the syntax and parsing of CSS - how to turn a stream of bytes into a meaningful stylesheet

- [CSS Table Module Level 3 Working Draft updated](https://www.w3.org/TR/css-tables-3/)
    + defines a two-dimensional grid-based layout system, optimized for tabular data rendering
    + define the expected behaviour of user agents supporting both HTML tables and CSS

- [CSS Writing Modes Level 3 Candidate Recommendation updated](https://www.w3.org/TR/css-writing-modes-3/), [CSS Writing Modes Level 4 Candidate Recommendation updated](https://www.w3.org/TR/css-writing-modes-4/)
    + defines CSS support for various writing modes and their combinations, including left-to-right and right-to-left text ordering as well as horizontal and vertical orientations
    + defines CSS features to support for various international writing modes, such as left-to-right (e.g. Latin or Indic), right-to-left (e.g. Hebrew or Arabic), bidirectional (e.g. mixed Latin and Arabic) and vertical (e.g. Asian scripts)

## Interesting links

- [CSS Lists, Markers, And Counters](https://www.smashingmagazine.com/2019/07/css-lists-markers-counters/)
- [An Intro To Screen Reader Testing for Sighted Developers](http://uncaughtreferenceerror.com/a-crash-course-to-screenreaders-for-sighted-developers/)
- [CSS Architecture for Multiple Websites](https://medium.com/@elad/css-architecture-for-multiple-we)
- [Fun places to learn CSS Layout –  Part 2: Grid Layout](https://stephaniewalter.design/blog/fun-places-to-learn-css-layout-part-2-grid-layout/)
- [Color Inputs: A Deep Dive into Cross-Browser Differences](https://css-tricks.com/color-inputs-a-deep-dive-into-cross-browser-differences/)
- [Accessible CSS Generated Content](https://yatil.net/blog/accessible-css-generated-content)
- [Everything You Need To Know About CSS Margins](https://www.smashingmagazine.com/2019/07/margins-in-css/)
- [Initial thoughts on standardizing form controls](https://www.gwhitworth.com/blog/2019/07/form-controls-components/)
- [Multi-Line Truncation with Pure CSS ](https://css-tricks.com/multi-line-truncation-with-pure-css/)
- [Multi-column manipulation](https://every-layout.dev/blog/multi-column-manipulation/)

## Cool CodePens

- [Pure CSS Katy](https://codepen.io/MalaikaIshtiaq/pen/OexbXz)
- [Only CSS: Infinite Wave 🏄](https://codepen.io/YusukeNakaya/pen/MMqwVw)
- [CSS Outline](https://codepen.io/ananyaneogi/pen/NZmLQQ)
- [CSS Glitch effect](https://codepen.io/Nirajanbasnet/pen/RzOwdg)
- [50th Anniversary of Moon Landing](https://codepen.io/MalaikaIshtiaq/pen/zVQBEy)
- [CSS Grid: Pac-Man (Kind of)](https://codepen.io/oliviale/full/MNJwBM) 🇸🇬
- [🍉 watermelon 🍉](https://codepen.io/creme/pen/PMNxMm)