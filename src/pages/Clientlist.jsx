import React from 'react'
import App from '../components/App'
import { Layout} from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import "../pages/clientlist.css"
import { Input} from 'antd';
import { Button} from 'antd';
const {Sider, Content } = Layout;
const { Search } = Input;
const suffix = (
  <AudioOutlined style={{fontSize: 16,color: '#1890ff', }}/>
);

export const Clientlist = () => {
  return (
    <App/>
  )
}

export default Clientlist;
