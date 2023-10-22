"use client"

import {
  Text,
  extendTheme,
  ChakraProvider,
  Button,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import React from 'react';
import TarjetaHierba from "./components/TarjetaHierba";

const theme = extendTheme({
  fonts: {
    body: "BelgianoSerif2, sans-serif",
    heading: "BelgianoSerif2, sans-serif",
  },
});




export default function Home({data}) {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return(
    <ChakraProvider theme={theme}>
      <div>
          <Text fontSize="5xl" marginBottom={"2%"} maxWidth={"75%"} marginLeft={"1rem"}>
            Catálogo de hierbas medicinales Chilenas
          </Text>
          <Button ref={btnRef} colorScheme='blue' justifyContent="left" onClick={onOpen}>Filtrar por dolencia</Button>
          <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Create your account</DrawerHeader>

              <DrawerBody>

              </DrawerBody>

              <DrawerFooter>
                <Button variant='outline' mr={3} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme='blue'>Save</Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
          <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", flexWrap:"wrap", margin:"1rem"}}>
            {data.map((hierba) => (
              <TarjetaHierba hierba={hierba}/>
            ))}
          </div>
              
      </div>
    </ChakraProvider>
  )
}