import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import { Wrapper, BackBtn, FormWrapper, Form, InputField, Input, TextLabel, TextArea, FormBtn } from '../styles/AddPostElements'
import axios from 'axios'
import { useRouter } from 'next/router'
interface AddPostProps { }



const AddPost: React.FC<AddPostProps> = () => {
    const [title, setTitle] = React.useState('')
    const [body, setText] = React.useState('')
    const router = useRouter()


    const addArticle = async () => {
        try {
            await axios.post('https://simple-blog-api.crew.red/posts', {
                title, body
            })
                .then(() => router.push('/')
                )
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Wrapper>
            <Head>
                <title>Create new post</title>
            </Head>
            <Navbar />
            <div className="container">
                <Link href="/">
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
                <FormWrapper>
                    <Form onSubmit={e => e.preventDefault()}>
                        <InputField>
                            <TextLabel>Name post:</TextLabel>
                            <Input onChange={e => setTitle(e.target.value)} />
                        </InputField>
                        <InputField>
                            <TextLabel>Text body:</TextLabel>
                            <TextArea onChange={e => setText(e.target.value)} />
                        </InputField>
                        <FormBtn onClick={addArticle}>Add post</FormBtn>
                    </Form>
                </FormWrapper>

            </div>


        </Wrapper>
    )
}

export default AddPost