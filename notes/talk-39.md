# HTML and CSS News for May 2019

Browser updates
---
- [HTML & CSS-related updates for developers in Firefox 67](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/67)
    + `<input>` elements with `autocomplete="new-password"` set on them will no longer have previously saved passwords auto-filled (bug 1119063).
    + The `revert` keyword has been implemented (bug 1215878).
    + The `break-word` value of the `word-break` property is now supported (bug 1296042).
    + The `prefers-color-scheme` media feature is now supported (bug 1494034).
    + Custom `cursor`s of greater than 32px in size are now disallowed, to mitigate potential malware uses of large cursors (bug 1445844).

- [Safari Technology Preview 82 released](https://developer.apple.com/safari/technology-preview/release-notes/)
    + Fixed `font-weight: 1000` to be parsed successfully
    + Fixed `transform` sometimes being left in a bad state after an animation

- [The CSS feature for truncating multi-line text has been implemented in Firefox](https://webplatform.news/issues/2019-05-17)
    + May ship in early July with 68

Specifications
---
- [CSS Lists Level 3 Working Draft published](https://www.w3.org/TR/css-lists-3/)
    + contains CSS features related to list counters: styling them, positioning them, and manipulating their value
    + defines the `::marker` pseudo-element, the `list-item` display type that generates markers, and several properties controlling the placement and styling of markers
    + defines counters, which are special numerical objects often used to generate the default contents of markers

- [CSS Containment Module Level 1 Candidate Recommendation updated](https://www.w3.org/TR/css-contain-1/)
    + describes the `contain` property, which indicates that the element’s subtree is independent of the rest of the page
    + enables heavy optimizations by user agents when used well

- [CSS Easing Functions Level 1 Candidate Recommendation published](https://www.w3.org/TR/css-easing-1/)
    + describes a way for authors to define a transformation that controls the rate of change of some value
    + extracts out these “timing functions” from earlier drafts of CSS Transitions for easier re-use across CSS and SVG modules
    + adds some additional options to the `steps()` function

Articles
---
- [Introduction to subgrid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_layout/Subgrid)
- [The Dark Side of the Grid (Part 2)](https://www.matuzo.at/blog/the-dark-side-of-the-grid-part-2/)
- [Everything You Ever Wanted to Know About inputmode](https://css-tricks.com/everything-you-ever-wanted-to-know-about-inputmode/)

Random
---
- [W3C Developer Meetup in Fukuoka, Japan](https://www.w3.org/2019/09/Meetup/) happening on 16 September, 2019. Free entry, so if you happen to be around…

## Cool CodePens

+ [STARFOX Arwing Drone](https://codepen.io/YusukeNakaya/pen/LvePgj)
+ [3D Scan](https://codepen.io/YusukeNakaya/full/OGwmOV)
+ [Daft Punk - Get Lucky - CSS Pixel Animation](https://codepen.io/demaine/pen/rRvdJZ)
+ [Presentation "Slides"](https://codepen.io/oliviale/pen/NoQEqX)



