import { Box, Button, HStack, Heading, Input, Stack, VStack,Text } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineSend} from "react-icons/ai"
const Footer = () => {
  return (
    <Box bg={"blackAlpha.900"} minH={"40"} p={"16"} color={"white"}>
<Stack direction={["column","row"]} >
    <VStack alignItems={"stretch"} width={"full"} px={"4"}>
        <Heading size={"md"} textTransform={"uppercase"} textAlign={["center","left"]} >
            Keep conneted

        </Heading>
        <HStack borderRadius={"2px solid white "} py={"2"}>
            <Input placeholder='Enter E Mail Here' border={"none"} borderRadius={"none"}/>
            <Button p={"0"} colorScheme='purple ' variant={"ghost"} borderRadius={"0 20px 20px 0  "}>
<AiOutlineSend size={"20"}/>
            </Button>
        </HStack>
    </VStack>
    <VStack w={"full"} borderLeft={["none","1px solid white"]} borderRight={["none","1px solid white"]}>
<Heading textTransform={"uppercase"} textAlign={"center"}>
    Video Hub
</Heading>
<Text>
    All Rights Reserved
</Text>
    </VStack>
    <VStack w={"full"} >
<Heading size={"md"} textTransform={"uppercase"} >
    Social media 


</Heading>
<Button variant={"link"} colorScheme='white'>
<a href="#">Linkdin</a>
</Button>

<Button variant={"link"} colorScheme='white'>
<a href="#">Git hub</a>
</Button>

<Button variant={"link"} colorScheme='white'>
<a href="#">Facebook</a>
</Button>

</VStack>

</Stack>
    </Box>
  )
}

export default Footer