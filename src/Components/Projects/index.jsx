import { FaGithub } from "react-icons/fa6";

import { useEffect } from "react";
import { useState } from "react";

const Projects = () => {
  // https://api.github.com/users/Mohd-shahid-iqbal/repos?sort=updated&direction=desc
  const [projectsObj, setProjectsObj] = useState([]);

  const fetchProjects = async () => {
    const res = await fetch(
      "https://api.github.com/users/Mohd-shahid-iqbal/repos?sort=updated&direction=desc"
    );
    const data = await res.json();

    console.log(data);

    setProjectsObj(data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <>
      <div style={{ backgroundColor: "rgb(233,236,239)" }}>
        <div className="container py-5">
          <h1 className="display-4 text-center mb-5">Recent Projects</h1>

          <div className="grid">
            {projectsObj.map((ele, idx) => {
              const {
                clone_url,
                url,
                name,
                language,
                stargazers_url,
                updated_at,
              } = ele;

              const inputDate = new Date(updated_at);

              const options = {
                year: "numeric",
                month: "long",
                day: "numeric",
              };
              const formattedDate = inputDate.toLocaleDateString(
                "en-US",
                options
              );
              return (
                <div className="card col-12 col-lg-4 mb-3" key={idx}>
                  <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <a
                      href={clone_url}
                      className="btn btn-outline-secondary me-3"
                    >
                      <FaGithub />
                      Clone Project
                    </a>
                    <a href={url} className="btn btn-outline-secondary">
                      <FaGithub /> Repo
                    </a>
                    <hr />
                    <p>Languages : {language || "code yet to be deployed."}</p>
                    <a href={stargazers_url}>
                      <FaGithub /> Stars
                    </a>
                    <span className="text-secondary">
                      Updated on {formattedDate}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
