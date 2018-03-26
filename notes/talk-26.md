# HTML and CSS News for March 2018

- [HTML & CSS-related updates for developers in Firefox 59](https://developer.mozilla.org/en-US/Firefox/Releases/59)
    - The Rulers tool now includes a readout showing the current dimensions of the viewport (bug 1402633).
    - In Responsive Design Mode, you can now set the screen dimensions using the cursor keys (bug 1421663). See the [Setting screen size](https://developer.mozilla.org/en-US/docs/Tools/Responsive_Design_Mode#Setting_screen_size) section for more details.
    - The `<textarea>` element's `autocomplete` attribute has been implemented. This lets you enable or disable form auto-fill for the element.
    - The `overscroll-behavior` property and its associated longhand properties — `overscroll-behavior-x` and `overscroll-behavior-y` — have been implemented (bug 951793), and it has been enabled by default on all releases (bug 1428879).
    - The behavior of "unusual elements" (elements that aren’t rendered purely by CSS box concepts such as replaced elements) when given a `display` value of `contents` has been updated as per spec (bug 1427292).
    - `position: sticky` is now supported on appropriate HTML table parts (e.g. `<th>` elements) (bug 975644).
    - `calc()` is now supported in `<color>` values — `rgb()`, `rgba()`, `hsl()`, and `hsla()` (bug 984021).
    - `calc()` in media query values is now supported bug 1396057.
    - The `@document` at-rule has been limited to use only in user and UA sheets (bug 1035091).
    - Implement the `font-optical-sizing` property (bug 1435692).

- [HTML & CSS-related updates for developers in Chromium 65 and Opera 52](https://dev.opera.com/blog/opera-52/)
    + The `:any-link` pseudo selector can be used to style both visited and non-visited links at the same time.
    + For colours, the `rgb` and `hsl` functions now take an optional fourth alpha value, making them identical to `rgba` and `hsla`.
    - `display: contents` allows an element to wrap other elements without creating a box for itself.

- [Safari Technology Preview 52 released](https://webkit.org/blog/8165/release-notes-for-safari-technology-preview-52/)
    + Added new CSS `env()` constants for use with fullscreen (r229475)
    + Fixed `::selection` CSS `stroke-color` and `stroke-width` to be applied to selected text in text fields (r229147)

- [Intrinsic & Extrinsic Sizing Level 3 Working Draft updated](https://www.w3.org/TR/selectors-4/)
    + CSS layout has several different concepts of automatic sizing that are used in various layout calculations
    + defines some more precise terminology to help connect the layout behaviours of this spec to the calculations used in other modules
    + defines some new keywords for the `width` and `height` properties to allow authors to assign elements the dimensions resulting from these size calculations
    + extends the `width`, `height`, `min-width`, `min-height`, `max-width`, `max-height`, and `column-width` features defined in [CSS2 chapter 10](https://www.w3.org/TR/CSS2/) and in [CSS3COL](https://www.w3.org/TR/css-multicol-1/)

- [Text Decoration Module Level 4 Working Draft published](https://www.w3.org/TR/css-text-decor-4/)
    + contains the features of CSS relating to text decoration, such as underlines, text shadows, and emphasis marks.

- [Color Module Level 3 Proposed Recommendation published](https://www.w3.org/TR/css-color-3/)
    + describes colour values and properties for foreground colour and group opacity
    + includes properties and values from CSS level 2 and new values.

- [Fonts Module Level 3 Candidate Recommendation updated](https://www.w3.org/TR/css-fonts-3/)
    + describes how font properties are specified and how font resources are loaded dynamically
    + a consolidation of content previously divided into CSS3 Fonts and CSS3 Web Fonts modules
    + the description of font load events was moved into the [CSS Font Loading module](https://www.w3.org/TR/css-font-loading-3/).
