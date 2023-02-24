import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Grid, Heading, HStack, Image, Text, Button, Center } from '@chakra-ui/react';
import { CollapseEx } from '../Components/CollapseEx';
import { CartContext } from '../Context/CartContext';


const SingleProduct = () => {
    const { id } = useParams()
    const [productItem, setProductItem] = useState([])
    const { cartItem, setCartItem } = useContext(CartContext)


    useEffect(() => {
        axios.get(`http://localhost:8080/products/${id}`)
            .then((res) => setProductItem(res.data))
    }, [])

    const handleCart = () => {
        setCartItem([...cartItem, productItem])
        alert('Item added Successfully')
    }

    console.log(cartItem)
    const { brand, category, color, image, price, productImages, rating, size, title } = productItem

    return (
        <Center>
            <Box key={id}>

                <Box p={'10px'}>
                    <HStack justifyContent={'space-between'} padding={'5px 15px'}>
                        <Box>
                            <Breadcrumb fontWeight='light' fontSize='sm'>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href='#'>Home</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href='#'>Eyeglasses</BreadcrumbLink>
                                </BreadcrumbItem>

                                <BreadcrumbItem>
                                    <BreadcrumbLink href='#'>Brand</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href='#'>{brand}</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href='#'>{title}</BreadcrumbLink>
                                </BreadcrumbItem>
                            </Breadcrumb>
                        </Box>
                        <Box>
                            <Text fontWeight={'thin'} fontSize={'xs'}>Problem in placing order ? Give a missed call 1800-111-111</Text>
                        </Box>
                    </HStack>
                </Box>


                <Box w={'95%'} margin={'auto'} padding={'5px'}>

                    <Box display={'flex'}>
                        <Box w={'940px'}>

                            <Grid templateColumns={'repeat(2, 1fr)'} gap={5}>
                                {
                                    productImages?.map((image) => (
                                        <Box h={'456px'} w={'456px'} border={'1px solid #eeeeee'}>
                                            <Image src={image} />
                                        </Box>
                                    ))
                                }

                            </Grid>
                        </Box>

                        <Box w={'450px'} textAlign={'left'} padding={'20px'}>

                            <Heading fontWeight={'medium'} color={'#ABABAB'} fontSize={'lg'} marginBottom={'10px'}>{brand}</Heading>
                            <Heading fontWeight={'medium'} fontSize={'lg'} marginBottom={'10px'}>{title}</Heading>
                            <Heading fontWeight={'medium'} color={'#ABABAB'} fontSize={'lg'} marginBottom={'10px'}>Size: {size}</Heading>
                            <Heading fontWeight={'medium'} color={'#ABABAB'} fontSize={'lg'} marginBottom={'10px'}>Color: {color}</Heading>
                            <Heading fontWeight={'bold'} color={'teal'} fontSize={'2xl'} marginBottom={'10px'}>Rs.{price}</Heading>
                            <Box>
                                <Button w={'390px'} colorScheme='teal' variant='solid' marginBottom={'10px'} onClick={handleCart}>Buy Now</Button>
                            </Box>
                            <CollapseEx title={'Technical Information'} />
                            <CollapseEx title={'Visit Nearby Store'} />
                            <CollapseEx title={'Check Delivery Options'} />
                            <CollapseEx title={'Review(164)'} />

                        </Box>


                    </Box>
                </Box>
            </Box>
        </Center>
    );

}

export default SingleProduct