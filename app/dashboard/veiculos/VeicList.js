import Image from 'next/image'

export default function VeicList({ veiculos, usuario }) {
    return (
        <div className='justify-center space-y-10'>
            <div className="flex flex-row items-center justify-start space-x-4">
                <div className="bg-white flex fleax-row items-center justify-center space-x-4 grow py-1 px-2 border-[3px] border-[#AFAFAF] rounded-xl">
                    <Image 
                        src='/search_icon.svg'
                        alt="Search Icon"
                        height={25}
                        width={25}
                    />
                    <input type="text" placeholder='Pesquisa' className="grow text-[25px] font-bold text-black placeholder-[#6A6A6A] focus:outline-none my-[-5px] bg-transparent"/>
                </div>
                {usuario === "gerente" && <button className="bg-[#9A1C1F] text-white font-bold px-[20px] py-[3px] rounded-xl text-[24px]">Adicionar Veículo</button>}
            </div>

            
            <main className="flex flex-col items-center justify-start space-y-[30px]">
                {veiculos.length > 0 ? (
                    veiculos.map((carro) => (
                        /* TODO: adicionar onClick para item de carro para ir para uma pagina veiculos/[chassi], e mostrar a pagina do carro */
                    <div 
                        key={carro.id} 
                        className="flex flex-row items-center justify-start space-x-5 py-3 pr-4 bg-white rounded-xl hover:bg-[#F9F9F9] hover:cursor-pointer" 
                    >
                        <div className=" overflow-hidden flex items-center justify-center"> 
                        {/* src={`/dashboard/veiculos/${carro.imagem}`} */}
                        <Image 
                            src='/images/carro_template.png'
                            width={500} 
                            height={500} 
                            alt="Imagem do veículo" 
                        />

                        </div>
                        <div className="space-y-2">
                            <div className="font-bold text-[24px] items-start flex flex-row justify-between ">
                                <p className="">{carro.nome}</p>
                                <p className="">{carro.valor}</p>
                            </div>
                            <hr className="border-b-[2px] border-[#AFAFAF] "/>
                            <div className="flex flex-wrap justify-normal text-[20px] *:py-2">
                                <div className="w-[14em]">
                                    <p className="font-light">Ano/Modelo:</p>
                                    <p className="font-bold" >{carro.ano_modelo}</p>
                                </div>
                                <div className="w-[14em]">
                                    <p className="font-light">N° do Chassi:</p>
                                    <p className="font-bold">{carro.chassi}</p>
                                </div>
                                <div className="w-[14em]">
                                    <p className="font-light">KM:</p>
                                    <p className="font-bold">{carro.km}</p>
                                </div>
                                <div className="w-[10em]"> 
                                    <p className="font-light">Cor:</p>
                                    <p className="font-bold">{carro.cor}</p>
                                </div>
                                <div className="w-[10em]">
                                    <p className="font-light">Motor:</p>
                                    <p className="font-bold">{carro.motor}</p>
                                </div>
                                <div className="w-[10em]">
                                    <p className="font-light">Combustível:</p>
                                    <p className="font-bold">{carro.combustivel}</p>
                                </div>
                                <div className="w-[10em]">
                                    <p className="font-light">Câmbio:</p>
                                    <p className="font-bold">{carro.cambio}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))
                ) : (
                    <div className='flex items-center justify-center w-full h-[50px] bg-white rounded-xl'>
                        <p className="font-bold">Nenhum veículo disponível.</p>
                    </div>
                )}
            </main>
        </div>
    )
}