// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"d1Tca":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "9fc30e0c3afb2d03";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"i6vpN":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _modelJs = require("./model.js");
var _allExtensionsViewJs = require("./Views/allExtensionsView.js");
var _allExtensionsViewJsDefault = parcelHelpers.interopDefault(_allExtensionsViewJs);
var _activeViewJs = require("./Views/activeView.js");
var _activeViewJsDefault = parcelHelpers.interopDefault(_activeViewJs);
var _inactiveViewJs = require("./Views/inactiveView.js");
var _inactiveViewJsDefault = parcelHelpers.interopDefault(_inactiveViewJs);
var _removeViewJs = require("./Views/removeView.js");
var _removeViewJsDefault = parcelHelpers.interopDefault(_removeViewJs);
var _colorThemeViewJs = require("./Views/colorThemeView.js");
var _colorThemeViewJsDefault = parcelHelpers.interopDefault(_colorThemeViewJs);
const controlAddons = async function() {
    const addons = await _modelJs.pluginData;
    await _modelJs.pluginMap();
    const mydata = JSON.parse(addons);
    const pluginMap = new Map();
    mydata.forEach((element)=>{
        (0, _allExtensionsViewJsDefault.default)._render(element);
        pluginMap.set(element.name.replace(' ', ""), element);
    });
};
//load all active elements;
const loadAllActiveAddons = function() {
    const extensionList = _modelJs.plugIn;
    extensionList.forEach((value, key)=>{
        if (value.isActive) (0, _activeViewJsDefault.default)._render(value);
    });
};
const loadAllInActiveAddons = function() {
    const allPlugin = _modelJs.plugIn;
    allPlugin.forEach((value, key)=>{
        if (!value.isActive) (0, _inactiveViewJsDefault.default)._render(value);
    });
};
const removeplugin = function(removeEl, section) {
    const extensionList = _modelJs.plugIn;
    extensionList.delete(removeEl);
    if (section === "allsection") {
        _modelJs.setState(extensionList);
        extensionList.forEach((value, key)=>{
            (0, _allExtensionsViewJsDefault.default)._render(value);
        });
    }
    if (section === "activesection") extensionList.forEach((value, key)=>{
        if (value.isActive) (0, _activeViewJsDefault.default)._render(value);
    });
    if (section === "inactivesection") extensionList.forEach((value, key)=>{
        if (!value.isActive) (0, _inactiveViewJsDefault.default)._render(value);
    });
};
const controlToggle = function(value) {
    const allPlugin = _modelJs.plugIn;
    const item = value.replace(' ', "");
    let currentPlugin = allPlugin.get(item);
    console.log(currentPlugin);
    if (currentPlugin.isActive) currentPlugin.isActive = false;
    else currentPlugin.isActive = true;
    console.log(currentPlugin);
};
let init = function() {
    controlAddons();
    (0, _activeViewJsDefault.default).addHandlerRenderActivePlugins(loadAllActiveAddons);
    (0, _inactiveViewJsDefault.default).addHandlerRenderInActivePlugins(loadAllInActiveAddons);
    (0, _allExtensionsViewJsDefault.default).addHandlerRenderAllPlugins(controlAddons);
    (0, _removeViewJsDefault.default).addHandlerRemovePlugin(removeplugin);
    (0, _allExtensionsViewJsDefault.default).addHandlerTogglePlugins(controlToggle);
    (0, _colorThemeViewJsDefault.default).addHandlerClickSunEl();
    (0, _colorThemeViewJsDefault.default).addHandlerChangeColor();
};
init();

},{"./model.js":"cS3QQ","./Views/allExtensionsView.js":"g3M6f","./Views/activeView.js":"j64Zk","./Views/inactiveView.js":"fHJUO","./Views/removeView.js":"6Pv8V","./Views/colorThemeView.js":"9Xiu4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cS3QQ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getData", ()=>getData);
parcelHelpers.export(exports, "pluginData", ()=>pluginData);
parcelHelpers.export(exports, "plugIn", ()=>plugIn);
parcelHelpers.export(exports, "pluginMap", ()=>pluginMap);
parcelHelpers.export(exports, "state", ()=>state);
parcelHelpers.export(exports, "setState", ()=>setState);
parcelHelpers.export(exports, "getState", ()=>getState);
let getData = async function(location) {
    try {
        const response = await require("82bb928bc8030a49");
        const myData = JSON.stringify(response);
        return myData;
    } catch (err) {
        console.log(err);
    }
};
let pluginData = getData();
let plugIn = new Map();
let pluginMap = async function() {
    const response = await require("82bb928bc8030a49");
    response.forEach((res)=>{
        plugIn.set(res.name.replace(' ', ""), res);
    });
    console.log(plugIn);
};
let state;
let setState = function(data) {
    state = data;
};
let getState = function() {
    return state;
};

},{"82bb928bc8030a49":"6dth1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6dth1":[function(require,module,exports,__globalThis) {
module.exports = require("beac834b54c2f62")(require("2975f509ded8b6df").getBundleURL('dIpmh') + "data.66661bea.js").catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root('gZ7M6'));

},{"beac834b54c2f62":"61B45","2975f509ded8b6df":"lgJ39","gZ7M6":"gZ7M6"}],"61B45":[function(require,module,exports,__globalThis) {
"use strict";
var cacheLoader = require("ca2a84f7fa4a3bb0");
module.exports = cacheLoader(function(bundle) {
    return new Promise(function(resolve, reject) {
        // Don't insert the same script twice (e.g. if it was already in the HTML)
        var existingScripts = document.getElementsByTagName('script');
        if ([].concat(existingScripts).some(function(script) {
            return script.src === bundle;
        })) {
            resolve();
            return;
        }
        var preloadLink = document.createElement('link');
        preloadLink.href = bundle;
        preloadLink.rel = 'preload';
        preloadLink.as = 'script';
        document.head.appendChild(preloadLink);
        var script = document.createElement('script');
        script.async = true;
        script.type = 'text/javascript';
        script.src = bundle;
        script.onerror = function(e) {
            var error = new TypeError("Failed to fetch dynamically imported module: ".concat(bundle, ". Error: ").concat(e.message));
            script.onerror = script.onload = null;
            script.remove();
            reject(error);
        };
        script.onload = function() {
            script.onerror = script.onload = null;
            resolve();
        };
        document.getElementsByTagName('head')[0].appendChild(script);
    });
});

},{"ca2a84f7fa4a3bb0":"j49pS"}],"j49pS":[function(require,module,exports,__globalThis) {
"use strict";
var cachedBundles = {};
var cachedPreloads = {};
var cachedPrefetches = {};
function getCache(type) {
    switch(type){
        case 'preload':
            return cachedPreloads;
        case 'prefetch':
            return cachedPrefetches;
        default:
            return cachedBundles;
    }
}
module.exports = function(loader, type) {
    return function(bundle) {
        var cache = getCache(type);
        if (cache[bundle]) return cache[bundle];
        return cache[bundle] = loader.apply(null, arguments).catch(function(e) {
            delete cache[bundle];
            throw e;
        });
    };
};

},{}],"lgJ39":[function(require,module,exports,__globalThis) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"gkKU3":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"g3M6f":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./view");
var _viewDefault = parcelHelpers.interopDefault(_view);
var _logoDevlensSvg = require("url:../assets/images/logo-devlens.svg");
var _logoDevlensSvgDefault = parcelHelpers.interopDefault(_logoDevlensSvg);
var _logoStyleSpySvg = require("url:../assets/images/logo-style-spy.svg");
var _logoStyleSpySvgDefault = parcelHelpers.interopDefault(_logoStyleSpySvg);
var _logoSpeedBoostSvg = require("url:../assets/images/logo-speed-boost.svg");
var _logoSpeedBoostSvgDefault = parcelHelpers.interopDefault(_logoSpeedBoostSvg);
var _logoJsonWizardSvg = require("url:../assets/images/logo-json-wizard.svg");
var _logoJsonWizardSvgDefault = parcelHelpers.interopDefault(_logoJsonWizardSvg);
var _logoTabMasterProSvg = require("url:../assets/images/logo-tab-master-pro.svg");
var _logoTabMasterProSvgDefault = parcelHelpers.interopDefault(_logoTabMasterProSvg);
var _logoViewportBuddySvg = require("url:../assets/images/logo-viewport-buddy.svg");
var _logoViewportBuddySvgDefault = parcelHelpers.interopDefault(_logoViewportBuddySvg);
var _logoMarkupNotesSvg = require("url:../assets/images/logo-markup-notes.svg");
var _logoMarkupNotesSvgDefault = parcelHelpers.interopDefault(_logoMarkupNotesSvg);
var _logoGridGuidesSvg = require("url:../assets/images/logo-grid-guides.svg");
var _logoGridGuidesSvgDefault = parcelHelpers.interopDefault(_logoGridGuidesSvg);
var _logoPalettePickerSvg = require("url:../assets/images/logo-palette-picker.svg");
var _logoPalettePickerSvgDefault = parcelHelpers.interopDefault(_logoPalettePickerSvg);
var _logoLinkCheckerSvg = require("url:../assets/images/logo-link-checker.svg");
var _logoLinkCheckerSvgDefault = parcelHelpers.interopDefault(_logoLinkCheckerSvg);
var _logoDomSnapshotSvg = require("url:../assets/images/logo-dom-snapshot.svg");
var _logoDomSnapshotSvgDefault = parcelHelpers.interopDefault(_logoDomSnapshotSvg);
var _logoConsolePlusSvg = require("url:../assets/images/logo-console-plus.svg");
var _logoConsolePlusSvgDefault = parcelHelpers.interopDefault(_logoConsolePlusSvg);
class AllExtensionsView extends (0, _viewDefault.default) {
    _parentEl = document.querySelector('.card-container');
    _allPluginBtn = document.querySelector('.allBtn');
    _radioBtn = document.querySelectorAll('.state');
    _logoArray = [
        (0, _logoDevlensSvgDefault.default),
        (0, _logoStyleSpySvgDefault.default),
        (0, _logoSpeedBoostSvgDefault.default),
        (0, _logoJsonWizardSvgDefault.default),
        (0, _logoTabMasterProSvgDefault.default),
        (0, _logoViewportBuddySvgDefault.default),
        (0, _logoMarkupNotesSvgDefault.default),
        (0, _logoGridGuidesSvgDefault.default),
        (0, _logoPalettePickerSvgDefault.default),
        (0, _logoLinkCheckerSvgDefault.default),
        (0, _logoDomSnapshotSvgDefault.default),
        (0, _logoConsolePlusSvgDefault.default)
    ];
    _generateMarkup(data) {
        let imgAddress;
        let mydata = data.logo.split('/');
        let index = mydata.length;
        let newArr = mydata[index - 1].split('.');
        this._logoArray.forEach((logo)=>{
            if (logo.includes(newArr[0])) imgAddress = logo;
        });
        return `<div class="card">
      <div class="upper-section">
        <div class="logo">
      <img src=${imgAddress} alt="" class="logo">
      </div>
      <div class="extensionInfo">
      <h2 class="extensionName">${data.name}</h2>
      <p class="extensionDescription">${data.description}</p>
    </div>
    </div>
    <div class="lower-section">
    <button class="button remove ${data.name.replace(' ', "")}">Remove</button>
      <div class="toggle">
        <input type="radio" name="${data.name}"  id="inactive" value="inactive" class="state">
        <input type="radio" name="${data.name}" id="active" value="active" class="state" ${data.isActive ? 'checked' : ''}>
        <div class="slider"></div>  
        
      </div>
    </div> 
    `;
    }
    addHandlerRenderAllPlugins(handler) {
        this._allPluginBtn.addEventListener('click', (e)=>{
            console.log("all clicked");
            this._clear();
            this._addActiveClass(this._allPluginBtn);
            handler();
        });
    }
    addHandlerTogglePlugins(handler) {
        this._parentEl.addEventListener('click', (e)=>{
            if (e.target.classList.contains('state')) handler(e.target.getAttribute('name'));
        });
    }
}
exports.default = new AllExtensionsView();

},{"./view":"2pwRh","url:../assets/images/logo-devlens.svg":"grKFi","url:../assets/images/logo-style-spy.svg":"j48yO","url:../assets/images/logo-speed-boost.svg":"dOqtc","url:../assets/images/logo-json-wizard.svg":"id1Ll","url:../assets/images/logo-tab-master-pro.svg":"6oWYJ","url:../assets/images/logo-viewport-buddy.svg":"2tcTU","url:../assets/images/logo-markup-notes.svg":"hSvAl","url:../assets/images/logo-grid-guides.svg":"8H9n1","url:../assets/images/logo-palette-picker.svg":"gEZ1R","url:../assets/images/logo-link-checker.svg":"9tYyJ","url:../assets/images/logo-dom-snapshot.svg":"1FQ22","url:../assets/images/logo-console-plus.svg":"2NTy0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2pwRh":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _logoDevlensSvg = require("url:../assets/images/logo-devlens.svg");
var _logoDevlensSvgDefault = parcelHelpers.interopDefault(_logoDevlensSvg);
var _logoConsolePlusSvg = require("url:../assets/images/logo-console-plus.svg");
var _logoConsolePlusSvgDefault = parcelHelpers.interopDefault(_logoConsolePlusSvg);
class View {
    _data;
    _btns = document.querySelectorAll('.button');
    _imageMap = new Map();
    _render(plugindata) {
        this._data = plugindata;
        let markup = this._generateMarkup(this._data);
        this._parentEl.insertAdjacentHTML('afterbegin', markup);
    }
    _clear() {
        this._parentEl.innerHTML = '';
    }
    _addActiveClass(element) {
        this._btns.forEach((btn)=>{
            btn.classList.remove('active');
        });
        element.classList.add('active');
    }
    _getImage(value) {
        this._imageAddress.forEach((img)=>{
            if (img === value) return value;
        });
    }
}
exports.default = View;

},{"url:../assets/images/logo-devlens.svg":"grKFi","url:../assets/images/logo-console-plus.svg":"2NTy0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"grKFi":[function(require,module,exports,__globalThis) {
module.exports = require("6a41ce6a4725b277").getBundleURL('dIpmh') + "logo-devlens.873d87d4.svg" + "?" + Date.now();

},{"6a41ce6a4725b277":"lgJ39"}],"2NTy0":[function(require,module,exports,__globalThis) {
module.exports = require("2a2a1cf028ad7fd5").getBundleURL('dIpmh') + "logo-console-plus.1c86b196.svg" + "?" + Date.now();

},{"2a2a1cf028ad7fd5":"lgJ39"}],"j48yO":[function(require,module,exports,__globalThis) {
module.exports = require("be51dc7c4bd45f6").getBundleURL('dIpmh') + "logo-style-spy.b448a0b5.svg" + "?" + Date.now();

},{"be51dc7c4bd45f6":"lgJ39"}],"dOqtc":[function(require,module,exports,__globalThis) {
module.exports = require("3d1bd4224d2cdbf2").getBundleURL('dIpmh') + "logo-speed-boost.82a0be0e.svg" + "?" + Date.now();

},{"3d1bd4224d2cdbf2":"lgJ39"}],"id1Ll":[function(require,module,exports,__globalThis) {
module.exports = require("c16a6c0fd1eef362").getBundleURL('dIpmh') + "logo-json-wizard.d1117365.svg" + "?" + Date.now();

},{"c16a6c0fd1eef362":"lgJ39"}],"6oWYJ":[function(require,module,exports,__globalThis) {
module.exports = require("eb3e34c7dceb39a6").getBundleURL('dIpmh') + "logo-tab-master-pro.2ce395f9.svg" + "?" + Date.now();

},{"eb3e34c7dceb39a6":"lgJ39"}],"2tcTU":[function(require,module,exports,__globalThis) {
module.exports = require("27e33fbe1386aa62").getBundleURL('dIpmh') + "logo-viewport-buddy.fae7c0e8.svg" + "?" + Date.now();

},{"27e33fbe1386aa62":"lgJ39"}],"hSvAl":[function(require,module,exports,__globalThis) {
module.exports = require("deab160b147dcb9f").getBundleURL('dIpmh') + "logo-markup-notes.e923ca50.svg" + "?" + Date.now();

},{"deab160b147dcb9f":"lgJ39"}],"8H9n1":[function(require,module,exports,__globalThis) {
module.exports = require("428e2392c754986").getBundleURL('dIpmh') + "logo-grid-guides.1bd49138.svg" + "?" + Date.now();

},{"428e2392c754986":"lgJ39"}],"gEZ1R":[function(require,module,exports,__globalThis) {
module.exports = require("75c5f3ebf4f47667").getBundleURL('dIpmh') + "logo-palette-picker.28417005.svg" + "?" + Date.now();

},{"75c5f3ebf4f47667":"lgJ39"}],"9tYyJ":[function(require,module,exports,__globalThis) {
module.exports = require("375eb530f34bf4d5").getBundleURL('dIpmh') + "logo-link-checker.2a42671a.svg" + "?" + Date.now();

},{"375eb530f34bf4d5":"lgJ39"}],"1FQ22":[function(require,module,exports,__globalThis) {
module.exports = require("c6d0c39dc38a386f").getBundleURL('dIpmh') + "logo-dom-snapshot.f2d4e009.svg" + "?" + Date.now();

},{"c6d0c39dc38a386f":"lgJ39"}],"j64Zk":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./view");
var _viewDefault = parcelHelpers.interopDefault(_view);
var _allExtensionsView = require("./allExtensionsView");
var _allExtensionsViewDefault = parcelHelpers.interopDefault(_allExtensionsView);
var _logoDevlensSvg = require("url:../assets/images/logo-devlens.svg");
var _logoDevlensSvgDefault = parcelHelpers.interopDefault(_logoDevlensSvg);
var _logoStyleSpySvg = require("url:../assets/images/logo-style-spy.svg");
var _logoStyleSpySvgDefault = parcelHelpers.interopDefault(_logoStyleSpySvg);
var _logoSpeedBoostSvg = require("url:../assets/images/logo-speed-boost.svg");
var _logoSpeedBoostSvgDefault = parcelHelpers.interopDefault(_logoSpeedBoostSvg);
var _logoJsonWizardSvg = require("url:../assets/images/logo-json-wizard.svg");
var _logoJsonWizardSvgDefault = parcelHelpers.interopDefault(_logoJsonWizardSvg);
var _logoTabMasterProSvg = require("url:../assets/images/logo-tab-master-pro.svg");
var _logoTabMasterProSvgDefault = parcelHelpers.interopDefault(_logoTabMasterProSvg);
var _logoViewportBuddySvg = require("url:../assets/images/logo-viewport-buddy.svg");
var _logoViewportBuddySvgDefault = parcelHelpers.interopDefault(_logoViewportBuddySvg);
var _logoMarkupNotesSvg = require("url:../assets/images/logo-markup-notes.svg");
var _logoMarkupNotesSvgDefault = parcelHelpers.interopDefault(_logoMarkupNotesSvg);
var _logoGridGuidesSvg = require("url:../assets/images/logo-grid-guides.svg");
var _logoGridGuidesSvgDefault = parcelHelpers.interopDefault(_logoGridGuidesSvg);
var _logoPalettePickerSvg = require("url:../assets/images/logo-palette-picker.svg");
var _logoPalettePickerSvgDefault = parcelHelpers.interopDefault(_logoPalettePickerSvg);
var _logoLinkCheckerSvg = require("url:../assets/images/logo-link-checker.svg");
var _logoLinkCheckerSvgDefault = parcelHelpers.interopDefault(_logoLinkCheckerSvg);
var _logoDomSnapshotSvg = require("url:../assets/images/logo-dom-snapshot.svg");
var _logoDomSnapshotSvgDefault = parcelHelpers.interopDefault(_logoDomSnapshotSvg);
var _logoConsolePlusSvg = require("url:../assets/images/logo-console-plus.svg");
var _logoConsolePlusSvgDefault = parcelHelpers.interopDefault(_logoConsolePlusSvg);
var _colorThemeView = require("./colorThemeView");
var _colorThemeViewDefault = parcelHelpers.interopDefault(_colorThemeView);
class ActiveView extends (0, _viewDefault.default) {
    _activeBtn = document.querySelector('.activeBtn');
    _parentEl = document.querySelector('.card-container');
    _logoArray = [
        (0, _logoDevlensSvgDefault.default),
        (0, _logoStyleSpySvgDefault.default),
        (0, _logoSpeedBoostSvgDefault.default),
        (0, _logoJsonWizardSvgDefault.default),
        (0, _logoTabMasterProSvgDefault.default),
        (0, _logoViewportBuddySvgDefault.default),
        (0, _logoMarkupNotesSvgDefault.default),
        (0, _logoGridGuidesSvgDefault.default),
        (0, _logoPalettePickerSvgDefault.default),
        (0, _logoLinkCheckerSvgDefault.default),
        (0, _logoDomSnapshotSvgDefault.default),
        (0, _logoConsolePlusSvgDefault.default)
    ];
    _containerEl = document.querySelector('.container');
    addHandlerRenderActivePlugins(handler) {
        this._activeBtn.addEventListener('click', (e)=>{
            this._clear();
            this._addActiveClass(this._activeBtn);
            handler();
        });
    }
    _generateMarkup(data) {
        let imgAddress;
        let mydata = data.logo.split('/');
        let index = mydata.length;
        let newArr = mydata[index - 1].split('.');
        this._logoArray.forEach((logo)=>{
            if (logo.includes(newArr[0])) imgAddress = logo;
        });
        return `<div class="card">
          <div class="upper-section">
            <div class="logo">
          <img src=${imgAddress} alt="" class="logo">
          </div>
          <div class="extensionInfo">
          <h2 class="extensionName">${data.name}</h2>
          <p class="extensionDescription">${data.description}</p>
        </div>
        </div>
        <div class="lower-section">
        <button class="button remove ${data.name.replace(' ', "")}">Remove</button>
          <div class="toggle">
            <input type="radio" name="${data.name}"  id="inactive" value="inactive" class="state">
            <input type="radio" name="${data.name}" id="active" value="active" class="state" ${data.isActive ? 'checked' : ''}>
            <div class="slider"></div>  
            
          </div>
        </div> 
        `;
    }
}
exports.default = new ActiveView();

},{"./view":"2pwRh","./allExtensionsView":"g3M6f","url:../assets/images/logo-devlens.svg":"grKFi","url:../assets/images/logo-style-spy.svg":"j48yO","url:../assets/images/logo-speed-boost.svg":"dOqtc","url:../assets/images/logo-json-wizard.svg":"id1Ll","url:../assets/images/logo-tab-master-pro.svg":"6oWYJ","url:../assets/images/logo-viewport-buddy.svg":"2tcTU","url:../assets/images/logo-markup-notes.svg":"hSvAl","url:../assets/images/logo-grid-guides.svg":"8H9n1","url:../assets/images/logo-palette-picker.svg":"gEZ1R","url:../assets/images/logo-link-checker.svg":"9tYyJ","url:../assets/images/logo-dom-snapshot.svg":"1FQ22","url:../assets/images/logo-console-plus.svg":"2NTy0","./colorThemeView":"9Xiu4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9Xiu4":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./view");
var _viewDefault = parcelHelpers.interopDefault(_view);
var _iconMoonSvg = require("url:../assets/images/icon-moon.svg");
var _iconMoonSvgDefault = parcelHelpers.interopDefault(_iconMoonSvg);
var _iconSunSvg = require("url:../assets/images/icon-sun.svg");
var _iconSunSvgDefault = parcelHelpers.interopDefault(_iconSunSvg);
var _allExtensionsView = require("./allExtensionsView");
var _allExtensionsViewDefault = parcelHelpers.interopDefault(_allExtensionsView);
var _activeView = require("./activeView");
var _activeViewDefault = parcelHelpers.interopDefault(_activeView);
var _inactiveView = require("./inactiveView");
var _inactiveViewDefault = parcelHelpers.interopDefault(_inactiveView);
class ColorTheme extends (0, _viewDefault.default) {
    _themeEL = document.querySelector(".mode");
    _containerEl = document.querySelector('.container');
    _listEl = document.querySelector('.list');
    _button = document.querySelectorAll('.button');
    _logoContainer = document.querySelector('.logo-container');
    _moonClicked = false;
    addHandlerClickSunEl() {
        this._themeEL.addEventListener('click', (e)=>{
            if (e.target.classList.contains('sun')) {
                this.changeToSunColor();
                return;
            }
            if (e.target.classList.contains('moon')) {
                this.addHandlerChangeToMoonColor();
                return;
            }
        });
    }
    changeToSunColor() {
        this._moonClicked = true;
        this._themeEL.src = (0, _iconMoonSvgDefault.default);
        this._themeEL.classList.add('moon');
        this._themeEL.classList.remove('sun');
        this._logoContainer.style.backgroundColor = 'hsl(200, 60%, 99%)';
        this._containerEl.style.background = "linear-gradient(180deg, #EBF2FC 0%, #EEF8F9 100%)";
        this._listEl.style.color = "hsl(227,75%,14%)";
        let el = document.querySelector('.moon');
        // el.addEventListener('mouseenter',()=>{
        //     el.style.background="linear-gradient(180deg, #EBF2FC 0%, #EEF8F9 100%)"
        // el.style.border='1px solid hsl(3,77%,44%)';
        // })
        // el.addEventListener('mouseleave',()=>{
        //     el.style.border='none';
        //     el.style.background="hsl(200, 60%, 99%)";
        // })
        this._button.forEach((btn)=>{
            btn.style.backgroundColor = 'hsl(200, 60%, 99%)';
        });
        if (this._containerEl.childNodes) {
            let toggle = document.querySelectorAll('.toggle');
            let cards = document.querySelectorAll('.card');
            let extensionName = document.querySelectorAll('.extensionName');
            let extensionDes = document.querySelectorAll('.extensionDescription');
            let removeBtn = document.querySelectorAll('.remove');
            // let allSlider=document.querySelectorAll('.toggle');   
            cards.forEach((card)=>{
                card.style.backgroundColor = 'hsl(200, 60%, 99%)';
            });
            extensionName.forEach((extension)=>{
                extension.style.color = 'hsl(227,75%,14%)';
            });
            extensionDes.forEach((extension)=>{
                extension.style.color = 'hsl(227,75%,14%)';
            });
            removeBtn.forEach((rBtn)=>{
                rBtn.style.backgroundColor = 'hsl(200, 60%, 99%)';
                rBtn.style.color = 'black';
                rBtn.addEventListener('mouseenter', ()=>{
                    rBtn.style.backgroundColor = 'hsl(3,77%,44%)';
                    rBtn.style.cursor = 'pointer';
                });
                rBtn.addEventListener('mouseleave', ()=>{
                    rBtn.style.backgroundColor = 'hsl(200, 60%, 99%)';
                });
            });
            toggle.forEach((toggle)=>{
                toggle.style.cursor = 'pointer';
            });
        // allSlider.forEach(slider=>{
        //     slider.style.backgroundColor='hsl(200, 60%, 99%)';
        // })
        }
    }
    addHandlerChangeColor() {
        this._button.forEach((btn)=>{
            btn.addEventListener('click', (e)=>{
                if (this._moonClicked) this.changeToSunColor();
            });
        });
    }
    addHandlerChangeToMoonColor() {
        this._themeEL.classList.remove('moon');
        this._moonClicked = false;
        this._themeEL.classList.add('sun');
        this._themeEL.src = (0, _iconSunSvgDefault.default);
        this._containerEl.style.background = 'linear-gradient(180deg, #040918 0%, #091540 100%)';
        this._logoContainer.style.backgroundColor = 'var(--neutral--700)';
        this._button.forEach((btn)=>{
            btn.style.backgroundColor = 'hsl(226,25%,17%)';
        });
        if (this._containerEl.childNodes) {
            let cardContainer = document.querySelector('.card-container');
            let cards = document.querySelectorAll('.card');
            let extensionName = document.querySelectorAll('.extensionName');
            let extensionDes = document.querySelectorAll('.extensionDescription');
            let removeBtn = document.querySelectorAll('.remove');
            cards.forEach((card)=>{
                card.style.backgroundColor = 'hsl(226,25%,17%)';
            });
            extensionName.forEach((extension)=>{
                extension.style.color = 'hsl(200, 60%, 99%)';
            });
            extensionDes.forEach((extension)=>{
                extension.style.color = 'hsl(0, 0%, 78%)';
            });
            removeBtn.forEach((rBtn)=>{
                rBtn.style.backgroundColor = 'hsl(226,25%,17%)';
                rBtn.style.color = 'hsl(0, 0%, 93%)';
                rBtn.style.border = '1px solid hsl(0, 0%, 93%)';
                rBtn.addEventListener('mouseleave', ()=>{
                    rBtn.style.backgroundColor = 'hsl(226,25%,17%)';
                });
            });
            // allSlider.forEach(slider=>{
            //     slider.style.backgroundColor='hsl(200, 60%, 99%)';
            // })
            this._listEl.style.color = "hsl(0, 0%, 93%)";
        }
    }
}
exports.default = new ColorTheme();

},{"./view":"2pwRh","url:../assets/images/icon-moon.svg":"7Dceu","./allExtensionsView":"g3M6f","./activeView":"j64Zk","./inactiveView":"fHJUO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","url:../assets/images/icon-sun.svg":"aRM6l"}],"7Dceu":[function(require,module,exports,__globalThis) {
module.exports = require("7e81099303d0f74f").getBundleURL('dIpmh') + "icon-moon.f1310759.svg" + "?" + Date.now();

},{"7e81099303d0f74f":"lgJ39"}],"fHJUO":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./view");
var _viewDefault = parcelHelpers.interopDefault(_view);
var _allExtensionsView = require("./allExtensionsView");
var _allExtensionsViewDefault = parcelHelpers.interopDefault(_allExtensionsView);
var _logoDevlensSvg = require("url:../assets/images/logo-devlens.svg");
var _logoDevlensSvgDefault = parcelHelpers.interopDefault(_logoDevlensSvg);
var _logoStyleSpySvg = require("url:../assets/images/logo-style-spy.svg");
var _logoStyleSpySvgDefault = parcelHelpers.interopDefault(_logoStyleSpySvg);
var _logoSpeedBoostSvg = require("url:../assets/images/logo-speed-boost.svg");
var _logoSpeedBoostSvgDefault = parcelHelpers.interopDefault(_logoSpeedBoostSvg);
var _logoJsonWizardSvg = require("url:../assets/images/logo-json-wizard.svg");
var _logoJsonWizardSvgDefault = parcelHelpers.interopDefault(_logoJsonWizardSvg);
var _logoTabMasterProSvg = require("url:../assets/images/logo-tab-master-pro.svg");
var _logoTabMasterProSvgDefault = parcelHelpers.interopDefault(_logoTabMasterProSvg);
var _logoViewportBuddySvg = require("url:../assets/images/logo-viewport-buddy.svg");
var _logoViewportBuddySvgDefault = parcelHelpers.interopDefault(_logoViewportBuddySvg);
var _logoMarkupNotesSvg = require("url:../assets/images/logo-markup-notes.svg");
var _logoMarkupNotesSvgDefault = parcelHelpers.interopDefault(_logoMarkupNotesSvg);
var _logoGridGuidesSvg = require("url:../assets/images/logo-grid-guides.svg");
var _logoGridGuidesSvgDefault = parcelHelpers.interopDefault(_logoGridGuidesSvg);
var _logoPalettePickerSvg = require("url:../assets/images/logo-palette-picker.svg");
var _logoPalettePickerSvgDefault = parcelHelpers.interopDefault(_logoPalettePickerSvg);
var _logoLinkCheckerSvg = require("url:../assets/images/logo-link-checker.svg");
var _logoLinkCheckerSvgDefault = parcelHelpers.interopDefault(_logoLinkCheckerSvg);
var _logoDomSnapshotSvg = require("url:../assets/images/logo-dom-snapshot.svg");
var _logoDomSnapshotSvgDefault = parcelHelpers.interopDefault(_logoDomSnapshotSvg);
var _logoConsolePlusSvg = require("url:../assets/images/logo-console-plus.svg");
var _logoConsolePlusSvgDefault = parcelHelpers.interopDefault(_logoConsolePlusSvg);
class InActiveView extends (0, _viewDefault.default) {
    _inactiveBtn = document.querySelector('.inactiveBtn');
    _parentEl = document.querySelector('.card-container');
    addHandlerRenderInActivePlugins(handler) {
        this._inactiveBtn.addEventListener('click', (e)=>{
            this._clear();
            this._addActiveClass(this._inactiveBtn);
            handler();
        });
    }
    _generateMarkup(data) {
        let imgAddress;
        let mydata = data.logo.split('/');
        let index = mydata.length;
        let newArr = mydata[index - 1].split('.');
        (0, _allExtensionsViewDefault.default)._logoArray.forEach((logo)=>{
            if (logo.includes(newArr[0])) imgAddress = logo;
        });
        return `<div class="card">s
          <div class="upper-section">
            <div class="logo">
          <img src=${imgAddress} alt="" class="logo">
          </div>
          <div class="extensionInfo">
          <h2 class="extensionName">${data.name}</h2>
          <p class="extensionDescription">${data.description}</p>
        </div>
        </div>
        <div class="lower-section">
        <button class="button remove ${data.name.replace(' ', "")}">Remove</button>
          <div class="toggle">
            <input type="radio" name="${data.name}"  id="inactive" value="inactive" class="state">
            <input type="radio" name="${data.name}" id="active" value="active" class="state" ${data.isActive ? 'checked' : ''}>
            <div class="slider"></div>  
            
          </div>
        </div> 
        `;
    }
}
exports.default = new InActiveView();

},{"./view":"2pwRh","./allExtensionsView":"g3M6f","url:../assets/images/logo-devlens.svg":"grKFi","url:../assets/images/logo-style-spy.svg":"j48yO","url:../assets/images/logo-speed-boost.svg":"dOqtc","url:../assets/images/logo-json-wizard.svg":"id1Ll","url:../assets/images/logo-tab-master-pro.svg":"6oWYJ","url:../assets/images/logo-viewport-buddy.svg":"2tcTU","url:../assets/images/logo-markup-notes.svg":"hSvAl","url:../assets/images/logo-grid-guides.svg":"8H9n1","url:../assets/images/logo-palette-picker.svg":"gEZ1R","url:../assets/images/logo-link-checker.svg":"9tYyJ","url:../assets/images/logo-dom-snapshot.svg":"1FQ22","url:../assets/images/logo-console-plus.svg":"2NTy0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aRM6l":[function(require,module,exports,__globalThis) {
module.exports = require("e6376f6d501f578e").getBundleURL('dIpmh') + "icon-sun.b15a5965.svg" + "?" + Date.now();

},{"e6376f6d501f578e":"lgJ39"}],"6Pv8V":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./view");
var _viewDefault = parcelHelpers.interopDefault(_view);
var _activeView = require("./activeView");
var _activeViewDefault = parcelHelpers.interopDefault(_activeView);
var _allExtensionsView = require("./allExtensionsView");
var _allExtensionsViewDefault = parcelHelpers.interopDefault(_allExtensionsView);
var _inactiveView = require("./inactiveView");
var _inactiveViewDefault = parcelHelpers.interopDefault(_inactiveView);
var _colorThemeView = require("./colorThemeView");
var _colorThemeViewDefault = parcelHelpers.interopDefault(_colorThemeView);
class RemoveView extends (0, _viewDefault.default) {
    _parentEl = document.querySelector('.card-container');
    addHandlerRemovePlugin(handler) {
        this._parentEl.addEventListener('click', (e)=>{
            if (e.target.classList.contains('remove') && (0, _allExtensionsViewDefault.default)._allPluginBtn.classList.contains('active')) {
                this._clear();
                // e.preventDefault();
                handler(e.target.classList[2], "allsection");
                if ((0, _colorThemeViewDefault.default)._moonClicked) {
                    this._clear();
                    handler(e.target.classList[2], "allsection");
                    (0, _colorThemeViewDefault.default).changeToSunColor();
                }
            }
            if (e.target.classList.contains('remove') && (0, _activeViewDefault.default)._activeBtn.classList.contains('active')) {
                this._clear();
                handler(e.target.classList[2], "activesection");
                if ((0, _colorThemeViewDefault.default)._moonClicked) {
                    this._clear();
                    handler(e.target.classList[2], "activesection");
                    (0, _colorThemeViewDefault.default).changeToSunColor();
                }
            }
            if (e.target.classList.contains('remove') && (0, _inactiveViewDefault.default)._inactiveBtn.classList.contains('active')) {
                this._clear();
                handler(e.target.classList[2], "inactivesection");
                if ((0, _colorThemeViewDefault.default)._moonClicked) {
                    this._clear();
                    handler(e.target.classList[2], "inactivesection");
                    (0, _colorThemeViewDefault.default).changeToSunColor();
                }
            }
        });
    }
}
exports.default = new RemoveView();

},{"./view":"2pwRh","./activeView":"j64Zk","./allExtensionsView":"g3M6f","./inactiveView":"fHJUO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./colorThemeView":"9Xiu4"}]},["d1Tca","i6vpN"], "i6vpN", "parcelRequire94c2")

//# sourceMappingURL=index.3afb2d03.js.map
