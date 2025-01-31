"use client";
import { useEffect, useState, use } from "react";
import { useRouter } from "next/navigation";
import Footer from "../../../UI/Footer";
import Navbar from "../../../UI/Navbar";
import Image from "next/image";

export default function EditarVeiculoPage({ params }) {
  const [usuario, setUsuario] = useState(null);
  const [veiculo, setVeiculo] = useState(null);
  const router = useRouter();

  // Unwrap the params object using React.use()
  const unwrappedParams = use(params);

  useEffect(() => {
    // Simulando autenticação (Funcionário ou Gerente)
    const tipoUsuario = localStorage.getItem("tipoUsuario");
    setUsuario(tipoUsuario);

    // Fetch the JSON data and find the matching vehicle
    const fetchVeiculo = async () => {
      try {
        const response = await fetch("/veiculos.json");
        const data = await response.json();

        // Find the vehicle with the matching chassi number
        const matchingVeiculo = data.find(
          (v) => v.chassi === unwrappedParams.chassiCarro
        );

        if (matchingVeiculo) {
          setVeiculo(matchingVeiculo);
        } else {
          console.error("Veículo não encontrado");
        }
      } catch (error) {
        console.error("Erro ao buscar veículo:", error);
      }
    };

    fetchVeiculo();
  }, [unwrappedParams.chassiCarro]); // Add unwrappedParams.chassiCarro as a dependency

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setVeiculo({ ...veiculo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados salvos:", veiculo);
    
    router.push(`/dashboard/veiculos/${unwrappedParams.chassiCarro}`);
  };

  return (
    <div className="w-[100%] flex flex-col h-[100%] bg-[#3F3F3F] text-gray-900">
      <Navbar usuario={usuario} />

      <div className="w-3/4 justify-center mx-auto px-[50px] pt-[35px] pb-[120px] bg-[#F1F1F1] space-y-10">
        <h1 className="text-[25px] font-light text-gray-700 mt-[-5px] mb-[-15px]">
          Lista de Veículos &gt; Informações do Veículo &gt; Editar Detalhes do Veículo
        </h1>

        <hr className="border-2 border-[#AFAFAF]" />

        {veiculo ? (
          <form className="w-[100%] flex flex-col space-y-4 justify-start items-start text-black" onSubmit={handleSubmit}>
            <div className="w-[100%] flex flex-col items-start space-y-1">
              <p className="font-light text-center text-[20px]">Nome do Veículo</p>
              <input
                className="font-bold text-[20px] px-2 rounded-xl placeholder:font-bold placeholder-[#6A6A6A] border-[3px] border-[#6A6A6A] w-2/3 h-[40px]" 
                type="text"
                name="nome"
                value={veiculo.nome}
                onChange={handleInputChange}
                placeholder="Nome do Veículo"
              />
            </div>
            <div className="w-[100%] flex flex-col items-start space-y-1">
              <p className="font-light text-center text-[20px]">Preço(R$)</p>
              <input
                className="font-bold text-[20px] px-2 rounded-xl placeholder:font-bold placeholder-[#6A6A6A] border-[3px] border-[#6A6A6A] w-1/3 h-[40px]" 
                type="text"
                name="valor"
                value={veiculo.valor}
                onChange={handleInputChange}
                placeholder="Preço (R$)"
              />
            </div>
            <div className="w-[100%] flex flex-col items-start space-y-1">
              <p className="font-light text-center text-[20px]">Nº do Chassi</p>
              <input
                className="font-bold text-[20px] px-0 rounded-xl placeholder:font-bold placeholder-[#6A6A6A] border-[3px] border-transparent w-1/3 h-[40px]" 
                type="text"
                name="chassi"
                value={veiculo.chassi}
                disabled
                placeholder="Nº do Chassi"
              />
            </div>
            <div className="w-[100%] flex flex-col items-start space-y-1">
              <p className="font-light text-center text-[20px]">Ano/Modelo</p>
              <input
                className="font-bold text-[20px] px-2 rounded-xl placeholder:font-bold placeholder-[#6A6A6A] border-[3px] border-[#6A6A6A] w-1/3 h-[40px]" 
                type="text"
                name="ano_modelo"
                value={veiculo.ano_modelo}
                onChange={handleInputChange}
                placeholder="Ano/Modelo"
              />
            </div>
            <div className="w-[100%] flex flex-col items-start space-y-1">
              <p className="font-light text-center text-[20px]">Kilometragem</p>
              <input
                className="font-bold text-[20px] px-2 rounded-xl placeholder:font-bold placeholder-[#6A6A6A] border-[3px] border-[#6A6A6A] w-1/3 h-[40px]" 
                type="text"
                name="km"
                value={veiculo.km}
                onChange={handleInputChange}
                placeholder="Kilometragem"
              />
            </div>
            <div className="w-[100%] flex flex-col items-start space-y-1">
              <p className="font-light text-center text-[20px]">Cor</p>
              <input
                className="font-bold text-[20px] px-2 rounded-xl placeholder:font-bold placeholder-[#6A6A6A] border-[3px] border-[#6A6A6A] w-1/3 h-[40px]" 
                type="text"
                name="cor"
                value={veiculo.cor}
                onChange={handleInputChange}
                placeholder="Cor"
              />
            </div>
            <div className="w-[100%] flex flex-col items-start space-y-1">
              <p className="font-light text-center text-[20px]">Motor</p>
              <input
                className="font-bold text-[20px] px-2 rounded-xl placeholder:font-bold placeholder-[#6A6A6A] border-[3px] border-[#6A6A6A] w-1/3 h-[40px]" 
                type="text"
                name="motor"
                value={veiculo.motor}
                onChange={handleInputChange}
                placeholder="Motor"
              />
            </div>
            <div className="w-[100%] flex flex-col items-start space-y-1">
              <p className="font-light text-center text-[20px]">Combustível</p>
              <input
                className="font-bold text-[20px] px-2 rounded-xl placeholder:font-bold placeholder-[#6A6A6A] border-[3px] border-[#6A6A6A] w-1/3 h-[40px]" 
                type="text"
                name="combustivel"
                value={veiculo.combustivel}
                onChange={handleInputChange}
                placeholder="Combustível"
              />
            </div>
            <div className="w-[100%] flex flex-col items-start space-y-1">
              <p className="font-light text-center text-[20px]">Câmbio</p>
              <input 
                className="font-bold text-[20px] px-2 rounded-xl placeholder:font-bold placeholder-[#6A6A6A] border-[3px] border-[#6A6A6A] w-1/3 h-[40px]" 
                type="text"
                name="cambio"
                value={veiculo.cambio}
                onChange={handleInputChange}
                placeholder="Câmbio"
              />
            </div>

            <div className="w-[100%] flex flex-col items-start space-y-1">
              <p className="font-light text-center text-[20px]">Imagem</p>
              <input 
                className="mt-2 block w-full text-[15px] items-center justify-center 
                file:mr-4 file:rounded-xl file:border-0 file:bg-[#9A1C1F] file:h-[40px] file:cursor-pointer
                file:px-4 file:text-[20px] file:font-semibold file:text-white file:transition-all file:duration-300
                hover:file:bg-[#D9D9D9] hover:file:text-[#9A1C1F] focus:outline-none disabled:pointer-events-none disabled:opacity-60" 
                type="file"
                name="imagem"
              />
              <Image
                src="/images/carro_template.png"
                alt="Imagem do Veículo"
                width={200}
                height={150}
              />
            </div>

            <div className="h-[20px]"></div>

            <button
              type="submit"
              className="bg-[#9A1C1F] text-white font-bold px-[20px] py-[10px] rounded-xl text-[20px] 
              hover:bg-[#D9D9D9] hover:text-[#9A1C1F] transition-all duration-300"
            >
              <p>Confirmar Alterações</p>
            </button>
          </form>
        ) : (
          <p className="text-red-500">Veículo não encontrado.</p>
        )}
      </div>
      <Footer usuario={usuario} />
    </div>
  );
}
