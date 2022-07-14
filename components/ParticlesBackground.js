import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesBackground() {
  const particlesInit = async (main) => {
    // console.log(main);
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    // console.log(container);
  };

  return (
    <Particles
      id="tsparticles"
      className="particles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: "#EFEFEF",
          position: "center",
          repeat: "no-repeat",
        },
        fullScreen: {
          enable: true,
          zIndex: -1
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 0,
            },
            repulse: {
              distance: 20,
              duration: 0.1,
            },
          },
        },
        particles: {
          color: {
            value: "#fff",
          },
          links: {
            color: "#bebebe",
            distance: 250,
            enable: true,
            opacity: 0.6,
            width: 2,
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
            random: false,
            speed: 0.3,
            straight: true,
          },
          number: {
            density: {
              enable: true,
              area: 1000,
            },
            value: 90,
          },
          opacity: {
            value: 0.7,
          },
          shape: {
            type: "square",
          },
          size: {
            value: { min: 1, max: 10 },
          },
        },
        detectRetina: true,
      }}
    />
  )
}