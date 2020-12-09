import {useMethods} from './useMethods'
import invariant from 'invariant'
// 自定义hook不能放在index.js  里的最外层执行，会报错：“ERROR: TOO MANY RE-RENDERS. REACT LIMITS THE NUMBER OF RENDERS TO PREVENT AN INFINITE LOOP.”
const arrayMethods = {
    push(state, item) {
        return state.concat(item);
    },
    pop(state) {
        return state.slice(0, -1);
    },
    slice(state, start, end) {
        return state.slice(start, end);
    },
    empty() {
        return [];
    },
    set(state, newValue) {
        return newValue;
    },
    remove(state, item) {
        const index = state.indexOf(item);
        if (index < 0) {
            return state;
        }
        return [...state.slice(0, index), ...state.slice(index + 1)];
    }
};

const useArray = (initialValue = []) => {
    invariant(Array.isArray(initialValue), 'initialValue must be an array');
    return useMethods(initialValue, arrayMethods);
};

export  default useArray
