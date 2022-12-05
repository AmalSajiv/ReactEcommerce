import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url('https://i.postimg.cc/yNNtz1jP/cash-delivery-concept-52683-51829.webp')
      center;
  background-size: contain;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
`

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`

const Button = styled.button`
  width: 55%;
  border: none;
  padding: 15px 20px;
  background-color: blue;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`

const Button1 = styled.button`
  width: 55%;
  border: none;
  padding: 15px 20px;
  background-color: red;
  color: white;
  cursor: pointer;
 `

const Link1 = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`

function OrderSummary() {
  return (
    <Container>


      <Wrapper>
        <Title>YOUR ORDER</Title>
        <Form>
          <Input placeholder='Name' />
          <Input placeholder='Mobile Number' />
          <Input placeholder='Flat,House no,Building,Company,Apartment' />
          <Input placeholder='Area,Street,Village,Pincode' />
          <Input placeholder='Landmark/Town/City' />
          <Input placeholder='State' />
          <Button>PLACE YOUR ORDER</Button>
          <Link1 style={{ textDecoration: 'none' }}>
            <Link to='/' style={{ textDecoration: 'none' }}><Button1>REMOVE</Button1></Link>
          </Link1>
        </Form>
      </Wrapper>

    </Container>
  )
}

export default OrderSummary
