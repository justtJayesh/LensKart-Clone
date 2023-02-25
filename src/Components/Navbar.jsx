// import { ReactNode } from 'react';
import {
  Text,
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  useDisclosure,
  Stack,
  Image,
  Input,
  Heading,
  InputGroup,
  InputLeftElement,
  textDecoration

} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, SearchIcon } from '@chakra-ui/icons';
import logo from '../Assets/logo.png';
import { Link as RouterLink, Navigate, useNavigate } from "react-router-dom"



export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate()

  const Links = [
    { to: '/products', title: 'EYEGLASSES' },
    { to: '/products', title: 'KIDS GLASSES' },
    { to: '/products', title: 'CONTACT LENSES' },
    { to: '/products', title: 'SUNGLASSES' },
    { to: '/products', title: 'STORE LOCATION' },
  ]

  const handleClick = () =>{
    navigate(`/addtocart`)
  }

  return (
    <Box bgColor={'white'} w={'100%'}>
      <Box  px={4}>
        <Flex h={"80px"} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={120} width={'100%'} justifyContent={'space-evenly'}>
            <Box>
              <HStack onClick={() => navigate('/')} _hover={{ cursor: 'pointer' }}>
                <Image
                  src={logo}
                  w='md'
                />
              </HStack>
            </Box>
            <Box w={'80%'}>
              <InputGroup>
                <InputLeftElement
                  pointerEvents='none'
                  children={<SearchIcon color='gray.300' />}
                />
                <Input type='tel' placeholder='What are you looking for' variant='outline' />
              </InputGroup>
            </Box>

            <Box  w={320} justifyContent={'space-evenly'}>
              <Flex justifyContent={'space-evenly'}>
                <Text _hover={{ cursor: 'pointer' }}>Track Order</Text>
                <Text _hover={{ cursor: 'pointer' }}>Sign In</Text>
                <Text _hover={{ cursor: 'pointer' }} onClick={handleClick}>Cart</Text>
              </Flex>

            </Box>
          </HStack>
        </Flex>
      </Box>

      <Box bg={'#FCF9F7'} p={3} w={'100%'}>
        <HStack
          as={'nav'}
          spacing={8}
          display={{ base: 'none', md: 'flex' }}
          h={10}>
          {
            Links.map((link) => (
              <RouterLink key={link.to} to={link.to}>{link.title}</RouterLink>
            ))
          }
        </HStack>
      </Box>

      {/* <Box p={4}>Main Content Here</Box> */}
    </Box>
  );
}