import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'gta' ])

    const onAddCategory = ( newCategory ) =>{

        if(categories.includes(newCategory) ) return;
        setCategories([newCategory, ...categories]);
        console.log(newCategory);
    };

    console.log(categories)
  return (
    <>
        {/* Titulo */}
        <h1>GifExpertApp</h1>

        {/* Input*/}

        <AddCategory 
          //setCategories={setCategories} --> Enviar del padre al hijo. En el hijo se pasa el prop y se añade. 
          onNewCategory={event => onAddCategory(event) }
        />


      {/* Listado de Gif */}
        {
        categories.map( category => (
            <GifGrid key={category} category={category}/>
          )
        )}
        
    </>
  )
}
