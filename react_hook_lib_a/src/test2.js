import useTest from './test1'
import invariant from 'invariant'

function push(state, item) {
    return state.concat(item);
}
const useArray2 = (initialValue = []) => {
    invariant(Array.isArray(initialValue), 'initialValue must be an array');
    return useTest(initialValue, push);
};

export  default useArray2