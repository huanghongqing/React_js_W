function Comp(props){  //自定义组件必须大写开头
    return(
        <button>{props.children}</button>
    )
}

export default Comp