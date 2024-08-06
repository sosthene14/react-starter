
import './App.css'
import Home from './app/components/home/Home'
import { message } from 'antd';


function App() {
  const [, contextHolder] = message.useMessage();

  return <>{contextHolder}<Home /></>
}

export default App
