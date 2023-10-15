import { Button, Link, Stack } from '@mui/material'
import { FcGoogle } from 'react-icons/fc'
import Image from 'next/image'

export default function Home() {
	return (
		<>
			<Image src={'assets/logo.svg'} width={130} height={25} alt='papaya' />
			<Stack direction='row' spacing={2} mt={3} justifyContent='center'>
				<Link href='https://dev.papaya.ws/api/auth/google' target='_blank'>
					<Button
						variant='contained'
						startIcon={<FcGoogle />}
						sx={{
							backgroundColor: 'black',
							color: 'white',
							textTransform: 'none',
						}}
					>
						Created with Google
					</Button>
				</Link>
			</Stack>
		</>
	)
}
