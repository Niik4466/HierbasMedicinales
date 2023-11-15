import React, { useRef } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Stack,
} from "@chakra-ui/react";

const CustomButton = ({ children, ...props }) => {
  return (
    <Button variant='ghost' size='xl' {...props}>
      <u>{children}</u>
    </Button>
  );
};

const dolencias = [
  "Problemas renales y de las vias urinarias",
  "Afecciones a la piel y lesiones externas",
  "Problemas y malestares estomacales",
  "Dolor corporal y de las articulaciones",
  "Problemas hepaticos y/o biliares",
  "Fiebre y resfriado",
  "Problemas menstruales",
  "Dolores de cabeza",
  "Salud mental",
  "Enfermedades crónicas",
  
];

const DrawerComponent = ({ isOpen, onClose, setDolencia}) => {

  const handleClick = (newDolencia) => {
    // Funcionalidad 1: Realiza la primera acción
    setDolencia(newDolencia)
  
    // Funcionalidad 2: Realiza la segunda acción
    onClose()
  };
  
  return (
    //tamaño del drawer: xs, sm, md, lg, xl, full.

    <Drawer size="md" isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader style={{ fontSize: '40px' }} >Selecciona tipo de dolencia</DrawerHeader>
        <DrawerBody className="drawer-text">
        <Stack spacing={4} align={"flex-start"}>
          <CustomButton onClick={() => handleClick("None")}> Mostrar todas</CustomButton>
          {dolencias.map((dolencia, index) => (
            <CustomButton key={index} onClick={() => handleClick(dolencia)} >
              {dolencia}
            </CustomButton>
          ))}
        </Stack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerComponent;
