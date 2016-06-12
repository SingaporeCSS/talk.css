# HTML and CSS News for June 2016

- [Aural UI of the Elements of HTML](http://thepaciellogroup.github.io/AT-browser-tests/)
    - Comprehensive reference of how HTML elements are supported by screen readers

- [Firefox 47 released](https://developer.mozilla.org/en-US/Firefox/Releases/47)
    - Support for the `::backdrop` pseudo-element has been added ([bug 1064843](https://bugzilla.mozilla.org/show_bug.cgi?id=1064843)).
    - The case-insensitive modifier i (like in [foo=bar i]) for attribute selectors has been implemented ([bug 888190](https://bugzilla.mozilla.org/show_bug.cgi?id=888190)).
    - An experimental implementation of CSS Mask Image properties landed. For the moment, this will only be available on Nightly versions of Firefox. Shorthand version of `mask`, as well as `mask-repeat`, `mask-position`, `mask-size` are now available ([bug 686281](https://bugzilla.mozilla.org/show_bug.cgi?id=686281)).
    - The `clip-path` property now experimentally supports `polygon()`, `ellipse()`, and `circle()`` on HTML elements (does not support `inset()`` and `path()``), behind the pref `layout.css.clip-path-shapes.enabled` that defaults to false ([bug 1075457](https://bugzilla.mozilla.org/show_bug.cgi?id=1075457)). Interpolation (and therefore animation) of these values is not yet supported.
    - The still experimental grid implementation has been updated:
        - `align-content`: `normal` behaves now as `stretch` for grid containers ([bug 1237754](https://bugzilla.mozilla.org/show_bug.cgi?id=1237754)).
        - The order of column/row values for `grid`, `grid-template`, and `grid-gap` properties has been swapped ([bug 1251999](https://bugzilla.mozilla.org/show_bug.cgi?id=1251999)).
    - The `display-mode` media feature is now supported ([bug 1104916](https://bugzilla.mozilla.org/show_bug.cgi?id=1104916)).
    - The value true of `text-align` and `text-align-last` has been renamed to unsafe ([bug 1250342](https://bugzilla.mozilla.org/show_bug.cgi?id=1250342)).

- [Opera 38 has been released](https://dev.opera.com/blog/opera-38/)
    - CSS border-image now follows the spec
        - Chrome and Opera now require a border style in order to paint border-images, matching the spec. If you’re affected by this change, add e.g. border-style: solid where border-image is used.
    - Percentage sizes of flex item children
        - According to the spec, certain flex items have definite sizes. If a child element of such a flex item uses percentage-based sizes, these are now handled correctly. A visual demo is available.
    - The non-standard results attribute for `<input type=search>` is now deprecated. In Chrome and Opera, it’s a purely cosmetic feature that adds a magnifier icon to the input field. In desktop Safari, it controls how many submitted queries are shown in a popup opened by clicking the magnifier icon.

 
