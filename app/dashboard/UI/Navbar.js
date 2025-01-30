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
                <button className="nav-button">Veículos</button>
                {usuario === "gerente" && (
                <>
                    <button className="nav-button">Histórico</button>
                    <button className="nav-button">Funcionários</button>
                </>
                )}
            </nav>
        </header>
    )
}