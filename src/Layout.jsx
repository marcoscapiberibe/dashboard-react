import React from 'react';
import Header from "./components/Header";
import './index.css'
import Home from './pages/Home'
import ApexChartBarrasSimples from './pages/ApexCharts/ApexChartBarrasSimples'
import ApexChartScatter from './pages/ApexCharts/ApexChartScatter'
import Simbolo from './images/simbolo.png'



const Body = (props) => {
  return (
    <>
      <Header />
      <Home />
      <section className='charts'>
        
        <div className='barrasimples'>
          <p>Barras</p>
          <img src={Simbolo} className='icone-simbolo'/>
          <ApexChartBarrasSimples className='barrasimples-item' />
          </div>
        
        <div class='scatter'>
          <p>Scatter</p>
          <img src={Simbolo} className='icone-simbolo'/>
        <ApexChartScatter />
        </div>
      </section>
    </>
  )
}

export default Body;