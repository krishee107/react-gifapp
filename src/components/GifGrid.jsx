import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ( {category}) => {

  const {images, isLoading} = useFetchGifs( category );

  return (
    <>
        <h3>{category}</h3>
        {
          //isLoading ? (<h2 >Cargando...</h2>) : null --> Con ternario
          isLoading && (<h2 >Cargando...</h2>) // Se traduce como: Si isLoading es true... && ejecuta lo siguiente 
        }
        
        <div className="card-grid">
          {
            images.map( (image) =>(
              //<GifItem key={image.id} title={image.title} url={image.url}/> --> Método "normal"
              <GifItem key={image.id} {...image}/> //--> {...object} "esparce" todos los elementos del objeto como prop directamente
            ))
          }
        </div>
        
    </>
  )
}
