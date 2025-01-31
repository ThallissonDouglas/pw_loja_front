"use client";

import Navbar from "../UI/Navbar";
import Footer from "../UI/Footer";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function PerfilPage() {
    const [usuario, setUsuario] = useState(null);
    const router = useRouter();

    const handleRedirect = (e) => {
        e.preventDefault(); // Evita recarregamento da página
        router.back();
    };
    
    const handleInputChange = (e) => {
    };

    useEffect(() => {       
        // Simulando autenticação (Funcionário ou Gerente)
        const tipoUsuario = localStorage.getItem("tipoUsuario");
        setUsuario(tipoUsuario);
        
        if (tipoUsuario !== "gerente") {
            router.push("/dashboard/veiculos"); // Redireciona quem não é gerente para a tela de veículos
        }
    }, [router]);

    return (
        <div className="w-[100%] flex flex-col h-[100%] bg-[#3F3F3F]">
        <Navbar usuario={usuario} />
        <div className="w-3/4 justify-center mx-auto px-[50px] pt-[35px] pb-[120px] bg-[#F1F1F1] space-y-10">
            <h1 className="text-[25px] font-light text-gray-700 mt-[-5px] mb-[-15px]">Perfil</h1>

            <hr className="border-2 border-[#AFAFAF]"/>

            <form className="w-[100%] flex flex-col space-y-4 justify-start items-start text-black">
                <div className="w-[100%] flex flex-col items-start space-y-1">
                    <p className="font-light text-center text-[20px]">Nome do Usuário:</p>
                    <input 
                        className="font-bold text-[23px] px-2 rounded-xl placeholder:font-bold placeholder-[#6A6A6A] border-[3px] border-[#6A6A6A] w-2/3 h-[40px]" 
                        type="text"
                        name="nome"
                        value={usuario === "gerente" ? "Nome do Gerente" : "Nome do Funcionário"}
                        placeholder="Nome do Usuário"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="w-[100%] flex flex-col items-start space-y-1">
                    <p className="font-light text-center text-[20px]">Email:</p>
                    <input 
                        className="font-bold text-[23px] px-2 rounded-xl placeholder:font-bold placeholder-[#6A6A6A] border-[3px] border-[#6A6A6A] w-1/2 h-[40px]" 
                        type="email"
                        name="email"
                        value={usuario === "gerente" ? "gerente@email.com" : "funcionario@email.com"}
                        placeholder="usuario@email.com"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="w-[100%] flex flex-col items-start space-y-1">
                    <p className="font-light text-center text-[20px]">Nova Senha:</p>
                    <input 
                        className="font-bold text-[23px] px-2 rounded-xl placeholder:font-bold placeholder-[#6A6A6A] border-[3px] border-[#6A6A6A] w-1/3 h-[40px]" 
                        type="password"
                        name="senha"
                        placeholder="Senha"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="w-[100%] flex flex-col items-start space-y-1">
                    <p className="font-light text-center text-[20px]">Confirmar Senha:</p>
                    <input 
                        className="font-bold text-[23px] px-2 rounded-xl placeholder:font-bold placeholder-[#6A6A6A] border-[3px] border-[#6A6A6A] w-1/3 h-[40px]" 
                        type="password"
                        name="senhaConf"
                        placeholder="Confirmar Senha"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="w-[100%] flex flex-col items-start ">
                    <p className="font-light text-center text-[20px]">Função:</p>
                    <input 
                        className="font-bold text-[23px] rounded-xl placeholder:font-bold placeholder-[#6A6A6A] border-[3px] border-transparent w-1/3 h-[40px]" 
                        type="text"
                        value={usuario === "gerente" ? "Gerente" : "Funcionário"}
                        placeholder="Função"
                        disabled
                        readOnly
                    />
                    {/* <p className="font-bold text-center text-[25px]">{usuario === "gerente" ? "Gerente" : "Funcionário"}</p> */}
                </div>

                <div className="h-[20px]"></div>

                <button
                    className="bg-[#9A1C1F] text-white font-bold px-[20px] py-[5px] rounded-xl text-[20px]"
                    onClick={handleRedirect}
                >
                    Confirmar Alterações
                </button>
            </form>
        </div>
        <Footer usuario={usuario} />
        </div>
    );
}
