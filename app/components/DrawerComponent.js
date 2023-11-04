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

  Box,
  Stack,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

const CustomButton = ({ children, ...props }) => {
  return (
    <Button variant='link' size='xl' {...props}>
      {children}
    </Button>
  );
};

const DrawerComponent = ({ isOpen, onClose }) => {
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

  return (
    //tamaño del drawer: xs, sm, md, lg, xl, full.
    <Drawer size="md" isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader style={{ fontSize: '35px' }} >Selecciona tipo de dolencia</DrawerHeader>
        <DrawerBody className="drawer-text">
          <Stack spacing={4} align="flex-start">
            {dolencias.map((dolencia, index) => (
              <CustomButton key={index}>
                {dolencia}
              </CustomButton>
            ))}
          </Stack>
        </DrawerBody>
        <DrawerFooter>
          <Button variant="outline" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme="blue">Save</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerComponent;
