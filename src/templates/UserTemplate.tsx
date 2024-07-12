import React, { useLayoutEffect } from 'react'
import Header from '../components/template/Header'
import './userTemplate.css';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../components/template/Footer';


const UserTemplate: React.FunctionComponent = () => {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return (
    <div className='template'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default UserTemplate