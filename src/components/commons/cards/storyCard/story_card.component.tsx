'use client'

import { ComponentPropsWithoutRef } from 'react'
import { StoryCardIndex } from './story_card_index.component'
import { cn } from '@/lib/utils'
import { StoryCardTitle } from './story_card_title.component'
import { StoryCardDetails } from './story_card_details.component'

//import style from './scss.style.module.scss';

interface IStoryCardProps extends ComponentPropsWithoutRef<'div'> {}

function StoryCardComponent({
	className,
	children,
	...props
}: IStoryCardProps) {
	return (
		<div className={cn(className)} {...props}>
			{children}
		</div>
	)
}

StoryCardComponent.Index = StoryCardIndex
StoryCardComponent.Title = StoryCardTitle
StoryCardComponent.Detail = StoryCardDetails
export default StoryCardComponent
