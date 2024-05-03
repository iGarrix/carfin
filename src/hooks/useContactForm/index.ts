import { create } from 'zustand'
import * as Yup from 'yup'

export interface IContactFormStore {
	isOpen: boolean
	onOpen: (open: boolean) => void
}

export type ContactFormType = {
	//user: IUser
	name: string
	phone: string
}

export const useContactForm = create<IContactFormStore>((set, get) => ({
	isOpen: false,
	onOpen: (open: boolean) => {
		set({ isOpen: open })
	},
}))

export const ContactFormScheme = Yup.object({
	name: Yup.string().required("Ім'я обов'язкове"),
	phone: Yup.string().required("Телефон обов'язкове"),
})
