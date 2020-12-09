import {useState,useMemo, useCallback} from 'react'

export const useTest = (initialValue, fn) => {
    const [value, setValue] = useState(initialValue);
    const boundMethods={}
    const name=fn.name
    const method=(...args)=>{
        console.log("push...")
        setValue(value => fn(value, ...args));
    }
    boundMethods[name]=method
    return [value, boundMethods];
};

export default useTest