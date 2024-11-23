// src/components/blogs/BlogControllers.js
import { useState, useEffect } from "react";

import sampleposts from "../../test-data/posts/samplePosts.json";

import img1 from '../../test-data/images/blog-post-1-thumbnail.jpg';
import img2 from '../../test-data/images/blog-post-2-thumbnail.jpg';
import img3 from '../../test-data/images/blog-post-3-thumbnail.jpg';
import img4 from '../../test-data/images/blog-post-4-thumbnail.jpg';

const mapImageToPost = (post) => {
    switch(post.image) {
        case 'blog-post-1-thumbnail.jpg': return img1;
        case 'blog-post-2-thumbnail.jpg': return img2;
        case 'blog-post-3-thumbnail.jpg': return img3;
        case 'blog-post-4-thumbnail.jpg': return img4;
        default: return undefined;
    }
}


const useLatestBlogPosts = () => {
    const [posts, setPosts] = useState(sampleposts);

    useEffect(() => {
        const postWithImages = sampleposts.map(post => {
            return {
                ...post,
                image: mapImageToPost(post)
            };
        });
        setPosts(postWithImages);
        console.log(postWithImages);
    }, []);

    const [ currentPage, setCurrentPage ] = useState(1);
    const POSTS_PER_PAGE = 5;

    const indexOfLastPost = currentPage * POSTS_PER_PAGE;
    const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => {
        setCurrentPage(pageNumber);
    };

    return {
        posts: currentPosts,
        paginate,
        totalPages: Math.ceil(posts.length / POSTS_PER_PAGE)
    };
};

export default useLatestBlogPosts;
