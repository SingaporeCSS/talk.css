# HTML and CSS News for August 2017

- [HTML & CSS-related updates for developers in Firefox 55](https://developer.mozilla.org/en-US/Firefox/Releases/54)
    + Implemented the frames() timing function (bug 1248340).
    + Implemented the text-justify property (bug 1343512, bug 276079).
    + The float / clear logical values — inline-start and inline-end — which were previously implemented but preffed off in release channels, are now available in all channels by default (bug 1253919).
    + The layout.css.variables.enabled preference has been removed completely meaning that the CSS variables feature is enabled all the time and can no longer be disabled (bug 1312328).

- [Safari Technology Preview 38 released](https://webkit.org/blog/7877/release-notes-for-safari-technology-preview-38/)
    + Added support for parsing of the font-display property (r220725)
    + Implement caret-color support (r220706, r220714)
    + Added a fast path for rotate() and rotateZ() transform parsing (r220382)
    + Fixed parsing of &lt;meta http-equiv=refresh&gt; to allow time starting with a ‘.’ without a leading 0 (r220252)
    + Fixed a hit testing issue occurring when an SVG rect element with a non-default stroke style applied (r220717)

- [CSS Typed OM Level 1 Working Draft updated](https://www.w3.org/TR/css-typed-om-1/)
    + Exposes CSS values as typed JavaScript objects to facilitate their performant manipulation
    + API is designed for performance rather than ergonomics
    + Retrieved JavaScript representations of CSS values are not mutable - instead updates must explicitly be set using the API
    + Objects are organized for consistency rather than ease of access
    
- [CSS Containment Module Level 1 Candidate Recommendation published](https://www.w3.org/TR/css-contain-1/)
    + Describes the *contain* property, which indicates that the element’s subtree is independent of the rest of the page
    + Enables heavy optimizations by user agents when used well
    + Allows an author to indicate that an element and its contents are, as much as possible, independent of the rest of the document tree
    
- [CSS Text Module Level 3 Working Draft updated](https://www.w3.org/TR/css-text-3/)
    + Describes the typesetting controls of CSS, the features of CSS that control the translation of source text to formatted, line-wrapped text
    + Properties which provide control over case transformation, white space collapsing, text wrapping, line breaking rules and hyphenation, alignment and justification, spacing, and indentation

- [CSS Scroll Snap Module Level 1 Working Draft updated](https://www.w3.org/TR/css-scroll-snap-1/)
    + Introduces scroll snap positions which enforce the scroll positions that a scroll container’s scrollport may end at after a scrolling operation has completed
    + AKA scroll-jacking
