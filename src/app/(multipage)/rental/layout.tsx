import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Оренда з правом викупу',
	description: 'ПРО ПОСЛУГУ «ОРЕНДА АВТО З ПРАВОМ ВИКУПУ»',
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
