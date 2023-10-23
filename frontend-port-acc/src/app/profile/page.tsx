'use client'
import {
	Box,
	Button,
	IconButton,
	List,
	ListItem,
	ListItemText,
	styled,
	Typography,
} from '@mui/material'
import FileCopyIcon from '@mui/icons-material/FileCopy'

const Profile = () => {
	const BlackButton = styled(Button)({
		backgroundColor: 'black',
		color: 'white',
		fontWeight: 'bold',
		minWidth: '80px',
		minHeight: '40px',
		'&:hover': {
			backgroundColor: 'red',
		},
	})

	const CustomButton = styled(Button)({
		border: '1px solid grey',
		color: 'inherit',
		background: 'transparent',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
	})

	const CopyIcon = styled(FileCopyIcon)({ marginLeft: '8px' })

	const handleCopyWalletNumber = () => {
		// Implement the logic to copy the wallet number here
		// You can use the Clipboard API or a library like clipboard.js
	}

	const handleLogout = () => {
		// Implement the logout logic here
	}

	return (
		<Box
			display='flex'
			flexDirection='column'
			alignItems='flex-end'
			width='100%'
			height='100%'
		>
			<Box display='flex' justifyContent='flex-end' p={2} padding='30px'>
				<Box mr={2}>
					<CustomButton>
						Your Wallet: 3333
						<CopyIcon />
					</CustomButton>
				</Box>
				<BlackButton onClick={handleLogout}>Logout</BlackButton>
			</Box>
			<Box margin='0 auto'>
				<List sx={{ fontSize: '40px' }}>
					<Typography sx={{ fontWeight: 'bold', fontSize: '25px' }}>
						Notifications
					</Typography>
					<ListItem>
						<ListItemText primary='Notification 1' />
					</ListItem>
					<ListItem>
						<ListItemText primary='Notification 2' />
					</ListItem>
					<ListItem>
						<ListItemText primary='Notification 3' />
					</ListItem>
				</List>
			</Box>
		</Box>
	)
}

export default Profile
