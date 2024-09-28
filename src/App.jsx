import BlogList from './components/BlogList'; // Importamos el componente BlogList desde la carpeta de componentes.


function App() {

  return (
    <div className="App">
      <BlogList /> {/* Aquí estamos incluyendo el componente BlogList que muestra la tabla de blogs y los botones */}
    </div>
  );
}

// Exportamos el componente App para poder usarlo en otros archivos, como el archivo de entrada principal (index.js).
export default App;
