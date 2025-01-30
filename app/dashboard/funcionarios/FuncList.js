export default function FuncList({funcionarios}) {
    return (
        <main className="flex flex-col items-center justify-start space-y-[30px]">
                {funcionarios.length > 0 ? (
                    funcionarios.map((funcionario) => (
                        <div 
                            key={funcionario.id} 
                            className="w-[100%] flex flex-col items-center justify-start space-x-5 py-3 p-4 bg-white rounded-xl hover:bg-[#F9F9F9] hover:cursor-pointer"
                            /* TODO: adicionar onClick para item de funcionario para ir para uma pagina funcionarios/[id], e mostrar a perfil do funcionário */
                        >
                            <div className="space-y-2 w-[100%]">
                                <div className="font-bold text-[24px] items-start">
                                    <p>Nome do Funcionário</p>
                                </div>
                                <hr className="border-b-[2px] border-[#AFAFAF]"/>
                                <div className="flex flex-row justify-between text-[20px] *:py-2">
                                    <div className="w-[14em]">
                                        <p className="font-light">Email:</p>
                                        <p className="font-bold" >{funcionario.email}</p>
                                    </div>
                                    <div className="w-[14em]">
                                        <p className="font-light">CPF:</p>
                                        <p className="font-bold" >{funcionario.cpf}</p>
                                    </div>
                                    <div className="w-[14em]">
                                        <p className="font-light">Função:</p>
                                        <p className="font-bold" >{funcionario.funcao === "admin" ? "Gerente" : "Funcionário"}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className='flex items-center justify-center w-full h-[50px] bg-white rounded-xl'>
                        <p className="font-bold">Nenhum funcionário disponível.</p>
                    </div>
                )}
        </main>
    )
}