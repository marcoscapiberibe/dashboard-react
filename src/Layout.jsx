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
      <section class='charts'>
        <div class='barrasimples'>
          <p>Barras</p>
          <ApexChartBarrasSimples class='barrasimples-item' />
        </div>
        <div class='scatter'>
          <p>Scatter</p>
        <ApexChartScatter />
        </div>
      </section>
    </>
  )
}

export default Body;