"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Radio = void 0;
const react_1 = __importDefault(require("react"));
const Radio = ({ inputProps, labelProps, name, value, onClick, }) => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("input", Object.assign({ type: "radio", name: name, onChange: () => { }, onClick: () => {
                if (onClick)
                    onClick(value);
            } }, inputProps)),
        react_1.default.createElement("label", Object.assign({ onClick: () => {
                if (onClick)
                    onClick(value);
            } }, labelProps))));
};
exports.Radio = Radio;
//# sourceMappingURL=radio.js.map