'use client'
import { cn } from '@/lib/utils'
import { ComponentPropsWithoutRef } from 'react'

interface IWhiteButtonProps extends ComponentPropsWithoutRef<'button'> {}

function WhiteButton({ className, children, ...props }: IWhiteButtonProps) {
	return (
		<button
			className={cn('bg-light text-dark-200 rounded px-7 py-3', className)}
			{...props}>
			{children}
		</button>
	)
}

export default WhiteButton
