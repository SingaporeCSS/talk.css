# HTML and CSS News for July 2020

## Browser updates

- [HTML & CSS-related updates for developers in Firefox 78](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/78)

- [Safari Technology Preview 108 released](https://webkit.org/blog/10840/release-notes-for-safari-technology-preview-108/)
    - Changed the calculation to compute the hypothetical cross size of each item in flexbox to use `fit-content`, not `max-content` (r262411)
    - Changed to allow indefinite size flex items to be definite with respect to resolving percentages inside them (r262124)
    - Fixed dynamically setting `position: absolute` in a grid item to trigger a relayout of that element (r262481)
    - Fixed tables as flex items to obey the flex container sizing (r262378)
    - Fixed styling `::selection` for a flex container (r262049)
    - Prevented `grid-template-rows` from serializing adjacent `<line-names>` (r262130)
    - Prevented putting out-of-flow boxes in anonymous flex items or grid items (r262061)

- [What's new for web developers in Safari and Webkit](https://developer.apple.com/videos/play/wwdc2020/10663/)

- [Improving Chromium's browser compatibility in 2020](https://blog.chromium.org/2020/06/improving-chromiums-browser.html)

- [Google confirms experiment to remove full address from URL bar in Chrome, details opt-out mechanism](https://www.androidpolice.com/2020/06/15/google-confirms-experiment-to-remove-full-address-from-url-bar-in-chrome-details-opt-out-mechanism/)

- [Flow browser passes the Acid tests](https://www.ekioh.com/acid.html)

## Specifications

- [Web Platform Contribution Guide](https://wpc.guide/)

- [CSS Inline Layout Module Level 3 Working Draft updated](https://www.w3.org/TR/css-inline-3/)
    + defines the CSS Inline Layout model, replacing and extending the model as defined in CSS2.1
    + provides for a flow of elements and text inside of a container to be wrapped into lines
    + describes the block-axis alignment and sizing of inline-level boxes and text
    + adds a special layout mode for drop caps and similar initial letter styling.

- [Media Queries Level 5](https://www.w3.org/TR/mediaqueries-5/)
    + allow authors to test and query values or features of the user agent or display device, independent of the document being rendered
    + used in the CSS `@media` rule to conditionally apply styles to a document, and in various other contexts and languages, such as HTML and JavaScript

- [CSS Containment Module Level 2 Working Draft updated](https://www.w3.org/TR/css-contain-2/)
    + describes the `contain` property, which indicates that the element’s subtree is independent of the rest of the page.
    + enables heavy optimizations by user agents when used well.

- [CSS Overflow Module Level 3 Working Draft updated](https://www.w3.org/TR/css-overflow-3/)
    + contains the features of CSS relating to scrollable overflow handling in visual media
    + This level is focused on completing a precise specification for the existing overflow features
    + also defines `overflow: clip` and the `overflow-clip-margin` property
    
- [Border rounding in CSS](https://crisal.io/words/2020/06/13/rounding-borders.html)

## Interesting links

- 📝 [Cool Little CSS Grid Tricks for Your Blog](https://css-tricks.com/cool-little-css-grid-tricks-for-your-blog/)
- 📝 [Optimizing keyboard navigation using tabindex and ARIA](https://www.sarasoueidan.com/blog/keyboard-friendlier-article-listings/)
- 📝 [The Surprising Things That CSS Can Animate](https://codersblock.com/blog/the-surprising-things-that-css-can-animate/)
- 📝 [Creative Background Patterns Using Gradients, CSS Shapes, and Even Emojis](https://css-tricks.com/creative-background-patterns-using-gradients-css-shapes-and-even-emojis/)
- 💡 [Sorted CSS Colors](https://enes.in/sorted-colors/)
- 📝 [Grid for layout, Flexbox for components](https://ishadeed.com/article/grid-layout-flexbox-components/)
- 📝 [Color Craft & Counterpoint: A Designer’s Life with Color Vision Deficiency](https://alistapart.com/article/a-designers-life-with-color-vision-deficiency/)
- 📝 [The beauty of progressive enhancement](https://www.matuzo.at/blog/beauty-of-progressive-enhancement/)
- 📝 [A short guide to reading a CSS specification](https://youtu.be/N2tvZ4P44jY?t=10042)
- 📝 [Irregular-shaped Links with Subgrid](https://css-irl.info/irregular-shaped-links-with-subgrid/)
- 📝 [Accessible to some](https://www.matuzo.at/blog/accessible-to-some/)
- 📝 [Getting CSS Translate values with JavaScript](https://zellwk.com/blog/css-translate-values-in-javascript/)


## Cool CodePens

- [Birthstone](https://codepen.io/87penginnouta/pen/ZEbvKRz)
- [CSS Grid: Newspaper Layout](https://codepen.io/oliviale/pen/BaoXOOP) 💙
- [3D First Person Art Gallery - No Javascript!](https://codepen.io/ivorjetski/pen/gOPOvdB)
- [CasioPT-1.css](https://codepen.io/fossheim/pen/VweaNYW)
- [Pure CSS halftone portrait from .jpg source](https://codepen.io/thebabydino/pen/LYGGwrm)
- [Two element typeface series*](https://codepen.io/chrisota/pen/KKVzZLM)
