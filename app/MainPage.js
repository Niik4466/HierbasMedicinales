"use client";

import {
  Text,
  extendTheme,
  ChakraProvider,
  Button,
  useDisclosure
} from "@chakra-ui/react";
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
      <div style={{ minWidth: "100%" }} overflow={"auto"} >
        <div style={{
          background: "#B5DB71",
        }}>
          <Text fontSize="6xl" maxWidth={"85%"} marginLeft={"2rem"}>
            <strong>Catálogo de Hierbas Medicinales Chilenas</strong>
          </Text>
        </div>
        <div style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          flexWrap: "wrap",
          width: "100%",
          padding: "1rem",
          background: "#B5DB71",
        }}>
          <Text style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            flexWrap: "wrap",
            width: "100%",
            padding: "1rem",
            background: "#B5DB71",
          }} >
            En esta pagina podras encontrar 30 hierbas junto a sus usos y preparación. Y para que resulte mas fácil encontrar la hierba que necesites, puedes filtrar segun la dolencia que estes padeciendo.
          </Text>
        </div>
        <div style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          flexWrap: "wrap",
          width: "100%",
          border: "2px solid",
          borderColor: "black",
          padding: "1rem",
        }} className="boton">
          <Button ref={btnRef}
            colorScheme="green"
            marginTop={"1rem"}
            marginBottom={"1rem"}
            marginLeft={"2rem"}
            marginRight={"2rem"}
            onClick={onOpen}
            style={{
              border: "1px solid black",
              fontSize: "1.5rem",
            }}>
            Filtrar por dolencia
          </Button>
          <Text fontSize="3xl" marginBottom={"1rem"} marginTop={"1rem"} maxWidth={"100%"} marginRight={"2rem"}>
            <strong>Categoria Actual: {dolencia}</strong>
          </Text>
        </div>
        <DrawerComponent isOpen={isOpen} onClose={onClose} setDolencia={setDolencia} />
        <Text style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          flexWrap: "wrap",
          width: "100%",
          padding: "1rem",
        }} marginBottom={"1rem"}>
          <strong>
            Pulsa sobre la hierba que quieras para mas información.
          </strong>
        </Text>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            flexWrap: "wrap",
            margin: "1rem",
            justifyContent: "center"
          }}
        >
          {data.map((hierba, index) => (
            <TarjetaHierba key={index} hierba={hierba} dolencia={dolencia} setDolencia={setDolencia} />
          ))}
          {console.log(dolencia)}
        </div>
        <SmallWithLogoLeft />
      </div>
    </ChakraProvider>
  );
}
