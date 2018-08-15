const io = {}
io.createObserver = (options, vnode) => {
  const observer = new IntersectionObserver((entries) => {
    const entry = entries[0]
    if (entry.isIntersecting) {
      options.el.classList.add('is-visible')
      if (options.callback) {
        options.callback()
      }
      if (options.once) {
        observer.disconnect()
      }
    } else {
      options.el.classList.remove('is-visible')
    }
  }, options)
  vnode.context.$nextTick(() => {
    observer.observe(options.el)
  })
  return {
    observer,
    options,
    vnode
  }
}
io.createOptions = (el, value = {}) => {
  const options = {}
  options.el = el
  value.root ? options.root = root : null
  value.rootMargin ? options.rootMargin = value.rootMargin : null
  value.callback ? options.callback = value.callback : null
  value.threshold ? options.threshold = value.threshold : options.threshold = .2
  value.once ? options.once = value.once : options.once = true
  return options
}

io.install = (Vue) => {
  Vue.directive('io', {
    bind(el, { value }, vnode) {
      const options = io.createOptions(el, value)
      const state = io.createObserver(options, vnode)
      el.IO_STATE = state
    },
    update (el, { value }, vnode) {
      const state = el.IO_STATE
      if (state) {
        const options = io.createOptions(el, value)
        state.createObserver(options, vnode)
      } else {
        this.bind(el, { value }, vnode)
      }
    },
    unbind(el) {
      const state = el.IO_STATE
      if (state) {
        delete el.IO_STATE
        state.observer.disconnect()
      }
    }
  })
}

export default io