'use client'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export const NavBar = () => {
	const pathname = usePathname()
	const isProfile = pathname === '/profile'
	return (
		<>
			<Image
				style={{ position: 'absolute', top: '30px', left: '30px' }}
				src={isProfile ? 'assets/logoBlack.svg' : 'assets/logo.svg'}
				width={130}
				height={25}
				alt='papaya'
			/>
		</>
	)
}
