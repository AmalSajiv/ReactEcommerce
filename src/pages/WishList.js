import { Add, Remove } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

const Container = styled.div``

const Wrapper = styled.div`
  padding: 20px;
`

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`

const TopTexts = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`

const Info = styled.div`
  flex: 3;
`

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`

const Image = styled.img`
  width: 200px;
`

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const ProductName = styled.span``

const ProductId = styled.span``

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  cursor: pointer;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`

const ProductSize = styled.span``

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
`

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`

const SummaryTitle = styled.h1`
  font-weight: 200;
`

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`

const SummaryItemText = styled.span``

const SummaryItemPrice = styled.span``

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`

function WishList() {
  return (
    <Container>
      <Navbar />
      <Header />

      <Wrapper>
        <Title>YOUR WISHLIST</Title>
        <Top>
          <TopTexts>
            <TopText><Link to='/cart' style={{ textDecoration: 'none' }} >Shopping Bag (2)</Link></TopText>
            <TopText><Link to='/wishlist' style={{ textDecoration: 'none' }} >Your Wishlist (4)</Link></TopText>
          </TopTexts>
        </Top>

        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://i.postimg.cc/v8PKTBLJ/71-HUn-Jv-Hsb-L-SL1500.jpg" />
                <Details>
                  <ProductName>
                    <b>Product:</b> SAMSUNG GALAXY S22
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 93813718293
                  </ProductId>
                  <ProductColor color="white;" />
                  <ProductColor color="purple;" />
                  <ProductColor color="black;" />
                </Details>
              </ProductDetail>

              <PriceDetail>
                <ProductAmountContainer>
                  <Remove />
                  <ProductAmount>1</ProductAmount>
                  <Add />
                </ProductAmountContainer>
                <ProductPrice>$ 62,999</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />

            <Product>
              <ProductDetail>
                <Image src="https://i.postimg.cc/sgQ6xCVs/10896783a.webp" />
                <Details>
                  <ProductName>
                    <b>Product:</b> KIDS WEAR
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 93813719300
                  </ProductId>
                  <ProductColor color="white;" />
                  <ProductColor color="black;" />
                  <ProductColor color="brown;" />
                  <ProductColor color="silver;" />
                </Details>
              </ProductDetail>

              <PriceDetail>
                <ProductAmountContainer>
                  <Remove />
                  <ProductAmount>1</ProductAmount>
                  <Add />
                </ProductAmountContainer>
                <ProductPrice>$ 4,999</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />

            <Product>
              <ProductDetail>
                <Image src="https://i.postimg.cc/G2bcL2JB/iphone-14-906x1024.jpg" />
                <Details>
                  <ProductName>
                    <b>Product:</b> IPHONE 14 PRO
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 93813719342
                  </ProductId>
                  <ProductColor color="white;" />
                  <ProductColor color="purple;" />
                  <ProductColor color="#FFF484;" />
                  <ProductColor color="silver;" />
                </Details>
              </ProductDetail>

              <PriceDetail>
                <ProductAmountContainer>
                  <Remove />
                  <ProductAmount>1</ProductAmount>
                  <Add />
                </ProductAmountContainer>
                <ProductPrice>$ 1,49,000</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />

            <Product>
              <ProductDetail>
                <Image src="https://i.postimg.cc/9f9d5Wcw/public.webp" />
                <Details>
                  <ProductName>
                    <b>Product:</b> WOMEN'S JACKETS
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 93813712345
                  </ProductId>
                  <ProductColor color="gray" />
                  <ProductColor color="black" />
                  <ProductColor color="orange" />
                  <ProductColor color="brown" />
                  <ProductSize>
                    <b>Size:</b> M
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Remove />
                  <ProductAmount>1</ProductAmount>
                  <Add />
                </ProductAmountContainer>
                <ProductPrice>$ 6,599</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>

          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 0</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 0.00</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -0.00</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 0</SummaryItemPrice>
            </SummaryItem>
            <Link to='/order' style={{ textDecoration: 'none' }} ><Button>CHECKOUT NOW</Button></Link>
          </Summary>
        </Bottom>
      </Wrapper>

      <Footer />
    </Container>
  )
}

export default WishList