"use client";

import { useState, useEffect } from "react";
import Image from 'next/image'
import Navbar from "../../UI/Navbar";
import Footer from "../../UI/Footer";
import { useRouter } from "next/router";

export default function ConclusaoPage() { /* TODO: Receber veiculo */
    const [usuario, setUsuario] = useState(null);
    const router = useRouter();

    const handleRedirect = (e) => {
    e.preventDefault(); // Evita recarregamento da página
    router.push("/dashboard/veiculos");
    };

    useEffect(() => {       
        // Simulando autenticação (Funcionário ou Gerente)
        const tipoUsuario = localStorage.getItem("tipoUsuario");
        setUsuario(tipoUsuario);
        
        if (tipoUsuario !== "gerente") {
            router.push("/dashboard/veiculos"); // Redireciona quem não é gerente para a tela de veículos
        }
    }, [router]);
    

    if (usuario !== 'gerente') {
        return null; // Não renderiza nada se não for gerente
    }
    
    return (
        <div className="w-[100%] flex flex-col h-[100%] bg-[#3F3F3F]">
            {/* Cabeçalho */}
            <Navbar usuario={usuario} />


            {/* Campo de busca e botão de adicionar veículo */}
            <div className="w-3/4 justify-center mx-auto px-[50px] pt-[35px] pb-[120px] bg-[#F1F1F1] space-y-10">
                
                {/* Título da página / Breadcrumbs [TODO!!!] */}
                <h1 className="text-[25px] font-light text-gray-700 mt-[-5px] mb-[-15px]">Conclusão de Venda</h1> {/* Placeholder */}

                <hr className="border-2 border-[#AFAFAF]"/>
                
                <div className="flex flex-col space-y-10 h-screen justify-center items-center">
                    <Image 
                        src="/conc_carro.svg" 
                        alt="Veículo" 
                        width={150} 
                        height={150} 
                    />
                    <h1 className="font-bold text-center text-black text-[60px]">Venda Realizada!</h1>
                    <p className="font-medium text-center text-black text-[40px]">Nome do Veiculo - Nº do Chassi</p>
                    {/* {veiculo.nome} - {veiculo.chassi} */}
                    <button 
                        className="bg-[#9A1C1F] text-white font-bold px-[20px] py-[5px] rounded-xl text-[40px]"
                        onClick={handleRedirect}
                    >
                        Retornar à Lista de Veículos
                    </button>
                </div>
            </div>
            

            {/* Rodapé com informações do usuário */}
            <Footer usuario={usuario} />
        </div>
    );
}