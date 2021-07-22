import React from 'react'
import {
    Container,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormTitle,
    FormLabel,
    FormInput,
    FormButton,
    Text
} from './SigninElements';

const Signin = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/"> aBank </Icon>
                    <FormContent>
                        <Form action="#">
                            <FormTitle>Sign in to your account</FormTitle>

                            <FormLabel htmlFor="for"> Email </FormLabel>
                            <FormInput type="email" required />

                            <FormLabel htmlFor="for"> Password </FormLabel>
                            <FormInput type="email" required />

                            <FormButton type="submit"> Continue </FormButton>
                            <Text> Forgot your password? </Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default Signin
