import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3d1ed8d4 = () => interopDefault(import('..\\pages\\contest.vue' /* webpackChunkName: "pages/contest" */))
const _606e2a58 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _4111aab7 = () => interopDefault(import('..\\pages\\privacy_policy.vue' /* webpackChunkName: "pages/privacy_policy" */))
const _63e94cb2 = () => interopDefault(import('..\\pages\\resources.vue' /* webpackChunkName: "pages/resources" */))
const _76116b80 = () => interopDefault(import('..\\pages\\who.vue' /* webpackChunkName: "pages/who" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/contest",
    component: _3d1ed8d4,
    name: "contest___en"
  }, {
    path: "/fr",
    component: _606e2a58,
    name: "index___fr"
  }, {
    path: "/privacy_policy",
    component: _4111aab7,
    name: "privacy_policy___en"
  }, {
    path: "/resources",
    component: _63e94cb2,
    name: "resources___en"
  }, {
    path: "/who",
    component: _76116b80,
    name: "who___en"
  }, {
    path: "/fr/contest",
    component: _3d1ed8d4,
    name: "contest___fr"
  }, {
    path: "/fr/privacy_policy",
    component: _4111aab7,
    name: "privacy_policy___fr"
  }, {
    path: "/fr/resources",
    component: _63e94cb2,
    name: "resources___fr"
  }, {
    path: "/fr/who",
    component: _76116b80,
    name: "who___fr"
  }, {
    path: "/",
    component: _606e2a58,
    name: "index___en"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
