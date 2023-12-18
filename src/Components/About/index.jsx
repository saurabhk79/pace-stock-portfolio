

const About = () => {
  return (
    <>
      <div style={{backgroundColor : "rgb(233,236,239)"}}>
        <div className="d-flex justify-content-between container py-5">
          <img
            src="shahidabout.png"
            alt="Mohd Shahid Iqbal"
            style={{ width: "375px", height: "375px", borderRadius: "50%" }}
          />
          <div className="text-center">
            <h1 className="display-4 mb-5">About Me</h1>
            <p className="lead">
              My name is Mohd Shahid Iqbal. I&apos;m a post-graduate of 2020
              from Jamia hamdard University at New Delhi with a degree in
              Masters of Computer Application . I&apos;m most passionate about
              giving back to the community, and my goal is to pursue this
              passion within the field of software engineering. In my free time
              I like working on open source projects.
            </p>
            <a href="#" className="btn btn-outline-dark btn-lg">
              Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
