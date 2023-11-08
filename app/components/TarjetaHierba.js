"use client"

import { Card, CardBody, Img, Text } from "@chakra-ui/react"

export default function TarjetaHierba({hierba, dolencia, setDolencia}){
    if (hierba.dolencia.includes(dolencia) || dolencia == "None"){
        return(
            <Card marginBottom={"2.5%"} border="solid" borderWidth={"1%"} marginLeft={"1rem"} marginRight={"1rem"} >
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
        )
    }
}