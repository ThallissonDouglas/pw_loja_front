export default function LoginPage() {
  return (
    <div className="flex h-screen">
      {/* Seção da esquerda com o logo */}
      <div className="w-1/2 flex items-center justify-center bg-white">
        <h1 className="text-9xl font-bold text-red-600">
          LIMA <span className="block text-black text-5xl font-light">AUTOMOVEIS</span>
        </h1>
      </div>

      {/* Seção da direita com o formulário */}
      <div className="w-1/2 flex items-center justify-center bg-red-800">
        <div className="bg-red-800 p-8 w-96">
          <h2 className="text-white text-2xl font-bold mb-6 text-center">LOGIN</h2>
          <form>
            <div className="mb-4">
              <label className="block text-white text-sm font-medium mb-2" htmlFor="username">
                Nome
              </label>
              <input
                type="text"
                id="username"
                className="w-full px-4 py-2 border rounded-lg bg-white text-gray-700"
                placeholder="Nome de Usuário"
              />
            </div>
            <div className="mb-6">
              <label className="block text-white text-sm font-medium mb-2" htmlFor="password">
                Senha
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border rounded-lg bg-white text-gray-700"
                placeholder="Senha"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-white text-red-800 py-2 rounded-lg font-bold hover:bg-gray-200"
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
