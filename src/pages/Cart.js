import { Add, Remove } from '@mui/icons-material'
import React, { useDispatch, useSelector } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import { cartdata } from '../data'


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

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`

const TopTexts = styled.div`
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
  cursor: pointer;
`

function Cart(item) {

  const cart = useSelector((state) => state);
    console.log(cart);
    const dispatch = useDispatch();

  return (
    <Container>
      <Navbar />
      <Header />

      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton><Link to='/' style={{ textDecoration: 'none' }} >CONTINUE SHOPPING</Link> </TopButton>
          <TopTexts>
            <TopText><Link to='/cart' style={{ textDecoration: 'none' }} >Shopping Bag (2)</Link></TopText>
            <TopText><Link to='/wishlist' style={{ textDecoration: 'none' }} >Your Wishlist (4)</Link></TopText>
          </TopTexts>
          <TopButton type='filled'>CHECKOUT NOW</TopButton>
        </Top>

        <Bottom>
          <Info>
            <Product>
              {cartdata.map((item) => (
              <ProductDetail> 
                <Image src={item.img} />
                <Details>
                  <ProductName>
                    <b>Product:</b> {item.product}
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> {item.id}
                  </ProductId>
                  <ProductColor color={item.color} />
                  <ProductSize>
                  <b>Size:</b> {item.size}
                  </ProductSize>
                </Details>
                <PriceDetail>
                <ProductAmountContainer>
                  <Remove 
                  onClick={() => {
                           if (item.quantity > 1) {
                             dispatch({ type: "DECREASE", payload: item });
                            } else {
                               dispatch({ type: "REMOVE", payload: item });
                             }
                             }}
                              />
                  <ProductAmount>{item.productamount}</ProductAmount>
                  <Add 
                  onClick={() => {
                        dispatch({ type: "INCREASE", payload: item });
                        }
                        }
                         />
                </ProductAmountContainer>
                <ProductPrice>$ {item.price}</ProductPrice>
              </PriceDetail>
              </ProductDetail>

              ))}
            </Product>
            
            <Hr />

            {/* <Product>
              <ProductDetail>
                <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
                <Details>
                  <ProductName>
                    <b>Product:</b> HAKURA T-SHIRT
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 93813719876
                  </ProductId>
                  <ProductColor color="gray" />
                  <ProductSize>
                    <b>Size:</b> M
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Remove />
                  <ProductAmount>2</ProductAmount>
                  <Add />
                </ProductAmountContainer>
                <ProductPrice>$ 2000</ProductPrice>
              </PriceDetail>
            </Product> */}
          </Info>

          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 28,900</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 500.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -500.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 28,900</SummaryItemPrice>
            </SummaryItem>
            <Link to='/order' style={{ textDecoration: 'none' }} ><Button>CHECKOUT NOW</Button></Link>
          </Summary>
        </Bottom>
      </Wrapper>

      <Footer />
    </Container>
  )
}

export default Cart