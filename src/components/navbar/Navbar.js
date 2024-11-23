// src/components/Navbar.js
import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Menu, MenuItem, Box, InputBase } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { FaRegCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';



const Navbar = () => {
	const [anchorEl, setAnchorEl] = useState(null);
	const isMenuOpen = Boolean(anchorEl);

	const handleMenuOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
	};

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static" sx={{ backgroundColor: '#1d1d1d', padding: { xs: '0.1rem 1rem', md: '0.5rem 1rem' } }}>
				<Toolbar>

					<Typography
						variant="h6"
						noWrap
						component={Link}
						to="/"
						sx={{ color: 'white', textDecoration: 'none', flexGrow: 1, justifyContent: 'flex-start', alignItems: 'left', display: { xs: 'none', md: 'block' }, position: 'left', ml: '-11%' }}
					>
						Tek Universe
					</Typography>

					{/* Logo/Icon for mobile */}
					<Box sx={{ display: { xs: 'block', md: 'none' }, position: 'left', ml: '-10%' }}>
						<IconButton size="large" color="inherit">
							<FaRegCircle style={{ fontSize: '2.3rem', color: 'white' }} />
						</IconButton>
					</Box>


					{/* Desktop Menu Items */}
					<Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1, justifyContent: 'flex-start', alignItems: 'left', position: 'left', ml: '-7%'}}>
						<Button component={Link} to="/about" sx={{ color: 'white' }}>
							About Us
						</Button>
						<Button component={Link} to="/news" sx={{ color: 'white' }}>
							News
						</Button>
						<Button component={Link} to="/reviews" sx={{ color: 'white' }}>
							Reviews
						</Button>
						<Button component={Link} to="/howtos" sx={{ color: 'white' }}>
							How-Tos
						</Button>
						<Button component={Link} to="/podcasts" sx={{ color: 'white' }}>
							Podcasts
						</Button>
					</Box>

					{/* Hamburger Menu for Mobile */}
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						onClick={handleMenuOpen}
						sx={{ display: { xs: 'block', md: 'none' }, position: 'left', mt: 0.7, width: '2%'}}
					>
						<MenuIcon />
					</IconButton>


					{/* Search and Login */}
					<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', flexGrow: 1 }}>
						<Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
							<SearchIcon sx={{ color: 'white', display: { xs: 'none', md: 'block' } }} />
							<InputBase
								placeholder="Search..."
								sx={{
									ml: { xs: 1, md: 1},
									mr: { xs: 1, md: 1},
									flex: 1,
									color: 'black',
									backgroundColor: 'white',
									borderRadius: '20px',
									padding: '0 10px',
									width: { xs: 165, md: 400 }
								}}
							/>
						</Box>
						<Button component={Link} to="/login" sx={{ color: 'white', border: '1px solid white', padding: { xs: '0.3rem 0.8rem', md: '0.5rem 1rem' }, borderRadius: '4px', mr: {xs: '-1.3rem' } }}>
							Login
						</Button>
					</Box>


					{/* Hamburger Menu for Mobile */}
					<Menu
						anchorEl={anchorEl}
						open={isMenuOpen}
						onClose={handleMenuClose}
						sx={{ display: { xs: 'block', md: 'none' } }}
					>
						<MenuItem onClick={handleMenuClose} component={Link} to="/about">
							About Us
						</MenuItem>
						<MenuItem onClick={handleMenuClose} component={Link} to="/news">
							News
						</MenuItem>
						<MenuItem onClick={handleMenuClose} component={Link} to="/reviews">
							Reviews
						</MenuItem>
						<MenuItem onClick={handleMenuClose} component={Link} to="/howtos">
							How-Tos
						</MenuItem>
						<MenuItem onClick={handleMenuClose} component={Link} to="/podcasts">
							Podcasts
						</MenuItem>
					</Menu>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Navbar;
