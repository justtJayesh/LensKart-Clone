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
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  Input,
  Heading,
  InputGroup,
  InputLeftElement

} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, SearchIcon } from '@chakra-ui/icons';
import logo from '../Assets/logo.png';
import { Link as RouterLink, useNavigate } from "react-router-dom"


// const Links = ['Eyeglasses', 'Computer glasses', 'Contact Lenses', 'Sunglasses'];
const Links = [
  { to: '/', title: 'HOME' },
  { to: '/products', title: 'EYEGLASSES' },
  { to: '/products', title: 'COMPUTER GLASSES' },
  { to: '/products', title: 'KIDS GLASSES' },
  { to: '/products', title: 'CONTACT LENSES' },
  { to: '/products', title: 'SUNGLASSES' },
  { to: '/products', title: 'HOME EYE-TEST' },
  { to: '/products', title: 'STORE LOCATION' },
]

// const NavLink = ({ children }) => (
//   <Link
//     px={2}
//     py={1}
//     rounded={'md'}
//     _hover={{
//       textDecoration: 'none',
//       bg: useColorModeValue('gray.200', 'gray.700'),
//     }}>
//     {children}
//   </Link>
// );

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate

  return (
    <Box>
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
            <Box border={'1px solid black'}>
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
                <Text _hover={{ cursor: 'pointer' }}>Sign up</Text>
                <Text _hover={{ cursor: 'pointer' }}>Sign In</Text>
                <Text _hover={{ cursor: 'pointer' }}>Cart</Text>
              </Flex>

            </Box>
          </HStack>
        </Flex>
      </Box>

      <Box bg={'#FCF9F7'} p={3}>
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