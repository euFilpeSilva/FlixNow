import React from "react";
import "./Perfil.css";
import Navbar from "../../components/navbar/Navbar";
// import { FaEdit } from "react-icons/fa";

const Perfil = () => {
  return (
    <div className="perfil-container">
      <Navbar />
      <div className="perfil-header">
        <div className="perfil-imagem-container">
          <img
            src="https://palestraparaprofessores.com.br/wp-content/webp-express/webp-images/uploads/2022/12/fotos-para-perfil-elefante-andando-de-bike.png.webp"
            alt="Imagem de perfil"
            className="perfil-imagem"
          />
          <button className="perfil-editar">
            {/* <FaEdit /> */}
          </button>
        </div>
        <h1 className="perfil-nome">Raimundo Jalin de Santos Rabei</h1>
        <p className="perfil-descricao">Descrição do Usuário</p>
      </div>

      <div className="perfil-secoes-container">
        <div className="perfil-secao">
          <h2 className="perfil-titulo-secao">Informações Pessoais</h2>
          <div className="perfil-informacoes">
            <div className="perfil-item">
              <h3 className="perfil-titulo">Data de Nascimento:</h3>
              <p className="perfil-dado">DD/MM/AAAA</p>
            </div>
            <div className="perfil-item">
              <h3 className="perfil-titulo">Forma de Pagamento:</h3>
              <p className="perfil-dado">Cartão Débito</p>
            </div>
            <div className="perfil-item">
              <h3 className="perfil-titulo">Meu Plano:</h3>
              <p className="perfil-dado">Plano Família</p>
            </div>
            <div className="perfil-item">
              <h3 className="perfil-titulo">E-mail:</h3>
              <p className="perfil-dado">tiramos10@iesb.edu.br</p>
            </div>
            
          </div>
        </div>

        <div className="perfil-secao">
          <h2 className="perfil-titulo-secao">Interesses</h2>
          <div className="perfil-informacoes">
            <div className="perfil-item">
              <h3 className="perfil-titulo">Hobbies:</h3>
              <p className="perfil-dado">Música, Viagens</p>
            </div>
            <div className="perfil-item">
              <h3 className="perfil-titulo">Filmes Favoritos:</h3>
              <p className="perfil-dado">O Poderoso Chefão, Star Wars</p>
            </div>
            <div className="perfil-item">
              <h3 className="perfil-titulo">Tipo de Perfil:</h3>
              <p className="perfil-dado">Entusiasta</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
