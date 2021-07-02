import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import PostPreview from '../types/PostPreview'
import { Wrapper, PostWrapper, Post, PostTitle, SeeMoreBtn } from '../styles/HomeElements'

interface HomeProps {
    posts: PostPreview[]
    bgImage: string
}






const Home: React.FC<HomeProps> = ({ posts }) => {

    const [morePost, setMorePost] = React.useState(6)

    const showMoreBtn = () => {
        setMorePost((prevmorePost) => (
            prevmorePost + 6
        ))
    }

    if (!posts) 'Loading...'

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
                                        <Post bgImage={'https://via.placeholder.com/500x500/545454/FFFFFF?text=title'} alt='image' >
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

export default Home;

export async function getServerSideProps(context) {
    const res = await fetch(`https://simple-blog-api.crew.red/posts`)
    const posts = await res.json()

    if (!posts) {
        return {
            notFound: true,
        }
    }

    return {
        props: { posts }
    }
}