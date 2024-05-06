import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
	return {
		theme_color: '#f5b754',
		background_color: '#efeae5',
		display: 'standalone',
		scope: '/',
		start_url: '/',
		name: 'Carfin',
		short_name: 'Carfin',
		description:
			'Орендуйте авто під будь-які потреби за один день та отримайте його у власність вже через рік',
		icons: [
			{
				src: '/pwa-image-192.png',
				sizes: '192x192',
				type: 'image/png',
			},
			{
				src: '/pwa-image-512.png',
				sizes: '512x512',
				type: 'image/png',
			},
		],
	}
}
