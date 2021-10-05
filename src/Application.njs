import Nullstack from 'nullstack';
import './Application.scss';
import Home from './Home';
import Footer from './Footer';

class Application extends Nullstack {

  prepare({ page, project }) {
    page.locale = 'pt-BR';
    page.title = `História de Escolhas | ${project.name}`;
    page.description = `${project.name} - História de escolhas feita por você | feito com Nullstack`;
  }

  renderHead() {
    return (
      <head>
        <link
          href="https://fonts.gstatic.com" rel="preconnect" />
        <link
          href="https://fonts.googleapis.com/css2?family=Crete+Round&family=Roboto&display=swap"
          rel="stylesheet" />
      </head>
    )
  }

  render() {
    return (
      <main>
        <Head />
        <Home route="/" />
        <Footer />
      </main>
    )
  }

}

export default Application;
