# HTML and CSS News for February 2017

- [HTML & CSS-related updates for developers in Opera 43](https://dev.opera.com/blog/opera-43/)
    - Prerender from address bar
        - Opera will now prerender pages that are typed into the address bar, before the user hits enter, which can make the page finish loading much sooner.
    - Opera now supports `position: sticky`, a new way to position elements. A position: sticky element is relatively-positioned, but becomes `position: fixed` after the user reaches a certain scroll position. This results in smoother scroll without jumps compared to trying to achieve the same thing with scroll events and JavaScript. For more info see [this article](https://developers.google.com/web/updates/2016/12/position-sticky) by Paul Kinlan.
    - The new generic font family `system-ui` is now supported, which matches the platform’s default UI font.
    - `touch-action: pinch-zoom` is now supported.
    - Non-whitespace Unicode control characters will now be rendered according to the specification, rather than being ignored.

- [CSS Intrinsic & Extrinsic Sizing Module Level 3 Working Draft updated](https://www.w3.org/TR/2017/WD-css-sizing-3-20170207/#changes)
    - applies to various CSS layout calculations
    - adds new keywords for `width` and `height`

- [CSS Box Alignment Module Level 3 Working Draft updated](https://www.w3.org/TR/2017/WD-css-align-3-20170215/#changes)
    - relates to alignment of boxes within their containers for each of the different layout models (block, table, flex and grid)

- [CSS Fragmentation Module Level 3 Candidate Recommendation updated](https://www.w3.org/TR/2017/CR-css-break-3-20170209/#changes)
    - applies when content needs to be split up (pagination)
    - relates to the various breaking properties

- [CSS Grid Layout Module Level 1 Candidate Recommendation updated](https://www.w3.org/TR/2017/CR-css-grid-1-20170209/#changes)
    + a two-dimensional layout system created specifically to tackle grid-based user interfaces on the web.
    + is almost ready to pop out of the oven

- [CSS Scroll Snap Module Level 1 Candidate Recommendation updated](https://www.w3.org/TR/2017/CR-css-scroll-snap-1-20170209/#changes)
    + to give developers some control over scrolling behaviour

- [CSS Containment Module Level 1 Working Draft published](https://www.w3.org/TR/2017/WD-css-contain-1-20170221/)
    + to allow a strong, predictable isolation of a subtree from the rest of the page
    + lets developers limit the scope of the browser's styles, layout and paint work

- [CSS Timing Functions Level 1 Working Draft published](https://www.w3.org/TR/2017/WD-css-timing-1-20170221/)
    + made for more fine-grained control over animations
