import React from 'react'
import {Routes,Route} from "react-router-dom";
import { Clientlist } from '../pages/Clientlist';
import { Login } from '../pages/Login';
import {AddClient} from '../pages/AddClient'
import { SideNav } from '../components/SideNav';
import {Payment} from '../components/Payment'

const Router = () => {
  return (
    <div>
      
            <Routes>
                <Route path='/' element={<Login/>} />

                <Route path="/client" element={<SideNav/>}>
                  
                <Route index  element={<Clientlist/>}/>
                <Route path='client-list' element={<Clientlist/>}/>
                <Route path='add-client/create-profile' element={<AddClient/>}/>
                <Route path='payment' element={<Payment/>}/>
                </Route>
            </Routes>
    
    </div>
  )
}

export default Router