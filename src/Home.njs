import Nullstack from 'nullstack';
import './Home.scss';
import Logo from 'nullstack/logo';

class Home extends Nullstack {

  renderLink({ children, href }) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }

  render({ project }) {
    return (
	    <>
	      <section>
	      	<h1 class="title">História História História História História História História História História</h1>
	        <article>
	          <h2>Parte 1</h2>
	          <p>Loere ds ds sd fdfireuf hfds fdbfhd yfhda y shasdiu fahsfuifhdi</p>
	          <div class="buttons">
	          	<button>botão1</button>
	          	<button>botão2</button>
	          </div>
	        </article>
	      </section>
	      <footer>
					<Link href="https://nullstack.app/pt-br">
						Feito com <Logo height={20} light />
					</Link>
				</footer>
    	</>
    )
  }

}

export default Home;
