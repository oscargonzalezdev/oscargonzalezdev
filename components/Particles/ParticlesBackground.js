import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesBackground() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };
  const particlesLoaded = (container) => {
  };

  return (
    <Particles
      id="tsparticles"
      className="particles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: {
          enable: false,
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: false,
            },
            onHover: {
              enable: false
            },
            resize: false,
          }
        },
        particles: {
          color: {
            value: "#cacaca",
            opacity: 1,
          },
          links: {
            color: "#a7aaaa",
            distance: 200,
            enable: true,
            opacity: 0.4,
            width: 2.2,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true,
            speed: 0.4,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 900,
            },
            value: 70,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min:0.1, max: 2 },
          },
        },
        detectRetina: true,
      }}
    />
  )
}