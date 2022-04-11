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
          <div className="grafico-titulo">
            <p>Barras</p>
            <div className='img-title'></div>
          </div>
          <ApexChartBarrasSimples className='barrasimples-item' />
        </div>

        <div class='scatter'>
          <div className='grafico-titulo'>
            <p>Scatter</p>
            <div className='img-title'></div>
          </div>
          <ApexChartScatter />
        </div>
      </section>
    </>
  )
} 

export default Body;