import {
    Heading,
    Box,
    Text,
    FormControl,
    FormLabel,
    Input,
    Image,
    Flex,
    RadioGroup,
    HStack,
    Radio,
    VStack,
    InputGroup,
    InputLeftAddon,
    Divider,
    Select,
    Button,
    Stack,
    Center,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,

} from '@chakra-ui/react';
import React, { useContext, useState } from 'react';
import logo from '../Assets/logo.png';
import { Link as RouterLink, Navigate, useNavigate } from "react-router-dom"
import { CartContext } from '../Context/CartContext';
import { MinusIcon, AddIcon } from '@chakra-ui/icons';


const Checkout = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { cartItem, setCartItem } = useContext(CartContext)
    const navigate = useNavigate()
    const [qty, setQty] = useState(1)

    var subTotal = 0

    const handleClose = () =>{
        onClose()
        navigate('/')
    }

    return (
        <>
            <nav style={{ height: '80px', padding: '10px', }}>
                <div style={{ margin: '0 150px', display: "flex", display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box _hover={{ cursor: 'pointer' }} onClick={() => navigate('/')} style={{ height: '59px', width: '230px' }}>
                        <img src={logo} />
                    </Box>

                    <div style={{ display: "flex", height: '25px' }}>
                        <Box>
                            <img src='https://static1.lenskart.com/media/desktop/img/DesignStudioIcons/Shield.svg' />
                        </Box>
                        <Box w={2}></Box>
                        <Box>
                            <Text fontSize={'md'} fontWeight={'normal'}>100% safe and secure</Text>
                        </Box>
                    </div>

                </div>
            </nav>

            <Flex justifyContent={'space-evenly'} marginTop={'20px'}>
                <Box w={'50%'} border='1px solid #969696' padding={10} borderRadius='12px'>
                    <FormControl isRequired>
                        <Stack spacing={10}>
                            <Flex gap={4}>
                                <Input placeholder='First name*' />
                                <Input placeholder='Last name*' />
                            </Flex>
                            <HStack>
                                <FormLabel as='legend'>Gender</FormLabel>
                                <RadioGroup defaultValue='Itachi'>
                                    <HStack spacing='24px'>
                                        <Radio value='Sasuke'>Male</Radio>
                                        <Radio value='Nagato'>Female</Radio>
                                    </HStack>
                                </RadioGroup>
                            </HStack>
                            <HStack>
                                <InputGroup>
                                    <InputLeftAddon children='+91' />
                                    <Input type='tel' placeholder='Phone Number' />
                                </InputGroup>
                                <Input type='email' placeholder='Email' />
                            </HStack>

                            <Divider />

                            <HStack>
                                <Input placeholder='Address Line 1*' />
                                <Input placeholder='Address Line 2' />
                            </HStack>
                            <HStack>
                                <Input placeholder='Zip / Postal Code*' />
                                <Input placeholder='City / District*' />
                            </HStack>
                            <HStack>
                                <Select variant='outline' placeholder='India'>
                                    <option value='option1'>Option 1</option>
                                    <option value='option2'>Option 2</option>
                                    <option value='option3'>Option 3</option>
                                </Select>
                                <Select variant='outline' placeholder='State'>
                                    <option value='option1'>Option 1</option>
                                    <option value='option2'>Option 2</option>
                                    <option value='option3'>Option 3</option>
                                </Select>
                            </HStack>
                            <Box>
                                <Button onClick={onOpen} colorScheme='teal' type='submit' w={'300px'}>Continue</Button>
                                <Modal onClose={onClose} isOpen={isOpen} isCentered>
                                    <ModalOverlay />
                                    <ModalContent>
                                        <ModalCloseButton />
                                        <ModalBody>
                                            <Heading>Order SuccessFully Placed 🎉</Heading>
                                        </ModalBody>
                                        <ModalFooter>
                                            <Button onClick={handleClose}>Close</Button>
                                        </ModalFooter>
                                    </ModalContent>
                                </Modal>
                            </Box>
                        </Stack>
                    </FormControl>
                </Box>
                <Box w={'30%'} h={'fit-content'} border='1px solid #969696' borderRadius='12px'>
                    <HStack justifyContent={'space-between'} padding={'2px 8px'}>
                        <Text>Shopping Cart</Text>
                        <Text>Item {cartItem.length}</Text>
                    </HStack>
                    <Divider />
                    <VStack>
                        {
                            cartItem?.map((el) => {
                                subTotal += el.price
                                return (
                                    <>
                                        <Box display={'flex'} justifyContent={'space-evenly'} alignItems={'center'} w='100%'>
                                            <Box w={'120px'}>
                                                <Image src={el.image} w={'100%'} />
                                            </Box>
                                            <Box>
                                                <Text>Qty</Text>
                                                <Button isDisabled={qty === 1} onClick={(e) => setQty(qty - 1)} variant={'ghost'}><MinusIcon /></Button>
                                                <Button variant={'outline'}>{qty}</Button>
                                                <Button onClick={(e) => setQty(qty + 1)} variant={'ghost'}><AddIcon /></Button>
                                            </Box>
                                        </Box>
                                        <Divider />
                                    </>
                                );
                            })
                        }
                    </VStack>
                    <HStack justifyContent={'space-between'} padding={'2px 8px'}>
                        <Text>SubTotal</Text>
                        <Text>Rs. {subTotal}</Text>
                    </HStack>
                    <HStack justifyContent={'space-between'} padding={'2px 8px'}>
                        <Text>Net Amount</Text>
                        <Text>Rs. {subTotal}</Text>
                    </HStack>
                    <HStack justifyContent={'space-between'} padding={'2px 8px'}>
                        <Text>Tax</Text>
                        <Text>Rs. 769</Text>
                    </HStack>
                    <Divider />
                    <HStack justifyContent={'space-between'} padding={'2px 8px'}>
                        <Heading as='h3' fontSize={'lg'}>ORDER TOTAL</Heading>
                        <Heading as='h3' fontSize={'lg'}>Rs.{subTotal + 769}</Heading>
                    </HStack>
                </Box>
            </Flex>

        </>
    );

}

export default Checkout