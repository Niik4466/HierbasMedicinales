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
  return (
    //tamaño del drawer: xs, sm, md, lg, xl, full.
    <Drawer size="md" isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader style={{ fontSize: '35px' }} >Selecciona tipo de dolencia</DrawerHeader>
        <DrawerBody className="drawer-text">
          <Stack spacing={4} align="flex-start">
            <CustomButton>
              Problemas renales y de las vias urinarias 
            </CustomButton>
            <CustomButton> 
              Afecciones a la piel y lesiones externas 
            </CustomButton>
            <CustomButton >
              Problemas y malestares estomacales
            </CustomButton >
            <CustomButton>
              Dolor corporal y de las articulaciones 
            </CustomButton>
            <CustomButton>
              Problemas hepaticos y/o biliares 
            </CustomButton>
            <CustomButton>
              Fiebre y resfriado 
            </CustomButton>
            <CustomButton>
              Problemas menstruales 
            </CustomButton>
            <CustomButton>
              Dolores de cabeza 
            </CustomButton>
            <CustomButton>
              Salud mental 
            </CustomButton>
            <CustomButton>
              Enfermedades crónicas 
            </CustomButton>
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
