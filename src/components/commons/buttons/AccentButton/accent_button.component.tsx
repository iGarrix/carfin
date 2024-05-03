import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes } from 'react'

export interface IAccentButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const AccentButton: React.FC<IAccentButtonProps> = ({
	children,
	className,
	...props
}: IAccentButtonProps) => {
	return (
		<button
			className={cn(
				className,
				'border-2 border-accent rounded-md px-5 py-2 font-semibold tracking-wide transition-all hover:bg-accent active:scale-95'
			)}
			{...props}>
			{children}
		</button>
	)
}
