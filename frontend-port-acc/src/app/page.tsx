'use client'
import { Box, Button, Grid, Link, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { FcGoogle } from 'react-icons/fc'
import GitHubIcon from '@mui/icons-material/GitHub'
import { useEffect, useState } from 'react'
import { getCookie } from '@/utils/cookies'
import { authSlice } from '@/redux/slices/auth'
import { REFRESH_KEY2, TOKEN_KEY2 } from '@/constants/auth'
import { fetchGetUserCurrent } from '@/api/user.api'
import { useRouter } from 'next/navigation'
import { useAppDispatch } from '@/hooks/useRedux'

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
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: '2rem',
	},
	icon: {
		display: 'flex',
		alignItems: 'center',
		marginRight: '10px',
	},
	text: {
		display: 'flex',
		alignItems: 'center',
	},
})

export default function Home() {
	const classes = useStyles()
	const PUBLIC_URL = process.env.NEXT_PUBLIC_PUBLIC_URL
	console.log({ PUBLIC_URL })

	return (
		<Grid container className={classes.root}>
			<Grid item xs={8} className={classes.leftSection}>
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
				<Link href='http://localhost:3001/auth/google' target='_blank'>
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
							marginTop: '600px',
						}}
					>
						Created with Google
					</Button>
				</Link>
				<Box>
					<Link
						href='https://github.com/papaya-metaverse/PortAcc'
						target='_blank'
						rel='noopener'
						underline='none'
						color='inherit'
						className={classes.text}
					>
						<GitHubIcon className={classes.icon} />

						<Typography variant='body1' component='span'>
							Project on Github
						</Typography>
					</Link>
				</Box>
			</Grid>
		</Grid>
	)
}
