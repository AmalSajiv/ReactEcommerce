import { Send } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 60vh;
  background-color: #B6C1C3;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Title = styled.h2`
  font-size: 40px;
  margin-bottom: 20px;
`

const Description = styled.div`
  font-size: 21px;
  font-weight: 300;
  margin-bottom: 20px;
`

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
`

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`

function NewsLetter() {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>See Personalized Recommendations</Description>
      <InputContainer>
        <Input placeholder='Your Email' />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  )
}

export default NewsLetter