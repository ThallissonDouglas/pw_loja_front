"use client";
import { useEffect, useState, use } from "react";
import { useRouter } from "next/navigation";
import Footer from "../../UI/Footer";
import Navbar from "../../UI/Navbar";
import Image from "next/image";

export default function CarroDetalhePage({ params }) {
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

  return (
    <div className="w-[100%] flex flex-col h-[100%] bg-[#3F3F3F] text-gray-900">
      <Navbar usuario={usuario} />

      <div className="w-3/4 justify-center mx-auto px-[50px] pt-[35px] pb-[120px] bg-[#F1F1F1] space-y-10">
        <h1 className="text-[25px] font-light text-gray-700 mt-[-5px] mb-[-15px]">
          Veículos &gt; Informações do Veículo
        </h1>

        <hr className="border-2 border-[#AFAFAF]" />

        {veiculo ? (
          <div className="flex flex-col justify-center space-y-10">
            <div className="flex flex-row items-center space-x-5 ">
              <h2 className="text-[40px] font-semibold grow ">
                {veiculo.nome}
              </h2>
              <button
                className="bg-[#9A1C1F] text-white font-bold px-[10px] py-[9px] rounded-xl text-[27px] flex flex-row items-center space-x-4
                                hover:bg-[#D9D9D9] hover:text-[#9A1C1F] hover:stroke-[#9A1C1F] ease-in-out transition-all duration-300"
              >
                {/* Adicionar onClick pra edicao de dados */}
                <svg className="w-[35px] h-auto fill-none" viewBox="0 0 26 26">
                  <path
                    d="M22.3818 9.25925L17.1031 3.93956M22.3818 9.25925L15.7854 15.9067C14.9161 16.7828 13.861 17.4743 12.6497 17.6848C11.4266 17.8975 9.90878 17.9683 9.18493 17.2388C8.4611 16.5093 8.53131 14.9797 8.74226 13.7471C8.95118 12.5263 9.63747 11.4631 10.5067 10.587L17.1031 3.93956M22.3818 9.25925C22.3818 9.25925 26.3408 5.26948 23.7014 2.60963C21.062 -0.0502118 17.1031 3.93956 17.1031 3.93956M24.4346 12.9997C24.4346 21.6442 21.7952 24.304 13.2173 24.304C4.63937 24.304 2 21.6442 2 12.9997C2 4.35516 4.63937 1.69531 13.2173 1.69531"
                    stroke="currentColor"
                    strokeWidth="2.6087"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p>Editar Dados</p>
              </button>
            </div>
            <div className="flex flex-row grow items-start space-x-10">
              <div
                className="bg-white p-[25px] rounded-2xl aspect-auto flex items-start justify-center max-w-[65%] "
                style={{ display: "flex", flexDirection: "column" }}
              >
                <Image
                  src="/images/carro_template.png"
                  alt="Editar"
                  height={0}
                  width={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div className="flex flex-col space-y-[25px] grow items-center">
                <p className="font-extrabold text-[45px] mb-[-10px]">
                  {veiculo.valor}
                </p>
                <button
                  className="w-[100%] py-[15px] flex flex-row items-center justify-center space-x-4 bg-[#9A1C1F] text-white font-bold px-[10px] rounded-xl text-[35px]
                                    hover:bg-[#D9D9D9] hover:text-[#9A1C1F] hover:stroke-[#9A1C1F] ease-in-out transition-all duration-300"
                >
                  <svg
                    className="w-[60px] h-auto fill-none "
                    viewBox="0 0 44 40"
                  >
                    <path
                      d="M39.7778 15.6102L36.4767 31.9147C36.0693 33.9261 35.8658 34.9319 35.3342 35.6841C34.8653 36.3475 34.22 36.8699 33.4696 37.1939C32.6184 37.5614 31.5802 37.5614 29.5036 37.5614H14.4964C12.4198 37.5614 11.3815 37.5614 10.5304 37.1939C9.77993 36.8699 9.13467 36.3475 8.66587 35.6841C8.13424 34.9319 7.93062 33.9261 7.52336 31.9147L4.22222 15.6102M39.7778 15.6102H35.3333M39.7778 15.6102H42M4.22222 15.6102H2M4.22222 15.6102H8.66667M35.3333 15.6102H8.66667M35.3333 15.6102L28.6667 2.43945M8.66667 15.6102L15.3333 2.43945M15.3333 22.1956V28.7809M22 22.1956V28.7809M28.6667 22.1956V28.7809"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p>Realizar Venda</p>
                </button>
                <div className="text-[20px] *:py-2 flex flex-col justify-center items-center space-y-[20px] bg-white w-[100%] px-[35px] py-[30px] rounded-2xl ">
                  <div className="w-[100%]">
                    <p className="font-medium">Chassi:</p>
                    <p className="font-extrabold text-[22px]">
                      {veiculo.chassi}
                    </p>
                  </div>
                  <div className="w-[100%]">
                    <p className="font-medium">Ano/Modelo:</p>
                    <p className="font-extrabold text-[22px]">
                      {veiculo.ano_modelo}
                    </p>
                  </div>
                  <div className="w-[100%]">
                    <p className="font-medium">KM:</p>
                    <p className="font-extrabold text-[22px]">{veiculo.km}</p>
                  </div>
                  <div className="w-[100%]">
                    <p className="font-medium">Cor:</p>
                    <p className="font-extrabold text-[22px]">{veiculo.cor}</p>
                  </div>
                  <div className="w-[100%]">
                    <p className="font-medium">Motor:</p>
                    <p className="font-extrabold text-[22px]">
                      {veiculo.motor}
                    </p>
                  </div>
                  <div className="w-[100%]">
                    <p className="font-medium">Combustível:</p>
                    <p className="font-extrabold text-[22px]">
                      {veiculo.combustivel}
                    </p>
                  </div>
                  <div className="w-[100%]">
                    <p className="font-medium">Câmbio:</p>
                    <p className="font-extrabold text-[22px]">
                      {veiculo.cambio}
                    </p>
                  </div>
                </div>
                {usuario === "gerente" && (
                  <button
                    className="w-[100%] bg-[#9A1C1F] text-white font-bold px-[10px] py-[9px] rounded-xl text-[27px] flex flex-row justify-center items-center space-x-4
                                hover:bg-[#D9D9D9] hover:text-[#9A1C1F] hover:stroke-[#9A1C1F] ease-in-out transition-all duration-300"
                  >
                    <svg
                      className="w-[35px] h-auto fill-none"
                      viewBox="0 0 32 34"
                    >
                      <path
                        d="M2 7.18188H30M23 7.18188L22.5264 5.82867C22.0674 4.5173 21.8378 3.86162 21.4122 3.37685C21.0363 2.94877 20.5537 2.61742 20.0084 2.41318C19.3908 2.18188 18.6652 2.18188 17.2138 2.18188H14.7862C13.3348 2.18188 12.6092 2.18188 11.9916 2.41318C11.4464 2.61742 10.9636 2.94877 10.5878 3.37685C10.1621 3.86162 9.93261 4.5173 9.47362 5.82867L9 7.18188M26.5 7.18188V24.1819C26.5 26.9822 26.5 28.3822 25.9278 29.4519C25.4245 30.3927 24.6214 31.1576 23.6335 31.6369C22.5103 32.1819 21.0403 32.1819 18.1 32.1819H13.9C10.9597 32.1819 9.48958 32.1819 8.36655 31.6369C7.3787 31.1576 6.57555 30.3927 6.07222 29.4519C5.5 28.3822 5.5 26.9822 5.5 24.1819V7.18188M19.5 13.8486V25.5152M12.5 13.8486V25.5152"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p>Deletar Veículo</p>
                  </button>
                )}
              </div>
            </div>
          </div>
        ) : (
          <p className="text-red-500">Veículo não encontrado.</p>
        )}
      </div>

      <Footer usuario={usuario} />
    </div>
  );
}
