'use client'
import CalculatorElement from './calculator'
import Image from 'next/image'
import style from './header.style.module.scss'
export default function WelcomeHeader() {
	return (
		<section className={`${style.wrapper}`}>
			<div className={`${style.rect1}`}></div>
			<div className={`${style.rect2}`}></div>
			<h1>
				Орендуйте авто під будь-які потреби за один день <br /> та отримайте
				його у власність <br /> <span>вже через рік</span>
			</h1>
			<CalculatorElement />
			<div className={`${style.rect3}`}></div>
			<div className={`${style.imageWrapper}`}>
				<Image
					src={
						'https://www.pngmart.com/files/21/White-Tesla-Car-PNG-HD-Isolated.png'
					}
					alt='tesla'
					width={800}
					height={800}
					priority
					className={`${style.img}`}
				/>
			</div>
		</section>
	)
}
