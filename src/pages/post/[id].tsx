import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../../components/Navbar'
import { PostItem, Wrapper, BackBtn, PostWrapper, PostTitle, PostText } from '../../styles/PostElement'
import axios from 'axios'
import { useRouter } from 'next/router'
import PostPreview from '../../types/PostPreview'

import DeletePostBtn from '../../styles/DeletePostBtn'

interface PostProps {
    post: PostPreview[]
}


const Post: React.FC<PostProps> = ({ post }) => {

    if (!post) 'Loading...'
    const router = useRouter()
    const deletePost = async () => {
        await axios.delete(`https://simple-blog-api.crew.red/posts/${post.id}`)
            .then(() => router.push('/')
            )
    }

    return (
        <Wrapper>
            <Head>
                <title>NEXT BLOG | {post.title}</title>
            </Head>
            <Navbar />
            <div className="container">
                <Link href='/'>
                    <BackBtn>
                        <Image
                            src='https://e7.pngegg.com/pngimages/564/63/png-clipart-computer-icons-s-v-g-computer-font-others-miscellaneous-angle.png'
                            alt='Arrow back'
                            width={24}
                            height={15}
                        />
                        Back
                    </BackBtn>
                </Link>
                <PostWrapper>
                    <PostItem>
                        <PostTitle>
                            {post.title}
                        </PostTitle>
                        <PostText>
                            {post.body}
                        </PostText>
                    </PostItem>
                    <PostItem>
                        <Image
                            src='https://via.placeholder.com/500x500/545454/FFFFFF?text=%27%27'
                            alt='Image'
                            width={540}
                            height={316}
                        />
                    </PostItem>
                    <DeletePostBtn onClick={deletePost}>Delete Post</DeletePostBtn>
                </PostWrapper>
            </div>
        </Wrapper>
    )
}

export default Post

export async function getServerSideProps(context) {
    const res = await fetch(`https://simple-blog-api.crew.red/posts/${context.query.id}`)
    const post = await res.json()

    if (!post) {
        return {
            notFound: true,
        }
    }

    return {
        props: { post }, // will be passed to the page component as props
    }
}