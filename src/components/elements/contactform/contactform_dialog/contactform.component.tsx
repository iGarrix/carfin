'use client'

import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog'
import { type ContactFormType, useContactForm } from '@/hooks/useContactForm'
import { FormikHelpers } from 'formik'
import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import ContactFormikForm from '../form'
import style from './contactform_dialog.style.module.scss'
interface IContactFormDialogProps {}
function ContactFormDialog({ ...props }: IContactFormDialogProps) {
	const { isOpen, onOpen } = useContactForm()

	const state: ContactFormType = {
		name: '',
		phone: '',
	}

	const [send, onSend] = useState('Надіслати')
	const isNotValid = useMediaQuery({
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
	if (isNotValid) {
		return null
	}

	return (
		<Dialog open={isOpen} onOpenChange={onOpen}>
			<DialogContent className={`${style.dialog}`}>
				<DialogHeader>
					<DialogTitle className={`${style.title}`}>
						Залишити заявку
					</DialogTitle>
				</DialogHeader>
				<ContactFormikForm state={state} onSubmit={onSubmit} send={send} />
			</DialogContent>
		</Dialog>
	)
}
export default ContactFormDialog
