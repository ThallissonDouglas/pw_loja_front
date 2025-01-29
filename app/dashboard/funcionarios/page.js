"use client";

import { useState, useEffect } from "react";
import "./styles.css";

export default function FuncionariosPage() {
  const [usuario, setUsuario] = useState(null);
  const [funcionarios, setFuncionarios] = useState([]);

  useEffect(() => {
    // Simulando autenticação (Funcionário ou Gerente)
    const tipoUsuario = localStorage.getItem("tipoUsuario");
    setUsuario(tipoUsuario);

    // Carregando os funcionários do arquivo JSON
    fetch("/funcionarios.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("Funcionários carregados:", data);
        setFuncionarios(data);
      })
      .catch((error) => console.error("Erro ao carregar funcionários:", error));
  }, []);

  return (
    <div className="container">
      {/* Cabeçalho */}
      <header className="header">
        <div className="logo">LIMA AUTOMÓVEIS</div>
        <nav>
          <button className="nav-button">Veículos</button>
          <button className="nav-button">Histórico</button>
          <button className="nav-button active">Funcionários</button>
        </nav>
      </header>

      {/* Lista de Funcionários */}
      <main className="funcionarios-container">
        <h2>Lista de Funcionários</h2>
        <div className="lista-funcionarios">
          {funcionarios.length > 0 ? (
            funcionarios.map((funcionario) => (
              <div key={funcionario.id} className="funcionario-card">
                <p>
                  <strong>Nome do Funcionário</strong>
                </p>
                <p>Email: {funcionario.email}</p>
                <p>CPF: {funcionario.cpf}</p>
                <p>
                  Função:{" "}
                  {funcionario.funcao === "admin" ? "Funcionário" : "Gerente"}
                </p>
              </div>
            ))
          ) : (
            <p className="no-funcionarios">Nenhum funcionário disponível.</p>
          )}
        </div>
      </main>

      {/* Rodapé */}
      <footer className="footer">
        <div className="user-info">
          <p className="user-role">
            {usuario === "gerente" ? "Nome do Gerente" : "Nome do Funcionário"}
          </p>
          <p className="user-id">ID: 12345</p>
        </div>
        <button
          className="logout-button"
          onClick={() => (window.location.href = "/auth/login")}
        >
          Deslogar
        </button>
      </footer>
    </div>
  );
}
