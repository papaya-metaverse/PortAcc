'use client'
import { Box, Button, Grid, Link, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { FcGoogle } from 'react-icons/fc'
import GitHubIcon from '@mui/icons-material/GitHub'

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
	gitHubLink: {
		position: 'fixed',
		bottom: '40px',
		right: '330px',
	},
	icon: {
		display: 'flex',
		alignItems: 'center',
		marginRight: '10px',
	},
	text: {
		display: 'flex',
		alignItems: 'center',
		textDecoration: 'none',
		color: 'inherit',
	},
})

export default function Home() {
	const classes = useStyles()

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
				<div className={classes.gitHubLink}>
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
				</div>
			</Grid>
		</Grid>
	)
}
