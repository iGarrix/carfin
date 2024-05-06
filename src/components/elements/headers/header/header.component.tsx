'use client'

import { AccentButton } from '@/components/commons/buttons/AccentButton/accent_button.component'
import { useContactForm } from '@/hooks/useContactForm'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import style from './header.style.module.scss'
import { Menu } from 'lucide-react'
import { Fragment, useState } from 'react'
import PhoneHeaderDrawer from './phone_heder_drawer.component'

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
	const [phoneDrawer, onOpenDrawer] = useState(false)
	return (
		<Fragment>
			<PhoneHeaderDrawer
				isOpen={phoneDrawer}
				pathname={pathname}
				header_navigation={header_navigation}
				onOpen={onOpenDrawer}
				onOpenForm={onOpen}
			/>
			<div className={`${style.headerWrapper}`}>
				<header className={`${style.header}`}>
					<Link href={'/'}>
						<h1 className={`${style.logo}`}>carfin</h1>
					</Link>
					<nav>
						{header_navigation.map((item, key) => (
							<Link
								key={key}
								href={item.path}
								className={cn(
									style.link,
									`${pathname.includes(item.path) && style.selected}`
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
					<button
						aria-label='phone_menu'
						className={`${style.bar}`}
						onClick={() => {
							onOpenDrawer(true)
						}}>
						<Menu />
					</button>
				</header>
			</div>
		</Fragment>
	)
}
