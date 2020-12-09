import {useState,useMemo} from 'react'

export const useMethods = (initialValue, methods) => {
    const [value, setValue] = useState(initialValue);
    const boundMethods = useMemo(
        () => Object.entries(methods).reduce(
            (methods, [name, fn]) => {
                const method = (...args) => {
                    //(例如此时传入pop,相当于闭包pop(value,...args)执行完结果再set给Value)
                    setValue(value => fn(value, ...args));  
                };
                methods[name] = method;
                return methods;
            },
            {}
        ),
        [methods]
    );
    return [value, boundMethods];
};