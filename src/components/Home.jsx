import { Box,Container,Heading,Image, Stack,Text } from '@chakra-ui/react'
import React from 'react'
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

import img1 from "../assets/1.jpg"
import img2 from "../assets/2.jpg"
import img3 from "../assets/3.jpg"
import img4 from "../assets/4.jpg"
import img5 from "../assets/5.png"
const Home = () => {
    return (
        <Box overflow={"hidden"}>

            <Mycarousel />
            <Container maxW={'container.xl'} minH={"100vh"} p={"16"} scrollBehavior={"smooth"}>
                <Heading
                 py={"2"}
                 w={"fit-content"}
                 borderBottom={"2px solid"}
                 m={"auto"}
                
                >
                    SERVICES
                </Heading>

                <Stack
                
                h={"full"}
                p={"4"}
                alignItems={"center"}
                direction={["column","row"]}
                >
                  <Image src={img5} alt=""  filter={"hue-rotate(-130deg)"} h={["40","400"]}/>
                  <Text  letterSpacing={"widest"} lineHeight={"190%"} p={["4","16"]} textAlign={"center"}>
Lorem ipsum dolor sit amet consectetur adipisicing elit. 
Officiis quibusdam quasi animi nihil nulla voluptatibus
 aperiam libero, iste quo repellendus 
alias et delectus pariatur, non facere facilis 
tempore veniam doloremque Lorem ipsum dolor, sit amet 
consectetur adipisicing elit. Praesentium nam, 
commodi consectetur obcaecati iste nemo! Ex sed sint laborum, aliquam
 provident, maxime non, dolore saepe similique animi expedita quasi qui?

                  </Text>
                </Stack>
                
            </Container>
        </Box>

    )
}

const headingOptions = {
    pos: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)', // corrected spelling
    p: '4',
  };
  
const Mycarousel = () => {
    return (
      <Carousel
        autoPlay
        infiniteLoop
        interval={1000}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
      >
        <Box w={'full'} height={'100vh'}>
          <Image src={img1} />
          <Heading bg={'blackAlpha.600'} color={'white'} {...headingOptions}>
            WATCH THE FUTURE
          </Heading>
        </Box>


        <Box w={'full'} height={'100vh'}>
          <Image src={img2} />
          <Heading bg={'whiteAlpha.600'} color={'black'} {...headingOptions}>
            FUTURE IS GAMING
          </Heading>
        </Box>

        <Box w={'full'} height={'100vh'}>
          <Image src={img3} />
          <Heading bg={'blackAlpha.600'} color={'white'} {...headingOptions}>
            GAMING ON CONSOE
          </Heading>
        </Box>

        <Box w={'full'} height={'100vh'}>
          <Image src={img4} />
          <Heading bg={'blackAlpha.600'} color={'white'} {...headingOptions}>
            NIGHT GAMING
          </Heading>
        </Box>
      </Carousel>
    );
  };
  

export default Home