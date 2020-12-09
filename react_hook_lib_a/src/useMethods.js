import {useState,useMemo} from 'react'

export const useMethods = (initialValue, methods) => {
    const [value, setValue] = useState(initialValue);
    const boundMethods = useMemo(
        () => Object.entries(methods).reduce(
            (obj, [name, fn]) => {
                const method = (...args) => {
                    //(例如此时传入pop,相当于闭包pop(value,...args)执行完结果再set给Value)
                    setValue(value => fn(value, ...args));  
                };
                obj[name] = method;
                return obj;
            },
            {}
        ),
        [methods]
    );
    return [value, boundMethods];
};