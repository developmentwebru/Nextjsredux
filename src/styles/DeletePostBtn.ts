import styled from 'styled-components'

const DeletePostBtn = styled.a`
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    color: #fff;
    background: #e85050;
    box-shadow: 0px 10px 25px rgba(148, 174, 213, 0.15);
    border-radius: 10px;
    position: absolute;
    width: 140px;
    height: 25px;
    left: 50%;
    bottom: -15px;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translate(-50%);
    cursor: pointer;
    :hover{
        background: #E23232;
    }
    :active{
        background: #B61616;
    }
`

export default DeletePostBtn