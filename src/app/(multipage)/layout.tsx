import ContactFormDialog from '@/components/elements/contactform/contactform_dialog/contactform.component'
import ContactForm from '@/components/elements/contactform/contactform_drawer/contactform.component'
import Footer from '@/components/elements/footer/footer'
import { Header } from '@/components/elements/headers/header/header.component'
import style from './layout.style.module.scss'

export default function ClientLayout(
	props: Readonly<{ children: React.ReactNode }>
) {
	return (
		<main className={`${style.ly}`}>
			<Header /> {props.children} <Footer />
			<ContactForm />
			<ContactFormDialog />
		</main>
	)
}
