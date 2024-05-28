import Header from  '../../components/Header';
import './Error.scss';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';


function Error() {
    return (
      <div>
        <Header />
        <main className="page-containe">
          <section className="content">
            <h1 className="error-title">404</h1>
            <h2 className="error-subtitle">
              Oups! La page que vous demandez n'existe pas.
            </h2>
            <Link className="error-link" to="/">
              Retourner sur la page d'acceuil
            </Link>
          </section>
        </main>
        <Footer />
      </div>
    );
}

export default Error;