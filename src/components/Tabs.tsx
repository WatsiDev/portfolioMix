import React, { useState } from "react";
import Card from "./card.astro";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("web");

  const webProjects = [
    {
      image: "holdemWeb.png",
      title: "Hold´em Marketing",
      text: "Página web desarrollada para Holdem Marketing...",
    },
    {
      image: "bytezone.png",
      title: "ByteZone",
      text: "ByteZone es un proyecto universitario...",
    },
  ];

  const mobileProjects = [
    {
      image: "tasklist.png",
      title: "Tasklist App",
      text: "Una aplicación para gestionar tareas...",
    },
  ];

  const projects = activeTab === "web" ? webProjects : mobileProjects;

  return (
    <section id="3">
      <h2 className="text-center text-xl py-4">Proyectos</h2>
      <p className="text-center">
        En esta sección, encontrarás mis proyectos universitarios y personales...
      </p>
      <div className="flex justify-center space-x-4 my-4">
        <button
          onClick={() => setActiveTab("web")}
          className={`px-4 py-2 rounded ${
            activeTab === "web" ? "bg-purple-600 text-white" : "bg-gray-200"
          }`}
        >
          Web
        </button>
        <button
          onClick={() => setActiveTab("mobile")}
          className={`px-4 py-2 rounded ${
            activeTab === "mobile" ? "bg-purple-600 text-white" : "bg-gray-200"
          }`}
        >
          Móvil
        </button>
      </div>
      <div className="flex gap-3 flex-wrap justify-center mt-5">
        {projects.map((project, index) => (
          <Card
            key={index}
            image={project.image}
            title={project.title}
            text={project.text}
          />
        ))}
      </div>
    </section>
  );
};

export default Tabs;
