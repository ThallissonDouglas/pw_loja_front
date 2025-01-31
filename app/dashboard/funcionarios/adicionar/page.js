"use client";

import Navbar from "../../UI/Navbar";
import Footer from "../../UI/Footer";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AddFuncPage() {
    const [usuario, setUsuario] = useState(null);
    const router = useRouter();

    const handleRedirect = (e) => {
        e.preventDefault(); // Evita recarregamento da página
        router.push("/dashboard/funcionarios");
    };

    useEffect(() => {       
        // Simulando autenticação (Funcionário ou Gerente)
        const tipoUsuario = localStorage.getItem("tipoUsuario");
        setUsuario(tipoUsuario);
        
        if (tipoUsuario !== "gerente") {
            router.push("/dashboard/veiculos"); // Redireciona quem não é gerente para a tela de veículos
        }
    }, [router]);

    if (usuario !== "gerente") {
      return null; // Não renderiza nada se não for gerente
    }


    return (
        <div className="w-[100%] flex flex-col h-[100%] bg-[#3F3F3F]">
            <Navbar usuario={usuario} />

            <div className="w-3/4 justify-center mx-auto px-[50px] pt-[35px] pb-[120px] bg-[#F1F1F1] space-y-10">
                <h1 className="text-[25px] font-light text-gray-700 mt-[-5px] mb-[-15px]">Funcionários &gt; Adicionar Funcionário</h1>
                <hr className="border-2 border-[#AFAFAF]"/>
                <form className="w-[100%] flex flex-col space-y-4 justify-start items-start text-black">
                    <div className="w-[100%] flex flex-col items-start space-y-1">
                        <p className="font-light text-center text-[20px]">Nome do Usuário:</p>
                        <input 
                            className="font-bold text-[20px] px-2 rounded-xl placeholder:font-bold placeholder-[#6A6A6A] border-[3px] border-[#6A6A6A] w-[50%] h-[40px]" 
                            type="text"
                            placeholder={usuario === "gerente" ? "Nome do Gerente" : "Nome do Funcionário"}
                        />
                    </div>
                    <div className="w-[100%] flex flex-col items-start space-y-1">
                        <p className="font-light text-center text-[20px]">Email:</p>
                        <input 
                            className="font-bold text-[20px] px-2 rounded-xl placeholder:font-bold placeholder-[#6A6A6A] border-[3px] border-[#6A6A6A] w-[50%] h-[40px]" 
                            type="text"
                            placeholder="Usuario@Email.com"
                        />
                    </div>
                    <div className="w-[100%] flex flex-col items-start space-y-1">
                        <p className="font-light text-center text-[20px]">Senha:</p>
                        <input 
                            className="font-bold text-[20px] px-2 rounded-xl placeholder:font-bold placeholder-[#6A6A6A] border-[3px] border-[#6A6A6A] w-[50%] h-[40px]" 
                            type="text"
                            placeholder="Senha"
                        />
                    </div>
                    <div className="w-[100%] flex flex-col items-start space-y-1">
                        <p className="font-light text-center text-[20px]">CPF:</p>
                        <input 
                            className="font-bold text-[20px] px-2 rounded-xl placeholder:font-bold placeholder-[#6A6A6A] border-[3px] border-[#6A6A6A] w-[50%] h-[40px]" 
                            type="text"
                            placeholder="000.000.000-00"
                        />
                    </div>
                    <div className="w-[100%] flex flex-col items-start space-y-1">
                        <p className="font-light text-center text-[20px]">Função:</p>
                        <input 
                            className="font-bold text-[20px] px-2 rounded-xl placeholder:font-bold placeholder-[#6A6A6A] border-[3px] border-[#6A6A6A] w-[50%] h-[40px]" 
                            type="text"
                            placeholder="Função do Funcionário"
                        />
                    </div>
                    <div className="h-[20px]"></div>
                    <button
                        className="bg-[#9A1C1F] text-white font-bold px-[20px] py-[5px] rounded-xl text-[20px]"
                        onClick={handleRedirect}
                    >
                        <p>Confirmar Alterações</p>
                    </button>
                </form>
            </div>

            <Footer usuario={usuario} />
        </div>
    );
}
