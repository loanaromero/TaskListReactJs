// Importa la librería React y los iconos Sun y Moon desde archivos locales.
import React from "react";
import Sun from "./Sun.svg";
import Moon from "./Moon.svg";
// Importa el archivo de estilos DarkMode.css.
import "./DarkMode.css";

// Crea un componente funcional llamado DarkMode.
const DarkMode = () => {
  // Función para establecer el tema oscuro.
  const setDarkMode = () => {
    // Selecciona el elemento del cuerpo (body) y le asigna el atributo "data-theme" con el valor "dark".
    document.querySelector("body").setAttribute("data-theme", "dark");
  };
  // Función para establecer el tema claro.
  const setLightMode = () => {
    // Selecciona el elemento del cuerpo (body) y le asigna el atributo "data-theme" con el valor "light".
    document.querySelector("body").setAttribute("data-theme", "light");
  };

  // Función para alternar entre temas oscuro y claro.
  const toggleTheme = (e) => {
    // Verifica si la casilla de verificación está marcada.
    if (e.target.checked) setDarkMode();
    // Si está marcada, llama a la función setDarkMode para establecer el tema oscuro.
    else setLightMode();
    // Si no está marcada, llama a la función setLightMode para establecer el tema claro.
  };

  return (
    <div className="dark_mode">
      {/* Casilla de verificación para activar/desactivar el modo oscuro. */}
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggleTheme}
      />
      {/* Etiqueta asociada a la casilla de verificación con imágenes de sol y luna. */}
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <img src={Sun} alt="Sun" className="sun" />
        <img src={Moon} alt="Moon" className="moon" />
      </label>
    </div>
  );
};

export default DarkMode;