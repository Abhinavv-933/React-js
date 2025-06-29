import React, { Component } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'


export class Layout extends Component {
  render() {
    return (
      <>
      <Header />
      <Outlet /> 
      <Footer />
      
      </>
    )
  }
}
//outlet k andar chize change hoti rhti h tbhi outlet use he krte h like 
// outlet k andar home,about us , contact us hota h jisme diff diff value hoti h
export default Layout