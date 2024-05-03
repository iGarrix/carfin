export type CalculatorState = {
	amount: number
	first_deposit: number
	period: 12 | 18 | 24 | 30 | 36
	variant: 'weekly' | 'monthly'
}
