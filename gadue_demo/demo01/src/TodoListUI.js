import React from  'react';
import {Input,Button,List} from 'antd'
import 'antd/dist/antd.css'
//没有业务逻辑，只有UI，无状态组件,所以不用class定义了。直接上一个箭头函数,作为无状态组件性能好很多
const TodoListUI=(props)=>{ //传递一个props过来,就是在render里传递的属性
    return(
        <div style={{margin:'10px'}}>
            <div>
                <Input 
                    placeholder={props.inputValue} 
                    style={{width:'250px',marginRight:'10px'}} 
                    onChange={props.changeInputValue}
                    value={props.inputValue}
                />
                <Button type='primary' onClick={props.clickBtn} >add</Button> 
            </div>
            <div  style={{margin:'10px',width:'300px'}}>
                <List   bordered
                        dataSource={props.list}
                        //onclick 句柄内部用箭头函数来调用deleteItem而非再次bind(index),然后箭头函数不要接受index
                        //直接用外层renderItem的箭头函数的index参数
                        renderItem={(item,index)=>(
                                <List.Item 
                                    onClick={
                                        ()=>{
                                            props.deleteItem(index)
                                        }
                                    }
                                >       
                                {item}
                                </List.Item>
                        )}
                />
            </div>
        </div> 
    );
}

export default TodoListUI;
// class TodoListUI extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {  }
//     }
//     render() { 
//         return ( 
//             <div style={{margin:'10px'}}>
//             <div>
//               <Input 
//                   placeholder={this.props.inputValue} 
//                   style={{width:'250px',marginRight:'10px'}} 
//                   onChange={this.props.changeInputValue}
//                   value={this.props.inputValue}
//               />
//               <Button type='primary' onClick={this.props.clickBtn} >add</Button> 
//             </div>
//             <div  style={{margin:'10px',width:'300px'}}>
//               <List   bordered
//                       dataSource={this.props.list}
//                       //onclick 句柄内部用箭头函数来调用deleteItem而非再次bind(index),然后箭头函数不要接受index
//                       //直接用外层renderItem的箭头函数的index参数
//                       renderItem={(item,index)=>(
//                             <List.Item 
//                                 onClick={
//                                     ()=>{
//                                         this.props.deleteItem(index)
//                                     }
//                                 }
//                             >       
//                             {item}
//                             </List.Item>
//                       )}
//               />
//             </div>
//         </div> 
//          );
//     }
// }
 
