import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai';
import { Input,Form} from 'antd';
import { Avatar,Button,Space,Row,Col } from 'antd';
import '../components/Profile.css'
import {Select} from 'antd';
const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
export const Profile = () => {
  const [form] = Form.useForm();

  return (
    <div>
        {/* <div style={{display:'flex'}}>
        <Avatar className="logo" size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }} icon={<AiOutlinePlus style={{color:'#B8BABC'}}/>}/>
        <div style={{marginLeft:20,marginTop:40}}>
        <h5  style={{display:'inline',fontWeight:500}}>Company Logo</h5>
        <p  style={{paddingTop:0,marginTop:0,fontSize:14}}>Logo ratio shoud be 1:1 and should be 120px X 120 px</p>
        </div>
        </div><br/> */}
        <Row>
    <Col span={18} push={3}>
    <h5 style={{marginTop:35}}>Company Logo</h5>
        <p  style={{lineHeight:0.1,fontSize:14}}>Logo ratio shoud be 1:1 and should be 120px X 120 px</p>
    </Col>
    <Col span={6} pull={18}>
    <Avatar className="logo" size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }} icon={<AiOutlinePlus style={{color:'#B8BABC'}}/>}/>
    </Col>
  </Row>

        <div className="row1">
        <div className="column1">
        
        <Form {...layout} form={form} name="control-hooks">
        <Form.Item 
         name="Company Name"
         rules={[
          {
            required: true,
          },
        ]}
      >
        <Input placeholder='Company Name' className='Input'/>
      </Form.Item>

      <Form.Item
        name="Business Category"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select className='select' style={{width:750,marginLeft:'3rem'}} placeholder="Select Business Category" >
          <Option value="1">xyx</Option>
          <Option value="2">xyz</Option>
        </Select>
      </Form.Item>

    
      <Form.Item 
         name="Company Email"
         rules={[
          {
            required: true,
          },
        ]}
      >
        <Input className='Input' placeholder='Company Email Address'/>
      </Form.Item>

      <Form.Item
        name="State"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select className='select' style={{width:750,marginLeft:'3rem'}}
          placeholder="Select State"
          
        >
          <Option value="1">xyx</Option>
          <Option value="2">xyz</Option>
        </Select>
      </Form.Item>

      <Form.Item 
         name="GST Number"
         rules={[
          {
            required: true,
          },
        ]}
      >
        <Input className='Input' placeholder='GST Number'/>
      </Form.Item>
      


      
</Form>
 </div>
        <div className="column1">
        
        <Form {...layout} form={form} name="control-hooks">

        <Form.Item name="Website">
        <Input className='Input' placeholder='Website'/>

      </Form.Item>

      <Form.Item
        name="Facility Management Company"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select className='select' style={{width:750,marginLeft:'3rem'}}
          placeholder="Select Facility Management Company"
          
        >
          <Option value="1">xyx</Option>
          <Option value="2">xyz</Option>
        </Select>
      </Form.Item>

    
      <Form.Item 
         name="Moblie Number"
         rules={[
          {
            required: true,
          },
        ]}
      >
        <Input className='Input' placeholder='Moblie Number'/>
      </Form.Item>
 <div style={{display:'flex'}}>
    <Form.Item
        name="City"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select className='select' style={{width:480,marginLeft:'3rem'}}
          placeholder="Select City"
          
        >
          <Option value="1">xyx</Option>
          <Option value="2">xyz</Option>
        </Select>
      </Form.Item>

      <Form.Item 
         name="Pincode"
         rules={[
          {
            required: true,
          },
        ]}
      >
        <Input className='Input1' placeholder='Pincode'/>
      </Form.Item>
 </div>
      <Form.Item name="Fax Number">
        <Input className='Input' placeholder='Fax Number'/>
      </Form.Item>
      {/* <Form.Item {...tailLayout}>
        <Button className='save' type="primary" htmlType="submit" >
          Save 
        </Button>
      </Form.Item> */}
</Form>




        </div>
     
        </div> 
        
    </div>
    
  )
}


export default Profile;