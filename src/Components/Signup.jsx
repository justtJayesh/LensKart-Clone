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
    const [num, setNum] = useState(null)
    const navigate = useNavigate()

    const handleSignIn = (num) => {
        console.log(num)
        login(num)
    }
    const handleChange = (e) =>{
        setNum(e.target.value)
    }

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
                                <Input placeholder='Mobile/Email' onChange={handleChange} />
                            </Box>
                            <Box w={'80%'}>

                                <Box w={'fit-content'}>
                                    <Checkbox>Get update on Whatsapp</Checkbox>
                                </Box>
                            </Box>
                            <Box w={'80%'}>
                                <Button colorScheme={'teal'} w={'100%'} borderRadius='25px' onClick={handleSignIn}>Sign In</Button>
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