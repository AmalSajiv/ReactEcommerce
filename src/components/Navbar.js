import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 50px;
  background-color: LightGray;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 5550;
`

function Navbar() {
  return (
    <Container>
      Super Deal ! Free Shipping on Your Orders Over $50
    </Container>
  )
}

export default Navbar