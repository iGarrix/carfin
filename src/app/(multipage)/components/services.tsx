'use client'

import StoryCard from '@/components/commons/cards/storyCard/story_card.component'
import Image from 'next/image'
import style from './services.style.module.scss'

const services: Readonly<
	Array<{ index: string; title: string; details: string }>
> = [
	{
		index: '01',
		title: 'Оренда авто з правом викупу',
		details:
			'Оренда авто з правом викупу» — це зручний, простий та вигідний спосіб миттєво отримати авто в оренду для будь-яких своїх потреб з подальшим правом викупу. Орендуйте авто разом з Carfin для роботи в таксі, для бізнесу, родини та будь-яких ваших інших цілей. Здійснюйте щомісячний фіксований платіж за найнижчими річними ставками протягом 12-36 місяців та станьте власником авто відразу після сплати',
	},
	{
		index: '02',
		title: 'Позика під авто у заставу',
		details:
			'Позика під авто — це зручний, простий та вигідний спосіб миттєво отримати від $1500 до $50 000 для будь-яких своїх потреб під заставу свого авто за низькими відсотковими ставками',
	},
]

export default function Services() {
	return (
		<section className={style.wrapper}>
			<aside className={style.aside1}>
				<div>
					<h1>
						Більше про <br />
						<span>carfin</span>
					</h1>
					<br />
					<p>
						Сarfin — надає українцям найвигідніші умови в Україні для оренди
						авто з правом викупу та позики під заставу авто. А також допомагає
						інвесторам отримувати стабільний пасивний дохід, інвестуючи в авто.
						Працюємо з 2019 року.
					</p>
				</div>
				<div className={style.imgGrid}>
					<Image
						src={
							'https://www.topgear.com/sites/default/files/2024/04/2-Porsche-Taycan-review-2024.jpg'
						}
						alt='taycan'
						width={380}
						height={400}
						priority
						className={style.f1}
					/>
					<Image
						src={
							'https://www.motortrend.com/uploads/sites/5/2019/12/2020-Rolls-Royce-Cullinan-10.jpg?w=768&width=768&q=75&format=webp'
						}
						alt='taycan'
						width={380}
						height={400}
						priority
						className={style.f2}
					/>
					<Image
						src={
							'https://www.bmw.ua/content/dam/bmw/common/all-models/m-series/m8-gran-coupe/2022/onepager/bmw-m8-gran-coupe-onepager-sp-desktop.jpg'
						}
						alt='taycan'
						width={380}
						height={400}
						priority
						className={style.f3}
					/>
				</div>
			</aside>
			<aside className={style.aside2}>
				<Image
					src={
						'https://www.motortrend.com/uploads/2023/06/016-2024-Audi-RS6-Avant-performance-front-three-quarters.jpg'
					}
					alt='taycan'
					width={800}
					height={600}
					priority
					className={style.img}
				/>
				<div>
					<ul>
						{services.map((item, key) => (
							<li key={key}>
								<StoryCard>
									<StoryCard.Index>{item.index}</StoryCard.Index>
									<hr /> <br />
									<StoryCard.Title>{item.title}</StoryCard.Title>
									<StoryCard.Detail>{item.details}</StoryCard.Detail>
								</StoryCard>
							</li>
						))}
					</ul>
				</div>
			</aside>
		</section>
	)
}
