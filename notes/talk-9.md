# HTML and CSS News for August 2016

- [On-going discussions on the color function syntax](http://www.xanthir.com/b4iW0)
    - rgb() function (and others) can now use the syntax `rgb(0 255 0 / 50%)`for half-transparent green
    - makes CSS functions look slightly more like functions in a traditional programming language
    - this is a new variant syntax, not a replacement

- [Chris Coyier wrote a book called Practical SVG!](http://alistapart.com/article/practical-svg)

- [CSS-related updates for developers in Opera 39](https://dev.opera.com/blog/opera-39/)
    - The CSS `contain` property now supported
    - The CSS properties `font-variant-caps` and `font-variant-numeric` are now supported.
    - `-webkit-appearance: none;` for the `meter` element now supported
    - New CSS Flexbox behavior for absolutely-positioned children


- [CSS-related updates for developers in Firefox 48](https://developer.mozilla.org/en-US/Firefox/Releases/48)
    - Support for the experimental `[color-adjust](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-print-color-adjust)`property, allowing page to opt-in for printing images and background, has been added
    - The calc() has been improved to be closer to the specification:
        +  Added support for nested CSS calc()
        +  calc() is now supported on the line-height property
    - The text value of `background-clip` is now available in all type of Firefox
    - The absolute value of `position` property is on the top layer element

- [CSS mix-blend-mode can reveal browsing history](https://lcamtuf.blogspot.sg/2016/08/css-mix-blend-mode-is-bad-for-keeping.html)
    - non-linear blending operators permit us to implement arbitrary Boolean algebra

- [Have you heard of `font-display`?](https://css-tricks.com/font-display-masses/)
    - available as an experimental feature
    - is used inside of a `@font-face` declaration for your custom fonts
    - takes the following values: auto | swap | fallback | optional
