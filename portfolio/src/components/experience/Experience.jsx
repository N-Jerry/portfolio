
import React from "react";
import "./experience.css";
import ListExperiences from "./components/listExperiences";

export const Experience = () => {
  return (
    <section id="experience">
      <h5><i>What skills i have</i></h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <ListExperiences />
      </div>
    </section>
  );
};
export default Experience;

