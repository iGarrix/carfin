import Benefits from './components/benefits'
import FaqBlock from './components/faq'
import WelcomeHeader from './components/header'
import Services from './components/services'
import style from './layout.style.module.scss'
export default function WelcomePage() {
	return (
		<main className={`${style.page}`}>
			<WelcomeHeader />
			<Services />
			<Benefits />
			<FaqBlock />
		</main>
	)
}
