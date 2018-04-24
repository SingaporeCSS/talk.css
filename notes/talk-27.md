# HTML and CSS News for April 2018

- [New WebKit Features in Safari 11.1](https://webkit.org/blog/8216/new-webkit-features-in-safari-11-1/)
    + Video as Image Assets
        * WebKit in Safari now supports loading H.264 encoded MP4 video with an HTML tag.
        * Beyond the performance gains, this change also allows web content authors to use videos as a CSS background-image.
    + `font-display`
        * WebKit’s new default behaviour will show invisible text for up to 3 seconds before switching to an installed font until the desired font finishes downloading.
        * Use `swap` to immediately show an installed font until the specified web font is downloaded.
        * Use `fallback` to show an installed font for up to 3 seconds and if the desired font doesn’t load in that time, it will never be shown.
        * Use `optional` to use the font if it is available in the browser’s cache. If it isn’t there, it skips using it at all.
    + HTML Image Decoding
        * The new `HTMLImageElement.decode()` function asynchronously starts decoding an image and returns a Promise that resolves when the decoded image is available.
        * Developers can also declaratively indicate an image should load asynchronously using the decoding attribute on an `<img>` element.

- [HTML & CSS-related updates for developers in Chrome 66](https://developers.google.com/web/updates/2018/04/nic66)
    + CSS Typed Object Model
        * CSS values are exposed as typed JavaScript objects
        * Instead of using `element.style`, you access styles through the `.attributeStyleMap` property or `.styleMap`. They return a map-like object that makes it easy to read or update.
    + `TextArea` and `Select` now support the `autocomplete` attribute.
    + Setting `autocapitalize` on a form element will apply to any child form fields, improving compatibility with Safari’s implementation of `autocapitalize`.

- [What's new in Chrome DevTools 67](https://developers.google.com/web/updates/2018/04/devtools)
    + CSS variable value previews in the Styles pane
        * When the value of a CSS colour property, such as `background-color` or `color`, is set to a CSS variable, DevTools now shows a preview of that colour.

- [CSS Fonts Level 4 Working Draft updated](https://drafts.csswg.org/css-fonts-4/)
    + describes the basic controls CSS provides for selecting and using fonts within documents
    + Level 4 are additions or modifications to the properties and rules defined in CSS3 Fonts, like variable fonts and colour fonts

- [CSS Box Alignment Module Level 3 Working Draft updated](https://www.w3.org/TR/css-align-3/)
    + contains the features of CSS relating to the alignment of boxes within their containers in the various CSS box layout models: block layout, table layout, flex layout, and grid layout.

- [CSS Display Module Level 3 Working Draft updated](https://www.w3.org/TR/css-display-3/)
    + describes how the CSS formatting box tree is generated from the document element tree and defines the `display` property that controls it.
