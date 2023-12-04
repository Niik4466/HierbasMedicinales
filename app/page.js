import MainPage from "@/app/MainPage";
// Hacemos la carga de información desde el servidor
const fetchData = async () => {
  const response = await import("@/app/api/hierbas", {
    method: "GET",
  });
  // response es un objeto que tiene muchas propiedades, entre ellas "miArreglo"
  const data = response.miArreglo;
  return data;
};


export default async function getData() {
  const data = await fetchData(); // Esperamos a que la función fetchData termine de ejecutarse
  return (
    <MainPage data={data} />
  );
}