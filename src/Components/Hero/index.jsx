import {
  FaGithub,
  FaLinkedin,
  FaSquareFacebook,
  FaSquareInstagram,
} from "react-icons/fa6";

const Hero = () => {

  return (
    <>
      <section className="d-flex flex-column align-items-center justify-content-center text-light" id="background">
        <h1 className="display-1">Mohd Shahid Iqbal</h1>
        <p className="lead">
          Passionate about changing the world with technology.
        </p>
        <div className="d-flex gap-2 my-5">
          <a href="">
            <FaGithub size={40} />
          </a>
          <a href="">
            <FaLinkedin size={40} />
          </a>
          <a href="">
            <FaSquareFacebook size={40} />
          </a>
          <a href="">
            <FaSquareInstagram size={40} />
          </a>
        </div>
        <div>
          <button type="button" className="btn btn-outline-light">
            More about me
          </button>
        </div>
      </section>
    </>
  );
};

export default Hero;
