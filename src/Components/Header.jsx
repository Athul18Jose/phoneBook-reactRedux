import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <>
    <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
         <Link to={'/'}>
         <MDBNavbarBrand>
            <img
              src='https://cdn-icons-png.flaticon.com/512/1195/1195412.png'
              height='30'
              alt=''
              loading='lazy'
            />
            PhoneBook
          </MDBNavbarBrand>
         </Link>
        </MDBContainer>
      </MDBNavbar>
    </>
  )
}

export default Header