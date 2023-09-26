import React from 'react'
import Header from './header'
import Footer from './footer'
import { BsFillTelephoneFill } from 'react-icons/bs'
import logoImg from "../images/logo/cropped-Care-Arabian-01 1.svg"
const Layout = ({children}) => {
  return (
    <>
      <Header logo = {logoImg} icon = {<BsFillTelephoneFill />}/>
      {children}
      <Footer logo = {logoImg} icon = {<BsFillTelephoneFill />}/>
    </>
  )
}

export default Layout
