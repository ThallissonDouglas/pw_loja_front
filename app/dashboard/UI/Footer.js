import { useRouter } from "next/navigation";

export default function Footer({ usuario}) {
    const router = useRouter();

    const handleRedirect = (e) => {
        e.preventDefault(); // Evita recarregamento da página
        router.push("/auth/login");
    };

    return (
        <footer className="bg-[#8B0000] text-white py-4 text-[25px] font-normal">
            <div className="flex flex-row items-center justify-center space-x-4">
            <button 
                className="hover:underline"
                onClick={() => router.push("/dashboard/perfil")}
            >
                {usuario === "gerente" ? "Nome do Gerente" : "Nome do Funcionário"}
            </button>
            <p>•</p>
            <p>ID <span>12345</span></p>
            <p>•</p>
            <button 
                className="bg-transparent border-[2px] border-white rounded-lg px-4 hover:bg-white hover:text-[#8B0000] " 
                onClick={handleRedirect}
            >
                Deslogar
            </button>
            </div>
        </footer>
    )
}