'use client'

import StoryCard from '@/components/commons/cards/storyCard/story_card.component'

const benefits: Readonly<Array<{ title: string; benefit: string }>> = [
	{
		title: 'Миттєве узгодження',
		benefit:
			'Отримайте до $50 000 позики готівкою протягом 1 години прямо у день звернення',
	},
	{
		title: 'Даємо більше інших',
		benefit: 'Позичаємо до 80% від ринкової вартості вашого авто',
	},
	{
		title: 'Найвигідніші відсоткові ставки',
		benefit:
			'Заощаджуйте з мінімальними комісіями та найкращими відсотковими ставками на ринку від Carfin',
	},
	{
		title: 'Станьте власником авто за рік, не викидаючи гроші на вітер',
		benefit:
			'Це ваша найголовніша перевага з Carfin: ви не просто щомісячно сплачуєте за оренду авто — ви поступово його викуповуєте. По суті, ви залишаєте ці гроші в себе, сплачуючи тільки найнижчу оренду на ринку для Carfin',
	},
	{
		title: 'Майже будь-хто може дозволити собі наші умови',
		benefit:
			'Усе, що потрібно, — це ваше бажання заробляти та здійснювати щомісячний платіж, зробити перший внесок у розмірі 10%',
	},
	{
		title: 'Прозорі відсоткові ставки',
		benefit:
			'Ми ніколи не змінюємо відсоткових ставок, щоб привабити клієнта. Усі ставки завжди фіксовані, у нас не існує прихованих відсотків та платежів',
	},
	{
		title: 'Допоможемо, коли інші відмовили',
		benefit:
			'У нас ви зможете отримати гроші завжди, навіть якщо вам відмовили у банку',
	},
	{
		title: 'Безпека володіння та використання авто',
		benefit:
			'Carfin ніяк не обмежує вашу свободу використання авто: ми не робимо дублікатів ключів і генеральної довіреності з правом продажу та не ставимо GPS-трекерів на авто, щоб відслідковувати вас. У наших відносинах ми використовуємо тільки інструменти чинного законодавства України. Це повністю ваше авто і ви використовуєте його як забажаєте',
	},
]

export default function Benefits() {
	return (
		<section className='bg-white col-span-full grid grid-cols-12'>
			<div className='col-start-2 col-span-10 flex flex-col gap-10'>
				<h1 className='text-4xl font-black text-center tracking-wide'>
					Ваші переваги <br />з{' '}
					<span className='font-monument uppercase'>Carfin</span>
				</h1>
				<ul className='grid grid-cols-4 gap-5'>
					{benefits.map((item, key) => (
						<StoryCard key={key}>
							<StoryCard.Index>
								{(key + 1).toLocaleString('en', { minimumIntegerDigits: 2 })}
							</StoryCard.Index>
							<hr className='border-dark-200' /> <br />
							<StoryCard.Title>{item.title}</StoryCard.Title>
							<StoryCard.Detail>{item.benefit}</StoryCard.Detail>
						</StoryCard>
					))}
				</ul>
			</div>
		</section>
	)
}
