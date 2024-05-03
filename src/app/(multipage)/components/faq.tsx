'use client'

import WhiteButton from '@/components/commons/buttons/WhiteButton/whitebutton.component'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'
import { useContactForm } from '@/hooks/useContactForm'
import { useRouter } from 'next/navigation'

const faq: Readonly<Array<{ question: string; answer: string }>> = [
	{
		question: 'Які фінансові умови позики під заставу авто?',
		answer:
			'Якщо ваше авто відповідає всім критеріям, ви можете розраховувати на відсоткову ставку від 36% річних та до 60% від вартості автомобіля',
	},
	{
		question:
			'Ви надаєте позики тільки під автомобіль чи можна під житло або побутову техніку?',
		answer: 'Тільки під авто',
	},
	{
		question: 'Які строки договору позики авто під заставу?',
		answer: 'Термін договору складає від 3 до 24 місяців',
	},
	{
		question: 'Який мінімальний та максимальний строк виплати позики?',
		answer: 'Мінімальний — 3 місяців, максимальний — 24 місяців',
	},
	{
		question: 'Чи можу я достроково закрити позику?',
		answer:
			'Так, після 3 місяців. Втім, якщо ви бажаєте закрити договір зараз, ви можете розрахуватися за 3 місяців одразу й не чекати',
	},
	{
		question:
			'Чи можу я отримати позику під заставу, якщо я не власник, але маю генеральну довіреність?',
		answer: 'На жаль, ні. Ми працюємо тільки з власниками за техпаспортом',
	},
	{
		question: 'Чи можу я достроково погасити позику?',
		answer:
			'Так, ви можете закрити договір відразу після внесення всієї заборгованості без санкцій',
	},
]

export default function FaqBlock() {
	const router = useRouter()
	const { onOpen } = useContactForm()
	return (
		<section className='bg-light w-full col-span-full grid grid-cols-12 gap-20'>
			<div className='col-span-5 col-start-2 py-[3rem]'>
				<h1 className='uppercase font-black text-3xl tracking-wider'>
					Питання та відповіді
				</h1>
				<hr className='border-dark-200 my-2' />
				<Accordion type='single' collapsible className='w-full'>
					{faq.map((item, key) => (
						<AccordionItem key={key} value={key.toString()}>
							<AccordionTrigger className='hover:border-0'>
								{item.question}
							</AccordionTrigger>
							<AccordionContent>{item.answer}</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
			<div className='col-span-5 col-start-7 py-[3rem] grid grid-cols-2 grid-rows-2 gap-6'>
				<div className='rounded-xl bg-accent text-light shadow-2xl shadow-accent/40 h-full flex items-center justify-center flex-col flex-wrap text-center gap-2 p-6 bg-noise'>
					<h1 className='text-4xl uppercase font-black text-center'>Позика</h1>
					<h2 className='text-lg'>
						Отримайте до $50 000 під власне авто у заставу протягом дня від 36%
						річних від 1 місяці до 3 років
					</h2>
					<br />
					<WhiteButton
						onClick={() => {
							router.push('/loan_under_car')
						}}>
						Детальніше
					</WhiteButton>
				</div>
				<div className='rounded-xl bg-accent text-light shadow-2xl shadow-accent/40 h-full flex items-center justify-center flex-col flex-wrap text-center gap-2 p-6 bg-noise'>
					<h1 className='text-4xl uppercase font-black text-center'>
						Інвестиції
					</h1>
					<h2 className='text-lg'>
						Зрозумілі та безпечні програми для інвесторів, що бажають отримувати
						пасивний прибуток
					</h2>
					<br />
					<WhiteButton
						onClick={() => {
							router.push('/investor')
						}}>
						Детальніше
					</WhiteButton>
				</div>
				<div className='rounded-xl bg-accent text-light shadow-2xl shadow-accent/40 h-full flex items-center justify-center flex-col flex-wrap text-center gap-2 col-span-2 row-start-2 p-2 bg-noise'>
					<h1 className='text-4xl uppercase font-black text-center'>
						Передзвонити вам?
					</h1>
					<h2 className='text-lg'>
						Залиште свій номер телефону і ми передзвонимо вам протягом 10 хвилин
					</h2>
					<br />
					<WhiteButton
						onClick={() => {
							onOpen(true)
						}}>
						Залишити заявку
					</WhiteButton>
				</div>
			</div>
		</section>
	)
}
