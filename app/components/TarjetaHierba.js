"use client"

import { Card, CardBody, Img, Text } from "@chakra-ui/react"
import { useState } from "react"

export default function TarjetaHierba({hierba, dolencia, setDolencia}){
    const [flip, setFlip] = useState(true);

    if (hierba.dolencia.includes(dolencia) || dolencia == "Todas"){
        if(flip){
            return(
                <Card as='button' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} marginBottom={"2.5%"} border="solid" borderWidth={"1%"} marginLeft={"1rem"} width={"20em"} height={"24em"} maxHeight={"24em"} marginRight={"1rem"} onClick={() => setFlip(false)}  >
                    <Img src={hierba.foto} fit={"fill"} boxSize={"100%"} width={"20em"} height={"16.5em"} alt={` Imagen de ${hierba.planta}`} />
                    <CardBody marginBottom={"-10%"}>
                        <Text fontSize={"x-large"}>
                            {hierba.planta}
                        </Text>
                    </CardBody>
                    <CardBody>
                        <Text fontSize={"medium"} fontStyle={"italic"} align={"center"}>
                            ({hierba.cientifico})
                        </Text>
                    </CardBody>
                </Card >
            )
        }
        else{
            return(
                <Card as='button' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} marginBottom={"2.5%"} border="solid" borderWidth={"1%"} marginLeft={"1rem"} width={"20em"} height={"24em"} marginRight={"1rem"} onClick={() => setFlip(true)} >
                    <Text fontSize={"x-large"} align={"center"}>
                        {hierba.planta}    
                    </Text>
                    <Text >
                        {hierba.informacion}
                    </Text>
                </Card>
            )
        }
    }
}