'use client'

import { cn } from '@/lib/utils'
import { ComponentPropsWithoutRef } from 'react'

//import style from './scss.style.module.scss';

interface IStoryCardTitleProps extends ComponentPropsWithoutRef<'h2'> {}

export const StoryCardTitle: React.FC<IStoryCardTitleProps> = ({
	className,
	children,
	...props
}) => {
	return <h2 className={cn('font-bold text-xl mb-2', className)}>{children}</h2>
}
