'use client'

import { AccentButton } from '@/components/commons/buttons/AccentButton/accent_button.component'
import FormikField from '@/components/commons/fields/FormikField'
import { ContactFormScheme, ContactFormType } from '@/hooks/useContactForm'
import { Form, Formik, FormikHelpers } from 'formik'
import style from './form.style.module.scss'
interface IContactFormikFormProps {
	state: ContactFormType
	onSubmit: (
		values: ContactFormType,
		formikHelpers: FormikHelpers<ContactFormType>
	) => Promise<any> | void
	send: string
}

function ContactFormikForm({ ...props }: IContactFormikFormProps) {
	return (
		<Formik
			initialValues={props.state}
			validationSchema={ContactFormScheme}
			onSubmit={props.onSubmit}>
			<Form className={`${style.form}`}>
				<FormikField name='name' type='text' placeholder="Введіть ім'я" />
				<FormikField
					name='phone'
					type='text'
					placeholder='Введіть номер телефону'
				/>
				<AccentButton
					type='submit'
					className={`${props.send !== 'Надіслати' && style.sended}`}>
					{props.send}
				</AccentButton>
			</Form>
		</Formik>
	)
}
export default ContactFormikForm
