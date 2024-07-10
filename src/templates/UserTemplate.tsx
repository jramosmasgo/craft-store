import React from 'react'
import Header from '../components/template/Header'
import './userTemplate.css';
import { Outlet } from 'react-router-dom';


const UserTemplate: React.FunctionComponent = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default UserTemplate