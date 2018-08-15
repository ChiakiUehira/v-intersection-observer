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

## Polyfill
This plug-in contains the polyfill of IntersectionObserver and corresponds to the following browsers.

<table>
  <tr>
    <td align="center">
      <img src="https://raw.github.com/alrra/browser-logos/39.2.2/src/chrome/chrome_48x48.png" alt="Chrome"><br>
      :heavy_check_mark:
    </td>
    <td align="center">
      <img src="https://raw.github.com/alrra/browser-logos/39.2.2/src/firefox/firefox_48x48.png" alt="Firefox"><br>
      :heavy_check_mark:
    </td>
    <td align="center">
      <img src="https://raw.github.com/alrra/browser-logos/39.2.2/src/safari/safari_48x48.png" alt="Safari"><br>
      6+
    </td>
    <td align="center">
      <img src="https://raw.github.com/alrra/browser-logos/39.2.2/src/edge/edge_48x48.png" alt="Edge"><br>
      :heavy_check_mark:
    </td>
    <td align="center">
      <img src="https://raw.github.com/alrra/browser-logos/39.2.2/src/archive/internet-explorer_7-8/internet-explorer_7-8_48x48.png" alt="Internet Explorer"><br>
      7+
    </td>
    <td align="center">
      <img src="https://raw.github.com/alrra/browser-logos/39.2.2/src/opera/opera_48x48.png" alt="Opera"><br>
      :heavy_check_mark:
    </td>
    <td align="center">
      <img src="https://raw.github.com/alrra/browser-logos/39.2.2/src/android/android_48x48.png" alt="Android"><br>
      4.4+
    </td>
  </tr>
</table>

## License
[MIT](http://opensource.org/licenses/MIT) :copyright: 2016 [c.uehira](https://github.com/in-the-box).