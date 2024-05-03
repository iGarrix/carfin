'use client'
import CalculatorElement from './calculator'
import Image from 'next/image'

export default function WelcomeHeader() {
	return (
		<section className='flex-1 col-span-full h-[90svh] pt-10 flex flex-col gap-10 relative overflow-hidden '>
			<div className='border-[3rem] border-dotted border-accent w-[25rem] h-[25rem] rounded-3xl absolute top-[10rem] left-[-15rem]'></div>
			<div className='border-[3rem] border-dashed border-accent w-[25rem] h-[25rem] rounded-full absolute top-0 right-[-15rem]'></div>
			<h1 className='font-black tracking-wide uppercase text-4xl text-center leading-snug z-10'>
				Орендуйте авто під будь-які потреби за один день <br /> та отримайте
				його у власність <br />{' '}
				<span className='bg-accent text-light px-2'>вже через рік</span>
			</h1>
			<CalculatorElement />
			<div className='bg-accent contrast-125 w-[130svw] h-[45%] absolute bottom-0 rotate-[-5deg] translate-x-[-2%] translate-y-[4rem] bg-noise'></div>
			<div className='z-[9] absolute bottom-0 right-0 w-full flex justify-end translate-x-[70px]'>
				<Image
					src={
						'https://www.pngmart.com/files/21/White-Tesla-Car-PNG-HD-Isolated.png'
					}
					alt='tesla'
					width={800}
					height={800}
					priority
					className='w-auto h-auto'
				/>
			</div>
		</section>
	)
}
