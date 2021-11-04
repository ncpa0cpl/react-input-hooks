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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRadio = void 0;
const react_hookify_1 = require("react-hookify");
const radio_group_1 = require("./radio-group");
const uuid = __importStar(require("uuid"));
const react_1 = __importDefault(require("react"));
const useRadio = (options, initialOption) => {
    const [id] = react_1.default.useState(() => uuid.v4());
    const [selectedValue, setSelectedValue] = react_1.default.useState(undefined);
    const { Component, setProps, currentProps } = (0, react_hookify_1.useComponent)(radio_group_1.RadioGroup, {
        name: id,
        options,
        selected: initialOption,
        onChange: (v, index) => {
            setSelectedValue(() => v);
            setProps({ selected: index });
        },
    });
    const setOptions = (value) => {
        if (Array.isArray(value)) {
            setProps({ options: value });
            return;
        }
        const options = value(currentProps.current.options);
        setProps({ options });
    };
    const selectOption = (optionIndex) => {
        setProps({ selected: optionIndex });
    };
    return react_1.default.useMemo(() => ({
        Component,
        selectedValue,
        setOptions,
        selectOption,
    }), [selectedValue]);
};
exports.useRadio = useRadio;
//# sourceMappingURL=use-radio.js.map