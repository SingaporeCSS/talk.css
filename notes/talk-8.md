# HTML and CSS News for July 2016

- [Proposal for spring() timing function in CSS and Web Animations](https://lists.w3.org/Archives/Public/www-style/2016Jun/0181.html)
    - [Paul Lewis](https://twitter.com/aerotwist) and [Jake Archibald](https://twitter.com/jaffathecake) talk about this in the [latest episode of the HTTP 203 podcast](https://developers.google.com/web/shows/http203/podcast/http-203-springy-css-storage-and-bisecting?hl=en)
    - Here's [a cool demo](https://webkit.org/demos/spring/) to play with

- [First public working draft of CSS Color Module Level 4 published](https://www.w3.org/TR/css-color-4/)
    - rgb() and rgba() functions now accept `<number>` rather than `<integer>`.
    - hsl() and hsla() functions now accept `<angle>` as well as `<number>` for hues.
    - All uses of `<alpha-value>` now accept `<percentage>` as well as `<number>`.
    - 4 and 8-digit hex colors have been added, to specify transparency.
    - Several brand new features have been added:
        - `gray()` function, for specifying grays compactly. (And maybe allowing specification via luminance.)
        - `hwb()` function, for specifying colors in the HWB notation.
        - `color-mod()` function, for manipulating colors.
        - `lab()` and `lch` functions, for device-independent color
        - `color()` function and `profile` at-rule, for profiled device-dependent color.
        - `device-cmyk()` function, for specifying uncalibrated colors in an output-device-specific CMYK colorspace.
        - Addition of named color `rebeccapurple`.
    - *Here's the [poignant backstory of rebeccapurple](http://www.zeldman.com/2014/06/10/the-color-purple/)*

- [Working draft of CSS Media Queries Level 4 updated](https://drafts.csswg.org/mediaqueries-4/)
    - Large editorial rewrite and reorgization of the document.
    - Boolean-context media features are now additionally false if they would be true for the keyword `none`.
    - Media features with numeric values can now be written in a range context.
    - The `scripting`, `pointer`, `hover`, `update`, `overflow-block`, and `overflow-inline` media features were added.
    - `or`, `and`, `only` and `not` are disallowed from being recognized as media types, even invalid ones. (They’ll trigger a syntax error instead.)
    - White space is required around the keyword “and” as well as after “not” and “only”.
    - All media types except for `screen`, `print`, `speech`, and `all` are deprecated.
    - Deprecated `device-width`, `device-height`, `device-aspect-ratio`

- [Working Draft of CSS Generated and Replaced Content Level 3 published](https://drafts.csswg.org/css-content/)
    - This module specifies the generated content features (content property and related functionality) in CSS.
    - This is the first draft of a complete rewrite of this module, and is very rough. Large chunks (i.e. most) of the 2003 draft have been deleted, and major new functionality over CSS2.1 consists mainly of imports from the GCPM module. New features include:
        - leaders
        - cross-referenced counters
        - named strings
        - bookmark control
        - plus a handy new syntax for alternate text: `content: url(sparkle.png) / "New!";`



