import React from 'react'
import { Layout,Button,Avatar,Input} from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { NavLink, Outlet } from 'react-router-dom'

export const SideNav = () => {

  const {Search} = Input;
  const {Sider} = Layout;
  return (
    <div style={{display:"flex"}}>
    <Layout className='layout' style={{flexGrow:0.1}} >
    <Sider className='sider'>
     <h1>Company Name</h1>
     <Search className='search' placeholder="search modules" />
     <h3>Client Master</h3>
     <NavLink to="client-list"><Button className='btn1'>View Client</Button></NavLink><br/>
     <NavLink to='add-client/create-profile'><Button className='btn2'>Add Client</Button></NavLink>
     <div className='profile'>
     <div className='row' style={{display:'flex'}}>
     <div className='col left' style={{marginTop:10}}>
     <Avatar size="large" icon={<UserOutlined />} />
     </div>
     <div className='col right' style={{width:'100%',marginTop:10,marginRight:20}}>
     <p style={{lineHeight:0.1}}>James Button</p>
     <p>iames@thevouch.digital</p>
     </div>
     </div>
     </div>
    </Sider>
    </Layout>
    <Outlet/>
    </div >
  )
}


