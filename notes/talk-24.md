# HTML and CSS News for January 2018

- [HTML & CSS-related updates for developers in Firefox 58](https://developer.mozilla.org/en-US/Firefox/Releases/58)
    - The Shape Path Editor has been enabled by default for shapes generated via `clip-path` (bug 1405339).
    - The code for the old Responsive Design Mode (enabled by default pre-Firefox 52) has now been removed from the Devtools (bug 1305777). See [Responsive Design Mode](https://developer.mozilla.org/en-US/docs/Tools/Responsive_Design_Mode) for information on the new tools.
    - The `font-display` descriptor is now available by default on all platforms (bug 1317445).

- [HTML & CSS-related updates for developers in Opera 50](https://dev.opera.com/blog/opera-50/)
    + Developers can now make pixel-level adjustments using the new [Q length unit](http://thenewcode.com/1158/The-Q-Continuum-Using-q-Measurements-In-CSS), which is especially useful on small viewports.
    + `font-variant-east-asian` is now supported, allowing developers to control the usage of alternate glyphs for East Asian languages like Japanese and Chinese.
    + The [`/deep/ or >>>`](https://drafts.csswg.org/css-scoping/#deep-combinator) selector, as well as `::shadow`, are now removed from CSS dynamic profile, following their deprecation in Opera 32 / Chromium 45.

- [CSS Basic User Interface Module Level 4 Working Draft updated](https://www.w3.org/TR/css-ui-4/)
    + describes user interface related properties and values to style HTML and XML (including XHTML).
    + includes and extends user interface related features from the properties and values of previous CSS levels.
    + uses various properties and values to style basic user interface elements in a document.

- [CSS Basic User Interface Module Level 3 Proposed Recommendation published](https://www.w3.org/TR/css-ui-3/)

- [CSS Writing Modes Level 3 Candidate Recommendation updated](https://www.w3.org/TR/css-writing-modes-3/)

- [CSS Writing Modes Level 4 Working Draft released](https://www.w3.org/TR/css-writing-modes-4/)
    + The following features have been cut:
        * `sideways-lr` and `sideways-rl` values of the writing-mode property
        * `digits` value of text-combine-upright
        * multi-column handling of orthogonal block containers

- [CSS Counter Styles Level 3 Candidate Recommendation updated](https://www.w3.org/TR/css-counter-styles-3/)
    + introduces the `@counter-style` rule which allows CSS to address this in an open-ended manner, by allowing the author to define their own counter styles.
    + these styles can then be used in the `list-style-type` property or in the `counter()` and `counters()` functions.
    + defines some additional predefined counter styles, particularly ones which are common but complicated to represent with @counter-style.

- [CSS Scroll Snap Module Level 1](https://www.w3.org/TR/css-scroll-snap-1/)
    + introduces scroll snap positions which enforce the scroll positions that a scroll container’s scrollport may end at after a scrolling operation has completed.
    + extends the scrolling user interface features defined in CSS2 section 11.1.
    + does not apply to the `::first-line` and `::first-letter` pseudo-elements.

- [CSS Grid Layout Module Level 1 Candidate Recommendation updated](https://www.w3.org/TR/css-grid-1/)
    + Major changes include:
        + Making the `grid` property not reset the gap properties.
        + Renaming the `grid-gap` properties to remove the `grid-` prefix so that they can be shared with multicol and flexbox, see announcement. (The old names will be aliased over for backward-compatibility.)
        + Deferring the “subgrid” feature to Level 2. 
