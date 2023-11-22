"use client"

import { Card, CardBody, Img, Text } from "@chakra-ui/react"
import { useState } from "react"

export default function TarjetaHierba({hierba, dolencia, setDolencia}){
    const [flip, setFlip] = useState(true);
    
    const handleClick = () => {
        setFlip(!flip);
      };

    if (hierba.dolencia.includes(dolencia) || dolencia == "Todas"){

        return(
            <Card as='button' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} marginBottom={"2.5%"} border="solid" borderWidth={"1%"} marginLeft={"1rem"} width={"20em"} height={"24em"} maxHeight={"24em"} marginRight={"1rem"} onClick={handleClick} overflow={"auto"}>
                <div style={{transform: !flip ? "rotateY(180deg)" : "rotateY(0deg)", transition: "transform 1s", width: "100%", height: "100%", position: "absolute", backfaceVisibility: "hidden",}}>
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
                        
                        <div style={{border: "1.5px solid black", 
                        position: "absolute",
                        bottom: 0, 
                        right: 0,
                        padding: "3.5px",
                        borderRadius: "4px",}}>
                            ⇲
                        </div>
                    </CardBody>
                </div>
                {!flip && (
                    <div
                        style={{ transform: "rotateY(0deg)", transition: "transform 1s", width: "100%", height: "100%", position: "absolute", backfaceVisibility: "hidden",}}>
                        <CardBody>
                            <Text fontSize={"x-large"} align={"center"}>
                                <strong>
                                {hierba.planta} 
                                </strong>
                                   
                            </Text>
                            <Text >
                                {hierba.informacion}
                                <br></br>
                                <br></br>
                                <strong >
                                    Usos: 
                                    </strong>
                                {hierba.usos}
                            </Text>
                        </CardBody>
                    </div>
                    )}
                
            </Card >
        );
    }
}