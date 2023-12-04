"use client"

import {
    Card,
    CardBody,
    Img,
    Text
} from "@chakra-ui/react"
import { useState } from "react"

export default function TarjetaHierba({ hierba, dolencia }) {
    const [flip, setFlip] = useState(true);

    const handleClick = () => {
        setFlip(!flip);
    };

    if (hierba.dolencia.includes(dolencia) || dolencia == "Todas") {
        return (
            <Card as='button'
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
                marginBottom={"2.5%"}
                border="solid"
                borderWidth={"1%"}
                marginLeft={"1rem"}
                width={"20em"}
                height={"24em"}
                maxHeight={"24em"}
                marginRight={"1rem"}
                onClick={handleClick}
            >
                <div className={`card-container  ${!flip ? 'flipped' : ''}`}>
                    <div className="card-face front">
                        <Img src={hierba.foto}
                            fit={"fill"}
                            boxSize={"100%"}
                            width={"20em"}
                            height={"16.5em"}
                            alt={` Imagen de ${hierba.planta}`}
                        />
                        <CardBody marginBottom={"-10%"}>
                            <Text fontSize={"x-large"}>
                                {hierba.planta}
                            </Text>
                        </CardBody>
                        <CardBody>
                            <Text fontSize={"medium"} fontStyle={"italic"} align={"center"}>
                                ({hierba.cientifico})
                            </Text>
                            <div
                                style={{
                                    border: "1.5px solid black",
                                    position: "absolute",
                                    bottom: 0,
                                    right: 0,
                                    padding: "3.5px",
                                    borderRadius: "4px",
                                }}
                            >
                                ⇲
                            </div>
                        </CardBody>
                    </div>
                    <div className="card-face back" style={{ overflow: 'auto', background: "#5e846a" }}>
                        <div style={{ width: "100%", height: "auto" }} className="titulo" >
                            <CardBody>
                                <div style={{ width: "100%" }} className="titulo">
                                    <Text fontSize={"x-large"} align={"center"}>
                                        <strong style={{ textDecoration: 'underline' }}>
                                            {hierba.planta}
                                        </strong>
                                    </Text>
                                </div>
                                <div className="preparacion">
                                    <strong>
                                        Preparación:
                                    </strong>
                                    <Text>
                                        {hierba.informacion}
                                        <br></br>
                                        <br></br>
                                    </Text>

                                </div>
                                <div className="usos">
                                    <strong>
                                        Usos:
                                    </strong>
                                    <Text>
                                        {hierba.usos}
                                    </Text>
                                </div>
                            </CardBody>
                        </div>
                    </div>
                </div>
            </Card >
        );
    }
}