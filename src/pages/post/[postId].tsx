import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../../components/Navbar'
import { PostItem, Wrapper, BackBtn, PostWrapper, PostTitle, PostText } from '../../styles/PostElement'
import axios from 'axios'
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next';
import { PostType } from '../../types/PostPreview'
import { getPost } from '../../store/actions/postAction';
import DeletePostBtn from '../../styles/DeletePostBtn'
import { wrapper } from '../../store';

type Post = {
    id: number
    title: string
    body: string
}

interface PostProps {
    post: Post
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
                            src='https://via.placeholder.com/500x500/2772c2/FFFFFF?text=title'
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

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(async ({ store, query }) => {
    try {
        const { postId } = query;
        const { data } = await axios.get(`https://simple-blog-api.crew.red/posts/${postId}`);
        await store.dispatch(getPost(data))
        return { props: { post: data } }
    } catch (error) {
        console.log(error);
        return { props: { error } };
    }
});