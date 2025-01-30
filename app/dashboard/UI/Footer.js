export default function Footer({ usuario}) {
    return (
        <footer className="bg-[#8B0000] text-white py-4 text-[25px] font-normal">
            <div className="flex flex-row items-center justify-center space-x-4">
            <p className="user-role">{usuario === "gerente" ? "Nome do Gerente" : "Nome do Funcionário"}</p>
            <p>•</p>
            <p className="user-id">ID <span>12345</span></p>
            <p>•</p>
            <button 
                className="bg-transparent border-[2px] border-white rounded-lg px-4 hover:bg-white hover:text-[#8B0000] " 
                onClick={() => (window.location.href = "/auth/login")}
            >
                Deslogar
            </button>
            </div>
        </footer>
    )
}