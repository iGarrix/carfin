'use client'

import style from './field.module.scss'
import { InputHTMLAttributes } from 'react'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

export interface IFieldProps extends InputHTMLAttributes<HTMLInputElement> {
	title: string
}

export const Field: React.FC<IFieldProps> = ({
	title,
	className,
	...props
}) => {
	return (
		<div className='flex flex-col w-full border rounded-lg bg-transparent px-4 py-2'>
			<div className='flex flex-wrap gap-2'>
				<p className='text-sm text-normal'>{title}</p>
			</div>
			<div className={`${style.formikfieldWrapper} select-none`}>
				<Input
					className={cn(
						className,
						'border-0 outline-none focus-visible:ring-0 rounded-none focus-visible:ring-transparent text-base text-dark-full placeholder:text-slate-600 bg-transparent ring-0 p-0'
					)}
					{...props}
				/>
			</div>
		</div>
	)
}
