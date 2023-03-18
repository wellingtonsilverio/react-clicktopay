"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Provider = void 0;
var _react = _interopRequireDefault(require("react"));
var _useScript = _interopRequireDefault(require("./hooks/useScript"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Provider = _ref => {
  let {
    srcDpaId,
    dpaLocale,
    children
  } = _ref;
  const status = (0, _useScript.default)("https://src.mastercard.com/srci/integration/2/lib.js?srcDpaId=".concat(srcDpaId, "&locale=").concat(dpaLocale));
  _react.default.useEffect(() => {
    console.log("Hello ReactClickToPay");
  }, []);
  _react.default.useEffect(() => {
    console.log("status", status);
  }, [status]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, children);
};
exports.Provider = Provider;
var _default = {
  Provider
};
exports.default = _default;