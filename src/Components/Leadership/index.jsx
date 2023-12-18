const Leadership = () => {
  return (
    <>
      <div className="container">
        <h1 className="display-4 mb-5 text-center"> Leadership</h1>
        <div className="d-flex justify-content-between">
          <p className="lead w-50">
            As a React developer with leadership experience, I bring technical
            expertise, project management skills, and strong communication
            abilities to the table. I have a proven track record of building
            large-scale applications, optimizing code for performance, and
            implementing best practices. Additionally, I have experience leading
            teams and projects, creating and maintaining project plans, managing
            timelines and budgets, and ensuring timely delivery of high-quality
            work. I excel at communicating effectively with team members,
            stakeholders, and clients, both verbally and in writing, and am a
            skilled listener who can provide clear and constructive feedback. I
            am also passionate about mentoring and training other developers to
            help them develop their skills and achieve their goals. With my
            ability to solve complex technical problems and think creatively, I
            am always up-to-date with the latest developments in React and
            related technologies, and am able to innovate and inspire a
            positive, collaborative work environment.
          </p>
          <Carousel />
        </div>
      </div>
    </>
  );
};

export default Leadership;

const Carousel = () => {
  const carouselData = [
    {
      image: "leadership1.png",
      alternate: "leadership1",
    },
    {
      image: "leadership2.png",
      alternate: "leadership2",
    },
    {
      image: "leadership3.png",
      alternate: "leadership3",
    },
    {
      image: "leadership4.png",
      alternate: "leadership4",
    },
    {
      image: "leadership5.png",
      alternate: "leadership5",
    },
    {
      image: "leadership6.png",
      alternate: "leadership6",
    },
    {
      image: "leadership7.png",
      alternate: "leadership7",
    },
    {
      image: "leadership8.png",
      alternate: "leadership8",
    },
    {
      image: "leadership9.png",
      alternate: "leadership9",
    },
    {
      image: "leadership.png",
      alternate: "leadership",
    },
  ];
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        {carouselData.map((ele, idx) => {
          return (
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={idx}
              className={idx == 0 ? "active" : ""}
              aria-current="true"
              aria-label={`Slide ${idx + 1}`}
              key={idx}
            ></button>
          );
        })}
      </div>
      <div className="carousel-inner">
        {carouselData.map((ele, idx) => {
          return (
            <div
              className={`carousel-item ${idx == 0 ? "active" : ""}`}
              key={idx}
            >
              <img
                src={ele.image}
                className="d-block w-100"
                alt={ele.alternate}
                height={350}
              />
            </div>
          );
        })}
        {/* <div className="carousel-item active">
          <img src="..." className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="..." className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="..." className="d-block w-100" alt="..." />
        </div> */}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
