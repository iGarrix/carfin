'use client'
import { ComponentPropsWithoutRef, ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { CircleArrowRight } from 'lucide-react'
import CardTitle from './card_title.component'
import CardAction from './card_action.component'
interface ICardProps
	extends Omit<Omit<ComponentPropsWithoutRef<'div'>, 'title'>, 'action'> {
	title: ReactNode
	action?: ReactNode
	wrapperClassname?: string
	imageSrc: string
}

function Card({
	className,
	children,
	title,
	action,
	imageSrc,
	wrapperClassname,
	...props
}: ICardProps) {
	return (
		<div
			className={cn(
				`rounded-xl overflow-hidden shadow-2xl shadow-dark-200/40 text-light bg-center bg-cover`,
				wrapperClassname
			)}
			style={{ backgroundImage: `url('${imageSrc}')` }}
			{...props}>
			<div
				className={cn(
					'w-full h-full bg-gradient-to-br from-dark-200 via-dark-200/60 to-light/0 p-8 flex flex-col items-start',
					className
				)}>
				{title}
				<br />
				<div className='text-light-200 flex flex-col h-full'>{children}</div>
				{action && <br />}
				{action}
			</div>
		</div>
	)
}

Card.Title = CardTitle
Card.Action = CardAction

export default Card
