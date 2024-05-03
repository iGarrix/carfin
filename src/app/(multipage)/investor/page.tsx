'use client'

import Card from '@/components/commons/cards/card/card.component'
import StoryCardComponent from '@/components/commons/cards/storyCard/story_card.component'
import SectionBlock from '@/components/commons/sectionBlock/section_block.component'
import { useContactForm } from '@/hooks/useContactForm'
import Image from 'next/image'

type Investition = {
	title: string
	details: string
	imageSrc: string
}
const invesititons: Array<Investition> = [
	{
		title: 'Залучення інвестицій',
		details:
			'Залучення інвестицій відбувається через підписання «Договору позики грошових коштів» за допомогою нотаріуса',
		imageSrc:
			'https://cdn.motor1.com/images/mgl/jboxl/s3/audi-rs6-avant-by-mansory-and-mtm.jpg',
	},
	{
		title: 'Сума інвестицій',
		details: 'Мінімальна сума інвестицій становить $5000',
		imageSrc:
			'https://www.topgeargreece.gr/Content/ImagesDatabase/p/827x465/crop/both/49/4908a4660a9b405c9bb0ea2d95872e47.jpg?quality=81&404=default&v=4',
	},
	{
		title: 'Період інвестування',
		details:
			'Інвестори можуть вибрати період інвестування від 6 до 24 місяців, що дозволяє адаптувати стратегію інвестування до власних фінансових цілей та умов ринку',
		imageSrc:
			'https://www.topgear.com/sites/default/files/2024/03/1034_DG_LR_Defender2023.jpg',
	},
	{
		title: 'Дохід при щомісячних виплатах',
		details:
			'При виборі щомісячних виплат інвестори можуть очікувати дохід у розмірі 20% річних у доларах, що створює потенціал для стабільного росту їхнього капіталу',
		imageSrc:
			'https://cdn.whichcar.com.au/assets/w_3000/d5b2152c/2024-porsche-718-cayman-coupe-crayon-1.jpg',
	},
	{
		title: 'Дохід при виплатах в кінці року',
		details:
			'Цей варіант пропонує дохід у розмірі 21% річних у доларах, надаючи інвесторам можливість збільшити свій дохід за рахунок відстроченої виплати',
		imageSrc:
			'https://hips.hearstapps.com/roa.h-cdn.co/assets/16/01/1280x640/landscape-1452093057-hxml8jvksqlg2tsinae88pwfqaogectncahe-u4qfjw.jpg?resize=1200:*',
	},
]

const benefits: typeof invesititons = [
	{
		title: 'Стабільний пасивний дохід',
		details:
			'Інвестуючи в авто через наші програми, ви отримуєте можливість отримувати стабільний щомісячний прибуток',
		imageSrc: '',
	},
	{
		title: 'Фінансова Прозорість',
		details:
			'Ми надаємо інвесторам доступ до детальної фінансової звітності, щоб ви могли бути впевнені в кожному кроці свого інвестиційного шляху',
		imageSrc: '',
	},
	{
		title: 'Зрозумілі умови',
		details:
			'Прагнемо забезпечити чіткі умови та максимальний комфорт для наших партнерів',
		imageSrc: '',
	},
]
const howworks: Array<Pick<Investition, 'title'>> = [
	{
		title:
			'Клієнт звертається до нас з бажанням придбати автомобіль, який він знайшов самостійно або за допомогою наших партнерів',
	},
	{
		title:
			'Після успішної перевірки клієнта ми проводимо огляд обраногоавтомобіля з урахуванням вартості та узгоджуємо умови угоди з клієнтом',
	},
	{
		title:
			'Клієнт звертається до нас з бажанням придбати автомобіль, який він знайшов самостійно або за допомогою наших партнерів',
	},
	{
		title:
			'У випадку позитивного результату угоди, ми взаємодіємо з інвестором для узгодження умов фінансування',
	},
	{
		title:
			'Після узгодження угоди з інвестором, ми реєструємо авто в МРЕВ. Ви інвестуєте в це авто до 70% його вартості, інші — клієнт',
	},
	{
		title:
			'Підписуємо договір оренди автомобіля з правом викупу. Оформляємо право власності авто на вас. Після отримання номерних знаків та техпаспорту Carfin від вашого імені підписуємо договір оренди з правом викупу',
	},
	{
		title:
			'Після підписання угоди ми забезпечуємо обслуговування договору та вирішуємо всі питання пов`язані з ефективним використанням автомобіля. Потім ви здаєте це авто клієнту, підписуючи «Договір оренди з правом викупу» на встановлений термін',
	},
	{
		title:
			'Отримуєте пасивний дохід під час виплати орендарем орендних платежів. Завершальний крок — після повної виплати реєструємо авто на ім`я клієнта, надаючи йому повне право власності',
	},
]

export const dynamic = 'force-static'

