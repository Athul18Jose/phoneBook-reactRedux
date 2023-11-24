import React, { useState } from 'react'
import { MDBInput,MDBBtn } from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { updateUser } from '../Redux/userSlice';



function Edit() {

  const {id}=useParams()


  const users = useSelector((state)=>state.users);
  const existUser = users.find(f => f.id === parseInt(id))
  console.log(users,id);
  console.log(existUser);
  const {name,email,phone} = existUser;

  const [uname,setName] = useState(name)
  const [umail,setEmail] = useState(email)
  const [uphone,setPhone] = useState(phone)

  const dispatch =useDispatch()
  const navigate = useNavigate()

  const handleUpdate=(e)=>{
    e.preventDefault();
    dispatch(updateUser({
      id : id,
      name : uname,
      email: umail,
      phone: uphone
    }))
    alert("Contact Updated Successfull")
    navigate('/')
  }

  return (
    <>
     <div className="container">
        <h3 className='text-center m-3'>EDIT CONTACT DETAILS</h3>
        <div className="container form w-50">
            <MDBInput onChange={(e)=>setName(e.target.value)} value={uname} label='Name' id='formControlLg' type='text' size='lg' />
            <br />
            <MDBInput onChange={(e)=>setPhone(e.target.value)} value={uphone} label='Phone Number' id='formControlLg' type='text' size='lg' />
            <br />
            <MDBInput onChange={(e)=>setEmail(e.target.value)} value={umail} label='E-mail' id='formControlLg' type='text' size='lg' />
            <br />
            
            <div className='text-center m-3'>
            <MDBBtn className='btn-success' onClick={handleUpdate}> 
              <i className='fa-solid fa-user-plus'></i>Update
              </MDBBtn>
            </div>
        </div>
      </div>
    </>
  )
}

export default Edit