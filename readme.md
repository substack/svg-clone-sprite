# svg-clone-sprite

clone elements from an svg sprite file into separate svg elements

This module is designed for the browser.

This way you can author a single svg file with all your sprites without a build
step or manual export process to turn them into standalone svg or png files.

# example

This example loads an svg sprite file and stamps out multiple copies of some
elements from their element IDs.

``` js
var createSprite = require('svg-clone-sprite')
var xhr = require('xhr')
xhr('/icons.svg', function (err, res, body) {
  var sprite = createSprite(body)
  document.body.appendChild(sprite.element)

  document.body.appendChild(sprite.get('#play'))
  document.body.appendChild(sprite.get('#play'))
  document.body.appendChild(sprite.get('#play'))

  document.body.appendChild(sprite.get('#pause'))
  document.body.appendChild(sprite.get('#pause'))

  document.body.appendChild(sprite.get('#stop'))
  document.body.appendChild(sprite.get('#stop'))
  document.body.appendChild(sprite.get('#stop'))
})
```

In inkscape you can set the id of an element with ctrl+shift+o. If there are
multiple items in a sprite, group them first (ctrl+g).

# api

``` js
```

## var sprite = createSprite(svg)

Create a new `sprite` instance from `svg`, a string of svg content or an svg
element.

## var spriteSvg = sprite.get(selector)

Create and return a new `<svg>` element `spriteSvg` containing a clone of the
element from the sprite sheet at a given query string `selector`.

The cloned element is offset by the bounding rect from the original sprite sheet
so that the cloned element's top left is at `(0,0)` and the svg width and height
are the same as the cloned element's width and height.

## sprite.element

This element must exist on the page before calling `sprite.get()`.

If you set `display: none` on this element, the bounding rect calculations won't
work. `visibility: hidden` with an absolute position at `top: 0px; left: 0px`
works. If you passed in a string of svg content to `createSprite()` these css
properties will already be set.

# license

BSD
