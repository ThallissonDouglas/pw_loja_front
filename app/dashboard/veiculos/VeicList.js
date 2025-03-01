"use client";

import { useRouter } from "next/navigation"; // Importação necessária
import Image from "next/image";

export default function VeicList({ veiculos, usuario }) {
  const router = useRouter(); // Hook de navegação

  return (
    <div className="justify-center space-y-10 ">
      <div className="flex flex-row items-center justify-start space-x-4">
        <div className="bg-white flex flex-row items-center justify-center space-x-4 grow py-1 px-2 border-[3px] border-[#AFAFAF] rounded-xl">
          <Image
            src="/search_icon.svg"
            alt="Search Icon"
            height={25}
            width={25}
          />
          <input
            type="text"
            placeholder="Pesquisa"
            className="grow text-[25px] font-bold text-black placeholder-[#6A6A6A] focus:outline-none my-[-5px] bg-transparent"
          />
        </div>
        {usuario === "gerente" && (
          <button 
            className="bg-[#9A1C1F] text-white font-bold px-[20px] py-[3px] rounded-xl text-[24px]
            hover:bg-[#D9D9D9] hover:text-[#9A1C1F] transition-all duration-300"
            onClick={() => router.push('/dashboard/veiculos/adicionar')}
          >
            <p>Adicionar Veículo</p>
          </button>
        )}
      </div>

      <main className="flex flex-col items-center justify-start space-y-[30px] grow">
        {veiculos.length > 0 ? (
          veiculos.map((carro) => (
            <div
              key={carro.id}
              className="flex flex-row items-center justify-start w-[100%] space-x-5 py-3 pr-4 bg-white rounded-xl hover:bg-[#F9F9F9] hover:cursor-pointer"
              onClick={() => router.push(`/dashboard/veiculos/${carro.chassi}`)} // Redirecionamento
            >
              <div className="overflow-hidden flex items-center justify-center max-w-[300px]">
                <Image
                  src="/images/carro_template.png"
                  width={500}
                  height={500}
                  alt="Imagem do veículo"
                />
              </div>
              <div className="space-y-2 grow">
                <div className="font-bold text-[24px] items-start flex flex-row justify-between ">
                  <p>{carro.nome}</p>
                  <p>{carro.valor}</p>
                </div>
                <hr className="border-b-[2px] border-[#AFAFAF] " />
                <div className="flex flex-wrap justify-normal text-[20px] *:py-2">
                  <div className="flex justify-between items-center w-[100%]">
                    <div className="grow">
                      <p className="font-light">Ano/Modelo:</p>
                      <p className="font-bold">{carro.ano_modelo}</p>
                    </div>
                    <div className="grow">
                      <p className="font-light">N° do Chassi:</p>
                      <p className="font-bold">{carro.chassi}</p>
                    </div>
                    <div className="grow">
                      <p className="font-light">KM:</p>
                      <p className="font-bold">{carro.km}</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center w-[100%]">
                    <div className="grow">
                      <p className="font-light">Cor:</p>
                      <p className="font-bold">{carro.cor}</p>
                    </div>
                    <div className="grow">
                      <p className="font-light">Motor:</p>
                      <p className="font-bold">{carro.motor}</p>
                    </div>
                    <div className="grow">
                      <p className="font-light">Combustível:</p>
                      <p className="font-bold">{carro.combustivel}</p>
                    </div>
                    <div className="grow">
                      <p className="font-light">Câmbio:</p>
                      <p className="font-bold">{carro.cambio}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex items-center justify-center w-full h-screen bg-white rounded-xl">
            <p className="font-bold text-[20px] text-gray-700">
              Nenhum veículo disponível.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}