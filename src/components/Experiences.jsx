import React from "react";
import { Card } from "primereact/card";

const ExperienceCard = ({ logo, title, position, duration, courses }) => {
  return (
    <Card title={title} subTitle={position} footer={duration}>
      <div>
        <h5>Courses:</h5>
        <ul>
          {courses.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>
      </div>
    </Card>
  );
};

function App() {
  const experienceData = [
    {
      logo: "../assets/ensaj.png",
      title: "Ecole Nationale des sciences appliquées d'El Jadida",
      position: "Professeur d'enseignement supérieur assistant",
      duration: "juin 2019 - aujourd'hui",
      location: "Province d’El Jadida, Morocco",
      courses: [
        "Programmation réseau et JEE",
        "Programmation mobile",
        "Programmation web",
        "Programmation multiplateforme",
      ],
    },
    {
      logo: "https://chemin/vers/logo/emsie.png",
      title: "Ecole Marocaine des Sciences de l'ingénieur",
      position: "Professeur (Temps partiel)",
      duration: "sept. 2011 - aujourd'hui",
      location: "Temps partiel",
      courses: [
        "Java et Java avancé",
        "JEE",
        "Architecture des applications d'entreprises",
        "Programmation mobile",
      ],
    },
    {
      logo: "https://chemin/vers/logo/ofppt.png",
      title: "OFPPT",
      position: "Formateur",
      duration: "oct. 2009 - Juin. 2019 · 10 ans",
      location: "Préfecture de Marrakech, Morocco",
      courses: ["Techniques de développement informatique"],
    },
    {
      logo: "https://chemin/vers/logo/emines.png",
      title:
        "EMINES - School of Industrial Management / Mohammed VI Polytechnic University",
      position: "Professeur (Temps partiel)",
      duration: "sept. 2017 - juil. 2019 · 1 an 11 mois",
      location: "Temps partiel",
      courses: ["Langage C", "Python", "Merise", "XML", "Web", "UML"],
    },
    {
      logo: "https://chemin/vers/logo/upm.png",
      title: "Université Privée de Marrakech",
      position: "Professeur (Temps partiel)",
      duration: "sept. 2012 - juil. 2016 · 3 ans 11 mois",
      location: "Temps partiel",
      courses: [
        "Patrons de conception",
        "Programmation orientée objet",
        "JEE",
        "UML",
      ],
    },
  ];

  return (
    <section className="section">
      {experienceData.map((experience, index) => (
        <ExperienceCard
          key={index}
          title={experience.title}
          position={experience.position}
          duration={experience.duration}
          courses={experience.courses}
        />
      ))}
    </section>
  );
}