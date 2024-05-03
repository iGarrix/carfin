import Benefits from './components/benefits'
import FaqBlock from './components/faq'
import WelcomeHeader from './components/header'
import Services from './components/services'

export default function WelcomePage() {
	return (
		<main className='grid grid-cols-12 '>
			<WelcomeHeader />
			<Services />
			<Benefits />
			<FaqBlock />
		</main>
	)
}
