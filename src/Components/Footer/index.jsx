import { FaHeart, FaReact } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer style={{backgroundColor : "rgb(233,236,239)"}}>
        <div className="container  py-5 text-center">
          <h1 className="display-4">Get in Touch</h1>
          <p className="lead my-4">
            I&apos;m currently looking for full-time React Developer/Frontend
            Developer opportunities! If you know of any positions available, if
            you have any questions, or if you just want to say hi, please feel
            free to email me at, <a href="mailto:">khansaif59@gmail.com</a>.
          </p>

          <p>
            <span className="fw-bold">
            {"</>"}</span> with <FaHeart /> by &nbsp;
            <span className="badge text-bg-dark">Mohd Shahid Iqbal</span> using &nbsp;
            <FaReact />
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
