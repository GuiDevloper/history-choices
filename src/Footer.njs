import './Footer.scss';
import Logo from 'nullstack/logo';

function Link({ href, children }) {
	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
		>
			{children}
		</a>
	)
}

export default function Footer() {
	return (
		<footer>
			Feito por
			<Link href="https://github.com/GuiDevloper">
				GuiDevloper
			</Link>
			com
			<Link href="https://nullstack.app/pt-br">
				<Logo height={20} light />
			</Link>
		</footer>
	)
}
