import React, { useState,useEffect,useCallback } from 'react';

function useWinSize(){
    const [size,setSize]=useState({
        width:document.documentElement.clientWidth,
        height:document.documentElement.clientHeight,
    })
    //const fnA = useCallback(fnB, [a])
    //useCallback会将我们传递给它的函数fnB返回
    //并且将这个结果缓存；当依赖a变更时，会返回新的函数。而useMemo是缓存变量，并在变量修改时，触发。
    //使用场景是：有一个父组件，其中包含子组件，子组件接收一个函数作为props；通常而言，如果父组件更新了，子组件也会执行更新；
    //但是大多数场景下，更新是没有必要的，我们可以借助useCallback来返回函数，然后把这个函数作为props传递给子组件；这样，子组件就能避免不必要的更新。
    //如果你的function会作为props传递给子组件，请一定要使用 useCallback 包裹，对于子组件来说，
    //如果每次render都会导致你传递的函数发生变化，可能会对它造成非常大的困扰。同时也不利于react做渲染优化。
    const onResize= useCallback(()=>{
        setSize(
            {
                width:document.documentElement.clientWidth,
                height:document.documentElement.clientHeight,               
            }
        )
    },[])//只执行一次，依赖项为空

    useEffect(
        ()=>{
            window.addEventListener('resize',onResize)
            return(
                ()=>{
                    window.removeEventListener('resize',onResize)
                }
            )
        }
    )

    return size

}

function Example9(){
    const size=useWinSize()
    return (
        <div>
            page size :{size.width}*{size.height}
        </div>
    )
}

export default Example9