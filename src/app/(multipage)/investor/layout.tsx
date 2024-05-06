import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Інвесторам',
	description:
		'Carfin допомагає інвесторам отримувати стабільний пасивний дохід під 20% річних у $, з`єднуючи вас з клієнтами компанії і вирішуючі всі організаційні, управлінські, фінансові та бюрократичні питання',
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
