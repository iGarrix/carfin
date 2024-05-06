'use client'
import {
	Drawer,
	DrawerContent,
	DrawerHeader,
	DrawerTitle,
} from '@/components/ui/drawer'
import { useContactForm, type ContactFormType } from '@/hooks/useContactForm'
import { useMediaQuery } from 'react-responsive'
import { FormikHelpers } from 'formik'
import { useState } from 'react'
import ContactFormikForm from '../form'
import style from './contactform_drawer.style.module.scss'
interface IContactFormProps {}

function ContactForm({ ...props }: IContactFormProps) {
	const { isOpen, onOpen } = useContactForm()

	const state: ContactFormType = {
		name: '',
		phone: '',
	}

	const [send, onSend] = useState('Надіслати')
	const isValid = useMediaQuery({
		query: 'only screen and (min-width : 149px) and (max-width : 550px)',
	})

	async function onSubmit(
		values: ContactFormType,
		formikHelpers: FormikHelpers<ContactFormType>
	) {
		onSend('Заявку успішно надіслано!')
		setTimeout(() => {
			onOpen(false)
			onSend('Надіслати')
		}, 500)
	}
	if (!isValid) {
		return null
	}

	return (
		<Drawer open={isOpen} onOpenChange={onOpen}>
			<DrawerContent className={`${style.drawer}`}>
				<DrawerHeader>
					<DrawerTitle>Залишити заявку</DrawerTitle>
				</DrawerHeader>
				<ContactFormikForm state={state} onSubmit={onSubmit} send={send} />
			</DrawerContent>
		</Drawer>
	)
}
export default ContactForm
