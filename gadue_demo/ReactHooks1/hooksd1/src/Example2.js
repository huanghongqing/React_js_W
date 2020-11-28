import React, { useState } from 'react';

function Example2(){
    //使用usestae不能存在于条件语句里，必须以一致顺序使用  使用 Hook 的时候，请在函数组件顶部使用
    const  [age,setAge]=useState(18)
    const  [sex,setSex]=useState('male')
    const  [work,setWork]=useState('front end')
    return(
        <div>
            <p>{age}</p>
            <p>{sex}</p>
            <p>{work}</p>
        </div>
    )
}
 
export default Example2;