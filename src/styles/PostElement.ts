import styled from "styled-components"

export const Wrapper = styled.div`
background: #eef5ff;
min-height: 100vh;
width: 100%;

`

export const BackBtn = styled.a`
background: #fff;
width: 117px;
height: 45px;
color: #3260a1;
display: flex;
justify-content: space-between;
align-items: center;
cursor: pointer;
box-shadow: 0px 10px 25px rgba(148, 174, 213, 0.15);
border-radius: 10px;
font-weight: 600;
font-size: 16px;
line-height: 24px;
padding: 15px;
margin-top: 30px;
outline: none;
:hover{
    box-shadow: 0px 0px 35px rgba(148, 174, 213, 1); 
    transition: .3s all ease
}
`

export const PostWrapper = styled.div`
display: flex;
background: #fefefe;
border-radius: 15px;
margin-top: 50px;
padding-bottom: 100px;
position: relative;
`

export const PostItem = styled.div`
display: flex;
flex-direction: column;
flex: 0 0 50%;
padding: 35px;
`

export const PostTitle = styled.h1`
font-weight: 500;
font-size: 24px;
line-height: 28px;
color: #3260a1;
margin-bottom: 25px;
`

export const PostText = styled.p`
font-size: 18px;
line-height: 21px;
color: #000;
font-weight: 300;
`