# HTML and CSS News for July 2018

- [HTML & CSS-related updates for developers in Chrome 68](https://developers.google.com/web/updates/2018/07/nic68)
    + Since Chrome 1, the CSS cursor values for `grab` and `grabbing` have been prefixed, we now support the standard, un-prefixed values. Finally.
    + The HTTP cache is now ignored when requesting updates to a service worker, bringing Chrome inline with the spec and other browsers.

- [HTML & CSS-related updates for developers in Chromium 67 and Opera 54](https://dev.opera.com/blog/opera-54/)
    + Formatting contexts will now behave exactly like floats do when they are positioned. In other words, they no longer consider the `shape-outside` property of the float when positioning is determined, and are instead positioned according to their margin box. The new behaviour can be seen in [this example](https://jsbin.com/ciwagicedo/edit?html,output) by changing the height of the flex class. This also affects how new formatting contexts are sized and positioned.
    + Two Webkit-prefixed CSS properties were been removed in this release - `-webkit-box-flex-group` and `-webkit-box-lines`. Percent (%) values are no longer accepted by the `-webkit-line-clamp` property.

- [CSS Text Decoration Module Level 3 Candidate Recommendation updated](https://www.w3.org/TR/css-text-decor-3/)
    + covers text decoration, i.e. decorating the glyphs of the text once typeset according to font and typographic rules
    + Level 3 adds the ability to change the colour, style, position, and continuity of these decorations, and also introduces emphasis marks (traditionally used in East Asian typography), and shadows (which were proposed then deferred from Level 2).
