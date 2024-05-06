'use client'

import Card from '@/components/commons/cards/card/card.component'
import StoryCardComponent from '@/components/commons/cards/storyCard/story_card.component'
import SectionBlock from '@/components/commons/sectionBlock/section_block.component'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'
import Image from 'next/image'
import style from './rental.style.module.scss'
import { cn } from '@/lib/utils'
type Rent = {
	title: string
}

const howRent: Array<Rent> = [
	{
		title:
			'Ви вибираєте будь-яке* авто і запитуєте в Carfin потрібну суму для його придбання, але не менше 10% від вартості',
	},
	{
		title:
			'Carfin онлайн перевіряє ваші паспорт та ІПН за відкритими реєстрами та просить заповнити невелику анкету з загальними даними про вас',
	},
	{
		title:
			'Якщо все добре, ми можемо допомогти придбати потрібне вам авто прямо сьогодні. Потім ми зустрічаємося з вами у МРЕВ, де ви сплачуєте перший внесок',
	},
	{
		title:
			'Все, авто ваше! З вашого дзвінка до отримання авто — всього кілька годин',
	},
]

const conditionRent: Array<Rent> = [
	{
		title: 'Ви маєте заробляти від $700на місяць',
	},
	{
		title: 'Авто має коштувати не менше $6000 і не більше $20 000',
	},
	{
		title:
			'Ви маєте зробити перший внесок від 10% вартості авто, якщо ви купуєте його для таксі. Якщо це авто для сімейних потреб, бізнесу тощо, то перший внесок складає від 20%',
	},
	{
		title:
			'Підберемо умови спеціально для вас. Якщо ви знайшли авто дешевше $6000 або дорожче 25 000, ми все одно зможемо запропонувати вам вигідні умови. Тому дзвоніть у будь-якому разі',
	},
]

const faq: Readonly<Array<{ question: string; answer: string }>> = [
	{
		question: 'Який мінімальний та максимальний строк виплати оренди?',
		answer: 'Мінімальний — 12 місяців, максимальний — 36 місяців',
	},
	{
		question: 'Чи можу я достроково викупити авто?',
		answer:
			'Так, після 6 місяців. Втім якщо ви бажаєте закрити договір зараз, ви можете розрахуватися за 6 місяців одразу й не чекати',
	},
	{
		question: 'Чи можу я підібрати авто сам?',
		answer: 'Так, звісно. Ви можете вибрати будь-яке авто до $20 000',
	},
	{
		question: 'Що входить у вартість оренди?',
		answer:
			'Орендний плаітж та частина викупу авто! Будь-яке страхування авто не входить',
	},
]

type Benefit = {
	title: string
	details: string
	imageSrc: string
}
const benefitns: Array<Benefit> = [
	{
		title: 'На відміну від банку',
		details:
			'Ми не вимагаємо від вас кредитної історії. Ба більше — ви отримаєте авто, навіть якщо у вас є відкриті кредити в банку. Головне, щоб не було відкритих судових проваджень з банками',
		imageSrc:
			'https://www.marketplace.org/wp-content/uploads/2023/04/USdollar.jpg?fit=2800%2C1866',
	},
	{
		title: 'Нам не потрібна',
		details:
			'Ваша офіційна заробітна плата. Тільки ваша можливість щомісячно сплачувати фіксований платіж по договору',
		imageSrc:
			'https://s7d2.scene7.com/is/image/fiserv/fiserv-programmable-payments-blog-hero-1022?ts=1678102412359&dpr=off',
	},
	{
		title: 'Миттєво',
		details:
			'Ухвалюємо рішення, буквально за кілька годин. Тоді як банк може вирішувати ваше питання навіть місяць',
		imageSrc:
			'https://www.topgear.com/sites/default/files/2024/03/1034_DG_LR_Defender2023.jpg',
	},
	{
		title: 'Не вимагаємо',
		details:
			'Повне КАСКО на авто. Тоді як банк оформляє КАСКО на своїх, не дуже вигідних умовах — під 6-7% річних замість 3-4%, що пропонують страхові компанії',
		imageSrc:
			'https://squidex.arsenal-ic.ua/api/assets/a7652cb6-699a-46aa-a8cb-032917b34bfc',
	},
]

