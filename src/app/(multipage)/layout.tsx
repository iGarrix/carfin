import ContactFormDialog from '@/components/elements/contactform/contactform_dialog/contactform.component'
import ContactForm from '@/components/elements/contactform/contactform_drawer/contactform.component'
import Footer from '@/components/elements/footer/footer'
import { Header } from '@/components/elements/headers/header/header.component'

export default function ClientLayout(
	props: Readonly<{ children: React.ReactNode }>
) {
	return (
		<main className='min-h-svh flex-1 bg-accent-100'>
			<Header /> {props.children} <Footer />
			<ContactForm />
			<ContactFormDialog />
		</main>
	)
}
