# HTML and CSS News for April 2020

## Browser updates

- [HTML & CSS-related updates for developers in Firefox 74](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/74)
    + `text-underline-position` is now enabled by default (bug 1606997)
    + The `text-underline-offset` and `text-decoration-thickness` properties now accept percentage values (bug 1607534)
    + The `auto` value of the `outline-style` property has been enabled by default (bug 1031664)
    + Firefox 74 now supports the `languagechange_event` event and its companion event handler property, `onlanguagechange`, which is triggered when the user changes their preferred language (bug 1154779)

- [Release Notes for Safari Technology Preview 102](https://webkit.org/blog/10067/release-notes-for-safari-technology-preview-102/)
    - Ensured CSS Transition and CSS Animation events are queued, sorted and dispatched by their timeline (r256619)
    - Ensured animations that lose their effect don’t schedule an animation update (r256623)
    - Fixed repeated animations on pseudo elements failing to run after a while (r257138)
    - Fixed style changes due to Web Animations to not trigger CSS Transitions (r256627)
    - Improved performance of track sizing algorithm for spanning items (r256826)


- [Wide Gamut Color in CSS with Display-P3](https://webkit.org/blog/10042/wide-gamut-color-in-css-with-display-p3/)
    - Display-P3 color space includes vivid colors that aren’t available in sRGB.
    - Display-P3 is a superset of sRGB. It’s around 35% larger.
    - CSS Color Module Level 4 introduced syntax to use Display-P3 color space on the web
        ```
        color: color(display-p3 1 0.5 0)
        ```

- [Upcoming Chrome and Chrome OS releases](https://chromereleases.googleblog.com/2020/03/upcoming-chrome-and-chrome-os-releases.html)
    - Due to adjusted work schedules at this time, we are pausing upcoming Chrome and Chrome OS releases.
    - “The situation is certainly not ideal, and it does mean you won’t get any new Chrome features for a while–at least until things calm down enough for the workforce to start to return to the office. This could take months, or longer.” ([Forbes](https://www.forbes.com/sites/kateoflahertyuk/2020/03/19/google-just-confirmed-a-powerful-chrome-covid-19-security-move-that-will-impact-all-users/#52bea882c930))
    - ([More Forbes](https://www.forbes.com/sites/gordonkelly/2020/03/25/google-chrome-82-upgrade-abandoned-update-chrome-browser/#1bae4d516449)) M82 is the codename for Chrome 82 and it would have been the backbone for the next big upgrade of Chrome on Windows, Mac, Android and Chrome OS. Kersey states that every element of the release will be abandoned with plans to skip to Chrome 83 (M83) at some point in the future: 
        - We will abandon current M82 branches, remove infra support, and stop testing/merges to the branches
        - We will not push any new M82 releases to Dev, and we will stop stabilization for Beta.
        - We will move Dev channel to M83 asap
        - We will keep Beta channel on M81 until M83 is ready to be promoted

## Specifications

- [CSS Conditional Rules Module Level 4 Working Draft released](https://www.w3.org/TR/css-conditional-4/)
    - allows elements styled with CSS to be transformed in two-dimensional or three-dimensional space
    - adds new tranform functions and properties for three-dimensional transforms, and convenience functions for simple transforms
    - is a delta spec that extends [css-transforms-1](https://www.w3.org/TR/css-transforms-1/) to allow authors to transform elements in three-dimensional space
    - new transform functions for the transform property allow three-dimensional transforms, and additional properties make working with three-dimensional transforms easier, and allow the author to control how nested three-dimensional transformed elements interact

- [CSS Transforms Module Level 2 Working Draft released](https://www.w3.org/TR/css-transforms-2/)
    - contains the features of CSS for conditional processing of parts of style sheets, conditioned on capabilities of the processor or the document the style sheet is being applied to
    - includes and extends the functionality of CSS level 2, which builds on CSS level 1
    - allows nesting of certain at-rules inside `@media`, and the addition of the `@supports` rule for conditional processing

## Interesting links

- [Improving perceived performance with the CSS `font-display` property](https://nooshu.github.io/blog/2020/02/23/improving-perceived-performance-with-the-css-font-display-property/)
- [Currying in CSS?](https://www.trysmudford.com/blog/currying-in-css/)
- [Why 543 KB keep me up at night](https://www.matuzo.at/blog/why-543kb-keep-me-up-at-night/)
- [Animating CSS Width and Height Without the Squish Effect](https://pqina.nl/blog/animating-width-and-height-without-the-squish-effect/)
- [4 Ways to Animate the Color of a Text Link on Hover](https://css-tricks.com/4-ways-to-animate-the-color-of-a-text-link-on-hover/)
- [CSS X](https://www.w3.org/blog/2020/03/css-x/)
- [Thoughts on how we write CSS](https://notlaura.com/twitter-thread-as-blog-post-thoughts-on-how-we-write-css/)
- [A Practical Overview Of CSS Houdini](https://www.smashingmagazine.com/2020/03/practical-overview-css-houdini/)
- [How to create an accordion hover effect with box-shadows](https://fossheim.io/writing/posts/css-box-shadow-animation/)

## Cool CodePens

- [Pure CSS Landscape - An Evening in Southwold](https://codepen.io/ivorjetski/pen/xxGYWQG)
- [Stacked rainbow cards](https://codepen.io/fossheim/pen/LYVOBRZ)
- [CSS Flipping Text 🍳](https://codepen.io/jh3y/pen/VwLQZOY)
- [Hello Spring - CSS colouring page](https://codepen.io/Lubna/pen/dyoqzwP)
- [Cute Cacti - CSS colouring pages](https://codepen.io/Lubna/pen/RwPYjGB)
- [Paper Chase](https://codepen.io/cobra_winfrey/pen/gOpzozo)
- [Conic gradients + CSS masks (no FF)](https://codepen.io/yoksel/pen/xxGJOPj)
- [Fit Text with CSS Variables](https://codepen.io/shshaw/pen/LYVBVve)
- [Full Moon](https://codepen.io/negarjf/pen/zYGjLrW)