export default function Navbar({ usuario}) {
    return (
        <header className="text-white  text-1xl ">
            <div className="flex flex-col items-start justify-start pl-9 pb-4 bg- bg-[url('../public/images/banner_automotivo.png')] bg-center">
                <div className="flex flex-col items-center justify-center py-2">
                <h1 className="text-[75px] font-extrabold text-red-600 mb-[-25px] text-center">LIMA </h1>
                <h2 className=" text-black text-[30px] font-extralight text-center">AUTOMÓVEIS</h2>
                </div>
            </div>
            <nav className="flex flex-row items-center justify-center bg-gradient-to-b from-[#CE5A60] via-[#9A1C1F] to-[#721D1A]">
                <div className="*:">
                </div>
                {/* TODO: adicionar onClick para cada Botão */}
                <button 
                    className="bg-transparent text-white py-[7px] px-[18px] font-extralight text-[20px] duration-300 ease-in-out hover:bg-[#CFCFCF] hover:text-black"
                    onClick={() => (window.location.href = "/dashboard/veiculos")}
                >
                    Veículos
                </button>
                {usuario === "gerente" && (
                <>
                    <button 
                        className="bg-transparent text-white py-[7px] px-[18px] font-extralight text-[20px] duration-300 ease-in-out hover:bg-[#CFCFCF] hover:text-black"
                    >
                        Histórico
                    </button>
                    <button 
                        className="bg-transparent text-white py-[7px] px-[18px] font-extralight text-[20px] duration-300 ease-in-out hover:bg-[#CFCFCF] hover:text-black"
                        onClick={() => (window.location.href = "/dashboard/funcionarios")}
                    >
                        Funcionários
                    </button>
                </>
                )}
            </nav>
        </header>
    )
}