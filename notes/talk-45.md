# HTML and CSS News for October 2019

## Browser updates

- [HTML & CSS-related updates for developers in Firefox 70](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/70)
    + Firefox can now suggest securely-generated passwords to the user in the following situations:
        - An `<input>` element has the `autocomplete="new-password"` attribute value.
        - The user opens the context menu on any password input element, even if it is not intended for new passwords.
    + Opacity values like for `opacity` or `stop-opacity` can now be percentages (bug 1562086).
    + `grid-auto-columns` and `grid-auto-rows` now accept multiple track-size values (bug 1339672).
    + A number of text-related CSS properties have been enabled by default (bug 1573631):
        - `text-decoration-thickness`
        - `text-underline-offset`
        - `text-decoration-skip-ink`, the default value is auto, which means that by default underlines and overlines are now interrupted where they would otherwise cross over a glyph.
    + The `display` property now accepts two keyword values representing the inner and outer display type (bug 1038294, bug 1105868 and bug 1557825).
    + The `font-size` property now accepts the new keyword value `xxx-large`. (bug 1553545).
    The `:visite`d pseudo-class no longer matches `<link>` elements, for logic and performance reasons.
    + We now support an `auto` value for the `quotes` property (bug 1421938).
    + Stylesheets contained in `<style>` elements are now cached for reuse, to improve performance (bug 1480146). Note that this currently doesn't include stylesheets that contain `@import` rules.
    + The `<ratio>` type now accepts `<number>/<number>` or a single `<number>` as a value. (bug 1565562).

- [HTML & CSS-related updates for developers in Chrome 78](https://developers.google.com/web/updates/2019/10/nic78)
    + CSS Properties and Values API
        + can define a type and default fallback value for your custom properties

- [What's new in Chrome DevTools 79](https://developers.google.com/web/updates/2019/10/devtools)
    + Debug why a cookie was blocked
    + View cookie values
    + Simulate different prefers-color-scheme and prefers-reduced-motion preferences
    + Code coverage updates (uses new colors to represent used and unused code)
    + Debug why a network resource was requested
    + Console and Sources panels respect indentation preferences again
    + New shortcuts for cursor navigation

## Specifications

- [CSS Images Level 3 Candidate Recommendation updated](https://www.w3.org/TR/css-images-3/)
    + contains features of CSS related to `<image>` type and some replaced elements
    + extends the functionality of CSS2, mainly:
      + generalization of the `<url>` type to the `<image>` type
      + several additions to the `<image>` type
      + a generic sizing algorithm for images and other replaced content in CSS
      + definitions for interpolating several `<image>` types
      + several properties controlling the interaction of replaced elements and CSS’s layout models

- [CSS Containment Module Level 1 Proposed Recommendation published](https://www.w3.org/TR/css-contain-1/)
    + describes the `contain` property which indicates the element’s subtree is independent of the rest of the page
    + allows for heavy optimisations by user agents when used well

- [CSS Containment Module Level 2 Working Draft published](https://www.w3.org/TR/css-contain-2/)
    + defines new features not present in earlier specifications and aims to replace and supercede Level 1 once stable

- [CSS Multi-column Layout Module Level 1 Working Draft updated](https://www.w3.org/TR/css-multicol-1/)
    + describes multi-column layouts in CSS
    + describes how content can be flowed into multiple columns with a gap and a rule between them

## Interesting links

- [Two ways to create an image with a colour overlay in CSS](https://dev.to/ellen_dev/two-ways-to-achieve-an-image-colour-overlay-with-css-eio)
- [Building a Scrapbook Layout with CSS Grid](https://css-irl.info/building-a-scrapbook-layout-with-css-grid/)
- [.a-pull: A CSS algorithm for pulling one box outside another](https://notlaura.com/css-algorithm-pull/)
- [Trying to make sense of Gmail CSS support (2019 edition)](https://emails.hteumeuleu.com/trying-to-make-sense-of-gmail-css-support-2019-edition-b7cc132ee226)
- [Clipping, Clipping, and More Clipping!](https://css-tricks.com/clipping-clipping-and-more-clipping/)
- [Editorial Design Patterns With CSS Grid And Named Columns](https://www.smashingmagazine.com/2019/10/editorial-design-patterns-css-grid-subgrid-naming/)
- [Mask Compositing: The Crash Course](https://css-tricks.com/mask-compositing-the-crash-course/)
- [Dynamic CSS Components Without JavaScript](https://every-layout.dev/blog/css-components/)
- [Weaving One Element Over and Under Another Element](https://css-tricks.com/weaving-one-element-over-and-under-another-element/)
- [The Current State of Styling Selects in 2019](https://css-tricks.com/the-current-state-of-styling-selects-in-2019/)
- [Are There Random Numbers in CSS?](https://css-tricks.com/are-there-random-numbers-in-css/)

## Cool CodePens

- [Zero Divs! Pure CSS pixel art animation!](https://codepen.io/ivorjetski/full/xxKBWBN)
- [Longcat spinner](https://codepen.io/jkantner/pen/jOONyoO)
- [Day 17/18: Pokemon Friends](https://codepen.io/acupoftee/pen/YzzzYxj)
- [Single element battery charge 🤓⚡️](https://codepen.io/jh3y/pen/MWgNdjB)
- [CSS Rock-Paper-Scissors](https://codepen.io/alvaromontoro/pen/BaaBYyz)
- [CSS single div geometric pattern](https://codepen.io/lynnandtonic/pen/yLLeymm)
- [CSS is Awesome - Variable fonts Edition.](https://codepen.io/mandymichael/full/vYYLByj)
- [Cat-in-a-box](https://codepen.io/tiffachoo/pen/BEmLJw)