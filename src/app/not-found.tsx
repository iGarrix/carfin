import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
	title: 'Сторінку не знайдено',
	description: 'Спробуйте перейти на головну',
	robots: {
		index: false,
		follow: false,
		nocache: false,
	},
}

export default function NotFound() {
	return (
		<main className='h-svh w-svw bg-accent-100 flex items-center justify-center flex-col gap-2'>
			<h1 className='uppercase text-6xl font-monument font-black'>404</h1>
			<h2 className='uppercase text-3xl font-black'>Сторінку не знайдено</h2>
			<div className='gap grid grid-cols-3 gap-6'>
				<Link
					href={'/rental'}
					className='text-lg transition-all hover:text-amber-500'>
					Оренда
				</Link>
				<Link
					href={'/loan_under_car'}
					className='text-lg transition-all hover:text-amber-500'>
					Позика
				</Link>
				<Link
					href={'/investor'}
					className='text-lg transition-all hover:text-amber-500'>
					Інвесторам
				</Link>
			</div>
		</main>
	)
}
