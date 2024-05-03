'use client'

import { cn } from '@/lib/utils'
import { ComponentPropsWithoutRef } from 'react'

//import style from './scss.style.module.scss';

interface IStoryCardIndexProps extends ComponentPropsWithoutRef<'h1'> {}

export const StoryCardIndex: React.FC<IStoryCardIndexProps> = ({
	children,
	className,
	...props
}) => {
	return (
		<h1
			className={cn(
				'font-black uppercase text-3xl font-monument tracking-wider leading-10',
				className
			)}
			{...props}>
			{children}
		</h1>
	)
}
