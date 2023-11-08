'use client'

import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Tag,
  useColorModeValue,
} from '@chakra-ui/react'
import { ReactNode } from 'react'

const Logo = (props) => {
  return (
    <img
    src="https://magistergobiernouach.cl/wp-content/uploads/2022/02/logo_uach-614a369aa9528.png" // Reemplaza esta URL con la URL de tu imagen
    alt="Logo de la Universidad Austral de Chile" // Agrega un texto alternativo para accesibilidad
    width={200} // Ajusta el ancho de la imagen según tus necesidades
    height={50} // Ajusta el alto de la imagen según tus necesidades
  />
  )
}

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  )
}

export default function LargeWithLogoCentered() {
  return (
    <Box
      bg={useColorModeValue('green.300')} //AQUI SE CAMBIA COLOR DE BACKGROUND
      color={useColorModeValue('black.700')}> 
      <Container as={Stack} maxW={'full'} py={10}>
        <text>Referencias: https://biblioteca.inia.cl/bitstream/handle/20.500.14001/68466/NR42807.pdf?sequence=1&isAllowed=y</text>
      </Container>
      <Box py={10}>
        <Flex
          align={'center'}
          _before={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('black.200'),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('black.200'),
            flexGrow: 1,
            ml: 8,
          }}>
          <Logo />
        </Flex>
        <Text pt={6} fontSize={'md'} textAlign={'center'}>
          Creado por: Nikolas Garcés, Eduardo Barrera, Josefina Leal, Iván Duran, Claudia Vergara.
        </Text>
      </Box>
    </Box>
  )
}