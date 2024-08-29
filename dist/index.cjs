'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');

const red = "_red_16s28_1";
const green = "_green_16s28_10";
const blue = "_blue_16s28_19";
const s = {
	red: red,
	green: green,
	blue: blue
};

function CardTest({ color = "red" }) {
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: s[color], children: "This is CardTest" });
}

exports.CardTest = CardTest;
