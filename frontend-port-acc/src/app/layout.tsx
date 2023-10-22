import type { Metadata } from 'next'
import './global.css'
import { Inter } from 'next/font/google'

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
})

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en' className={inter.className}>
			<body>{children}</body>
		</html>
	)
}