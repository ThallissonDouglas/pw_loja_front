"use client";

import { useState, useEffect } from "react";
import "./styles.css";
import FuncList from "./FuncList";
import Footer from "../UI/Footer";
import Navbar from "../UI/Navbar";

export default function FuncionariosPage() {
  const [usuario, setUsuario] = useState(null);
  const [funcionarios, setFuncionarios] = useState([]);

  useEffect(() => {
    // Simulando autenticação (Funcionário ou Gerente)
    const tipoUsuario = localStorage.getItem("tipoUsuario");
    setUsuario(tipoUsuario);

    // Carregando os funcionários do arquivo JSON
    fetch("/funcionarios.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("Funcionários carregados:", data);
        setFuncionarios(data);
      })
      .catch((error) => console.error("Erro ao carregar funcionários:", error));
  }, []);

  return (
    <div className="w-[100%] flex flex-col h-[100%] bg-[#3F3F3F]">
      {/* Cabeçalho */}
      <Navbar usuario={usuario} />

      {/* Campo de busca e botão de adicionar veículo */}
      <div className="w-3/4 justify-center mx-auto px-[50px] pt-[35px] pb-[80px] bg-[#F1F1F1] space-y-10">
        
        {/* Título da página / Breadcrumbs [TODO!!!] */}
        <h1 className="text-[25px] font-light text-gray-700 mt-[-5px] mb-[-15px]">Funcionários</h1> {/* Placeholder */}

        <hr className="border-2 border-[#AFAFAF]"/>
        
        {/* Lista de Funcionários */}
        <FuncList funcionarios={funcionarios} />
      </div>
      

      {/* Rodapé com informações do usuário */}
      <Footer usuario={usuario} />
    </div>
  );
}
