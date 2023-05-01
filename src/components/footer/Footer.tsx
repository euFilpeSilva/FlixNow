import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Informações</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/sobre-nos">Sobre Nós</Link>
              </li>
              <li>
                <Link to="/contato">Contato</Link>
              </li>
              <li>
                <Link to="/termos-de-uso">Termos de Uso</Link>
              </li>
              <li>
                <Link to="/politica-de-privacidade">
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Categorias</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/filmes">Filmes</Link>
              </li>
              <li>
                <Link to="/series">Séries</Link>
              </li>
              <li>
                <Link to="/documentarios">Documentários</Link>
              </li>
              <li>
                <Link to="/infantil">Infantil</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Social</h5>
            <ul className="list-unstyled">
              <li>
                <a href="https://facebook.com">
                  <i className="fab fa-facebook-square"></i> Facebook
                </a>
              </li>
              <li>
                <a href="https://instagram.com">
                  <i className="fab fa-instagram"></i> Instagram
                </a>
              </li>
              <li>
                <a href="https://twitter.com">
                  <i className="fab fa-twitter"></i> Twitter
                </a>
              </li>
              <li>
                <a href="https://youtube.com">
                  <i className="fab fa-youtube"></i> YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
