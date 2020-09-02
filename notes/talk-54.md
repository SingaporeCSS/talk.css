# HTML and CSS News for September 2020

## Browser updates

- [HTML & CSS-related updates for developers in Firefox 80](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/80)
    - The standard, unprefixed `appearance` property is now supported; existing `-moz-appearance` and `-webkit-appearance` will be the aliases of the unprefixed property (bug 1620467)
    
- [Safari Technology Preview 112 released](https://developer.apple.com/safari/technology-preview/release-notes/)
    - Fixed `align-content` in grid containers with small content area
    - Fixed the CSS `clip-path` being applied to the view-box coordinates
    - Fixed scroll snap when using RTL layout

- [HTML & CSS-related updates for developers in Chrome 85](https://developers.google.com/web/updates/2020/08/nic85)
    - improve rendering performance with `content-visibility: auto`
        - tells the browser that it can skip the rendering work for that element until it scrolls into the viewport
    - can now define and set CSS properties directly in your CSS

- [What's new in Chrome DevTools 86](https://developers.google.com/web/updates/2020/08/devtools)
    - DevTools now displays media players information in the Media panel
    - Capture node screenshots via Elements panel context menu
    - Emulate missing local fonts
    - Emulate prefers-reduced-data
    - Accessible color suggestion in the Styles pane
    - Auto-complete custom fonts in the Styles pane

## Specifications

- [CSS Cascading and Inheritance Level 3 CR updated](https://www.w3.org/TR/css-cascade-3/), [Level 4 WD updated](https://www.w3.org/TR/css-cascade-4/)
    + describes how to collate style rules and assign values to all properties on all elements
    + the cascading and defaulting process takes a set of declarations as input, and outputs a specified value for each property on each element
    + the rules for finding the specified value for all properties on all elements in the document are described in this specification
    
- [CSS Grid Layout Module Level 1 CR updated](https://www.w3.org/TR/css-grid-1/), [Level 2 CR published](https://www.w3.org/TR/css-grid-2/)
    + defines a two-dimensional grid-based layout system, optimized for user interface design
    + the children of a grid container can be positioned into arbitrary slots in a predefined flexible or fixed-size layout grid
    + Level 2 expands Grid by adding “subgrid” capabilities for nested grids to participate in the sizing of their parent grids

- [CSS Inline Layout Module Level 3 WD updated](https://www.w3.org/TR/css-inline-3/)
    + describes box model for this inline layout model
    + defines the block-axis alignment and sizing of inline-level content, extending the model in CSS2
    + adds a special layout mode for drop-caps

- [content-visibility: the new CSS property that boosts your rendering performance](https://web.dev/content-visibility/)

- [Leading-Trim: The Future of Digital Typesetting](https://medium.com/microsoft-design/leading-trim-the-future-of-digital-typesetting-d082d84b202)

- [Why CSS ::before doesn’t work on inputs and images](https://webplatform.news/issues/2020-08-26)

## Interesting links

- [Rethinking Accessible Drop Caps](https://justingagne.design/words/rethinking-accessible-drop-caps/)
- [Create an animated 3D book in CSS, step by step](https://scastiel.dev/posts/2020-07-23-animated-3d-book-css/)
- [Computed Values: More Than Meets the Eye](https://css-tricks.com/computed-values-more-than-meets-the-eye/)
- [Designing Adaptive Components, Beyond Responsive Breakpoints](https://stephaniewalter.design/blog/designing-adaptive-components-beyond-responsive-breakpoints/)
- [Some CSS comics](https://jvns.ca/blog/2020/07/25/some-comics-about-css/)
- [What Happens When Border Radii Overlap?](https://css-tricks.com/what-happens-when-border-radii-overlap/)
- [The Thing With Leading in CSS](https://matthiasott.com/notes/the-thing-with-leading-in-css)
- [The difference between aria-label and aria-labelledby](https://tink.uk/the-difference-between-aria-label-and-aria-labelledby/)
- [CSS 3D Adventure](https://pantel.is/projects/css3d/)
- [5 most annoying website features I face as a blind person every single day](https://bighack.org/5-most-annoying-website-features-i-face-as-a-blind-screen-reader-user-accessibility/)
- [line-clamp CSS guide](https://mgearon.com/css/line-clamp-css-guide/)

## Cool CodePens

- [Radios Under the Hood](https://codepen.io/jkantner/pen/RwaWZyK)
- [CSS Mastermind](https://codepen.io/alvaromontoro/pen/YzwbgwE)
- [Details element for help text](https://codepen.io/NielsVoogt/pen/PoZqzGx)
- [CSS Scrolling Phone](https://codepen.io/Octavector/pen/jOqExNp)
- [London Bus (Pure CSS)](https://codepen.io/ykadosh/pen/YzqyYGy)
- [Only CSS: Summer Dream](https://codepen.io/YusukeNakaya/pen/mdVZLmY)
- [Create blurred fills for images with aspect ratio containers in CSS](https://codepen.io/MartijnCuppens/pen/NWNdOBR)
- [CSS ART - Vintage VW Bug -](https://codepen.io/shunyadezain/pen/MWypjVW)
- [CSS Shapes Layout Experiment](https://codepen.io/KristopherVanSant/pen/xxVqLLO)
