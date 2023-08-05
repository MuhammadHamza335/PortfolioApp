import AboutMain from "../../components/About/AboutMain";
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
    </div>
  );
}
