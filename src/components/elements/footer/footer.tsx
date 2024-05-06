'use client'

import { SquareArrowOutUpRight } from 'lucide-react'
import Link from 'next/link'
import { Fragment } from 'react'
import style from './footer.style.module.scss'
export default function Footer() {
	return (
		<Fragment>
			<div className={`${style.upperblock}`}>
				<div className={`${style.wrapper}`}>
					<div className={`${style.side1}`}>
						<h2>
							Найвигідніші умови в Україні для оренди авто з правом викупу та
							під заставу авто
						</h2>
						<p>
							чудова можливість для тих, хто мріє про власне авто, але не може
							придбати його прямо зараз
						</p>
					</div>
					<div className={`${style.side2}`}>
						<h2>Контакти</h2>
						<br />
						<p>Адреса: Київ, вул. Миколи Василенка 7, БЦ "Геліос"</p>
						<p>
							Адреса: Біла Церква, вул. Сухоярська 40, Авторинок "Біла Церква"
						</p>
						<br />
						<p>Телефон: +380971098877</p>
					</div>
				</div>
				<div className={`${style.darken_bg}`}></div>
			</div>
			<footer className={`${style.footer}`}>
				<div className={`${style.wrapper}`}>
					<div>
						<Link href={'/'}>
							<h1 className={`${style.link}`}>carfin</h1>
						</Link>
						<p className={`${style.rights}`}>©2020 - Всі права захищені</p>
					</div>
					<div className={`${style.wrapper2}`}>
						<ul className={`${style.ul1}`}>
							<h2>Служба підтримки</h2>
							<li>+38 (097) 109-88-77</li>
						</ul>
						<ul className={`${style.ul1}`}>
							<h2>Пошта</h2>
							<li>office@carfin.in.ua</li>
						</ul>
						<ul className={`${style.ul2}`}>
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
					className={`${style.link_studio}`}>
					developed by webcraft{' '}
					<SquareArrowOutUpRight className={`${style.icon}`} />
				</Link>
			</footer>
		</Fragment>
	)
}
