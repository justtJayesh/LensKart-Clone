import React from 'react';
import { Box, VStack, Center, Image, Input, InputGroup, InputLeftAddon, InputRightElement, Button, Checkbox, Text } from '@chakra-ui/react'

const CreateAccount = () => {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    return (
        <>
            <Center marginTop={'40px'}>
                <Box border={'1px solid grey'} w='472px' borderRadius={'12px'}>
                    <form>
                        <VStack spacing={4}>
                            <Box>
                                <Image borderRadius={'12px 12px 0 0'} src='https://static1.lenskart.com/media/desktop/img/DesignStudioIcons/DesktopLoginImage.svg' />
                            </Box>
                            <Box w={'80%'}>
                                <Input placeholder='First Name*' />
                            </Box>
                            <Box w={'80%'}>
                                <Input placeholder='Last Name' />
                            </Box>
                            <Box w={'80%'}>
                                <InputGroup>
                                    <InputLeftAddon children='+91' />
                                    <Input type='tel' placeholder='phone number' />
                                </InputGroup>
                            </Box>
                            <Box w={'80%'}>
                                <Input type='email' placeholder='Email' />
                            </Box>
                            <Box w={'80%'}>
                                <InputGroup size='md'>
                                    <Input
                                        pr='4.5rem'
                                        type={show ? 'text' : 'password'}
                                        placeholder='Enter password'
                                    />
                                    <InputRightElement width='4.5rem'>
                                        <Button h='1.75rem' size='sm' onClick={handleClick}>
                                            {show ? 'Hide' : 'Show'}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                            </Box>

                            <Box></Box>
                            <Box>
                                <Button textDecoration={'underline'} variant={'link'}>Got a referal Code?</Button>
                            </Box>
                            <Box textAlign={'left'} w={'80%'}>
                                <Checkbox>Get update on Whatsapp</Checkbox>
                            </Box>
                            <Box textAlign={'left'} w={'80%'}>
                                <Text fontSize={'xs'}>By creating this account, you agree to our Privacy Policy</Text>
                            </Box>
                            <Box w={'80%'}>
                                <Button colorScheme={'teal'} w={'100%'} borderRadius='25px'>Create Account</Button>
                            </Box>
                            <Box h={5}></Box>
                        </VStack>
                    </form>
                </Box>
            </Center>
        </>
    );

}

export default CreateAccount