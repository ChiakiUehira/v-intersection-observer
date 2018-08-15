"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var io = {};

io.createObserver = function (options, vnode) {
  var observer = new IntersectionObserver(function (entries) {
    var entry = entries[0];

    if (entry.isIntersecting) {
      options.el.classList.add('is-visible');

      if (options.callback) {
        options.callback();
      }

      if (options.once) {
        observer.disconnect();
      }
    } else {
      options.el.classList.remove('is-visible');
    }
  }, options);
  vnode.context.$nextTick(function () {
    observer.observe(options.el);
  });
  return {
    observer: observer,
    options: options,
    vnode: vnode
  };
};

io.createOptions = function (el) {
  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var options = {};
  options.el = el;
  value.root ? options.root = root : null;
  value.rootMargin ? options.rootMargin = value.rootMargin : null;
  value.callback ? options.callback = value.callback : null;
  value.threshold ? options.threshold = value.threshold : options.threshold = .2;
  value.once ? options.once = value.once : options.once = true;
  return options;
};

io.install = function (Vue) {
  Vue.directive('io', {
    bind: function bind(el, _ref, vnode) {
      var value = _ref.value;
      var options = io.createOptions(el, value);
      var state = io.createObserver(options, vnode);
      el.IO_STATE = state;
    },
    update: function update(el, _ref2, vnode) {
      var value = _ref2.value;
      var state = el.IO_STATE;

      if (state) {
        var options = io.createOptions(el, value);
        state.createObserver(options, vnode);
      } else {
        this.bind(el, {
          value: value
        }, vnode);
      }
    },
    unbind: function unbind(el) {
      var state = el.IO_STATE;

      if (state) {
        delete el.IO_STATE;
        state.observer.disconnect();
      }
    }
  });
};

var _default = io;
exports.default = _default;
