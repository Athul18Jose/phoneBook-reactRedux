import React, { useState } from 'react'
import { MDBInput,MDBBtn } from 'mdb-react-ui-kit';
import { addUser } from '../Redux/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';



function Add() {

  const users = useSelector((state)=>state.users)
  const navigate = useNavigate()

  const [name,setName] = useState('')
  const [phone,setPhone] = useState('')
  const [email,setEmail] = useState('')

  const dispatch = useDispatch()
  
  const handleSubmit =(e)=>{
    e.preventDefault();
   
    dispatch(addUser({id:users[users.length -1].id +1 ,name, phone, email}))
    alert("New contact added Successfull")
    navigate('/')
  }


  return (
    <>
     <div className="container">
        <h3 className='text-center m-3'>ADD NEW CONTACT</h3>
        <div className="container form w-50">
        <MDBInput onChange={(e)=>setName(e.target.value)} label='Name' id='formControlLg' type='text' size='lg' />
            <br />
          <MDBInput onChange={(e)=>setPhone(e.target.value)} label='Phone Number' id='formControlLg' type='text' size='lg' />
            <br />
            <MDBInput onChange={(e)=>setEmail(e.target.value)} label='E-mail' id='formControlLg' type='text' size='lg' />
            <br />
            <div className='text-center m-3'>
            <MDBBtn onClick={handleSubmit}> 
              <i className='fa-solid fa-user-plus'></i>Add
              </MDBBtn>
            </div>
        </div>
      </div>
    </>
  )
}

export default Add