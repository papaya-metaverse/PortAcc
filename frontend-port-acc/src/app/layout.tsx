import type { Metadata } from 'next'
import './global.css'
import { Inter } from 'next/font/google'
import { NavBar } from './NavBar'
import { store } from '@/redux'
import { Provider as ReduxProvider } from 'react-redux'
import { AppProvider } from './AppProvider'

export const metadata: Metadata = {
	title: 'PortAcc',
	description: 'PortAcc',
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
			<body>
				<AppProvider>
					<NavBar />
					{children}
				</AppProvider>
			</body>
		</html>
	)
}
