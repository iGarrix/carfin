'use client'
import { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/utils'
import { CircleArrowRight } from 'lucide-react'
interface ICardActionProps
	extends Omit<ComponentPropsWithoutRef<'button'>, 'children'> {}

function CardAction({ className, ...props }: ICardActionProps) {
	return (
		<button
			aria-label='button_action'
			role='alert'
			className={cn(
				'mt-auto transition-all active:translate-x-2 hover:text-accent',
				className
			)}
			{...props}>
			<CircleArrowRight className='w-[1.7rem] h-[1.7rem]' />
		</button>
	)
}

export default CardAction
