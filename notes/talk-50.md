# HTML and CSS News for May 2020

## Browser updates
 
- [HTML & CSS-related updates for developers in Firefox 75](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/75)
    + It is now possible to resize the rectangle of the Measuring Tool (bug 1152321).
    + In the inspector, you can now use XPath expressions to locate elements, in addition to locating elements using CSS selectors as before (bug 963933).
    + You can now filter WebSocket messages using regular expressions, in addition to plain text search, by simply writing the regular expression in slashes (bug 1593837).
    + The loading attribute of the `<img>` element has now been implemented. This string value can be used to specify that the image should be lazily loaded, by setting its value to lazy (bug 1542784).
    + The value of the `<style>` element's type attribute is now restricted to `text/css` only, as per the spec (bug 1614329).
    + Support for the `min()`, `max()`, and `clamp()` functions has been implemented (bug 1519519).
    + The `all` value of the `text-decoration-skip-ink` property has been added (bug 1611965)

- [Firefox 75: Ambitions for April](https://hacks.mozilla.org/2020/04/firefox-75-ambitions-for-april/)

- [Safari Technology Preview 105 released](https://developer.apple.com/safari/technology-preview/release-notes/)
    + Added Selectors Level 4 specificity calculation for pseudo classes
    + Added support for font-relative `lh` and `rlh` unit frp, CSS Values Level 4 specification
    + Corrected the computed style for `outline-offset` when `outline-style` is none
    + Fixed bad style sharing between sibling elements with different part attributes for CSS Shadow Parts
    + Implemented the CSS Color Level 4 behavior for inheritance of `currentColor`
    + Prevented caching definite height against perpendicular flex items
    - Add support for `:is()`
    - Fixed changes in grid or elements inside the grid affecting margin on other elements in the grid
    - Added label text to suggested values for a `<datalist>` element
    - Fixed `<datalist>` dropdown suggestions table able to be scrolled too far
    - Fixed a change event getting dispatched when a `<textarea>` gets changed without focus
    - [Web inspector]: Created a visual editor for `box-shadow`

- [Revert the revert of 'revert'](https://chromium-review.googlesource.com/c/chromium/src/+/2153121)

- [`gap` property is FINALLY in Chrome Canary](https://twitter.com/Una/status/1255275713248350208)

- [CSS grid tooling coming soon to Chromium](https://twitter.com/ChromeDevTools/status/1255481965995851782)

## Specifications

- [CSS Speech Module Candidate Recommendation released](https://www.w3.org/TR/css-speech-1/)
    + defines aural CSS properties that enable authors to declaratively control the rendering of documents via speech synthesis, and using optional audio cues.
    + this standard was developed in cooperation with the [Voice Browser Activity](https://www.w3.org/Voice/).
    + Mixing properties, speaking properties, pause properties, rest properties, cue properties, voice characteristic properties, voice duration property

- [CSS Color Adjustment Module Level 1 Working Draft updated](https://www.w3.org/TR/css-color-adjust-1/)
    + introduces a model and controls over automatic color adjustment by the user agent to handle user preferences, such as "Dark Mode", contrast adjustment, or specific desired color schemes.

- [Media Queries Level 5 Working Draft updated](https://www.w3.org/TR/mediaqueries-5/)
    + contains extensions and additions to Level 4
    + Environment Media Features, Scripting Media Features, Custom Media Queries, User Preference Media Features

- [CSS Properties and Values API Level 1](https://drafts.css-houdini.org/css-properties-values-api-1/#at-property-rule)
    + extends [css-variables], allowing the registration of properties that have a value type, an initial value, and a defined inheritance behaviour, via two methods:
        - A JS API, the `registerProperty()` method
        - A CSS at-rule, the `@property` rule
    + [CSS tricks: @property](https://css-tricks.com/property/)

- [CSS Box Model Level 3 updated and split](https://www.w3.org/TR/css-box-3/) to [Level 4 FPWD](https://drafts.csswg.org/css-box-4/)
    + describes the margin and padding properties, which create spacing in and around a CSS box
    + replaces the definitions of the margin and padding properties defined in [CSS2](https://www.w3.org/TR/CSS2/) sections 8.1, 8.2, 8.3 (but not 8.3.1), and 8.4

- [CSS Text Module Level 3 Working Draft updated](https://www.w3.org/TR/css-text-3/)
    + defines properties for text manipulation and specifies their processing model
    + covers line breaking, justification and alignment, white space handling, and text transformation

- [CSS Ruby Layout Module Level 1 Working Draft updated](https://www.w3.org/TR/css-ruby-1/)
    + “Ruby”, a form of interlinear annotation, are short runs of text alongside the base text and are typically used in East Asian documents to indicate pronunciation or to provide a short annotation
    + describes the rendering model and formatting controls related to displaying ruby annotations in CSS

## Interesting links

- [LCH colors in CSS: what, why, and how?](http://lea.verou.me/2020/04/lch-colors-in-css-what-why-and-how/)
- [Updates to form controls and focus ](https://blog.chromium.org/2020/03/updates-to-form-controls-and-focus.html)
- [CSS Findings From The New Facebook Design](https://ishadeed.com/article/new-facebook-css/)
- [Why Do Some HTML Elements Become Deprecated?](https://css-tricks.com/why-do-some-html-elements-become-deprecated/)
- [Building dark mode on Stack Overflow](https://stackoverflow.blog/2020/03/31/building-dark-mode-on-stack-overflow/)
- [Create a 🖨️ printable zine with CSS](https://dev.to/rowan_m/create-a-printable-zine-with-css-5c0c)
- [Using CSS to Set Text Inside a Circle](https://css-tricks.com/using-css-to-set-text-inside-a-circle/)
- [Pseudo-Randomly Adding Illustrations with CSS](https://meyerweb.com/eric/thoughts/2020/04/15/pseudo-randomly-adding-illustrations-with-css/)
- [Using CSS to Control Text Selection](https://codersblock.com/blog/using-css-to-control-text-selection/)
- [Constrained CSS grids without max-width](https://ethanmarcotte.com/wrote/css-grid-without-max-width/)
- [Dark mode and variable fonts](https://css-tricks.com/dark-mode-and-variable-fonts/)
- [CSS Clamp: The Goldilocks of CSS Math Functions](https://www.stevefenton.co.uk/2020/04/css-clamp-the-goldilocks-of-css-math-functions/)
- [`lh` and `rlh` units ](https://css-tricks.com/lh-and-rlh-units/)

## Cool CodePens

- [CSS Neumorphic Toggle](https://codepen.io/cobra_winfrey/pen/YzXOBEN)
- [Neumorphic Grid + Animation](https://codepen.io/kyleshook/pen/XWbwBYq)
- [CSS: Cat works remotely in spring](https://codepen.io/deren2525/pen/gOpNOYE)
- [CSS drawing: The king and the fly](https://codepen.io/alvaromontoro/pen/dyojLvx)
- [CSS Chop!](https://codepen.io/hexagoncircle/pen/ExjwZZg)
- [The Mysterious Garden (Pure CSS)](https://codepen.io/cybercountess/pen/xxwKRxN)
- [DUALITY - PURE CSS](https://codepen.io/MananTank/pen/zYvYrrd)
- [macintosh.css](https://codepen.io/fossheim/pen/oNjxrZa)
- [braunradio.css](https://codepen.io/fossheim/pen/OJypZve)
- [switch.css](https://codepen.io/fossheim/pen/jObGxQQ)
- [Tron Skyline](https://codepen.io/jordirue/pen/NWGjwzz)
- [Keyboard](https://codepen.io/stephsstar/pen/BaoRJYb)
- [scssuper mario face](https://codepen.io/louflan/pen/BaoJpwX)
- [Pure Responsive CSS Snorlax 😅](https://codepen.io/jh3y/pen/yLYXVJa)
