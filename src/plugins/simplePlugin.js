import ScrollHandlerMixin from '../mixins/scrollHandler'

export default {
  install:(app) =>  {
    app.mixin(ScrollHandlerMixin),

    app.prototype.$log = function () {
      console.log('simplePlugin works')
    }
  }
}
