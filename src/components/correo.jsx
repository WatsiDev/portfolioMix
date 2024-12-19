import React from "react";

const Correo = () => {
  const copyToClipboard = () => {
    // Copiar el correo al portapapeles
    navigator.clipboard.writeText("jairvazquez604@gmail.com").then(() => {
      alert("Correo copiado al portapapeles!");
    }).catch((error) => {
      console.error("Error al copiar: ", error);
    });
  };

  return (
    <div className="flex items-center">
      <p className="mr-2">jairvazquez604@gmail.com</p>
      <img
        src="copy.svg"
        alt="copy"
        className="cursor-pointer hover:scale-125"
        onClick={copyToClipboard} // Al hacer click, se llama la función
      />
    </div>
  );
};

export default Correo;
