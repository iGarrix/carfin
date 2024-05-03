'use client'

import { cn } from '@/lib/utils'
import { ComponentPropsWithoutRef } from 'react'

//import style from './scss.style.module.scss';

interface IStoryCardDetailsProps extends ComponentPropsWithoutRef<'p'> {}

export const StoryCardDetails: React.FC<IStoryCardDetailsProps> = ({
	className,
	children,
	...props
}) => {
	return <p className={cn(className)}>{children}</p>
}
