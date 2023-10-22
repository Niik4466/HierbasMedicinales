"use client"

import {
  Text,
  extendTheme,
  ChakraProvider,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import TarjetaHierba from "./components/TarjetaHierba";
import DrawerComponent from "./components/DrawerComponent";

const theme = extendTheme({
  fonts: {
    body: "BelgianoSerif2, sans-serif",
    heading: "BelgianoSerif2, sans-serif",
  },
});

export default function Home({data}) {

  const btnRef = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return(
    <ChakraProvider theme={theme}>
      <div>
          <Text fontSize="5xl" marginBottom={"2%"} maxWidth={"75%"} marginLeft={"1rem"}>
            Catálogo de hierbas medicinales Chilenas
          </Text>
          <Button ref={btnRef} colorScheme='blue' justifyContent="left" onClick={onOpen}>Filtrar por dolencia</Button>
          <DrawerComponent isOpen={isOpen} onClose={onClose} />
          <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", flexWrap:"wrap", margin:"1rem"}}>
            {data.map((hierba) => (
              <TarjetaHierba hierba={hierba}/>
            ))}
          </div>
              
      </div>
    </ChakraProvider>
  )
}