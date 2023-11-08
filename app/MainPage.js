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
  const [dolencia, setDolencia] = useState("None");

  return (
    <ChakraProvider theme={theme}>
      <div style={{minWidth:"100%"}}>
        <Text fontSize="5xl" marginBottom={"1%"} maxWidth={"85%"} marginLeft={"2rem"}>
          Catálogo de hierbas medicinales Chilenas
        </Text>
        <Button ref={btnRef} colorScheme="teal" marginLeft={"2rem"} marginRight={"2rem"} onClick={onOpen}>
          Filtrar por dolencia
        </Button>
        <DrawerComponent isOpen={isOpen} onClose={onClose} setDolencia={setDolencia} />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            flexWrap: "wrap",
            margin: "1rem",
            width:"98%",
            justifyContent: "center"
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
