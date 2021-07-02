import styled from 'styled-components'

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
        transition: .3s all ease;
}
`

export const FormWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Form = styled.form`
    background: #fff;
    border-radius: 15px;
    padding: 30px;
    max-width: 500px;
    width: 100%;
`

export const InputField = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
`
export const Input = styled.input`
    width: 100%;
    display: flex;
    border: 1px solid #e5e5e5;
    box-sizing: border-box;
    border-radius: 5px;
    outline: none;
    padding: 5px 10px;
`
export const TextLabel = styled.div`
    margin-bottom: 5px;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
    color: #222222;
`

export const TextArea = styled.textarea`
    min-height: 150px;
    border: 1px solid #e5e5e5;
    box-sizing: border-box;
    resize: none;
    border-radius: 5px;
    outline: none;
    padding: 5px 10px;
    margin-bottom: 5px;
`

export const FormBtn = styled.button`
    background: #fff;
    width: 140px;
    height: 33px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 300px;
    font-size: 14px;
    text-align: center;
    color: #fff;
    border: none;
    background: #67bfff;
    box-shadow: 0px 10px 25px rgba(148,174, 213, 0.15);
    border-radius: 10px;
    margin: 0 auto;
`
