const Projects = () => {
  const projectsObj = [
    {
      title: "create-react-app-lambda",
      about: "",
      cloneurl: "https://github.com/Mohd-shahid-iqbal/create-react-app-lambda/archive/master.zip",
      repourl: "https://github.com/Mohd-shahid-iqbal/create-react-app-lambda",
      languages: [],
      starslink:
        "https://github.com/Mohd-shahid-iqbal/create-react-app-lambda/stargazers",
      lastUpdated: "December 7, 2023",
    },
  ];

  return (
    <>
      <section>
        <h1>Recent Projects</h1>
        <div className="card" style="width: 18rem;">
          {projectsObj.map((ele) => {
            return (
              <>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                    {ele.title}
                  </h6>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card&apos;s content.
                  </p>
                  <a href="#" className="card-link">
                    Card link
                  </a>
                  <a href="#" className="card-link">
                    Another link
                  </a>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Projects;