export default function Investors() {
	const { onOpen } = useContactForm()
	return (
		<main className='bg-light grid grid-cols-12 gap-16'>
			<section className='bg-accent-100 grid grid-cols-12 py-[10svh] gap-[2rem] rounded-b-[5rem] shadow-2xl shadow-accent-100 border-b-4 border-light border-dashed col-span-full'>
				<aside className='flex flex-col justify-center col-start-2 col-span-5'>
					<h1 className='uppercase font-black tracking-wide text-3xl'>
						Гарантовано отримайте пасивний дохід 20% річних у $, інвестуючи в
						оренду авто з правом викупу
					</h1>
					<br />
					<p>
						Carfin допомагає інвесторам отримувати стабільний пасивний дохід під
						20% річних у $, з'єднуючи вас з клієнтами компанії і вирішуючі всі
						організаційні, управлінські, фінансові та бюрократичні питання.
					</p>
					<br />
					<p>
						Завдяки стійкості та постійному попиту на автомобільні послуги, ця
						інвестиційна можливість надає простий шлях до отримання пасивного
						доходу з мінімальним ризиком.
					</p>
				</aside>
				<aside className='flex items-center justify-center col-span-5'>
					<Image
						alt='audirs6'
						src={
							'https://images.dealer.com/ddc/vehicles/2021/Audi/RS%206%20Avant/Wagon/perspective/front-left/2021_24.png'
						}
						height={500}
						width={500}
						priority
						className='w-auto h-auto object-contain'
					/>
				</aside>
			</section>
			<SectionBlock className='col-span-10 col-start-2'>
				<SectionBlock.Header>
					<SectionBlock.Header.Title>
						Інвестиційні програми від Carfin
					</SectionBlock.Header.Title>
					<SectionBlock.Header.Description>
						Ці програми довірчого управління розроблені з урахуванням найкращих
						практик фінансового управління та мають за мету забезпечення
						ефективного та прибуткового інвестування для наших клієнтів
					</SectionBlock.Header.Description>
				</SectionBlock.Header>
				<div className='grid grid-cols-2 gap-5'>
					<aside className='flex flex-col items-center justify-center'>
						<Image
							alt='audirs6'
							src={
								'https://i.pinimg.com/originals/8e/8b/29/8e8b2931c8f9bd2811621ca75759477e.png'
							}
							height={500}
							width={500}
							priority
							className='w-auto h-auto object-contain -scale-x-100 mt-auto'
						/>
						<div className='mt-auto w-full py-2 grid grid-cols-2 gap-5'>
							<div>
								<h1 className='text-5xl font-black uppercase font-monument'>
									5+
								</h1>
								<p>Років досвіду</p>
							</div>
							<div>
								<h1 className='text-5xl font-black uppercase font-monument'>
									417+
								</h1>
								<p>Заключених угод</p>
							</div>
							<div>
								<h1 className='text-5xl font-black uppercase font-monument'>
									$6200
								</h1>
								<p>Середня сумма угоди</p>
							</div>
							<div className=''>
								<h1 className='text-5xl font-black uppercase font-monument'>
									$268 000+
								</h1>
								<p>Сума доходу інвесторів</p>
							</div>
						</div>
					</aside>
					<aside className='grid grid-cols-2 gap-4'>
						{invesititons.map((item, key) => (
							<Card
								key={key}
								imageSrc={item.imageSrc}
								title={<Card.Title>{item.title}</Card.Title>}
								wrapperClassname={`${
									key === invesititons.length - 1 && 'col-span-2'
								}`}
								className={`${key === invesititons.length - 1 && 'p-[3rem]'}`}>
								{item.details}
							</Card>
						))}
					</aside>
				</div>
			</SectionBlock>
			<SectionBlock className='grid grid-cols-3 col-span-10 col-start-2 gap-5'>
				<SectionBlock.Header className='col-span-full'>
					<SectionBlock.Header.Title className='text-center'>
						Ваші переваги з Carfin
					</SectionBlock.Header.Title>
				</SectionBlock.Header>
				{benefits.map((item, key) => (
					<Card
						key={key}
						imageSrc={item.imageSrc}
						title={<Card.Title>{item.title}</Card.Title>}
						wrapperClassname='bg-accent'
						action={
							<Card.Action
								onClick={() => {
									onOpen(true)
								}}
							/>
						}>
						{item.details}
					</Card>
				))}
			</SectionBlock>
			<SectionBlock className='col-span-11 col-start-2 grid grid-cols-2 gap-4'>
				<SectionBlock.Header className='col-span-full'>
					<SectionBlock.Header.Title>Як це працює?</SectionBlock.Header.Title>
					<SectionBlock.Header.Description>
						Ці програми довірчого управління розроблені з урахуванням найкращих
						практик фінансового управління <br />
						та мають за мету забезпечення ефективного та прибуткового
						інвестування для наших клієнтів
					</SectionBlock.Header.Description>
				</SectionBlock.Header>
				<aside className='grid grid-cols-2 gap-4'>
					{howworks.map((item, key) => (
						<StoryCardComponent key={key}>
							<StoryCardComponent.Index>0{key + 1}</StoryCardComponent.Index>
							<StoryCardComponent.Detail>
								{item.title}
							</StoryCardComponent.Detail>
						</StoryCardComponent>
					))}
				</aside>
				<aside className='flex justify-end overflow-hidden'>
					<Image
						alt='m8'
						src={
							'https://www.bmw.co.uk/content/dam/bmw/common/all-models/m-series/m8-gran-coupe/2022/onepager/bmw-m8-gran-coupe-onepager-gallery-impressions-m8-competition-gc-thumbnail-05.jpg'
						}
						height={1440}
						width={1440}
						priority
						className='w-auto h-auto object-contain translate-x-[35%]'
					/>
				</aside>
			</SectionBlock>
		</main>
	)
}
