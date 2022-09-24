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
        background: {
          image: "linear-gradient(#0D1821 50%, #EFEFEF 100%)",
          position: "center",
          repeat: "no-repeat",
        },
        fullScreen: {
          enable: false,
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: false,
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
              distance: 30,
              duration: 0.5,
            },
          },
        },
        particles: {
          color: {
            value: "#ccc",
          },
          links: {
            color: "#cacaca",
            distance: 250,
            enable: true,
            opacity: 0.3,
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
            speed: 0.2,
            straight: true,
          },
          number: {
            density: {
              enable: true,
              area: 1000,
            },
            value: 70,
          },
          opacity: {
            value: 1,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min:0, max: 0 },
          },
        },
        detectRetina: true,
      }}
    />
  )
}