import React from 'react';
import Header from "./components/Header";
import './index.css'
import Home from './pages/Home'
import ApexChartBarrasSimples from './pages/ApexCharts/ApexChartBarrasSimples'
import ApexChartScatter from './pages/ApexCharts/ApexChartScatter'




const Body = (props) => {
  return (
    <>
      <Header />
      <Home />
      <section className='charts'>

        <div className='barrasimples'>
          <p className="barras-titulo">Barras</p>
          <ApexChartBarrasSimples className='barrasimples-item' />
        </div>

        <div class='scatter'>
          <p className='scatter-titulo'>Scatter</p>
          <ApexChartScatter />
        </div>
      </section>
    </>
  )
}

export default Body;