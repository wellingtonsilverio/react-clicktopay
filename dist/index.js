"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReactClickToPay = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const ReactClickToPay = _ref => {
  let {
    children
  } = _ref;
  _react.default.useEffect(() => {
    console.log("Hello ReactClickToPay");
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, children);
};
exports.ReactClickToPay = ReactClickToPay;