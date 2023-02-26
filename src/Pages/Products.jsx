import React, { useReducer, useEffect, useState } from 'react';
import { Box, Grid, GridItem, HStack, VStack, Image, Spinner, SimpleGrid, Center, Text, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Select } from '@chakra-ui/react'
import LeftFilterSection from '../Components/LeftFilterSection';
import axios from 'axios'
import ProductCard from '../Components/ProductCard';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

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
                // console.log(res.data)
                dispatch({ type: "FETCH_SUCCESS", payload: res.data })
            })
            .catch((err) => dispatch({ type: "FETCH_FAILED", payload: err.message }))

    }

    useEffect(() => {
        getData('http://localhost:8080/products')
    }, [])

    const handleSortChange = (e) => {
        let sortType = e.target.value;
        getData(`http://localhost:8080/products?_sort=price&_order=${sortType}`)
    }

    // console.log(products)
    return (
        <>
            <Navbar />

            <Box>
                <Box margin={'20px'}>
                    <Breadcrumb fontSize={'sm'}>
                        <BreadcrumbItem>
                            <BreadcrumbLink href='#'>Home</BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem>
                            <BreadcrumbLink href='#'>Eyeglasses</BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                </Box>

                <Image src='https://static1.lenskart.com/media/desktop/img/Feb23/style/plp/PLP%20Camapaign%20-%20WEB%20(6).jpg' />

                <Box h={10} marginBottom={'2px'} marginTop={'20px'} padding={'0 40px'}>
                    <HStack justifyContent={'space-between'}>
                        <Box></Box>
                        <Box w={200}>
                            <Select placeholder='Sort' size={'sm'} onChange={handleSortChange}>
                                <option value='asc'>Price: low to high</option>
                                <option value='desc'>Price: high to low</option>
                            </Select>
                        </Box>
                    </HStack>
                </Box>

                <Center>
                    <Box w={'95%'}>
                        <Box h={'30px'} w={'100%'}></Box>
                        <Grid templateColumns={'20% 80%'} >
                            <LeftFilterSection />

                            {
                                loading ? <Spinner /> : ""
                            }

                            <HStack height='700px' overflow='scroll' alignItems='top' __css={{ '&::-webkit-scrollbar': { display: 'none' } }} >

                                <Grid style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: "20px" }}>
                                    {
                                        products?.length && products?.map((ele) =>
                                            <GridItem key={ele.id}>
                                                <ProductCard data={ele} />
                                            </GridItem>
                                        )
                                    }
                                </Grid>
                            </HStack>
                        </Grid>
                    </Box>
                </Center>
            </Box>

            <Footer />
        </>
    );

}

export default Products