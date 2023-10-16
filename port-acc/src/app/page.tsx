'use client'
import {
	Box,
	Button,
	Grid,
	Input,
	Link,
	Stack,
	TextField,
	Typography,
} from '@mui/material'

import { makeStyles } from '@mui/styles'

import { FcGoogle } from 'react-icons/fc'
import Image from 'next/image'

const useStyles = makeStyles({
	root: {
		height: '100vh',
	},
	leftSection: {
		backgroundColor: '#202b36',
		padding: '30px',
	},
	logo: {
		color: 'white',
		fontSize: '2rem',
	},
	rightSection: {
		backgroundColor: 'white',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		padding: '2rem',
	},
	input: {
		width: '80%',
		padding: '0.5rem',
		border: '1px solid black',
		borderRadius: '4px',
	},
})

export default function Home() {
	const classes = useStyles()

	return (
		<Grid container className={classes.root}>
			<Grid item xs={8} className={classes.leftSection}>
				<Image src={'assets/logo.svg'} width={130} height={25} alt='papaya' />
				<Box
					sx={{
						color: 'white',
						fontWeight: 700,
						fontSize: '85px',
						textAlign: 'center',
						margin: '0 auto',
						marginTop: '30%',
					}}
				>
					<Typography sx={{ fontWeight: 700, fontSize: '85px' }}>
						Create Crypto wallet
					</Typography>
					<Typography
						sx={{
							fontWeight: 700,
							fontSize: '85px',
							color: '#FE1C64',
							lineHeight: 0.7,
						}}
					>
						in one click&nbsp;
						<span style={{ fontSize: '40px', color: 'white' }}>
							And use all the
						</span>
					</Typography>
					<Typography
						sx={{
							fontWeight: 700,
							fontSize: '40px',
							textAlign: 'right',
							marginRight: '300px',
						}}
					>
						benefits of web3.
					</Typography>
				</Box>
			</Grid>

			<Grid item xs={4} className={classes.rightSection}>
				<Link href='https://dev.papaya.ws/api/auth/google' target='_blank'>
					<Button
						variant='contained'
						startIcon={<FcGoogle />}
						sx={{
							backgroundColor: 'black',
							color: 'white',
							textTransform: 'none',
							height: '50px',
							width: '350px',
							borderRadius: '8px',
							textAlign: 'center',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						Created with Google
					</Button>
				</Link>
			</Grid>
		</Grid>
	)
}
