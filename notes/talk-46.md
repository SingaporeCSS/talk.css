# HTML and CSS News for January 2020

## Browser updates

- [HTML & CSS-related updates for developers in Firefox 72](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/72)
    + CSS Shadow Parts are now enabled. This includes the `part` attribute and `::part` pseudo-element, which allow shadow hosts to selectively expose chosen elements from their shadow tree to the outside page for styling purposes (bug 1559074).
    + CSS Motion Path has been shipped (bug 1582554, also see the Intent to Ship). This includes: `offset`, `offset-anchor`, `offset-path`, `offset-distance`, `offset-rotate`
    + The individual transform properties — `scale`, `rotate`, and `translate` — are now enabled by default (bug 1424900). 

- [HTML & CSS-related updates for developers in Firefox 71](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/71)
    + Added the `subgrid` value from CSS Grid Level 2 to `grid-template-columns` and `grid-template-rows` (bug 1580894)
    + Added support for the `column-span` property to Multiple-column Layout (bug 1426010)
    + Added support for the `path()` value of `clip-path` (bug 1488530)
    + Mapped the height and width HTML attributes on the `<img>` element to an internal `aspect-ratio` property (bug 585637). See the guide to this feature on MDN.

- [What's new in Chrome DevTools 80](https://developers.google.com/web/updates/2019/12/devtools)
    + Nothing related to HTML and CSS tbh
    + Configuration UI has a new, responsive design, and the throttling configuration options have been simplified

- [Safari Technology Preview 97 released](https://developer.apple.com/safari/technology-preview/release-notes/)
    + Added support for the Q unit
    + Changed to not perform range checking for `calc()` at parse time
    + Changed CSS Transitions and CSS Animations properties to treat unit-less 0 as an invalid value for times
    + Changed media queries in `img` sizes attribute to evaluate dynamically
    + Fixed CSS grid line name positions after auto repeat with no line names
    + Fixed `-webkit-font-smoothing: none` not antialiasing subsequent elements
    + Fixed `::before` and `::after` elements not filling their grid cell when the container has `display: contents`
    + Fixed `calc()` serialization to match the specifications
    + Implemented the CSS `clamp()` function

## Specifications

- [CSS Spatial Navigation Level 1 Working Draft updated](https://www.w3.org/TR/css-nav-1/)
    + defines a general model for navigating the focus using the arrow keys, as well as related CSS, JavaScript features and Events

- [CSS Containment Module Level 1 W3C Recommendation published](https://www.w3.org/TR/css-contain-1/)
    + describes the `contain` property which indicates the element’s subtree is independent of the rest of the page
    + allows for heavy optimisations by user agents when used well

- [CSS Text Level 3 Working Draft updated](https://www.w3.org/TR/css-text-3/)
    + describes the typesetting controls of CSS; that is, the features of CSS that control the translation of source text to formatted, line-wrapped text
    + specifically, the CSS properties which provide control over case transformation, white space collapsing, text wrapping, line breaking rules and hyphenation, alignment and justification, spacing, and indentation

- [CSS Color Level 4 Working Draft updated](https://www.w3.org/TR/css-color-4/)
    + describes CSS properties which allow authors to specify the foreground color and opacity of the text content of an element
    + also describes in detail the CSS `<color>` value type

- [CSS Basic User Interface Module Level 4 Working Draft updated](https://www.w3.org/TR/css-ui-4/)
    + describes user interface related properties and values to style HTML and XML (including XHTML)
    + includes and extends user interface related features from the properties and values of previous CSS levels
    + uses various properties and values to style basic user interface elements in a document

## Interesting links

- [A Layout Trick for Building a Contact List](https://css-irl.info/a-layout-trick-for-building-a-contact-list/)
- [Web layouts like it’s 2020](https://blog.logrocket.com/web-layouts-like-its-2020/)
- [Highlights From Building a Magazine Layout](https://ishadeed.com/article/magazine-layout-highlights/)
- [Case Study: lynnandtonic.com 2019 refresh](https://lynnandtonic.com/thoughts/entries/case-study-2019-refresh/)
- [CSS at the Intersection (talk by Natalya Shelburne)](https://www.youtube.com/watch?v=VjSNqCDBWZA)
- [CSS zoom, a close up on issues](http://www.otsukare.info/2019/11/30/css-zoom-nighmares)
- [Z’s Still Not Dead Baby, Z’s Still Not Dead](https://24ways.org/2019/zs-still-not-dead-baby-zs-still-not-dead/)
- [Beautiful Scrolling Experiences – Without Libraries](https://24ways.org/2019/beautiful-scrolling-experiences-without-libraries/)
- [Building my bullet journal layout with CSS Grid & Subgrid & Flexbox](https://blog.stephaniestimac.com/posts/12-29-2019-bullet-journal/)
- [The unseen performance costs of modern CSS-in-JS libraries in React apps](https://calendar.perfplanet.com/2019/the-unseen-performance-costs-of-css-in-js-in-react-apps)
- [Min and Max Width/Height in CSS](https://ishadeed.com/article/min-max-css/)
- [Get Moving (or not) with CSS Motion Path](https://danielcwilson.com/blog/2020/01/motion-path-quirks/)
- [Fun with CSS Motion Path](https://css-irl.info/fun-with-css-motion-path/)

## Cool CodePens

- [Bongo Cat Codes](https://codepen.io/carolineartz/pen/VwYwZaP)
- [#CodepenChallenge: using circles to draw Homer Simpson](https://codepen.io/alvaromontoro/pen/JxMPqa)
- [Pure CSS Playing Card No.1 - King of Hearts](https://codepen.io/ivorjetski/pen/ExaKmjw)
- [css infinity stone](https://codepen.io/harold_winston/pen/YzPVYwJ)
- [Solar Eclipse CSS only](https://codepen.io/Milleus/pen/bGNRMzV) 🇸🇬❤️
- [100 years](https://codepen.io/hexagoncircle/pen/povdoXQ)