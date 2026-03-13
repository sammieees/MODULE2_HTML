import profile from "../assets/profile.jpg";
import Card from "./Card";
function About() {
return (
    <div className= "container">
        <section class="card">
            <Card title="About Me">
            <img src={profile} alt="Profile" className="about-img" />
            <p>Hi! I'm Samantha Nicole E.Bogo. I'm an IT student who enjoys learning new things and improving skills.</p>
            <p>
                Email:
                <a href="mailto:bogosamanthanicole25@gmail.com">bogosamanthanicole25@gmail.com</a>
                GitHub:
                <a href="https://github.com" target="_blank">github.com</a>
            </p>
            </Card>
        </section>
    </div>
);
}
export default About;