"use client";

import { Text, extendTheme, ChakraProvider, Button, useDisclosure } from "@chakra-ui/react";
import React, { useRef } from "react";
import TarjetaHierba from "./components/TarjetaHierba";
import { useState } from "react";
import DrawerComponent from "./components/DrawerComponent";
import SmallWithLogoLeft from "./components/FooterComponent";

const theme = extendTheme({
  fonts: {
    body: "BelgianoSerif2, sans-serif",
    heading: "BelgianoSerif2, sans-serif",
  },
});

export default function Home({ data }) {
  const btnRef = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [dolencia, setDolencia] = useState("Todas");

  return (
    <ChakraProvider theme={theme}>
      <div>
        <Text fontSize="5xl" marginBottom={"1%"} maxWidth={"85%"} marginLeft={"2rem"} >
          Catálogo de hierbas medicinales Chilenas
        </Text>
        <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            flexWrap: "wrap",
            width:"100%",
            border: "2px solid", 
            borderColor: "black", 
            padding: "1rem",
          }}className="boton">
          <Button ref={btnRef} colorScheme="green" marginTop={"1rem"} marginBottom={"1rem"} marginLeft={"2rem"} marginRight={"2rem"} onClick={onOpen} 
          style={{
          border: "1px solid black",
          fontSize: "1.1rem",
          }}>
            Filtrar por dolencia
          </Button>
          <Text fontSize="2xl" marginBottom={"1rem"} marginTop={"1rem"} maxWidth={"85%"} marginRight={"2rem"}>
            Categoria Actual: {dolencia}
          </Text>
        
          
        </div>
        <DrawerComponent isOpen={isOpen} onClose={onClose} setDolencia={setDolencia} />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            flexWrap: "wrap",
            margin: "1rem",
            width:"98%",
          }}
        >
          
          {data.map((hierba, index) => (
            <TarjetaHierba key={index} hierba={hierba} dolencia={dolencia} setDolencia={setDolencia} />
          ))}
          
          {console.log(dolencia)}
        
        </div>
        <SmallWithLogoLeft/>
      </div>
    </ChakraProvider>
  );
}
