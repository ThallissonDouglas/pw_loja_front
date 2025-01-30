"use client";

import { useState, useEffect } from "react";
import Navbar from "../UI/Navbar";
import Footer from "../UI/Footer";
import HistList from "./HistList";
import { redirect } from "next/navigation";

export default function HistoricoPage() {
    const [usuario, setUsuario] = useState(null);
    const [historico, setHistorico] = useState([]);

    useEffect(() => {       
        // Simulando autenticação (Funcionário ou Gerente)
        const tipoUsuario = localStorage.getItem("tipoUsuario");
        setUsuario(tipoUsuario);
        
        if (tipoUsuario !== "gerente") {
            redirect("/dashboard/veiculos"); // Redireciona quem não é gerente para a tela de veículos
        }

        // Carregando o histórico do arquivo JSON
        fetch("/historico.json")
            .then((res) => res.json())
            .then((data) => {
                console.log("Histórico carregado:", data);
                setHistorico(data);
            })
            .catch((error) => console.error("Erro ao carregar histórico:", error));
    }, []);
    

    if (usuario !== 'gerente') {
        return null; // Não renderiza nada se não for gerente
    }
    
    return (
        <div className="w-[100%] flex flex-col h-[100%] bg-[#3F3F3F]">
            {/* Cabeçalho */}
            <Navbar usuario={usuario} />


            {/* Campo de busca e botão de adicionar veículo */}
            <div className="w-3/4 justify-center mx-auto px-[50px] pt-[35px] pb-[80px] bg-[#F1F1F1] space-y-10">
                
                {/* Título da página / Breadcrumbs [TODO!!!] */}
                <h1 className="text-[25px] font-light text-gray-700 mt-[-5px] mb-[-15px]">Histórico</h1> {/* Placeholder */}

                <hr className="border-2 border-[#AFAFAF]"/>
                
                {/* Lista de Histórico */}
                <HistList historico={historico} />
            </div>
            

            {/* Rodapé com informações do usuário */}
            <Footer usuario={usuario} />
        </div>
    );
}