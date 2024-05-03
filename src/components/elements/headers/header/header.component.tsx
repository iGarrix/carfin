'use client'

import { AccentButton } from '@/components/commons/buttons/AccentButton/accent_button.component'
import { useContactForm } from '@/hooks/useContactForm'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

//import style from './scss.style.module.scss';

const header_navigation: Readonly<Array<{ path: string; title: string }>> = [
	{
		path: '/rental',
		title: 'Оренда з правом викупу',
	},
	{
		path: '/loan_under_car',
		title: 'Позика під авто',
	},
	{
		path: '/investor',
		title: 'Інвесторам',
	},
]

export const Header: React.FC = () => {
	const pathname = usePathname()
	const { onOpen } = useContactForm()
	return (
		<div className='w-full grid grid-cols-12'>
			<header className='flex justify-between py-[2rem] items-center col-span-10 col-start-2 select-none'>
				<Link href={'/'}>
					<h1 className='font-monument uppercase tracking-wider text-2xl'>
						carfin
					</h1>
				</Link>
				<nav className='flex gap-6 h-full items-center'>
					{header_navigation.map((item, key) => (
						<Link
							key={key}
							href={item.path}
							className={cn(
								'transition-all rounded px-4 py-1 hover:bg-accent hover:shadow-lg hover:shadow-accent/40 active:scale-95',
								`${
									pathname.includes(item.path) &&
									'bg-accent shadow-lg shadow-accent/30'
								}`
							)}>
							{item.title}
						</Link>
					))}
				</nav>
				<aside>
					<AccentButton
						onClick={() => {
							onOpen(true)
						}}>
						Підібрати авто
					</AccentButton>
				</aside>
			</header>
		</div>
	)
}
