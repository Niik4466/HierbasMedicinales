// https://nextjs.org/docs/app/api-reference
// https://stackoverflow.com/questions/76209343/next-13-4-where-is-the-api-folder
import { NextResponse } from "next/server";

export const miArreglo = [
  {
    foto: "",
    planta: "Abedul",
    cientifico: "Betula Pendula Roth",
    informacion:"",
    dolencia: "",
  },
  {
    foto: "",
    planta: "",
    cientifico: "",
    informacion:"",
    dolencia: "",
  },
  {
    foto: "",
    planta: "",
    cientifico: "",
    informacion:"",
    dolencia: "",
  },
  {
    foto: "",
    planta: "",
    cientifico: "",
    informacion:"",
    dolencia: "",
  },
  {
    foto: "",
    planta: "",
    cientifico: "",
    informacion:"",
    dolencia: "",
  },
];

// Y la manejamos con el método GET, por ruta sería en (local): http://localhost:3000/api/ejemplo-1
// Al ser relativo, se hace un fetch a /api/ejemplo-1
// Donde '/api/ejemplo' es la ruta en la que se encuentra este archivo

export async function GET() {
  return new NextResponse.json(miArreglo);
}
