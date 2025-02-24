import React, { useState } from "react";
import Card from "./card";
import { webProjects } from "../model/webProjects";
import { mobileProjects } from "../model/mobileProjects";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("mobile");
  const [isAnimating, setIsAnimating] = useState(false);

  // Asigna los proyectos según la pestaña activa
  const projects = activeTab === "web" ? webProjects : mobileProjects;

  // Maneja la transición de animación
  const handleTabChange = (tab: string) => {
    if (activeTab !== tab) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveTab(tab);
        setIsAnimating(false);
      }, 300); // La duración debe coincidir con la animación en Tailwind
    }
  };

  return (
    <section id="3">
      <h2 className="text-center text-xl py-4">Proyectos</h2>
      <p className="text-center">
        En esta sección, encontrarás mis proyectos
        universitarios y personales. Cada proyecto incluye una breve descripción
        y un enlace directo a su repositorio de GitHub, donde podrás explorar el
        código. Algunos proyectos también están desplegados para una experiencia
        interactiva.
      </p>

      <div className="flex justify-center">
        <div className="flex justify-center w-[416px] max-md:w-full max-md:px-1 space-x-8 my-4 bg-violet-500 rounded-xl py-2">
          <button
            onClick={() => handleTabChange("web")}
            className={`px-4 py-2 w-[163px] max-md:w-2/4 rounded-xl transition-all ease-in-out duration-300 ${
              activeTab === "web"
                ? "bg-[#6D44CE] shadow-inner text-white transform scale-95"
                : "bg-[#5727C7] shadow-lg text-white"
            }`}
          >
            WEB
          </button>
          <button
            onClick={() => handleTabChange("mobile")}
            className={`px-4 py-2 w-[163px] max-md:w-2/4 rounded-xl transition-all ease-in-out duration-300 ${
              activeTab === "mobile"
                ? "bg-[#6D44CE] shadow-inner text-white transform scale-95"
                : "bg-[#5727C7] shadow-lg text-white"
            }`}
          >
            MOBILE
          </button>
        </div>
      </div>
      <div
        className={`flex gap-3 flex-wrap justify-center mt-5 transition-opacity duration-300 ${
          isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
        }`}
      >
        {projects.map((project, index) => (
          <Card
            key={index}
            image={project.image}
            title={project.title}
            text={project.text}
            tecnologias={project.tecnologias}
            repositorios={project.repositorios}
            imageRepo={project.imageRepo}
            web={project.web}
            imageWeb={project.imageWeb}
          />
        ))}
      </div>
    </section>
  );
};

export default Tabs;
