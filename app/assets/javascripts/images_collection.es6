var $ = require('jquery')
var Backbone = require('backbone')
var _ = require('underscore')
require('backbone-relational')
require('backbone-relational-jsonapi')
Backbone.$ = $
const { View, RelationalModel, Collection, Router, LocalStorage, modelFactory } = Backbone

class Image extends RelationalModel {
  defaults() {
    type: 'images'
  }

  constructor(options) {
    console.log('new model')
    super(options)
  }
}

Backbone.modelFactory.registerModel(Image)

class ImagesCollection extends Collection {
  constructor(options) {
    super(options)
    this.model = Image
    this.url = '/images'
  }
}

module.exports = ImagesCollection
