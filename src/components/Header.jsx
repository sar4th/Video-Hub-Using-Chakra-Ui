import React from 'react'
import { Link } from 'react-router-dom'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    VStack,
    HStack,
} from '@chakra-ui/react'
import { BiMenuAltLeft } from "react-icons/bi"
const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (

        <>
            <Button
                pos={'fixed'}
                left={4}
                top={4}
                colorScheme='purple'
                p={0}
                w={10}
                h={10}
                borderRadius={"full"}
                onClick={onOpen}
                zIndex={"overlay"}


            >
                <BiMenuAltLeft size={20} />

            </Button>
            <Drawer isOpen={isOpen} onClose={onClose} placement='left'>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>VIDEO HUB</DrawerHeader>
                    <DrawerBody>
                    <VStack  alignItems={"flex-start"}>
                      <Button variant={"ghost"} colorScheme='purple'  onClick={onClose}>
                        <Link to={"/"} >Home</Link>
                        </Button>  

                        
                      <Button variant={"ghost"} colorScheme='purple' onClick={onClose}>
                        <Link to={"/videos"} >Videos</Link>
                        </Button> 

                        
                      <Button variant={"ghost"} colorScheme='purple' onClick={onClose}>
                        <Link to={"/videos?category=free"} >Free Videos</Link>
                        </Button> 

                        
                      <Button variant={"ghost"} colorScheme='purple' onClick={onClose}>
                        <Link to={"/upload"} >Upload Video</Link>
                        </Button> 
                    </VStack>

   
                   
                    <HStack justifyContent={"space-evenly"} position={"absolute"} bottom={10} left={1}>
                    <Button  colorScheme='purple' onClick={onClose}>
                        <Link to={"/login"} >Login</Link>
                        </Button>

                           
                      <Button  colorScheme='purple' variant={"outline"} onClick={onClose}>
                        <Link to={"/Signup"} >Sign up</Link>
                        </Button>  
                    </HStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer >
        </>
    )
}

export default Header