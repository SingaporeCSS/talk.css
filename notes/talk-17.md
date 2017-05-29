# HTML and CSS News for May 2017

- [HTML & CSS-related updates for developers in Opera 45](https://dev.opera.com/blog/opera-45/)
    + Sites can now access the approximate range of colours supported by Opera and output devices using the `color-gamut` Media Query.
    + `display: flow-root` is now supported. An effect of `flow-root` is that it envelops floats, and can be used as a replacement for the clearfix hack.

- [Safari Technology Preview 30 released](https://developer.apple.com/safari/technology-preview/release-notes/)
    + Fixed `space-evenly` behaviour with Flexbox (r216536)
    + Fixed `font-stretch:normal` to select condensed fonts (r216517)
    + Fixed custom properties used in `rgb()` with `calc()` (r216188)
    + Fixed problem with the CSS Font Loading API’s `load()` function erroneously resolving promises when used with preinstalled fonts (r216079)

- [Webkit now supports motion media queries](https://webkit.org/blog/7551/responsive-design-for-motion/)
    + The `prefers-reduced-motion` media feature, is part of CSS Media Queries Level 5
    + It can be used to serve alternate animations that avoid motion sickness triggers experienced by some site visitors.

- [CSS Grid Layout Level 1 Candidate Recommendation updated](https://www.w3.org/TR/2017/CR-css-grid-1-20170509/#changes)
    + Deferred subgrid feature to Level 2 due to lack of implementation and desire for further discussion.

- [CSS Box Alignment Module Level 3 Working Draft updated](https://www.w3.org/TR/2017/WD-css-align-3-20170515/#changes)
    + As CSS adds further capabilities, the ability to align boxes in various dimensions becomes more critical.
    + This module attempts to create a cohesive and common box alignment model to share among all of CSS.
    + Adds some new alignment capabilities to the block layout model

- [CSS Logical Properties and Values Level 1 Working Draft published](https://www.w3.org/TR/2017/WD-css-logical-1-20170518/)
    + Introduces logical properties and values that provide the author with the ability to control layout through logical, rather than physical, direction and dimension mappings.
    + Properties like `block-start` and `block-end` or `inline-start` and `inline-end` instead of left and right. 

- [CSS Media Queries Level 4 Working Draft updated](https://www.w3.org/TR/2017/WD-mediaqueries-4-20170519/#changes-2012)
    + Last call for comments before moving to Candidate Recommendation status by the end of June
    + Brings significant improvements on the syntax, and a shift from using media types to finer-grained media features

