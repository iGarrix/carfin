'use client'

import { SquareArrowOutUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'

export default function Footer() {
	return (
		<Fragment>
			<div className='bg-light grid grid-cols-12 grid-rows-[1fr_6rem]'>
				<div className='bg-accent col-span-8 col-start-3 grid grid-cols-2 gap-10 px-10 rounded-2xl p-4 h-[16rem] translate-y-[6rem] bg-noise'>
					<div className='flex flex-col justify-center gap-5'>
						<h2 className='text-3xl font-black'>
							Найвигідніші умови в Україні для оренди авто з правом викупу та
							під заставу авто
						</h2>
						<p>
							чудова можливість для тих, хто мріє про власне авто, але не може
							придбати його прямо зараз
						</p>
					</div>
					<div className='flex items-end flex-col flex-wrap overflow-hidden justify-center'>
						<h2 className='text-3xl font-black'>Контакти</h2>
						<br />
						<p className='text-gray-800 font-semibold'>
							Адреса: Київ, вул. Миколи Василенка 7, БЦ "Геліос"
						</p>
						<p className='text-gray-800 font-semibold'>
							Адреса: Біла Церква, вул. Сухоярська 40, Авторинок "Біла Церква"
						</p>
						<br />
						<p className='text-gray-800 font-semibold'>
							Телефон: +380971098877
						</p>
					</div>
				</div>
				<div className='bg-dark-200 w-full row-start-2 col-span-full rounded-t-3xl'></div>
			</div>
			<footer className='bg-dark-200 text-light col-span-full grid grid-cols-12'>
				<div className='col-span-10 col-start-2 py-10 flex flex-wrap gap-[5rem] items-start justify-between'>
					<div>
						<Link href={'/'}>
							<h1 className='font-monument uppercase tracking-wider text-2xl'>
								carfin
							</h1>
						</Link>
						<p className='text-dark-100'>©2020 - Всі права захищені</p>
					</div>
					<div className='flex flex-wrap gap-[1rem] grow items-start justify-around'>
						<ul className='[&>li]:text-accent'>
							<h2 className='text-lg leading-10'>Служба підтримки</h2>
							<li>+38 (097) 109-88-77</li>
						</ul>
						<ul className='[&>li]:text-accent'>
							<h2 className='text-lg leading-10'>Пошта</h2>
							<li>office@carfin.in.ua</li>
						</ul>
						<ul className='text-accent'>
							<Link href={'/loan_under_car'}>
								<li>Позика під авто</li>
							</Link>
							<Link href={'/rental'}>
								<li>Оренда з правом викупу</li>
							</Link>
							<Link href={'/investors'}>
								<li>Інвесторам</li>
							</Link>
						</ul>
					</div>
				</div>
				<Link
					href={'https://webcraft.rivne.ua'}
					target='_blank'
					className='hover:text-blue-400 transition-all text-center text-dark-100 flex justify-center gap-1 col-span-full py-5'>
					developed by webcraft <SquareArrowOutUpRight className='w-[16px]' />
				</Link>
			</footer>
		</Fragment>
	)
}
