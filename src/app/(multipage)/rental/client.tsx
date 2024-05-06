'use client'

import { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/utils'
import StoryCardComponent from '@/components/commons/cards/storyCard/story_card.component'
import style from './rental.style.module.scss'
import SectionBlock from '@/components/commons/sectionBlock/section_block.component'
import { Benefit, Rent } from './page'
import Image from 'next/image'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'
import Card from '@/components/commons/cards/card/card.component'

interface IRentalClientReduceJsProps extends ComponentPropsWithoutRef<'div'> {
	howRent: Array<Rent>
	conditionRent: Array<Rent>
	benefits: Array<Benefit>
	faq: Readonly<Array<{ question: string; answer: string }>>
}

function RentalReduceJs({
	className,
	children,
	howRent,
	conditionRent,
	faq,
	benefits,
	...props
}: IRentalClientReduceJsProps) {
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
					{benefits.map((item, key) => (
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
export default RentalReduceJs
