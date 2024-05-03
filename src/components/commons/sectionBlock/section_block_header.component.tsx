'use client'
import { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/utils'
interface ISectionBlockHeaderProps extends ComponentPropsWithoutRef<'div'> {}

function SectionBlockHeader({
	className,
	children,
	...props
}: ISectionBlockHeaderProps) {
	return (
		<div className={cn('flex flex-col gap-4 mb-10', className)} {...props}>
			{children}
		</div>
	)
}

export default SectionBlockHeader
