import { Search, ShoppingCartOutlined } from '@mui/icons-material'
import Badge from '@mui/material/Badge'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
    height: 60px;
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  cursor: pointer;
`

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`

const Input = styled.input`
  border: none;
`

const Center = styled.div`
  flex: 1;
  text-align: center;
`

const Logo = styled.h1`
  font-weight: bold;
`

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`

function Header() {
  return (
    <Container>
      <Wrapper>

        <Left>
          <Link to='/'><img src='https://i.postimg.cc/6qpspp5D/1608994305-Rongry.png' alt='rongry' width='100hv' height='40hv' /></Link>
          <Language>ENG</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 19 }} />
          </SearchContainer>
        </Left>

        <Center>
          <Logo>RONGRY.</Logo>
        </Center>

        <Right>
          <MenuItem><Link to='/register' style={{ textDecoration: 'none' }} >REGISTER</Link></MenuItem>
          <MenuItem><Link to='/login' style={{ textDecoration: 'none' }} >SIGN IN</Link></MenuItem>
          <MenuItem>
            <Badge badgeContent={6} color="primary">
              <Link to='/cart' style={{ textDecoration: 'none' }}><ShoppingCartOutlined /></Link>
            </Badge>
          </MenuItem>
        </Right>
        
      </Wrapper>
    </Container>
  )
}

export default Header