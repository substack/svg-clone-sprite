module.exports = function (sprite) {
  var root = null
  var bboxes = {}
  if (typeof sprite === 'string') {
    var div = document.createElement('div')
    div.innerHTML = sprite
    var root = div.children[0]
    root.style.position = 'fixed'
    root.style.top = '0px'
    root.style.left = '0px'
    root.style.visibility = 'hidden'
  } else if (sprite && typeof sprite.querySelector === 'function') {
    root = sprite
  }
  return {
    element: root,
    get: function (selector) {
      var elem = root.querySelector(selector)
      var copy = elem.cloneNode(true)
      var svg = document.createElementNS('http://www.w3.org/2000/svg','svg')
      var g = document.createElementNS('http://www.w3.org/2000/svg','g')
      var bbox = bboxes[selector] || elem.getBoundingClientRect()
      bboxes[selector] = bbox
      svg.setAttribute('width', bbox.width)
      svg.setAttribute('height', bbox.height)
      g.setAttribute('transform','translate('+(-bbox.left)+','+(-bbox.top)+')')
      svg.appendChild(g)
      g.appendChild(copy)
      return svg
    }
  }
}
