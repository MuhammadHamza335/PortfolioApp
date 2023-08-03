import Typewriter from "typewriter-effect";

const TypeRole = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Frontend Developer",
          "Computer Engineer",
          "Open Source Contributor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
};

export default TypeRole;
