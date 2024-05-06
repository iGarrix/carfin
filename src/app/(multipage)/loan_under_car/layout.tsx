import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Позика під авто',
	description:
		'Отримайте до $50 000 під власне авто у заставу протягом дня від 36% річних від 1 місяці до 3 років',
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
