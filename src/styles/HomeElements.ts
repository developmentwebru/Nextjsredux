import styled from 'styled-components'

export const Wrapper = styled.div`
    background: #eef5ff;
    min-height: 100vh;
    width: 100%;
`

export const PostWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    column-gap:30px;
`

export const Post = styled.a<{ bgImage?: string }>`
    width: 345px;
    height: 270px;
    border-radius: 15px;
    margin-top: 50px;
    position: relative;
    cursor: pointer;
    background: url('${props => props.bgImage}') center/cover no-repeat;
        :hover {
            transform: scale(1.1);
            transition: .3s all ease;
}
`

export const PostTitle = styled.div`
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    padding: 15px 20px;
    position: absolute;
    left: 0;
    width: 100%;
    bottom: 0;
    color: #3260a1;
    background: white;
    border-radius: 0px 0px 15px 15px;
`


export const SeeMoreBtn = styled.a`
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
        transition: .3s all ease;
}
`

