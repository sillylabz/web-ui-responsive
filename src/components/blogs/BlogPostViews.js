// src/components/blogs/BlogPostViews.js
import React from "react";
import Slider from "react-slick";
import { Card, CardContent, CardMedia, Typography, Grid, Box, Divider, Button } from "@mui/material";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './blogPosts.css'

import useLatestBlogPosts from "./BlogPostControllers";


export const LatestBlogPostsView = () => {
    const { posts } = useLatestBlogPosts();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    // Custom arrow for the next button
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block" }}
                onClick={onClick}
            />
        );
    }

    // Custom arrow for the prev button
    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block" }}
                onClick={onClick}
            />
        );
    }

    return (
        <Slider {...settings}>
            {posts.map((post, index) => (
                <Card
                    key={index} sx={{ width: { xs: 'auto', md: 'auto' }, height: { md: 3 / 20 } }}>
                    <CardMedia
                        component="img"
                        image={post.image}
                        alt={post.title}
                        sx={{ height: { xs: 400, md: 400 } }}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" >
                            {post.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {post.summary}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'right' }}>
                            By {post.author}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </Slider>
    );
};

export const GridBlogPostsView = () => {
    const { posts } = useLatestBlogPosts();

    return (
        <Grid container
            sx={{
                width: { xs: '90%', md: '90%' },
                ml: { xs: 'auto', md: '-55.5%' }, // adjust margin-left for the 2 inches border
                alignContent: { xs: 'left', md: 'left' },
                alignItems: { xs: 'left', md: 'left' },
                textAlign: { xs: 'center', md: 'left' }, // center on mobile, left-align on desktop,
                maxWidth: 2000
            }}
            spacing={2}>
            {posts.slice(0, 3).map((post, index) => (
                <Grid item xs={12} key={index}>
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'flex-start', ml: { xs: '40%', md: '40%' } }}>

                        {/* Image aligned to the left */}
                        <Box sx={{ alignItems: 'relative', width: { xs: '70%', md: '100%' }, ml: { xs: '-80%', md: '40%' } }}>
                            <CardMedia
                                component="img"
                                src={post.image}
                                alt={post.title}
                                sx={{
                                    height: { xs: 75, md: 200 },
                                    width: { xs: 100, md: 300 },
                                    objectFit: 'cover',
                                }}
                            />
                        </Box>

                        {/* Content aligned to the right of the image */}
                        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, ml: { xs: '-35%', md: '30%' }, fontSize: { xs: '130%', md: '130%' } }}>
                            <Typography variant="subtitle2" color="text.secondary" >
                                {post.category}
                            </Typography>
                            <Typography
                                variant="h5"
                                sx={{ ml: { xs: '17%', md: '-43%' }, mt: { xs: '-48%', md: '-1%' }, fontSize: { xs: '70%', md: '100%' }, fontWeight: 'bold', color: "#d32f2f", width: { xs: 160, md: 400 }, textAlign: { xs: 'left' } }}
                            >
                                {post.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {post.date}
                            </Typography>
                        </Box>
                    </Box>

                    {/* Summary in a separate box, aligned properly */}
                    <Box >
                        <Typography sx={{ textAlign: 'left', fontSize: { xs: '90%', md: '100%' }, mt: 0.5, mb: 2, alignContent: { xs: 'left', md: 'left' }, ml: { xs: '-8.5%', md: '64%' }, width: { md: '100%' } }}>
                            {post.title}
                        </Typography>
                    </Box>

                    {index < posts.length - 1 && <Divider sx={{ ml: { xs: '-2rem', md: '64%' }, mr: { xs: '2rem', md: '-73%' } }} />}
                </Grid>
            ))}
            <Grid item xs={12}>
                <Button
                    href="#"
                    variant="contained"
                    sx={{
                        maxWidth: {xs: '10rem', md: '15rem'},
                        maxHeight: '30rem',
                        mt: 1,
                        width: { xs: '10rem', md: '20%'},
                        display: 'block',
                        ml: { xs: '10%', md: '65rem'},
                        // px: { xs: '-180%', md: 'center'},
                        textAlign: { xs: 'left', md: 'left'},
                        fontSize: { xs: '80%', md: '100%' },
                    }}
                >
                    More Tek News...
                </Button>
            </Grid>
        </Grid>
    );
};

