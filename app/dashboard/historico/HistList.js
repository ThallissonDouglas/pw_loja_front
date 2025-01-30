export default function HistList({ historico }) {
    return (
        <div className='justify-center space-y-10'>
            {/* Cabeçalho da Lista */}
            <div className="flex flex-row items-center justify-center px-4 py-2 space-x-4 bg-white h-[45px] rounded-xl text-[#8B0000] font-bold text-[20px]">
                <div className="flex justify-center items-center w-[25%]">
                    <p>Data e Hora</p>
                </div>
                <div className="border-[2px] h-[100%] border-[#D9D9D9]"></div>
                <div className="flex justify-center items-center w-[15%]">
                    <p>Tipo</p>
                </div>
                <div className="border-[2px] h-[100%] border-[#D9D9D9]"></div>
                <div className="flex justify-center items-center  w-[30%]">
                    <p>Veículo</p>
                </div>
                <div className="border-[2px] h-[100%] border-[#D9D9D9]"></div>
                <div className="flex justify-center items-center w-[20%]">
                    <p>Funcionário</p>
                </div>
                <div className="border-[2px] h-[100%] border-[#D9D9D9]"></div>
                <div className="flex justify-center items-center w-[10%]">
                    <p>ID</p>
                </div>
            </div>

            {/* Corpo da Lista */}
            <main className="flex flex-col items-center justify-center space-y-[30px] w-[100%]">
                {historico.length > 0 ? (
                    historico.map((historico) => (
                        <div
                            key={historico.id}
                            className="w-[100%] flex flex-col items-center justify-start space-x-5 bg-white rounded-xl"
                        >
                            <div className="w-[100%] flex flex-row items-center justify-center px-4 py-4 space-x-4 h-[65px] rounded-xl text-gray-700 font-bold text-[20px]">
                                <div className="flex justify-center items-center w-[25%]">
                                    <p>{historico.data}</p>
                                </div>
                                <div className="border-[2px] h-[100%] border-[#D9D9D9]"></div>
                                <div className="flex justify-center items-center w-[15%]">
                                    <p>{historico.tipo}</p>
                                </div>
                                <div className="border-[2px] h-[100%] border-[#D9D9D9]"></div>
                                <div className="flex justify-center items-center w-[30%]">
                                    <p>{historico.chassi}</p>
                                </div>
                                <div className="border-[2px] h-[100%] border-[#D9D9D9]"></div>
                                <div className="flex justify-center items-center w-[20%]">
                                    <p>{historico.nome_func}</p>
                                </div>
                                <div className="border-[2px] h-[100%] border-[#D9D9D9]"></div>
                                <div className="flex justify-center items-center w-[10%]">
                                    <p>{historico.id_func}</p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className='flex items-center justify-center w-full h-screen bg-white rounded-xl'>
                        <p className="font-bold text-[20px] text-gray-700">Nenhum histórico disponível.</p>
                    </div>
                )}
            </main>
        </div>
    );
}