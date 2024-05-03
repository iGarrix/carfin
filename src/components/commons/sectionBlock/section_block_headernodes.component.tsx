'use client'
import { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/utils'
interface ISectionBlockHeaderTitleProps
	extends ComponentPropsWithoutRef<'h2'> {}
interface ISectionBlockHeaderDescriptionProps
	extends ComponentPropsWithoutRef<'p'> {}

function SectionBlockHeaderTitleComponent({
	className,
	children,
	...props
}: ISectionBlockHeaderTitleProps) {
	return (
		<h1
			className={cn('uppercase font-black tracking-wide text-3xl', className)}
			{...props}>
			{children}
		</h1>
	)
}
function SectionBlockHeaderDescriptionComponent({
	className,
	children,
	...props
}: ISectionBlockHeaderDescriptionProps) {
	return (
		<p className={cn(className)} {...props}>
			{children}
		</p>
	)
}
export const SectionBlockHeaderTitle = SectionBlockHeaderTitleComponent
export const SectionBlockHeaderDescription =
	SectionBlockHeaderDescriptionComponent
