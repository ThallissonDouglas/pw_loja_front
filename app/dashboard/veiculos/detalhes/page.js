"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "../../UI/Navbar";
import Footer from "../../UI/Footer";

export default function VeiculoDetalhes({ params }) {
  const router = useRouter();
  const { chassi } = params;
  const [veiculo, setVeiculo] = useState(null);

  useEffect(() => {
    if (chassi) {
      fetch("/veiculos.json")
        .then((res) => res.json())
        .then((data) => {
          const encontrado = data.find((v) => v.chassi === chassi);
          setVeiculo(encontrado || null);
        })
        .catch((error) => console.error("Erro ao carregar detalhes:", error));
    }
  }, [chassi]);

  if (!veiculo)
    return (
      <p className="text-center">Carregando ou veículo não encontrado...</p>
    );

  return (
    <div className="w-full flex flex-col h-full bg-[#3F3F3F]">
      <Navbar />
      <div className="w-3/4 mx-auto px-[50px] pt-[35px] pb-[120px] bg-[#F1F1F1] space-y-10">
        <h1 className="text-[25px] font-light text-gray-700">
          Detalhes do Veículo
        </h1>
        <hr className="border-2 border-[#AFAFAF]" />

        <div className="flex">
          <Image
            src={`/images/${veiculo.imagem || "carro_template.png"}`}
            width={350}
            height={250}
            alt={veiculo.nome}
            className="rounded-md"
          />

          <div className="ml-10 space-y-3">
            <h2 className="text-2xl font-bold">{veiculo.nome}</h2>
            <p className="text-gray-700">
              <strong>Preço:</strong> R$ {veiculo.valor}
            </p>
            <p className="text-gray-700">
              <strong>Nº Chassi:</strong> {veiculo.chassi}
            </p>
            <p className="text-gray-700">
              <strong>Ano/Modelo:</strong> {veiculo.ano_modelo}
            </p>
            <p className="text-gray-700">
              <strong>KM:</strong> {veiculo.km}
            </p>
            <p className="text-gray-700">
              <strong>Cor:</strong> {veiculo.cor}
            </p>
            <p className="text-gray-700">
              <strong>Motor:</strong> {veiculo.motor}
            </p>
            <p className="text-gray-700">
              <strong>Combustível:</strong> {veiculo.combustivel}
            </p>
            <p className="text-gray-700">
              <strong>Câmbio:</strong> {veiculo.cambio}
            </p>
          </div>
        </div>

        <div className="flex space-x-4 mt-6">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            ✏️ Editar Dados
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded">
            🛒 Realizar Venda
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded">
            🗑️ Deletar Veículo
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
