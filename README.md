# v-intersection-observer
> IntersectionObserver for Vue.js

## What

This is a plug-in made by Vue.js to use IntersectionObserver.
You can monitor the target element simply by adding ``v-io``.

## Install
```
npm install @pixelgram/v-intersection-observer -S
```

## Quick Start
```js
import Vue from 'vue'
import IO from '@pixelgram/v-intersection-observer'

Vue.use(IO)
```

## Usage
```html
<div v-io>...</div>
```
As stated above, when you add ``v-io``, the element will be monitored.When it becomes to visible based on Viewport, ``is-visible``Class is appended.Also when it becomes to become unvisible, ``is-visible``Class will be removed.If CallBack is set up, it will be called.

## Options
```html
<div v-io="{
  root: this.root
  onece: true,
  callback: this.onVisible
}">...</div>
```

Options can be given as objects.
The content of the option is compatible with [Intersection Observer API](https://developer.mozilla.org/ja/docs/Web/API/Intersection_Observer_API)

``root {object} || null``

``rootMargin {string} || 0px``

``callback {function} || null``

``threshold {Nuber || Array} || .2``

``once {Boolean} || true``

## License
[MIT](http://opensource.org/licenses/MIT) :copyright: 2016 [c.uehira](https://github.com/in-the-box).