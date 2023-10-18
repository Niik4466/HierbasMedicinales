"use client"

import { Card, CardBody, CardFooter, CardHeader, Container, Text, chakra, extendTheme, ChakraProvider, Img, Button, ButtonGroup} from "@chakra-ui/react";
import TarjetaHierba from "./components/TarjetaHierba";

const theme = extendTheme({
  fonts: {
    body: "BelgianoSerif2, sans-serif",
    heading: "BelgianoSerif2, sans-serif",
  },
});

export default function Home({data}) {
  return(
    <ChakraProvider theme={theme}>
      <div>
          <Text fontSize="5xl" marginBottom={"2%"} maxWidth={"75%"} marginLeft={"1rem"}>
            Catálogo de hierbas medicinales Chilenas
          </Text>
          <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", flexWrap:"wrap", margin:"1rem"}}>
            {data.map((hierba) => (
              <TarjetaHierba hierba={hierba}/>
            ))}
          </div>
          <Button colorScheme='blue'>Button</Button>    
      </div>
    </ChakraProvider>
  )
}