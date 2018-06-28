# HTML and CSS News for June 2018

- [HTML & CSS-related updates for developers in Firefox 61](https://developer.mozilla.org/en-US/Firefox/Releases/61)
    + the [Accessibility inspector](https://developer.mozilla.org/en-US/docs/Tools/Accessibility_inspector) has been implemented
    + CSS variables now autocomplete with color swatches, allowing you to see exactly what color value is stored in each variable (bug 1451211).
        + In addition, hovering over a CSS variable name brings up a tooltip showing what color value is stored in that variable (bug 1431949).
    + The main toolbox's toolbar has been redesigned. Highlights are better responsiveness for narrow and wide viewports with a new overflow dropdown, cleaned up meatball menu, and sortable tabs to let you move up your most used panels (bug 1226272).
    + [Parallel CSS Parsing](https://hacks.mozilla.org/2018/06/firefox-61-quantum-of-solstice/) means complex layouts render faster!
    + [Retained Display Lists](https://hacks.mozilla.org/2018/06/retained-display-lists/) means less time spent painting and improved perceived performance! 

- [HTML & CSS-related updates for developers in Chromium 66 and Opera 53](https://dev.opera.com/blog/opera-53/)
    + The `calc()` expression is now supported in media queries.
    + The `rgb()` and `rgba()` functions now allow floating point values.
    + The `grid-` prefix has been removed from the CSS gutter properties `grid-gap`, `grid-row-gap` and `grid-column-gap`, whose names now become just `gap`, `row-gap` and `column-gap`.
    + Elements with a `transform` property and with the `display` property set to `table-row`, `table-row-group`, `table-header-group`, `table-footer-group`, `table-cell` or `table-caption`, are now containing blocks for fixed position elements.
    + The `object-position` and `perspective-origin` properties no longer accept three-part values such as `top right 20%`. Valid position values must have 1, 2 or 4 parts. This also applies to basic shapes and gradients.

- [CSS Basic User Interface Module Level 3 (CSS3 UI) reaches Recommendation](https://www.w3.org/TR/css-ui-3/)
    + describes CSS properties which enable authors to style user interface related properties and values.
    + uses various properties and values to style basic user interface elements in a document: `box-sizing`, `outline` (and related longhand properties), `resize`, `text-overflow`, `cursor`, and `caret-color`.

- [CSS Color Module Level 3 now a W3C Recommendation](https://www.w3.org/TR/css-color-3/)
    + describes CSS properties which allow authors to specify the foreground colour and opacity of an element. This module also describes in detail the CSS `<color>` value type.
    + HSL colour values, `currentColor` keyword (more cool stuff in Level 4)

