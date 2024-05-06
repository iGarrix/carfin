'use client'

import {
	Drawer,
	DrawerContent,
	DrawerHeader,
	DrawerTitle,
} from '@/components/ui/drawer'
import style from './drawer.style.module.scss'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { AccentButton } from '@/components/commons/buttons/AccentButton/accent_button.component'
interface IPhoneHeaderDrawerProps {
	isOpen: boolean
	header_navigation: Readonly<Array<{ path: string; title: string }>>
	pathname: string
	onOpen: (open: boolean) => void
	onOpenForm: (open: boolean) => void
}
function PhoneHeaderDrawer({ ...props }: IPhoneHeaderDrawerProps) {
	return (
		<Drawer open={props.isOpen} onOpenChange={props.onOpen}>
			<DrawerContent className={`${style.drawer}`}>
				<DrawerHeader>
					<DrawerTitle>Навігаційне меню</DrawerTitle>
				</DrawerHeader>
				<nav>
					{props.header_navigation.map((item, key) => (
						<Link
							key={key}
							href={item.path}
							className={cn(
								style.link,
								`${props.pathname.includes(item.path) && style.selected}`
							)}
							onClick={() => {
								props.onOpen(false)
							}}>
							{item.title}
							<ChevronRight />
						</Link>
					))}
					<br />
					<AccentButton
						onClick={() => {
							props.onOpen(false)
							props.onOpenForm(true)
						}}>
						Підібрати авто
					</AccentButton>
				</nav>
			</DrawerContent>
		</Drawer>
	)
}

export default PhoneHeaderDrawer
