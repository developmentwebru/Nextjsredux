import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { wrapper } from '../store';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import Navbar from '../components/Navbar'
import { PostType } from '../types/PostPreview'
import { getAllPosts } from '../store/actions/postAction';
import { Wrapper, PostWrapper, Post, PostTitle, SeeMoreBtn } from '../styles/HomeElements'

interface HomeProps {
    posts: PostType[]
    bgImage: string
}

const Home: React.FC<HomeProps> = ({ posts }) => {
    const [morePost, setMorePost] = React.useState(6)
    const showMoreBtn = () => {
        setMorePost((prevmorePost) => (
            prevmorePost + 6
        ))
    }
    // if (!posts) 'Loading...'

    return (

        <div>
            <Head>
                <title>NEXT | Blog Article</title>
            </Head>
            <Navbar />
            <Wrapper>
                <div className="container">
                    <PostWrapper>
                        {
                            posts.slice(0, morePost).map((post, idx) => {
                                return (
                                    <Link href={'/post/[id]'} as={`/post/${post.id}`} key={idx}>
                                        <Post bgImage={'https://via.placeholder.com/500x500/2772c2/FFFFFF?text=title'} >
                                            <PostTitle>
                                                {post.title}
                                            </PostTitle>
                                        </Post>
                                    </Link>
                                )
                            })
                        }
                    </PostWrapper>
                    <SeeMoreBtn onClick={showMoreBtn}>Show more</SeeMoreBtn>
                </div>
            </Wrapper>
        </div>

    )
}
export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(async ({ store }) => {
    try {
        const { data } = await axios.get('https://simple-blog-api.crew.red/posts');
        await store.dispatch(getAllPosts(data))
        return { props: { posts: data } }
    } catch (error) {
        console.log(error);
        return { props: { error } };
    }
});

export default Home;