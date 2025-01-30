'use client';

import { useState, useEffect } from "react";
import "./styles.css";
import Navbar from "../UI/Navbar";
import Footer from "../UI/Footer";
import VeicList from "./VeicList";

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
      <Navbar usuario={usuario} />

      {/* Campo de busca e botão de adicionar veículo */}
      <div className="w-3/4 justify-center mx-auto px-[50px] pt-[35px] pb-[120px] bg-[#F1F1F1] space-y-10">
        
        {/* Título da página / Breadcrumbs [TODO!!!] */}
        <h1 className="text-[25px] font-light text-gray-700 mt-[-5px] mb-[-15px]">Veículos</h1> {/* Placeholder */}

        <hr className="border-2 border-[#AFAFAF]"/>
        
        <VeicList veiculos={veiculos} usuario={usuario} />
      </div>
      

      {/* Rodapé com informações do usuário */}
      <Footer usuario={usuario} />
    </div>
  );
}
