import React, { useReducer, useEffect, useState } from 'react';
import { Box, Heading, Grid, GridItem, HStack, VStack, Image, Spinner, SimpleGrid, Center, Text, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import LeftFilterSection from '../Components/LeftFilterSection';
import axios from 'axios'


const initialState = {
    data: [],
    isLoading: false,
    error: null,
}

const reducer = (state, { type, payload }) => {
    switch (type) {
        case "REQUEST": {
            return {
                ...state,
                isLoading: true,
                error: false
            }

        }
        case "FETCH_SUCCESS": {
            return {
                ...state,
                data: payload,
                isLoading: false,
                error: false
            }

        }
        case "FETCH_FAILED": {
            return {
                ...state,
                data: [],
                isLoading: false,
                error: true
            }
        }
        case "Finally": {
            return {
                ...state,
                isLoading: false
            }
        }
        default: {
            throw new Error()
        }
    }
};

const Products = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const products = state.data
    const loading = state.isLoading
    const error = state.error

    const getData = (url) => {

        dispatch({ type: "REQUEST" })
        axios.get(url)
            .then((res) => {
                console.log(res.data)
                dispatch({ type: "FETCH_SUCCESS", payload: res.data })
            })
            .catch((err) => dispatch({ type: "FETCH_FAILED", payload: err.message }))

    }

    useEffect(() => {
        getData('http://localhost:8080/products')
    }, [])


    return (
        <Box>
            <Box margin={'20px'}>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <BreadcrumbLink href='#'>Home</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <BreadcrumbLink href='#'>Eyeglasses</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </Box>

            <Image src='https://static1.lenskart.com/media/desktop/img/Feb23/style/plp/PLP%20Camapaign%20-%20WEB%20(6).jpg' />
            
            {
                loading ? <Spinner /> : ""
            }

            <Box margin={'40px 2px'}>
                    <Box h={'30px'} border={'1px solid black'} w={'100%'}></Box>
                <Grid templateColumns={'20% 80%'} >
                    <LeftFilterSection />
                    <HStack height='700px' overflow='scroll' alignItems='top' __css={{ '&::-webkit-scrollbar': { display: 'none' } }} >

                        <SimpleGrid className="main_container" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: "20px" }}>
                            {
                                products?.map((ele) => {
                                    return (
                                        <Box key={ele.id} border={'1px solid #EBEBEB'} padding={'16px'} borderRadius='7px' _hover={{ cursor: "pointer", boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                                            <Box>
                                                <Image src={ele.image} />
                                            </Box>
                                            <Box textAlign={'left'}>
                                                <Heading as='h3' fontSize={'lg'}>{ele.brand}</Heading>
                                                <Heading as='h3' fontSize={'md'} fontWeight={'light'}>{ele.size}</Heading>
                                                <Heading as='h3' fontSize={'md'}>Rs. {ele.price}</Heading>
                                            </Box>
                                            <Box textAlign={'left'} marginTop={'5px'}>
                                                <Heading as='h3' fontSize={'sm'} fontWeight={'light'}>BUY 1 GET 1 FREE</Heading>
                                            </Box>
                                        </Box>
                                    );
                                })
                            }
                        </SimpleGrid>
                    </HStack>
                </Grid>
            </Box>
        </Box>
    );

}

export default Products