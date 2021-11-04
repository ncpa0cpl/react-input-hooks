import { RadioOptions } from "./radio-group.types";
import { UseRadioResult } from "./use-radio.types";
export declare const useRadio: <T>(options: RadioOptions<T>, initialOption?: number | undefined) => UseRadioResult<T>;
