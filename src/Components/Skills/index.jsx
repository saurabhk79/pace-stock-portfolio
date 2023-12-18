const Skills = () => {
  const technicalContentData = [
    {
      title: "React",
      percentage: 90,
    },
    {
      title: "HTML/CSS",
      percentage: 60,
    },
    {
      title: "Javascript",
      percentage: 90,
    },
    {
      title: "Typescript",
      percentage: 80,
    },
    {
      title: "Data Structures",
      percentage: 70,
    },
    {
      title: "SQL",
      percentage: 75,
    },
  ];

  const softContentData = [
    {
      title: "Goal-Oriented",
      percentage: 80,
    },
    {
      title: "Problem Solving",
      percentage: 75,
    },
    {
      title: "Collaboration",
      percentage: 90,
    },
    {
      title: "Empathy",
      percentage: 90,
    },
    {
      title: "Empathy",
      percentage: 70,
    },
    {
      title: "Organization",
      percentage: 70,
    },
    {
      title: "Adaptability",
      percentage: 85,
    },
    {
      title: "Creativity",
      percentage: 90,
    },
  ];
  return (
    <>
      <div className="container">
        <h1 className="display-4 text-center">Skills</h1>

        <ul className="nav nav-tabs nav-fill">
          <li className="nav-item ">
            <a
              className="nav-link active"
              aria-current="page"
              data-bs-toggle="tab"
              data-bs-target="#content1"
            >
              Technical Skills
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-bs-toggle="tab"
              data-bs-target="#content2"
            >
              Soft Skills
            </a>
          </li>
        </ul>

        <div className="tab-content py-4">
          <div id="content1" className="tab-pane fade show active grid">
            {technicalContentData.map((ele, idx) => {
              return (
                <div key={idx} className="col-12 col-md-6">
                  <p className="lead">{ele.title}</p>
                  <div
                    className="progress"
                    role="progressbar"
                    aria-label="Basic example"
                    aria-valuenow={ele.percentage}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div
                      className="progress-bar"
                      style={{
                        width: `${ele.percentage}%`,
                      }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
          <div id="content2" className="tab-pane fade grid">
            {softContentData.map((ele, idx) => {
              return (
                <div key={idx} className="col-12 col-md-6">
                  <p className="lead">{ele.title}</p>
                  <div
                    className="progress"
                    role="progressbar"
                    aria-label="Basic example"
                    aria-valuenow={ele.percentage}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div
                      className="progress-bar"
                      style={{
                        width: `${ele.percentage}%`,
                      }}
                    ></div>
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

export default Skills;

// Loader here
{
  /* <div
  class="progress"
  role="progressbar"
  aria-label="Basic example"
  aria-valuenow="50"
  aria-valuemin="0"
  aria-valuemax="100"
>
  <div class="progress-bar" style="width: 50%"></div>
</div>; */
}
