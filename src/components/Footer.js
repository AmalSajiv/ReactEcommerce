import { Facebook, Google, Instagram, MailOutline, Phone, Pinterest, Room, Twitter, YouTube } from '@mui/icons-material';
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  background-color: #DEDEDE;
`

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`

const Title1 = styled.h4``;

const SocialContainer = styled.div`
  display: flex;
  margin: 20px 0px;
`

const SocialIcon = styled.div`
width: 30px;
height: 30px;
border-radius: 50%;
color: white;
background-color: #${(props) => props.color};
display: flex;
align-items: center;
justify-content: center;
margin-left: 20px;
margin-right: 20px;
`

const Center = styled.div`
  flex: 1;
  padding: 20px;
`

const Title = styled.h3`
  margin-bottom: 30px;
`
const Title2 = styled.h3`
  margin-bottom: 30px;
  margin-left: 20px;
`

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`

const Right = styled.div`
  flex: 1;
  padding: 20px;
`

const ContactItem = styled.div`
  margin-bottom: 20px;
  margin-left: 20px;
  display: flex;
  align-items: center;
`

const Payment = styled.img`
    width: 50%;
    margin-left: 20px;
`

function Footer() {
  return (
    <Container>
      <Left>
      <Link to='/' style={{ textDecoration: 'none' }} ><Logo>RONGRY.</Logo></Link>
        <Desc>We Grow Businesses By Creating Unified Brand Experiences People Love.</Desc>
        <Title1>Connect With Us</Title1>
        <SocialContainer>
          <SocialIcon color='3B5999'>
            <Facebook />
          </SocialIcon>
          <SocialIcon color='E4405F'>
            <Instagram />
          </SocialIcon>
          <SocialIcon color='55ACEE'>
            <Twitter />
          </SocialIcon>
          <SocialIcon color='EF0000'>
            <YouTube />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
          <SocialIcon color="5656F9">
            <Google />
          </SocialIcon>
        </SocialContainer>
      </Left>

      <Center>
        <Title>USEFUL LINK</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>

      <Right>
        <Title2>CONTACT</Title2>
        <ContactItem>
          <Room style={{ marginRight: '10px' }} /> 364135 KERALA , INDIA
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: '10px' }} /> +91 9876543210
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: '10px' }} /> rongrycart@gmail.com
        </ContactItem>
        <Payment src='https://i.ibb.co/Qfvn4z6/payment.png' />
      </Right>
    </Container>
  )
}

export default Footer