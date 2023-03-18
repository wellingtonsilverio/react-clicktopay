"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const useScript = src => {
  const [status, setStatus] = _react.default.useState(src ? 'loading' : 'idle');
  console.log("Start useScript");
  _react.default.useEffect(() => {
    if (!src) {
      setStatus('idle');
      console.log("useScript Status: idle");
      return;
    }
    let script = document.querySelector("script[src=\"".concat(src, "\"]"));
    console.log("useScript query script", script);
    if (!script) {
      console.log("useScript dont find script");
      script = document.createElement('script');
      script.src = src;
      script.async = true;
      script.setAttribute('data-status', 'loading');
      document.body.appendChild(script);
      console.log("useScript create script", script);
      console.log("useScript document", document);
      const setDataStatus = event => {
        script.setAttribute('data-status', event.type === 'load' ? 'ready' : 'error');
      };
      script.addEventListener('load', setDataStatus);
      script.addEventListener('error', setDataStatus);
    } else {
      console.log("useScript find script", script);
      setStatus(script.getAttribute('data-status'));
    }
    const setStateStatus = event => {
      setStatus(event.type === 'load' ? 'ready' : 'error');
    };
    script.addEventListener('load', setStateStatus);
    script.addEventListener('error', setStateStatus);
    return () => {
      console.log("useScript return useEffect");
      if (script) {
        script.removeEventListener('load', setStateStatus);
        script.removeEventListener('error', setStateStatus);
      }
    };
  }, [src]);
  console.log("useScript status return", status);
  return status;
};
var _default = useScript;
exports.default = _default;