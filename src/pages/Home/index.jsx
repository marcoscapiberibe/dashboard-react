import React from "react";
import "./Home.css";
import Filtro from "./filtro.svg";

const Home = () => {
    return (
        <>
            <section className="conteudo">
                <div className="conteudo-principal">
                    <h1 className="titulo">Dashboard</h1>
                    <p className="subtitulo">Desafio Técnico Frontend</p>
                </div>
                <div className="filtro">
                    <img src={Filtro} alt="icone de filtro" />
                    <p>Filtrar</p>
                </div>
            </section>
        </>
    )
}

export default Home;