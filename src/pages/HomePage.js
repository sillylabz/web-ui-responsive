// src/pages/HomePage.js
import React from "react";
import { Box, Grid, Divider, Container, Typography } from "@mui/material";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { LatestBlogPostsView, GridBlogPostsView } from '../components/blogs/BlogPostViews.js';
import FooterBar from "../components/footbar/FooterBar.js";

const HomePage = ({ posts }) => {

    return (
        <>
            <Container sx={{ ml: { xs: 'auto', md: 17 } }}>
                <Typography variant="h2" sx={{ fontSize: {xs: 30, md: 50 }, fontWeight: 'bold', color: '#33333', textAlign: { xs: 'center', md: 'left' }, mx: 4, mb: -2, mt: 2 }}>
                    Latest Tek News
                </Typography>
                <Box >
                    <Box/>
                    <Box>
                        <LatestBlogPostsView />
                    </Box>
                </Box>
            </Container>
            <Container sx={{ ml: { xs: 'auto', md: 15 } }}>
                <Typography variant="h2" sx={{ fontSize: {xs: 24, md: 36 }, fontWeight: 'bold', color: '#33333', textAlign: { xs: 'center', md: 'left' }, mx: 4, mb: 2, mt: 2 }}>
                    More Tek News
                </Typography>
                <Box >
                    <GridBlogPostsView />
                </Box>
            </Container>
            
            <Box sx={{ height: '50rem', bgcolor: 'background.paper' }} />

            <FooterBar />
        </>
    );
};

export default HomePage;
