import styled from 'styled-components'

const AddPostBtn = styled.a`
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    color: #fff;
    background: #67bfff;
    box-shadow: 0px 10px 25px rgba(148, 174, 213, 0.15);
    border-radius: 10px;
    position: absolute;
    width: 140px;
    height: 25px;
    left: 50%;
    top: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translate(-50%);
    cursor: pointer;
    :hover{
        background: #338ceb;
    }
    :active{
        background: #2772c2;
    }
`

export default AddPostBtn