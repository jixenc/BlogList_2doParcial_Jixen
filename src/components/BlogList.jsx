import { useState } from 'react'; // Importamos `useState`, que es un hook para manejar el estado dentro del componente.
import './BlogList.css'; // Importamos el archivo CSS con los estilos específicos para este componente.

// Definición del componente BlogList.
const BlogList = () => {
  // Creamos un estado llamado `blogs` con `useState`. Inicialmente es un arreglo vacío.
  // `blogs` almacenará la lista de artículos que obtendremos desde la API.
  // `setBlogs` es la función que usaremos para actualizar la lista.
  const [blogs, setBlogs] = useState([]);

  // Función que se encarga de obtener datos desde la API.
  const handleFetchBlogs = () => {
    // Usamos `fetch` para hacer una solicitud GET a la URL de la API '/api/blog'.
    // NOTA: Esta URL deberá ser configurada correctamente, podría requerir ajustes en `vite.config.js` para apuntar al API correcto.
    fetch('/api/blog')
      .then(response => response.json()) // Convertimos la respuesta en un JSON.
      .then(data => setBlogs(data)) // Actualizamos el estado `blogs` con los datos recibidos.
      .catch(error => console.error('Error al obtener los datos:', error)); // Capturamos cualquier error y lo mostramos en la consola.
  };

  // Función para limpiar la lista de blogs mostrada.
  // Al llamarla, el estado `blogs` se reinicia a un arreglo vacío, dejando la tabla vacía.
  const handleClearBlogs = () => {
    setBlogs([]);
  };

  // Renderizado del componente.
  return (
    <div className="blog-container"> {/* Contenedor principal de todo el contenido del componente. */}
      {/* Tabla que muestra los encabezados y la lista de blogs */}
      <div className="table">
        {/* Encabezado de la tabla */}
        <div className="table-header">
          <div className="column-header">Id</div> {/* Columna del encabezado: Id del blog */}
          <div className="column-header">Título</div> {/* Columna del encabezado: Título del blog */}
          <div className="column-header">Autor</div> {/* Columna del encabezado: Autor del blog */}
          <div className="column-header">Categoría</div> {/* Columna del encabezado: Categoría del blog */}
        </div>
        {/* Aquí recorremos la lista de `blogs` y generamos una fila para cada blog */}
        {blogs.map((blog) => (
          <div key={blog.id} className="table-row"> {/* Cada blog se representa como una fila en la tabla */}
            <div className="table-cell">{blog.id}</div> {/* Celda para mostrar el Id del blog */}
            <div className="table-cell">{blog.title}</div> {/* Celda para mostrar el título del blog */}
            <div className="table-cell">{blog.author}</div> {/* Celda para mostrar el autor del blog */}
            <div className="table-cell">{blog.category}</div> {/* Celda para mostrar la categoría del blog */}
          </div>
        ))}
      </div>
      
      {/* Contenedor de botones para interactuar con la API */}
      <div className="button-container">
        {/* Botón para consultar la API y traer los datos */}
        <button className="consult-button" onClick={handleFetchBlogs}>Consultar</button>
        
        {/* Botón para limpiar los datos mostrados en la tabla */}
        <button className="clear-button" onClick={handleClearBlogs}>Limpiar</button>
      </div>
    </div>
  );
};

export default BlogList;
