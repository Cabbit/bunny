var $ = require('jquery')
var Backbone = require('backbone')
var _ = require('underscore')
require('backbone-relational')
require('backbone-relational-jsonapi')
Backbone.$ = $
const { View, RelationalModel, Collection, Router, LocalStorage, modelFactory } = Backbone

class Image extends RelationalModel {
  get name() {
    return this.get('name')
  }

  set name(newName) {
    if(newName){
      this.set('name', newName)
    }
  }

  defaults() {
    type: 'images'
  }

  constructor(options) {
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
