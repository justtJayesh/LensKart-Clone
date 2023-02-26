import React, { useState, useEffect, useContext } from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Text,
    Heading,
    Image,
    Box,
    Input,
    Checkbox,
    Center,
    VStack,
    HStack,
    FormControl

} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';


const Signup = () => {
    const { isAuth, login, logout } = useContext(AuthContext)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const navigate = useNavigate()

    return (
        <>
            <Center marginTop={'140px'}>
                <Box border={'1px solid grey'} w='472px' borderRadius={'12px'}>
                    <FormControl>
                        <VStack spacing={4}>
                            <Box>
                                <Image borderRadius={'12px 12px 0 0'} src='https://static1.lenskart.com/media/desktop/img/DesignStudioIcons/DesktopLoginImage.svg' />
                            </Box>


                            <Box textAlign={'left'} w={'80%'}>
                                <Heading>Sign Up</Heading>
                            </Box>
                            <Box w={'80%'}>
                                <Input placeholder='Mobile/Email' />
                            </Box>
                            <Box w={'80%'}>

                                <Box w={'fit-content'}>
                                    <Checkbox>Get update on Whatsapp</Checkbox>
                                </Box>
                            </Box>
                            <Box w={'80%'}>
                                <Button colorScheme={'teal'} w={'100%'} borderRadius='25px' onClick={()=>login()}>Sign In</Button>
                            </Box>
                            <Box w={'80%'}>
                                <HStack>
                                    <Text>New member?</Text>
                                    <Button colorScheme={'black'} variant='link' textDecoration={'underline'} onClick={() => navigate('/createaccount')}>Create an Account</Button>
                                </HStack>
                            </Box>
                            <Box h={5}></Box>

                        </VStack>
                    </FormControl>
                </Box>
            </Center>
        </>


    );

}

export default Signup


// <Modal isOpen={isOpen} onClose={onClose}>
            //       <ModalOverlay />
            //       <ModalContent  padding={6} width='370px' borderRadius={10} boxShadow='rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px'>
            //         <ModalHeader>
            //           <Image src='https://static1.lenskart.com/media/desktop/img/DesignStudioIcons/DesktopLoginImage.svg' />
            //         </ModalHeader>
            //         <ModalCloseButton />

            //         <ModalBody>
            //           <Heading as='h3' fontSize={'2xl'} fontWeight={'semibold'}>Sign In</Heading>
            //           <Box>
            //             <Input placeholder='Mobile number'/>
            //             <Checkbox>Get Update on Whatsapp</Checkbox>
            //           </Box>
            //         </ModalBody>

            //         <ModalFooter>
            //           <Button colorScheme='blue' mr={3}>
            //             SignIn
            //           </Button>
            //         </ModalFooter>
            //         <Box p={'5px 25px'}>
            //           <Text>New Member? </Text>
            //         </Box>
            //         <Box h={5}></Box>
            //       </ModalContent>
            //     </Modal>