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

  useEffect(() => {
    const tipoUsuario = localStorage.getItem("tipoUsuario");
    setUsuario(tipoUsuario);

    const fetchVeiculo = async () => {
      try {
        const response = await fetch("/veiculos.json");
        const data = await response.json();
        const matchingVeiculo = data.find(
          (v) => v.chassi === params.chassiCarro
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
  }, [params.chassiCarro]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setVeiculo({ ...veiculo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados salvos:", veiculo);
  };

  return (
    <div className="w-[100%] flex flex-col h-[100%] bg-[#3F3F3F] text-gray-900">
      <Navbar usuario={usuario} />

      <div className="w-3/4 justify-center mx-auto px-[50px] pt-[35px] pb-[120px] bg-[#F1F1F1] space-y-10">
        <h1 className="text-[25px] font-light text-gray-700 mt-[-5px] mb-[-15px]">
          Lista de Veículos &gt; Informações do Veículo &gt; Editar Detalhes do
          Veículo
        </h1>

        <hr className="border-2 border-[#AFAFAF]" />

        {veiculo ? (
          <form className="space-y-5" onSubmit={handleSubmit}>
            <input
              type="text"
              name="nome"
              value={veiculo.nome}
              onChange={handleInputChange}
              className="input-field"
              placeholder="Nome do Veículo"
            />
            <input
              type="text"
              name="valor"
              value={veiculo.valor}
              onChange={handleInputChange}
              className="input-field"
              placeholder="Preço (R$)"
            />
            <input
              type="text"
              name="chassi"
              value={veiculo.chassi}
              disabled
              className="input-field"
              placeholder="Nº do Chassi"
            />
            <input
              type="text"
              name="ano_modelo"
              value={veiculo.ano_modelo}
              onChange={handleInputChange}
              className="input-field"
              placeholder="Ano/Modelo"
            />
            <input
              type="text"
              name="km"
              value={veiculo.km}
              onChange={handleInputChange}
              className="input-field"
              placeholder="Kilometragem"
            />
            <input
              type="text"
              name="cor"
              value={veiculo.cor}
              onChange={handleInputChange}
              className="input-field"
              placeholder="Cor"
            />
            <input
              type="text"
              name="motor"
              value={veiculo.motor}
              onChange={handleInputChange}
              className="input-field"
              placeholder="Motor"
            />
            <input
              type="text"
              name="combustivel"
              value={veiculo.combustivel}
              onChange={handleInputChange}
              className="input-field"
              placeholder="Combustível"
            />
            <input
              type="text"
              name="cambio"
              value={veiculo.cambio}
              onChange={handleInputChange}
              className="input-field"
              placeholder="Câmbio"
            />

            <div className="flex flex-col items-center">
              <Image
                src="/images/carro_template.png"
                alt="Imagem do Veículo"
                width={200}
                height={150}
              />
              <input type="file" name="imagem" className="input-field" />
            </div>

            <button
              type="submit"
              className="bg-[#9A1C1F] text-white font-bold px-[20px] py-[10px] rounded-xl text-[20px] hover:bg-[#D9D9D9] hover:text-[#9A1C1F] transition-all duration-300"
            >
              Confirmar Alterações
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
