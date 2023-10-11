"use client"

import { Card, CardBody, CardFooter, CardHeader, Container, Text, chakra } from "@chakra-ui/react";
import { Img } from "@chakra-ui/react";

export default function Home({data}) {
  return(
    <div>
        <Text fontSize="5xl" marginBottom={"2%"} maxWidth={"75%"} marginLeft={"1rem"} fontStyle={""}>
          Catálogo de hierbas medicinales Chilenas
        </Text>
        <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", flexWrap:"wrap", margin:"1rem"}}>
          {data.map((hierba) => (
            <Card minWidth={"22%"} marginBottom={"2.5%"} border="solid" borderWidth={"1%"}>
              <Img src={hierba.foto} fit={"fill"} boxSize={"100%"} width={"20em"} height={"16.5em"} alt={` Imagen de ${hierba.planta}`}/>
              <CardBody marginBottom={"-10%"}>
                <Text fontSize={"x-large"} align={"center"}>
                  {hierba.planta}
                </Text>
              </CardBody>
              <CardBody>
                <Text fontSize={"medium"} fontStyle={"italic"} align={"center"}>
                  ({hierba.cientifico})
                </Text>
              </CardBody>
            </Card>
          ))}
        </div>
    </div>
  )
}