'use client'
import { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/utils'
interface ICardTitleProps extends ComponentPropsWithoutRef<'h1'> {}

function CardTitle({ className, children, ...props }: ICardTitleProps) {
	return (
		<h1 className={cn('text-xl font-bold uppercase  ', className)} {...props}>
			{children}
		</h1>
	)
}
export default CardTitle
