'use client'
import { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/utils'
import SectionBlockHeader from './section_block_header.component'
import {
	SectionBlockHeaderDescription,
	SectionBlockHeaderTitle,
} from './section_block_headernodes.component'
interface ISectionBlockProps extends ComponentPropsWithoutRef<'section'> {}

function SectionBlock({ className, children, ...props }: ISectionBlockProps) {
	return (
		<section className={cn(className)} {...props}>
			{children}
		</section>
	)
}

SectionBlock.Header = Object.assign(SectionBlockHeader, {
	Title: SectionBlockHeaderTitle,
	Description: SectionBlockHeaderDescription,
})
export default SectionBlock
