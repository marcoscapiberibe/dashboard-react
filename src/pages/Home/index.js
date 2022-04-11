import React from "react";
import "./Home.css"





const Home = () => {
    return (
        <>
            <section className="conteudo">
                <div className="conteudo-principal">
                    <h1 className="titulo">Dashboard</h1>
                    <p className="subtitulo">Desafio Técnico Frontend</p>
                </div>
                <div className="filtro">
                    <img className='icone-filtro' />
                    <p className="filtro-item">Filtrar</p>
                </div>
            </section>
        </>
    )
}

export default Home;
