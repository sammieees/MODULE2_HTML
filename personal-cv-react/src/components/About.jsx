import profile from "../assets/profile.jpg";
import Card from "./Card";

function About() {
  return (
    <div className="container">
      <section className="card">
        <Card title="About Me">
          <img src={profile} alt="Profile photo" width="150" />
          <p>
            Hi! I'm Samantha Nicole Bogo. I'm an IT student who enjoys learning new things and improving skills.
          </p>
          <p>
            Email:{" "}
            <a href="mailto:bogosamanthanicole25@gmail.com">
              bogosamanthanicole25@gmail.com
            </a>
            <br />
            GitHub:{" "}
            <a href="https://github.com" target="_blank" rel="noreferrer">
              github.com
            </a>
          </p>
        </Card>
      </section>
    </div>
  );
}

export default About;