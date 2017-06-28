# HTML and CSS News for June 2017

- [HTML & CSS-related updates for developers in Firefox 54](https://developer.mozilla.org/en-US/Firefox/Releases/54)
    + `clip-path` now supports basic shapes (bug 1247229)
    + Can apply foreground and background colors to `<option>` elements again, using the color and background-color attributes. 
    + Behaviour for alignment now reflects updated specification language in CSS Flexbox and CSS alignment
    + `<input>` elements of types checkbox and radio with -moz-appearance: none; set on them are now non-replaced elements

- [HTML & CSS-related updates for developers in Opera 46](https://dev.opera.com/blog/opera-46/)
    + Opera now supports animated PNG, or APNG for short
    + Works similarly to GIF but APNG is smaller and supports both 24-bit images and 8-bit transparency
    + SVG favicons should now work in Opera
    + CSS stylesheets can now specify their own referrer policy via the HTTP header
    + Support for hover: on-demand and any-hover: on-demand media queries have been removed
    + The `<dialog>` element has changed from display: inline to block by default to better align with the spec

- [Safari Technology Preview 33 released](https://webkit.org/blog/7751/safari-technology-preview-33/)
    + Added support for orthogonally positioned grid items (r217486)
    + Fixed the behavior of positioned items without specific dimensions (r217411)
    + Fixed the logical margin applied in the tracks sizing algorithm of auto tracks (r217709)
    + Fixed margin applied when stretching an orthogonal item in a fixed size track (r217705)
    + Aligned <col span> and <colgroup span> limits with the latest HTML specification (r217907)
    + Fixed null content-type and content-length when fetching Blob URLs with XHR (r217901)
    + Fixed getComputedStyle() to return pixel values for left, right, top, and bottom, matching the specifications (r217522)

- [CSS Overflow Module Level 4 Working Draft published](https://www.w3.org/TR/2017/WD-css-logical-1-20170518/)
    + Relates to new mechanisms of overflow handling in visual media (e.g., screen or paper)
    + Describes features that allow the overflow from a fixed size container to be handled by pagination
    + Describes features, applying to all visual media, that allow the contents of an element to be spread across multiple fragments, allowing the contents to flow across multiple regions or to have different styles for different fragments
