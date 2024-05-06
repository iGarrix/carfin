import './globals.css'
// import { Toaster } from '@/components/ui/sonner'
// import { ReactQueryProvider } from '@/providers/react-query-provider/react-query.provider'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
const inter = Inter({ subsets: ['latin'], variable: '--inter' })
const monument = localFont({
	variable: '--monument',
	src: [
		{
			path: '../assets/fonts/monument/MonumentExtended-Regular.otf',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../assets/fonts/monument/MonumentExtended-Ultrabold.otf',
			weight: '900',
			style: 'normal',
		},
	],
})
const gilory = localFont({
	variable: '--gilory',
	src: [
		{
			path: '../assets/fonts/gilory/Gilroy-Light.ttf',
			weight: '300',
			style: 'normal',
		},
		{
			path: '../assets/fonts/gilory/Gilroy-Regular.ttf',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../assets/fonts/gilory/Gilroy-Medium.ttf',
			weight: '500',
			style: 'normal',
		},
		{
			path: '../assets/fonts/gilory/Gilroy-SemiBold.ttf',
			weight: '600',
			style: 'normal',
		},
		{
			path: '../assets/fonts/gilory/Gilroy-Bold.ttf',
			weight: '800',
			style: 'normal',
		},
		{
			path: '../assets/fonts/gilory/Gilroy-Black.ttf',
			weight: '900',
			style: 'normal',
		},
	],
})

export const metadata: Metadata = {
	title: {
		default: 'Carfin - Авто в росрочку',
		template: '%s - Carfin',
	},
	description:
		'ОРЕНДУЙТЕ АВТО ПІД БУДЬ-ЯКІ ПОТРЕБИ ЗА ОДИН ДЕНЬ ТА ОТРИМАЙТЕ ЙОГО У ВЛАСНІСТЬ ВЖЕ ЧЕРЕЗ РІК',
	applicationName: 'Carfin',
	referrer: 'origin-when-cross-origin',
	keywords: ['Carfin'],
	authors: [{ name: 'Illinpayne', url: 'https://webcraft.rivne.ua' }],
	creator: 'Stas Tarnogurskiy',
	publisher: 'Stas Tarnogurskiy',
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	metadataBase: new URL(process.env.NEXT_PUBLIC_URL || 'nextjs.org'),
	twitter: {
		card: 'summary_large_image',
		description:
			'ОРЕНДУЙТЕ АВТО ПІД БУДЬ-ЯКІ ПОТРЕБИ ЗА ОДИН ДЕНЬ ТА ОТРИМАЙТЕ ЙОГО У ВЛАСНІСТЬ ВЖЕ ЧЕРЕЗ РІК',
		creator: '@illinpayne',
		images: ['../../public/twitter_main.png'],
	},
	openGraph: {
		title: 'Carfin - Авто в росрочку',
		description:
			'ОРЕНДУЙТЕ АВТО ПІД БУДЬ-ЯКІ ПОТРЕБИ ЗА ОДИН ДЕНЬ ТА ОТРИМАЙТЕ ЙОГО У ВЛАСНІСТЬ ВЖЕ ЧЕРЕЗ РІК',
		url: process.env.NEXT_PUBLIC_URL,
		siteName: 'Carfin',
		type: 'website',
		images: ['../../public/twitter_main.png'],
	},
}

export default function RootLayout(
	props: Readonly<{ children: React.ReactNode }>
) {
	return (
		<html lang='en'>
			<body
				className={`${gilory.className} ${inter.variable} ${gilory.variable} ${monument.variable} font-medium`}>
				{props.children}
				{/* <ReactQueryProvider>{props.children}</ReactQueryProvider>
				<Toaster
					visibleToasts={1}
					className='text-red-500 bg-slate-800 dark:bg-slate-800 border-none outline-none'
				/> */}
			</body>
		</html>
	)
}
