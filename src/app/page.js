import AboutMain from "../../components/About/AboutMain";
import ContactForm from "../../components/Contact/Contact";
import Intro from "../../components/IntroPage/Intro";
import ProjectList from "../../components/Projects/ProjectList";
import Skills from "../../components/Skills/Skills";

export default function Home() {
  return (
    <div>
      <Intro />
      <AboutMain />
      <Skills />
      <ProjectList />
      <ContactForm />
    </div>
  );
}
