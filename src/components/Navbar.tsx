import React from 'react'
import styled from 'styled-components'
import AddPostBtn from '../styles/AddPostBtn'
import { NavbarItem, Nav, Logo } from '../styles/HeaderElements'
import Link from 'next/link'
interface NavbarProps { }

const Navbar: React.FC<NavbarProps> = () => {
    return (
        <Nav>
            <div className='container'>
                <NavbarItem>
                    <Link href='/'>
                        <Logo>NEXT | BLOG</Logo>
                    </Link>

                    <Link href='/addpost'>
                        <AddPostBtn>Add post</AddPostBtn>
                    </Link>


                </NavbarItem>
            </div>
        </Nav>
    )
}

export default Navbar
