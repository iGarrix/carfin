'use client'

import { CalculatorState } from '@/api/calculator/calc.types'
import { Field } from '@/components/commons/fields/Field'
import { Slider } from '@/components/ui/slider'
import { cn } from '@/lib/utils'
import { ChevronsLeftRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import style from './header.style.module.scss'
export default function CalculatorElement() {
	const [fields, setFields] = useState<CalculatorState>({
		amount: 0,
		first_deposit: 0,
		period: 12,
		variant: 'weekly',
	})
	const [calculate, setCalculate] = useState<{
		regular: number
		all: number
		overpaid: number
	}>({ regular: 0, all: 0, overpaid: 0 })

	useEffect(() => {
		const period = transformPeriod(fields.period)
		const cofficient = getCofficient(period)
		const loan = fields.amount - fields.first_deposit
		const all = loan * cofficient
		setCalculate({
			regular: fields.variant === 'weekly' ? all / (period * 4) : all / period,
			all: all,
			overpaid: loan * (cofficient - 1),
		})

		//return { regularPayment, totalPayments, overpayment };
	}, [fields])

	function transformPeriod(_p: number) {
		switch (_p) {
			case 0:
				return 12
			case 1:
				return 18
			case 2:
				return 24
			case 3:
				return 30
			case 4:
				return 36

			default:
				return 12
		}
	}

	function getCofficient(_v: number) {
		switch (_v) {
			case 12:
				return 1.279
			case 18:
				return 1.422
			case 24:
				return 1.574
			case 30:
				return 1.735
			case 36:
				return 1.904

			default:
				return 0
		}
	}

	return (
		<div className={`${style.calculatorWrapper}`}>
			<div className={`${style.cases}`}>
				<button
					className={cn(fields.variant === 'weekly' && style.selected)}
					onClick={() => {
						setFields(p => ({
							...p,
							variant: 'weekly',
						}))
					}}>
					Платіж щотижня
				</button>
				<ChevronsLeftRight />
				<button
					className={cn(fields.variant === 'monthly' && style.selected)}
					onClick={() => {
						setFields(p => ({
							...p,
							variant: 'monthly',
						}))
					}}>
					Платіж щомісяця
				</button>
			</div>
			<div className={`${style.logic}`}>
				<div className={`${style.fieldWrapper}`}>
					<Field
						className={`bg-light-200 dark:bg-slate-800 autofill:bg-slate-800 outline-none border-none rounded`}
						type='number'
						name='amount'
						placeholder={'E.g 9700'}
						onChange={(e: { target: { value: string } }) => {
							setFields(p => ({
								...p,
								amount: Number.parseInt(e.target.value) || 0,
							}))
						}}
						title='Вартість авто (USD)'
					/>
					<Field
						className={`bg-light-200 dark:bg-slate-800 autofill:bg-slate-800 outline-none border-none rounded`}
						type='number'
						name='first_deposit'
						placeholder={'E.g 3500'}
						onChange={(e: { target: { value: string } }) => {
							setFields(p => ({
								...p,
								first_deposit: Number.parseInt(e.target.value) || 0,
							}))
						}}
						title={'Перший внесок (USD)'}
					/>
				</div>
				<div className={style.period}>
					<p className=''>Період (місяці): {transformPeriod(fields.period)}</p>
					<Slider
						defaultValue={[0]}
						max={4}
						step={1}
						onValueChange={e => {
							setFields(p => ({
								...p,
								period: e[0] as typeof fields.period,
							}))
						}}
					/>
				</div>
				<div>
					<p className={style.calcTableTitle}>Розрахунок</p>
					<div className={style.calcWrapper}>
						<section className={style.sect1}>
							<h2 className='py-2'>Регулярний платіж</h2>
							<h2 className={style.righth4}>Всі платежі</h2>
							<h2 className={style.righth4}>Переплата</h2>
						</section>
						<section className={style.sect2}>
							<p>{calculate.regular.toFixed(2)} usd</p>
							<p className={style.righth4}>{calculate.all.toFixed(2)} usd</p>
							<p className={style.righth4}>
								{calculate.overpaid.toFixed(2)} usd
							</p>
						</section>
					</div>
				</div>
			</div>
		</div>
	)
}
