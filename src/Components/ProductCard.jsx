import { Box, Image, Heading, VStack, Flex } from '@chakra-ui/react';
import React from 'react';
import hideout from '../Assets/hideout.svg';


const ProductCard = ({ ele }) => {
    return (
        <Box key={ele.id} border={'1px solid #EBEBEB'} padding={'16px'} borderRadius='7px' _hover={{cursor:"pointer",boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
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

}

export default ProductCard