import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Оренда з правом викупу',
	description: 'ПРО ПОСЛУГУ «ОРЕНДА АВТО З ПРАВОМ ВИКУПУ»',
	openGraph: {
		title: 'Carfin - Оренда з правом викупу',
		description:
			'З Carfin ви можете самостійно вибрати будь-яке авто: автомат чи ручна коробка, червоне чи біле, газ чи дизель, нове чи зі значним пробігом, BMW чи SKODA. Жодних обмежень',
		url: process.env.NEXT_PUBLIC_URL,
		siteName: 'Carfin',
		locale: 'ua_UA',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Carfin - Оренда з правом викупу',
		description:
			'З Carfin ви можете самостійно вибрати будь-яке авто: автомат чи ручна коробка, червоне чи біле, газ чи дизель, нове чи зі значним пробігом, BMW чи SKODA. Жодних обмежень',
		creator: '@illinpayne',
	},
	robots: {
		index: true,
		follow: true,
		nocache: false,
	},
}

export default function layoutName(
	props: Readonly<{ children: React.ReactNode }>
) {
	return <div>{props.children}</div>
}
