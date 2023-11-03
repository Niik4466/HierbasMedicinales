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
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";


const DrawerComponent = ({ isOpen, onClose }) => {
  return (
    //tamaño del drawer: xs, sm, md, lg, xl, full.
    <Drawer size="md" isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader style={{ fontSize: '35px' }} >Selecciona tipo de dolencia</DrawerHeader>
        <DrawerBody className="drawer-text">
          <p > Problemas renales y de las vias urinarias </p>
          <p > Afecciones a la piel y lesiones externas </p>
          <p > Problemas y malestares estomacales </p>
          <p > Dolor corporal y de las articulaciones </p>
          <p > Problemas hepaticos y/o biliares </p>
          <p > Fiebre y resfriado </p>
          <p > Problemas menstruales </p>
          <p > Dolores de cabeza </p>
          <p > Salud mental </p>
          <p > Enfermedades crónicas </p>
          <p > </p>
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
