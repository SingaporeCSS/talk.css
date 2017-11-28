# HTML and CSS News for November 2017

- [HTML & CSS-related updates for developers in Firefox 57](https://developer.mozilla.org/en-US/Firefox/Releases/57)
    + The `date` and `time` `<input>` types are now enabled in all builds (bug 1399036).
    + The `minimal-ui` and `standalone` values of the `display-mode` media query are now supported (bug 1369815).
    + The `grid-row-gap` and `grid-column-gap` properties are no longer reset by the `grid` shorthand (bug 1387410).
    + The `layout.css.clip-path-shapes.enabled` preference has been removed (bug 1399767), and `<basic-shape>` support can no longer be disabled.
    + Truckloads of fixes and improvements because of [Quantum](https://developer.mozilla.org/en-US/Firefox/Releases/57#Quantum_CSS_notes)

- [HTML & CSS-related updates for developers in Opera 49](https://dev.opera.com/blog/opera-49/)
    + OpenType variable fonts now supported. [OpenType Font Variations](https://medium.com/@tiro/https-medium-com-tiro-introducing-opentype-variable-fonts-12ba6cd2369) allows fonts of different weights/variants to be combined into a single file, adjusted using the `font-variation-settings` property
    + The CSS color parser now supports 8- and 4-digit hex colors of the format `#RRGGBBAA` and `#RGBA`.
    + DOM interfaces are now supported for `<data>` and `<time>`. This gives web developers a standardized way to store machine-readable data.
    + The `visibility:collapse` CSS declaration now hides table rows without losing track of the required column width. [Explanation here](https://www.quirksmode.org/css/visibility.html)

- [CSS Properties and Values API Level 1 Working Draft updated](https://www.w3.org/TR/css-properties-values-api-1/)
    + Defines an API for registering new CSS properties
    + Properties registered using this API are provided with a parse syntax that defines a type, inheritance behaviour, and an initial value
    + Extends [css-variables](https://www.w3.org/TR/css-variables-1/), allowing the registration of properties that have a value type, an initial value, and a defined inheritance behaviour
