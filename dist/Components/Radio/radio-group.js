"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RadioGroup = void 0;
const react_1 = __importDefault(require("react"));
const radio_1 = require("./radio");
const RadioGroup = ({ options, name, inputStyle, labelStyle, selected, onChange, }) => {
    const [checkedIndex, setCheckedIndex] = react_1.default.useState(undefined);
    const [checkedOption, setCheckedOption] = react_1.default.useState(undefined);
    const handleRadioClick = (value) => {
        const index = Number(value);
        const opt = options[index];
        if (opt) {
            setCheckedIndex(index);
            setCheckedOption(opt);
            if (onChange)
                onChange(opt.value, index);
        }
    };
    react_1.default.useEffect(() => {
        if (selected === undefined) {
            setCheckedIndex(undefined);
            setCheckedOption(undefined);
            if (onChange)
                onChange(undefined, -1);
            return;
        }
        if (selected !== checkedIndex)
            handleRadioClick(selected);
    }, [selected]);
    react_1.default.useEffect(() => {
        if (!checkedIndex)
            return;
        const opt = options[checkedIndex];
        if (!opt)
            return;
        if (opt !== checkedOption) {
            handleRadioClick(checkedIndex);
        }
    }, [options]);
    return (react_1.default.createElement(react_1.default.Fragment, null, options.map((opt, index) => (react_1.default.createElement(radio_1.Radio, { key: index, name: name, onClick: handleRadioClick, value: `${index}`, inputProps: {
            checked: index === checkedIndex,
            style: inputStyle,
        }, labelProps: { children: opt.label, style: labelStyle } })))));
};
exports.RadioGroup = RadioGroup;
//# sourceMappingURL=radio-group.js.map