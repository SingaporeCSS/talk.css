# HTML and CSS News for May 2018

- [HTML & CSS-related updates for developers in Firefox 60](https://developer.mozilla.org/en-US/Firefox/Releases/60)
    + the keyboard shortcuts for precise value increments (increase/decrease by 0.1) have changed from Alt + Up/Down to Ctrl + Up/Down on Linux and Windows
    + CSS variable names will now auto-complete (bug 1422635). If you enter var( into a property value and then type a dash (-), any variables you have declared in your CSS will then appear in an autocomplete list
    + The align-content, align-items, align-self, justify-content, and place-content property values have been updated as per the latest CSS Box Alignment Module Level 3 spec (bug 1430817).
    + The paint-order property has been implemented (bug 1426146).
        * lets you control the order in which the fill and stroke (and painting markers) of text content and shapes are drawn, SVG-related

- [CSS Grid specification status update](https://lists.w3.org/Archives/Public/www-style/2018May/0009.html)
    + all issues against Grid Level 2 have been triaged, with the more complicated feature requests deferred to Level 3
    + Sub-grid related changes pending resolution of a number of issues, full list of Grid Level 2 issues can be [viewed on GitHub](https://github.com/w3c/csswg-drafts/issues?q=is%3Aopen+is%3Aissue+label%3Acss-grid-2)
    + Full set of Grid Level 1 issues can be [viewed on GitHub as well](https://github.com/w3c/csswg-drafts/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3Acss-grid-1)

- [CSS Containment Module Level 1 Candidate Recommendation updated](https://www.w3.org/TR/css-contain-1/)
    + describes the contain property, which indicates that the element’s subtree is independent of the rest of the page
    + enables heavy optimizations by user agents when used well
    + allows an author to indicate that an element and its contents are, as much as possible, independent of the rest of the document tree
    + limits how widely a given change can affect a document

- [CSS Writing Modes Level 3 Candidate Recommendation updated](https://www.w3.org/TR/css-writing-modes-3/)
    + defines CSS support for various international writing modes, such as left-to-right (e.g. Latin or Indic), right-to-left (e.g. Hebrew or Arabic), bidirectional (e.g. mixed Latin and Arabic) and vertical (e.g. Asian scripts).

- [CSS Writing Modes Level 4 Candidate Recommendation published](https://www.w3.org/TR/css-writing-modes-3/)
    + Re-introduced sideways-lr and sideways-rl values of writing-mode
    + Re-introduced the digits value of text-combine-upright.
    + Re-introduced automatic multi-column behavior of orthogonal flows.
    + Clarified the conditions for bidi reordering-induced fragmentation. (Issue 1509)
