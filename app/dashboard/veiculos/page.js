'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import "./styles.css";

export default function VeiculosPage() {
  const [usuario, setUsuario] = useState(null);
  const [veiculos, setVeiculos] = useState([]);

  useEffect(() => {
    // Simulando autenticação (Funcionário ou Gerente)
    const tipoUsuario = localStorage.getItem("tipoUsuario");
    setUsuario(tipoUsuario);

    // Carregando os veículos do arquivo JSON
    fetch("/veiculos.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("Veículos carregados:", data); // Debug para verificar se os dados são carregados
        setVeiculos(data);
      })
      .catch((error) => console.error("Erro ao carregar veículos:", error));
  }, []);

  return (
    <div className="w-[100%] flex flex-col h-[100%] bg-[#3F3F3F]">
      {/* Cabeçalho com espaço reservado para a logo */}
      <header className="text-white  text-1xl ">
        <div className="flex flex-col items-start justify-start pl-9 pb-4 bg- bg-[url('../public/images/banner_automotivo.png')] bg-center">
          <div className="flex flex-col items-center justify-center py-2">
            <h1 className="text-[75px] font-extrabold text-red-600 mb-[-25px] text-center">LIMA </h1>
            <h2 className=" text-black text-[30px] font-extralight text-center">AUTOMÓVEIS</h2>
          </div>
        </div>
        <nav className="flex flex-row items-center justify-center bg-gradient-to-b from-[#CE5A60] via-[#9A1C1F] to-[#721D1A]">
          <button className="nav-button">Veículos</button>
          {usuario === "gerente" && (
            <>
              <button className="nav-button">Histórico</button>
              <button className="nav-button">Funcionários</button>
            </>
          )}
        </nav>
      </header>

      {/* Campo de busca e botão de adicionar veículo */}
      <div className="w-3/4 justify-center mx-auto px-[50px] pt-[35px] pb-[80px] bg-[#F1F1F1] space-y-10">
        
        {/* Título da página / Breadcrumbs [TODO!!!] */}
        <h1 className="text-[25px] font-light text-gray-700 mt-[-5px] mb-[-15px]">Veículos</h1> {/* Placeholder */}

        <hr className="border-2 border-[#AFAFAF]"/>
        {/* Barra de pesquisa */}
        <div className="flex flex-row items-center justify-start space-x-4">
          <div className="bg-white flex fleax-row items-center justify-center space-x-4 grow py-1 px-2 border-[3px] border-[#AFAFAF] rounded-xl">
              <Image 
                src='/search_icon.svg'
                alt="Search Icon"
                height={25}
                width={25}
              />
              <input type="text" placeholder='Pesquisa' className="grow text-[25px] font-bold text-black placeholder-[#6A6A6A] focus:outline-none my-[-5px] bg-transparent"/>
            </div>
            {usuario === "gerente" && <button className="bg-[#9A1C1F] text-white font-bold px-[20px] py-[3px] rounded-xl text-[24px]">Adicionar Veículo</button>}
        </div>

        {/* Lista de veículos */}
        <main className="veiculos-container">
          {veiculos.length > 0 ? (
            veiculos.map((carro) => (
              <div 
                key={carro.id} 
                className="flex flex-row items-center justify-start space-x-5 py-3 pr-4 bg-white rounded-xl hover:bg-[#F9F9F9] hover:cursor-pointer" 
              >
                <div className=" overflow-hidden flex items-center justify-center"> 
                  {/* src={`/dashboard/veiculos/${carro.imagem}`} */}
                  <Image 
                    src='/images/carro_template.png'
                    width={500} 
                    height={500} 
                    alt="Imagem do veículo" 
                />

                </div>
                <div className="space-y-2">
                  <div className="font-bold text-[24px] items-start flex flex-row justify-between ">
                    <p className="">{carro.nome}</p>
                    <p className="">{carro.valor}</p>
                  </div>
                  <hr className="border-b-[2px] border-[#AFAFAF] "/>
                  <div className="flex flex-wrap justify-normal text-[20px] *:py-2">
                    <div className="w-[14em]">
                      <p className="font-light">Ano/Modelo:</p>
                      <p className="font-bold" >{carro.ano_modelo}</p>
                    </div>
                    <div className="w-[14em]">
                      <p className="font-light">N° do Chassi:</p>
                      <p className="font-bold">{carro.chassi}</p>
                    </div>
                    <div className="w-[14em]">
                      <p className="font-light">KM:</p>
                      <p className="font-bold">{carro.km}</p>
                    </div>
                    <div className="w-[10em]"> 
                      <p className="font-light">Cor:</p>
                      <p className="font-bold">{carro.cor}</p>
                    </div>
                    <div className="w-[10em]">
                      <p className="font-light">Motor:</p>
                      <p className="font-bold">{carro.motor}</p>
                    </div>
                    <div className="w-[10em]">
                      <p className="font-light">Combustível:</p>
                      <p className="font-bold">{carro.combustivel}</p>
                    </div>
                    <div className="w-[10em]">
                      <p className="font-light">Câmbio:</p>
                      <p className="font-bold">{carro.cambio}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="no-vehicles">Nenhum veículo disponível.</p>
          )}
        </main>
      </div>
      

      {/* Rodapé com informações do usuário */}
      <footer className="bg-[#8B0000] text-white py-4 text-[25px] font-normal">
        <div className="flex flex-row items-center justify-center space-x-4">
          <p className="user-role">{usuario === "gerente" ? "Nome do Gerente" : "Nome do Funcionário"}</p>
          <p>•</p>
          <p className="user-id">F12345</p>
          <p>•</p>
          <button 
            className="bg-transparent border-[2px] border-white rounded-lg px-4 hover:bg-white hover:text-[#8B0000] " 
            onClick={() => (window.location.href = "/auth/login")}
          >
            Deslogar
          </button>
        </div>
      </footer>
    </div>
  );
}
