var createSprite = require('../')
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
