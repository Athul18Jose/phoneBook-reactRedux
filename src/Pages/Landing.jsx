import React from 'react'
import { MDBBtn } from 'mdb-react-ui-kit';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userDelete } from '../Redux/userSlice';

function Landing() {

  const users = useSelector((state)=>state.users)
  console.log(users);

  const dispatch = useDispatch()

  const handleDelete =(id) =>{
      dispatch(userDelete({id :id}));
      alert("Contact Deleted Successfull")
  }
  return (
    <>
  <Row>
    <Col className='d-flex justify-content-center'>
    <img height={'600px'} src="https://thumbs.dreamstime.com/b/phone-book-concept-public-35018949.jpg" alt="" />
    </Col>

    <Col  className=' mt-5'>
    <h1>
      PHONEBOOK
    </h1>
<br/>
    <p style={{textAlign:'justify',marginRight:'10px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis explicabo ducimus libero in perspiciatis dolorum quasi fuga commodi mollitia dolore odio, veniam, nam quaerat facere id voluptatem voluptates consectetur nobis.
    Eaque facilis voluptatem ipsa ex voluptatibus rerum, consectetur nemo itaque quos dolorum necessitatibus ea tenetur, ipsum aspernatur reiciendis? Minus officiis iure impedit iusto autem pariatur ab consequuntur, quaerat blanditiis obcaecati.
    Molestiae mollitia natus magni, enim impedit, esse nemo laboriosam rerum amet dicta, nobis veniam tempora harum aliquam! Quis veniam ipsa soluta accusantium, possimus quo hic odio a, eligendi labore totam!</p>
<Link to={'/add'}>
    <MDBBtn>Add <i class="fa-solid fa-plus"></i></MDBBtn>
    </Link>
    </Col>
  </Row>

  <div className='table my-5 container'>
          <MDBTable>
            <MDBTableHead>
              <tr>
                <th scope='col'>Id</th>
                <th scope='col'>Name</th>
                <th scope='col'>Phone number</th>
                <th scope='col'>Email</th>
                
                <th className='ms-5' scope='col'>Action</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
             
                  {
                    users?.map((user,index)=>(
                      <tr>
                    <th scope='row'>{index+1}</th>
                    <td>{user.name}</td>
                    <td>{user.phone}</td>
                    <td>{user.email}</td>
                    <td>
                      <div>
                        <Link to={`/edit/${user.id}`}>
                        <MDBBtn className='btn-success'><i className='fa-solid fa-pen '></i></MDBBtn>
                        </Link>                        
                        <MDBBtn onClick={()=>handleDelete(user.id)} className='mx-3 btn-danger'><i className='fa-solid fa-trash'></i></MDBBtn>
                      </div>
                    </td>
                  </tr>
                    ))
                  }
               

            </MDBTableBody>
          </MDBTable>
        </div>
    </>
  )
}

export default Landing