export default function RentalPage() {
	return (
		<main className={style.container}>
			<section className={style.head}>
				<div className={style.main}>
					<h1>
						Чому вигідніше орендувати авто в Carfin з правом викупу <br /> ніж в
						автопрокаті?
					</h1>
					<div className={style.grid_cards}>
						<StoryCardComponent>
							<StoryCardComponent.Title>
								Оренда за правом викупу Carfi
							</StoryCardComponent.Title>
							<hr />
							<br />
							<StoryCardComponent.Detail>
								Найголовніша перевага: ви не просто щомісячно сплачуєте за
								оренду авто — ви поступово його викуповуєте. По суті, ви
								залишаєте ці гроші у себе. <br />
								<br /> З Carfin ви можете самостійно вибрати будь-яке авто:
								автомат чи ручна коробка, червоне чи біле, газ чи дизель, нове
								чи зі значним пробігом, BMW чи SKODA. Жодних обмежень. <br />
								<br /> Ви купуєте авто, яке вибрали та перевірили самі, яке
								потенційно не працювало в таксі, якісно ремонтувалося, не
								потрапляло в аварії тощо. <br />
								<br /> Ви отримуєте вигідніший відсоток для викупу авто.
								Наприклад, якщо взяти Toyota Camry 2017 року за $20 000, то
								розмір щомісячного платежу складе $500, тобто на $100 дешевше. І
								в якому частина буде зберігатися для викупу авто.
							</StoryCardComponent.Detail>
						</StoryCardComponent>
						<StoryCardComponent>
							<StoryCardComponent.Title>
								Оренда без права викупу в автопрокаті
							</StoryCardComponent.Title>
							<hr />
							<br />
							<StoryCardComponent.Detail>
								Ви щомісячно віддаєте гроші іншій компанії замість того, щоб
								викупити це авто, скажімо, всього за рік. <br />
								<br /> Компанії з автопрокату володіють обмеженим автопарком,
								тому пропонують декілька авто. Ви не зможете вибрати авто, яке
								хочете. <br />
								<br /> Як правило, такі авто перебувають у середньому технічному
								стані, тому що спочатку “заточені” під таксі або прокат. Як
								наслідок, мають великий пробіг, високі експлуатаційні
								навантаження та ремонти невисокої якості. <br />
								<br /> Тоді як в компаніях з автопрокату ви сплачуватиме $600
								щомісяця.
							</StoryCardComponent.Detail>
						</StoryCardComponent>
					</div>
				</div>
				<section className={style.under}>
					<h2 className={style.title}>
						Як <span>орендувати</span> авто з правом викупу в{' '}
						<span>Carfin</span>
					</h2>
					<div className={style.storycards}>
						{howRent.map((item, key) => (
							<StoryCardComponent key={key}>
								<StoryCardComponent.Index>0{key + 1}</StoryCardComponent.Index>
								<StoryCardComponent.Detail>
									{item.title}
								</StoryCardComponent.Detail>
							</StoryCardComponent>
						))}
					</div>
				</section>
			</section>
			<SectionBlock className={style.section_custom}>
				<SectionBlock.Header className={style.custom_head}>
					<SectionBlock.Header.Title className={style.custom_title}>
						Про послугу «Оренда авто з правом викупу»
					</SectionBlock.Header.Title>
					<SectionBlock.Header.Description className={style.custom_desc}>
						«Оренда авто з правом викупу» — це зручний, простий та вигідний
						спосіб миттєво отримати авто в оренду для будь-яких своїх потреб з
						подальшим правом викупу. <br /> Орендуйте авто разом з Carfin для
						роботи в таксі, для бізнесу, родини та будь-яких ваших інших цілей.
						<br /> Здійснюйте щомісячний фіксований платіж за найнижчими річними
						ставками протягом 12-36 місяців та станьте власником авто відразу
						після сплати.
					</SectionBlock.Header.Description>
				</SectionBlock.Header>
				<aside className={style.s1}>
					<h1>Умови оренди авто з правом викупу</h1>
					{conditionRent.map((item, key) => (
						<StoryCardComponent key={key}>
							<StoryCardComponent.Index>0{key + 1}</StoryCardComponent.Index>
							<StoryCardComponent.Detail>
								{item.title}
							</StoryCardComponent.Detail>
						</StoryCardComponent>
					))}
				</aside>
				<aside className={style.s2}>
					<Image
						alt='m8'
						src={
							'https://www.bmw.ua/content/dam/bmw/common/all-models/m-series/m8-coupe/2022/onepager/bmw-m8-coupe-onepager-sd-bmw-individual-01.jpg'
						}
						height={800}
						width={800}
						priority
						className={style.img}
					/>
				</aside>
			</SectionBlock>
			<SectionBlock className={cn(style.section_custom, style.faq)}>
				<SectionBlock.Header className={style.custom_head}>
					<SectionBlock.Header.Title className={style.custom_title}>
						Питання та відповіді
					</SectionBlock.Header.Title>
				</SectionBlock.Header>
				<Accordion type='single' collapsible className={style.acc}>
					{faq.map((item, key) => (
						<AccordionItem key={key} value={key.toString()}>
							<AccordionTrigger className={style.trigger}>
								{item.question}
							</AccordionTrigger>
							<AccordionContent>{item.answer}</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
				<aside className={style.fs1}>
					{benefitns.map((item, key) => (
						<Card
							key={key}
							imageSrc={item.imageSrc}
							title={<Card.Title>{item.title}</Card.Title>}>
							{item.details}
						</Card>
					))}
				</aside>
			</SectionBlock>
		</main>
	)
}
