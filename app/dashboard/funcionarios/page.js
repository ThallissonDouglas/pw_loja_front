"use client";

import { useState, useEffect } from "react";
import "./styles.css";
import FuncList from "./FuncList";
import Footer from "../UI/Footer";
import Navbar from "../UI/Navbar";
import { useRouter } from "next/navigation";

export default function FuncionariosPage() {
  const [usuario, setUsuario] = useState(null);
  const [funcionarios, setFuncionarios] = useState([]);
  const router = useRouter();

  useEffect(() => {
    // Simulando autenticação (Funcionário ou Gerente)
    const tipoUsuario = localStorage.getItem("tipoUsuario");
    setUsuario(tipoUsuario);

    if (tipoUsuario !== "gerente") {
      router.push("/dashboard/veiculos"); // Redireciona quem não é gerente para a tela de veículos
    }

    // Carregando os funcionários do arquivo JSON
    fetch("/funcionarios.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("Funcionários carregados:", data);
        setFuncionarios(data);
      })
      .catch((error) => console.error("Erro ao carregar funcionários:", error));
  }, [router]);


  if (usuario !== "gerente") {
    return null; // Não renderiza nada se não for gerente
  }
  
  return (
    <div className="w-[100%] flex flex-col h-[100%] bg-[#3F3F3F]">
      {/* Cabeçalho */}
      <Navbar usuario={usuario} />


      {/* Campo de busca e botão de adicionar veículo */}
      <div className="w-3/4 justify-center mx-auto px-[50px] pt-[35px] pb-[120px] bg-[#F1F1F1] space-y-10">
        
        {/* Título da página / Breadcrumbs [TODO!!!] */}
        <h1 className="text-[25px] font-light text-gray-700 mt-[-5px] mb-[-15px]">Funcionários</h1> {/* Placeholder */}

        <hr className="border-2 border-[#AFAFAF]"/>
        
        {/* Lista de Funcionários */}
        <FuncList funcionarios={funcionarios} />

        <button 
          className="w-[100%] bg-[#9A1C1F] text-white font-bold px-[10px] py-[9px] rounded-xl text-[27px] flex flex-row justify-center items-center space-x-4
          hover:bg-[#D9D9D9] hover:text-[#9A1C1F] hover:stroke-[#9A1C1F] ease-in-out transition-all duration-300"
          onClick={() => {router.push('/dashboard/funcionarios/adicionar')}}
        >
          <p>Adicionar Funcionário</p>
        </button>
      </div>
      

      {/* Rodapé com informações do usuário */}
      <Footer usuario={usuario} />
    </div>
  );
}
