import React, { useMemo, useEffect, useState } from 'react';
import '../components/Add.css'
import { AudioOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { Link, NavLink } from 'react-router-dom'
import { Profile } from './Profile';
import {AiOutlineMenu} from 'react-icons/ai'
import { Steps,Breadcrumb,message,Drawer,Avatar,Input } from 'antd';
import Payment from './Payment';
import { UserOutlined } from '@ant-design/icons'



const suffix = (
  <AudioOutlined style={{ fontSize: 16, color: '#1890ff', }} />
);


const Add = () => {

 
  const { Search } = Input;
  const steps = useMemo(() => [
    {
      title: 'Create Profile',
      content:<Profile/>,
    },
    {
      title: 'Payment Setup',
      content: <Payment/>,
    },
    // {
    //   title: 'Theme Setup',
    //   content: 'Last-content',
    // },
  ],[]);


  const [current, setCurrent] = useState(0);
  
  
  const onChangee = (value) => {
    console.log('onChangee:', value);
    setCurrent(value);
  };
  const next = () => {
    items[current+1].disabled = false;
    setCurrent(current => current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = useMemo(() => steps.map((item, index) => {

    if (index === 0) {
      return {
        key: item.title,
        title: item.title,
        disabled: false,
      }
    }
    else {
      return {
        key: item.title,
        title: item.title,
        disabled: true,
      }
    }

  }),[]) ;

   console.log(items)

   useEffect(() =>{
    return () => {
      console.log("add client unmounted");
      items.map((item,index) => {
        if(index === 0)
        {return item}

       return item.disabled = true
      })
    }
   },[])

   const activeStyle ={color:'#B8BABC'};
   
   const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState('left');
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };
   

  return (
    <>
    <div style={{float:'left'}}>
    <div className='open'>
        <AiOutlineMenu onClick={showDrawer} style={{fontSize:32,margin:20}}/>
      <Drawer

        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
      >
    
      
     <h1>Company Name</h1>
     <Search className='search' placeholder="search modules" />
     <h3>Client Master</h3>
     <Button className='btn1' style={{width:'100%'}}>View Client</Button><br/>
     <NavLink to='add-client' ><Button style={{width:'100%'}} className='btn2'>Add Client</Button></NavLink>
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
    
      </Drawer>
      </div>
         <div>
          <h1 style={{fontSize:24,marginLeft:25,color:' #030037'}}>Add Client
          <Breadcrumb>
          <Breadcrumb.Item>Client Master</Breadcrumb.Item>
          <Breadcrumb.Item>Add Client</Breadcrumb.Item>
          <Breadcrumb.Item>
          <NavLink to="/" activeStyle={activeStyle}>{items[current].title}</NavLink>
          </Breadcrumb.Item>
          </Breadcrumb>
          </h1>
          </div>

         
      <Steps size='small' current={current} items={items}
        onChangee={onChangee} className="site-navigation-steps" type="navigation" />
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button className='next' type="primary" onClick={() => next()}>
            Save & Continue
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button style={{marginLeft:25}} type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button 
            style={{
              margin: '0 8px',
              marginLeft:25,
            }}
            onClick={() => prev()}
          >
            Previous
          </Button>
        )}
      </div>
      </div>
    </>
  )

}

export default Add;