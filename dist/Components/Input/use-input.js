"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useInput = void 0;
const React = __importStar(require("react"));
const react_hookify_1 = require("react-hookify");
const input_1 = require("./input");
const useInput = (initValue) => {
    const [value, setInternalValue] = React.useState(initValue !== null && initValue !== void 0 ? initValue : "");
    const { Component, setProps } = (0, react_hookify_1.useComponent)(input_1.Input, {
        value: value,
        onChange: ({ target: { value } }) => {
            setInternalValue(value);
            setProps({ value });
        },
    });
    const setValue = (value) => {
        setProps({ value });
    };
    return React.useMemo(() => ({
        Component,
        value,
        setValue,
    }), [value]);
};
exports.useInput = useInput;
//# sourceMappingURL=use-input.js.map