# HTML and CSS News for November 2020

## Browser updates

- [HTML & CSS-related updates for developers in Firefox 82](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/82)
    - The color picker used for `<input type="color">` is now keyboard-accessible on Windows
    - The allow-downloads flag for the `<iframe sandbox>` attribute is now supported
    - Support for the new ::file-selector-button pseudo-element has been added. This pseudo-element represents the file selection button inside an `<input type="file">` element
    - We have improved error recovery for the `:is()` and `:where()` pseudo-classes. These pseudo-classes now accept a forgiving selector list, where an invalid selector in the list will not render the entire list invalid
    - `appearance: button` now applies only to buttons; the button value of  appearance will otherwise behave as auto

- [Safari Technology Preview 115 released](https://developer.apple.com/safari/technology-preview/release-notes/)
    - Changed to clear the override width to properly compute percent margins in CSS Grid
    - Implemented the CSS `math-style` property
    - Fixed `text-transform` inheritance to `::marker`
    - Changed to set available column space before grid items prelayout
    - Added support for `flow-relative` shorthand and offset properties
    - Changed to allow indefinite size flex items to be definite with respect to resolving percentages inside them
    - Changed to not skip flexboxes with auto height for percentage computations in quirks mode
    - Changed to use `min-content` size for intrinsic maximums resolution
    - Fixed `min-height: auto` not getting applied to nested flexboxes
    - Fixed `:visited` color taken on a non-visited link when using CSS variables
    - Fixed CSS `revert` to serialize as "revert", not "Revert"
    - Updated to safely handle overly-long CSS variable values

- [Chrome is deploying HTTP/3 and IETF QUIC](https://blog.chromium.org/2020/10/chrome-is-deploying-http3-and-ietf-quic.html)

## Specifications

- [CSS Properties and Values API Level 1 WD updated](https://www.w3.org/TR/css-properties-values-api-1/)
    - defines an API for registering new CSS properties. Properties registered using this API are provided with a parse syntax that defines a type, inheritance behaviour, and an initial value

- [CSS Box Sizing Module Level 3](https://www.w3.org/TR/css-sizing-3/) & [Level 4](https://www.w3.org/TR/css-sizing-4/) WDs updated
    + extends the CSS sizing properties with keywords that represent content-based "intrinsic" sizes and context-based "extrinsic" sizes, allowing CSS to more easily describe boxes that fit their content or fit into a particular layout context
    + Level 4 is a delta spec over CSS Sizing Level 3

- [CSS Grid Layout Module Level 1](https://www.w3.org/TR/css-grid-1/) & [Level 2](https://www.w3.org/TR/css-grid-2/) CRs updated
    + defines a two-dimensional grid-based layout system, optimized for user interface design
    +  Level 2 expands Grid by adding “subgrid” capabilities for nested grids to participate in the sizing of their parent grids

- [CSS Custom Highlight API Module Level 1 WD published](https://www.w3.org/TR/css-highlight-api-1/)
    + describes a mechanism for styling arbitrary ranges of a document identified by script
    + extends the concept of highlight pseudo-elements by providing a way for web developers to style the text of arbitrary Range objects, rather than being limited to the user agent defined `::selection`, `::inactive-selection`, `::spelling-error`, and `::grammar-error`

- [CSS Box Model Module Level 3 WD updated](https://www.w3.org/TR/css-box-3/)
    - describes the margin and padding properties, which create spacing in and around a CSS box

- [Native CSS Masonry Layout In CSS Grid](https://www.smashingmagazine.com/native-css-masonry-layout-css-grid/)
- [Logical layout enhancements with flow-relative shorthands](https://web.dev/logical-property-shorthands/)
- [min(), max(), and clamp(): three logical CSS functions to use today](https://web.dev/min-max-clamp/)

## Interesting links

- [Developing For The Semantic Web](https://www.smashingmagazine.com/2020/10/developing-semantic-web/)
- [:focus-visible Is Here](https://matthiasott.com/notes/focus-visible-is-here)
- [Writing even more CSS with Accessibility in Mind, Part 2: Respecting user preferences](https://www.matuzo.at/blog/writing-even-more-css-with-accessibility-in-mind-user-preferences/)
- [The -​-var: ; hack to toggle multiple values with one custom property](https://lea.verou.me/2020/10/the-var-space-hack-to-toggle-multiple-values-with-one-custom-property/)
- [Achieving Vertical Alignment (Thanks, Subgrid!)](https://css-tricks.com/achieving-vertical-alignment-thanks-subgrid/)
- [Focus management and inert](https://css-tricks.com/focus-management-and-inert/)
- [The lang attribute: browsers telling lies, telling sweet little lies](https://www.matuzo.at/blog/lang-attribute/)
- [Thinking Outside the Box with CSS Grid](https://frontend.horse/articles/thinking-outside-the-box-with-css-grid/)
- [Creating CSS Shapes with Emoji](https://css-tricks.com/creating-css-shapes-with-emoji)
- [Prevent layout shifts with CSS grid stacks](https://www.hsablonniere.com/prevent-layout-shifts-with-css-grid-stacks--qcj5jo/)
- [In Defense of Tables and Floats in Modern Day Development](https://css-tricks.com/in-defense-of-tables-and-floats-in-modern-day-development/)
- [Accessible interactions](https://adactio.com/journal/17546)
- [More on content-visibility](https://css-tricks.com/more-on-content-visibility)
- [CSS vs. CSS Houdini Performance](https://lisilinhart.info/posts/css-houdini-performance)

## Cool CodePens

- [PureCSS character](https://diana-adrianne.com/purecss-character/) (not actually a Codepen but coolest thing on the web you'll see)
- [Nowhere (a CSS 3D Scene)](https://codepen.io/jkantner/pen/WNxNpOG)
- [Turkey 🦃](https://codepen.io/abxlfazl/pen/gOrpOZL)
- [A Pure CSS Game - You Must Build a Lighthouse.](https://codepen.io/ivorjetski/pen/OJXbvdL)
- [CSS Art - Sphere -](https://codepen.io/shunyadezain/pen/mdEJjJR)
- [Single div CSS cheese cake](https://codepen.io/lynnandtonic/pen/bGegozj)
- [CSS only interactive 3D dice](https://codepen.io/HunorMarton/pen/mdERrLy)
- [The Caretaker - A pure CSS Horror / Puzzle game](https://codepen.io/jcoulterdesign/pen/WNxjVbW)
- [Media Scroller with Grid and Snap Points](https://codepen.io/argyleink/pen/jOrzEEM)
