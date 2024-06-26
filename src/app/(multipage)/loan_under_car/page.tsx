'use client'

import Card from '@/components/commons/cards/card/card.component'
import StoryCardComponent from '@/components/commons/cards/storyCard/story_card.component'
import SectionBlock from '@/components/commons/sectionBlock/section_block.component'
import { CircleCheck } from 'lucide-react'
import Image from 'next/image'
import style from './load.style.module.scss'
type Eg = {
	title: string
}
const Example: Array<Eg> = [
	{
		title:
			'Договір укладається від 3 місяців до 2 років з правом продовження та дострокового погашення без штрафних санкцій. Мінімальна сума позики — $1500 дол або 60 000 грн',
	},
	{
		title: 'Сума: 100 000 грн',
	},
	{
		title: 'Термін кредиту — 6 місяців',
	},
	{
		title: 'Річна відсоткова ставка — 36%',
	},
	{
		title:
			'Загальна переплата за 6 місяців без урахування тіла кредиту — 18 000 грн',
	},
	{
		title:
			'Загальна сума платежів за 6 місяців з урахуванням відсотків і тіла — 118 000 грн',
	},
]

export default function LoanUnderCarPage() {
	return (
		<main className={style.container}>
			<section className={style.sect1}>
				<div className={style.wrapper}>
					<aside className={style.contentContainer}>
						<h1 className={style.title}>
							Отримайте до $50 000 під власне авто у заставу
							<br /> протягом дня від 36% річних <br /> від 1 місяці до 3 років
						</h1>
						<br />
						<p>
							<span>Від 36%</span>
							ставка на рік
						</p>
						<p>
							<span>До 3 років</span>
							без переоформлення авто
						</p>
						<br />
						<ol>
							<li>
								<CircleCheck /> продовжуєте користуватися авто
							</li>
							<li>
								<CircleCheck /> високий відсоток схвалення
							</li>
							<li>
								<CircleCheck /> швидке оформлення по 3 документам
							</li>
						</ol>
					</aside>
					<aside className={style.imageContainer}>
						<Image
							alt='m8'
							src={
								'https://ymimg1.b8cdn.com/uploads/car_model/8297/pictures/9005485/Aston_Martin_DBS_Superleggera.png'
							}
							height={1440}
							width={1440}
							priority
							className={style.img}
						/>
					</aside>
				</div>
				<section className={style.underWrapper}>
					<h2>Про послугу «Позика під авто у заставу»</h2>
					<p>
						«Позика під авто — це зручний, простий та вигідний спосіб миттєво
						отримати від $1500 до $50 000 для будь-яких своїх потреб під заставу
						свого авто за низькими відсотковими ставками.
					</p>
				</section>
			</section>
			<SectionBlock className={style.sect2}>
				<SectionBlock.Header className={style.head}>
					<SectionBlock.Header.Title className={style.title}>
						Приклад розрахунку кредиту під заставу автомобіля?
					</SectionBlock.Header.Title>
				</SectionBlock.Header>
				<aside className={style.s1}>
					<Image
						alt='m8'
						src={
							'https://images.carprices.com/pricebooks_data/usa/colorized/2023/Ram/View2/1500_Ram_Crew_Cab_4x4/TRX/DT6S98_PW7.png'
						}
						height={800}
						width={800}
						priority
					/>
				</aside>
				<aside className={style.s2}>
					{Example.map((item, key) => (
						<StoryCardComponent key={key}>
							<StoryCardComponent.Index>0{key + 1}</StoryCardComponent.Index>
							<StoryCardComponent.Detail>
								{item.title}
							</StoryCardComponent.Detail>
						</StoryCardComponent>
					))}
				</aside>
			</SectionBlock>
			<SectionBlock className={style.sect3}>
				<SectionBlock.Header className={style.head}>
					<SectionBlock.Header.Title className={style.title}>
						Як отримати гроші Carfin під заставу авто
					</SectionBlock.Header.Title>
					<SectionBlock.Header.Description className={style.title}>
						Якщо вас влаштовують умови, ви надсилаєте нам свої паспорт та ІПН,
						ми передаємо їх нотаріусу <br /> і після перевірки погоджуємо угоду
					</SectionBlock.Header.Description>
				</SectionBlock.Header>
				<Card
					imageSrc='https://www.marketplace.org/wp-content/uploads/2023/04/USdollar.jpg?fit=2800%2C1866'
					title={<Card.Title>Якщо вам потрібні гроші</Card.Title>}
					wrapperClassname={style.bigCardWrap}>
					<p>
						щоб розпочати бізнес, щоб віддати борг, щоб придбати щось нове, на
						лікування, на ремонт, на будь що, — зверніться до нас за фінансовою
						позикою під заставу свого авто. Наприклад, ви хочете позичити $10
						000 під ваше авто Toyota Camry вартістю $15 000
					</p>
					<br />
					<p className='font-semibold text-lg'>Далі є два варіанти</p>
				</Card>
				<Card
					imageSrc='https://www.marketplace.org/wp-content/uploads/2023/04/USdollar.jpg?fit=2800%2C1866'
					title={<Card.Title>Ви можете</Card.Title>}
					wrapperClassname={style.bigCardWrap}>
					<p>Погашувати позику за двома нашими програмами</p>
					<br />
					<p className='font-semibold text-lg mt-auto'>Далі є два варіанти</p>
				</Card>
				<Card
					imageSrc='https://brusik.ua/wp-content/uploads/2023/02/1-1000x633.jpg'
					title={<Card.Title>Ви залишаєте авто у себе</Card.Title>}
					wrapperClassname={style.cardWrap}>
					<p>
						Ми позичимо вам до 50% вартості вашого авто (у цьому випадку це
						$7500)
					</p>
				</Card>
				<Card
					imageSrc='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVNgGxQgKzAIfFa9CajPh6XYusaAVPmu-Ead3RZiTCly_4WBv0cee-WHP6hpRoStM3zf8&usqp=CAU'
					title={
						<Card.Title>Ви погоджуєтесь поставити авто на стоянку</Card.Title>
					}
					wrapperClassname={style.cardWrap}>
					<p>Ми позичимо вам до 80% від вартості (це $12 000)</p>
				</Card>
				<Card
					imageSrc='https://brusik.ua/wp-content/uploads/2023/02/1-1000x633.jpg'
					title={<Card.Title>Перша програма</Card.Title>}
					wrapperClassname={style.cardWrap}>
					<p>Ви погашуєте відсотки і тіло позики в рівних частинах</p>
				</Card>
				<Card
					imageSrc='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVNgGxQgKzAIfFa9CajPh6XYusaAVPmu-Ead3RZiTCly_4WBv0cee-WHP6hpRoStM3zf8&usqp=CAU'
					title={<Card.Title>Друга програма</Card.Title>}
					wrapperClassname={style.cardWrap}>
					<p>Ви погашуєте тільки відсоткову ставку</p>
				</Card>
			</SectionBlock>
		</main>
	)
}
