import React from "react";

const Card = ({
  title,
  text,
  image,
  tecnologias,
  repositorios,
  imageRepo,
  web,
  imageWeb,
}) => {
  return (
    <div className="border w-2/5 rounded-lg hover:bg-black hover:bg-opacity-5 hover:border-cyan-400">
      <img
        src={image}
        alt="img"
        className="object-cover w-full h-96 rounded-t-lg"
      />
      <h2 className="place-self-center text-xl pt-2">{title}</h2>
      <p className="p-2">{text}</p>

      <div className="flex justify-evenly p-4">
        {/* Tecnologías opcionales */}
        {tecnologias &&
          tecnologias.map(
            (tecnologia, index) =>
              tecnologia && (
                <img
                  key={index}
                  src={tecnologia}
                  alt="Tecnología"
                  className="h-8"
                />
              )
          )}
      </div>
      <div className="flex justify-evenly pb-4">
        {/* Enlace de repositorios, opcionales */}
        {repositorios &&
          repositorios.map((repo, index) => (
            <a
              key={index}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center space-y-1 hover:text-blue-500 hover:scale-95" // Cambio a flex-col para alinear verticalmente
            >
              {repo.image && (
                <img src={repo.image} alt={repo.name} className="h-8" />
              )}
              <span>{repo.name}</span>{" "}
              {/* El nombre ahora estará debajo de la imagen */}
            </a>
          ))}

        {/* Enlace web, opcional */}
        {web && (
          <a href={web} target="_blank" rel="noopener noreferrer">
            {imageWeb ? (
              <img src={imageWeb} alt="Web" className="h-8" />
            ) : (
              <span>Web</span>
            )}
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;
