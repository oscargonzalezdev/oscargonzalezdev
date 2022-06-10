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
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: "#000",
          position: "center",
          repeat: "no-repeat",
        },
        fullScreen: {
          zIndex: 0
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
              quantity: 1,
            },
            repulse: {
              distance: 70,
              duration: 0.1,
            },
          },
        },
        particles: {
          color: {
            value: "#cccccc",
          },
          links: {
            color: "#cccccc",
            distance: 200,
            enable: true,
            opacity: 0.5,
            width: 1.5,
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
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 600,
            },
            value: 90,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
  )
}