import useArray from './useArray'

export default function LayerHookApp() {
    const [value, { push }] = useArray();
    console.log('value', value);  
    return (
      <button onClick={() => push('测试')}>点击测试</button>
    )
  }