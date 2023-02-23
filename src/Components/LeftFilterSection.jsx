import { HStack, Heading, VStack, Image, Text, Box, Grid, Checkbox } from '@chakra-ui/react';
import React from 'react';
import { CollapseEx } from './CollapseEx';

const LeftFilterSection = () => {
    return (
        <Box>
            <VStack>
                <Box>
                    <Heading as='h4' size={'md'} fontWeight={'medium'} textAlign='left'>FRAME TYPE</Heading>
                    <Box h={'2'}></Box>
                    <Grid templateColumns={'repeat(3,1fr)'} gap='4px' _hover={{ cursor: 'pointer' }}>
                        <Box border={'1px solid #E7E7E7'} padding='4px' _hover={{ borderColor: 'black' }}>
                            <Image margin='auto' src='https://static.lenskart.com/images/cust_mailer/Eyeglass/FullRim.png' />
                            <Text fontSize={'2xs'} color='#9D9D9D'>Full Rims</Text>
                        </Box>
                        <Box border={'1px solid #E7E7E7'} padding='4px' _hover={{ borderColor: 'black' }}>
                            <Image margin='auto' src='https://static.lenskart.com/images/cust_mailer/Eyeglass/HalfRim.png' />
                            <Text fontSize={'2xs'} color='#9D9D9D'>Half Rims</Text>
                        </Box>
                        <Box border={'1px solid #E7E7E7'} padding='4px' _hover={{ borderColor: 'black' }}>
                            <Image margin='auto' src='https://static.lenskart.com/images/cust_mailer/Eyeglass/Rimless.png' />
                            <Text fontSize={'2xs'} color='#9D9D9D'>Rimless</Text>
                        </Box>
                    </Grid>
                </Box>
                <Box h={1}></Box>
                <Box>
                    <Heading as='h4' size={'md'} fontWeight={'medium'} textAlign='left'>FRAME SHAPE</Heading>
                    <Box h={'2'}></Box>
                    <Grid templateColumns={'repeat(3,1fr)'} gap='4px'>
                        <Box border={'1px solid #E7E7E7'} padding='4px' _hover={{ borderColor: 'black' }}>
                            <Image margin='auto' src='https://static.lenskart.com/images/cust_mailer/Eyeglass/Rectangle.png' />
                            <Text fontSize={'2xs'} color='#9D9D9D'>Rectangle</Text>
                        </Box>
                        <Box border={'1px solid #E7E7E7'} padding='4px' _hover={{ borderColor: 'black' }}>
                            <Image margin='auto' src='https://static.lenskart.com/images/cust_mailer/Eyeglass/Square.png' />
                            <Text fontSize={'2xs'} color='#9D9D9D'>Square</Text>
                        </Box>
                        <Box border={'1px solid #E7E7E7'} padding='4px' _hover={{ borderColor: 'black' }}>
                            <Image margin='auto' src='https://static.lenskart.com/images/cust_mailer/Eyeglass/Round.png' />
                            <Text fontSize={'2xs'} color='#9D9D9D'>Round</Text>
                        </Box>
                        <Box border={'1px solid #E7E7E7'} padding='4px' _hover={{ borderColor: 'black' }}>
                            <Image margin='auto' src='https://static.lenskart.com/images/cust_mailer/Eyeglass/CatEye.png' />
                            <Text fontSize={'2xs'} color='#9D9D9D'>Cat Eye</Text>
                        </Box>
                        <Box border={'1px solid #E7E7E7'} padding='4px' _hover={{ borderColor: 'black' }}>
                            <Image margin='auto' src='https://static.lenskart.com/images/cust_mailer/Eyeglass/Aviator.png' />
                            <Text fontSize={'2xs'} color='#9D9D9D'>Aviator</Text>
                        </Box>
                        <Box border={'1px solid #E7E7E7'} padding='4px' _hover={{ borderColor: 'black' }}>
                            <Image margin='auto' src='https://static.lenskart.com/images/cust_mailer/Eyeglass/Geometric.png' />
                            <Text fontSize={'2xs'} color='#9D9D9D'>Geometric</Text>
                        </Box>
                        <Box border={'1px solid #E7E7E7'} padding='4px' _hover={{ borderColor: 'black' }}>
                            <Image margin='auto' src='https://static.lenskart.com/images/cust_mailer/Eyeglass/Wayfarer.png' />
                            <Text fontSize={'2xs'} color='#9D9D9D'>Wayfarer</Text>
                        </Box>
                    </Grid>
                </Box>
                <Box h={1}></Box>
                <Box>
                    <Heading as='h4' size={'md'} fontWeight={'medium'} textAlign='left'>FRAME COLOR</Heading>
                    <Box h={'2'}></Box>
                    <Box padding={'4px'} color={'grey'}  w={208} h={200} overflowY='scroll'>
                        <VStack align={'left'}>
                            <Checkbox><Text color='#9D9D9D'>Black</Text></Checkbox>
                            <Checkbox><Text color='#9D9D9D'>Blue</Text></Checkbox>
                            <Checkbox><Text color='#9D9D9D'>Grey</Text></Checkbox>
                            <Checkbox><Text color='#9D9D9D'>Brown</Text></Checkbox>
                            <Checkbox><Text color='#9D9D9D'>Gunmetal</Text></Checkbox>
                            <Checkbox><Text color='#9D9D9D'>Tranparent</Text></Checkbox>
                            <Checkbox><Text color='#9D9D9D'>Gold</Text></Checkbox>
                            <Checkbox><Text color='#9D9D9D'>Tortoise</Text></Checkbox>
                            <Checkbox><Text color='#9D9D9D'>Green</Text></Checkbox>
                            <Checkbox><Text color='#9D9D9D'>Silver</Text></Checkbox>
                            <Checkbox><Text color='#9D9D9D'>Pink</Text></Checkbox>
                        </VStack>
                    </Box>
                </Box>
                <Box h={1}></Box>
                <Box w={208}>
                    <CollapseEx  title={'Brand'}/>
                    <CollapseEx  title={'Frame Size'}/>
                    <CollapseEx  title={'Gender'}/>
                </Box>
            </VStack>
        </Box>
    );

}

export default LeftFilterSection