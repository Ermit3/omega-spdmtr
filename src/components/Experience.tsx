import { Backdrop, Environment, Float, OrbitControls, Ring, Scroll, ScrollControls, Sparkles } from "@react-three/drei";
import baffle from 'baffle';
import { Suspense, useEffect } from "react";

// Composents
import { Cube } from "./cubes/cube";
import { environment } from "./environment/environment";
import { Loading } from "./Loading/loading";
import { OmegaSpeedmaster } from "./omega/omege-speedmaster";

export const Experience = () => {
  useEffect(() => {
    const target = baffle('.title')
    target.set({
      characters: '░O░M░E░G░A░S░P░E░E░D░M░A░S░T░E░R',
      speed: 50
    })
    target.start()
    target.reveal(1000, 1000)
  })

  return (
    <>
      {/* <color attach="background" args={["#ffffff"]} /> */}
      {/* <OrbitControls /> */}

      <Suspense fallback={<Loading />}>
        <ambientLight intensity={0.2} />
        <spotLight position={[0, 25, 0]} angle={1.3} penumbra={1} castShadow intensity={2} shadow-bias={-0.0001} />

        <Environment
          background={false}
          preset="city"
        />

        <ScrollControls pages={4} damping={0.2} horizontal>
          {/* Canvas contents in here will *not* scroll, but receive useScroll! */}

          <OmegaSpeedmaster scale={[100, 100, 100]} position={[-4, -9, 0]} rotation={[-2.5, 3, 0]} />
          <Sparkles size={2} color={"#fff"} scale={[10, 10, 10]} />
          <Backdrop
            receiveShadow
            floor={20.5} // Stretches the floor segment, 0.25 by default
            segments={100} // Mesh-resolution, 20 by default
            scale={[50, 50, 10]}
            position={[4, -10, -5]}
          >
            <meshStandardMaterial color="#0a1a1f" />
          </Backdrop>
          <Float
            speed={4} // Animation speed, defaults to 1
            rotationIntensity={0.5} // XYZ rotation intensity, defaults to 1
            floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
            floatingRange={[1, 1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
          >
            <Ring scale={3.5} position-z={-2.5} position-y={-1} args={[0, 0.95, 60]}>
              <meshStandardMaterial color="#2a3a3f" />
            </Ring>
          </Float>


          <Scroll>
            {/* Canvas contents in here will scroll along */}
          </Scroll>
          <Scroll html style={{ width: '300%' }}>
            <h1
              className='title'
              style={{ color: '#cdcbca', position: 'absolute', top: `65vh`, left: '50vw', fontSize: '12em', transform: `translate(-50%,-50%)` }}>
              OMEGA SPEEDMASTER
            </h1>

            <div className='row' style={{ position: 'absolute', left: `100vw`, top: `4vh` }}>
              <h2>Be a Man of the Future.</h2>
              <p style={{ maxWidth: '400px' }}>
                Featuring a sleek, metallic design inspired by advanced technology, this aftershave bottle is as stylish as it is functional. But it's not just a pretty face - inside, you'll find a nourishing and protective aftershave formula that will leave your skin feeling refreshed and hydrated.
              </p>
              <button>Read more</button>
            </div>

            <div className='row' style={{ position: 'absolute', left: `200vw`, top: `4vh` }}>
              <div className='col' style={{ position: 'absolute', width: "400px" }}>
                <h2 style={{ maxWidth: "440px" }}>Tech-Savvy Side</h2>
                <p style={{ maxWidth: '440px' }}>Featuring a sleek, metallic design inspired by advanced technology, this aftershave bottle is as stylish as it is functional. But it's not just a pretty face - inside, you'll find a nourishing and protective aftershave formula that will leave your skin feeling refreshed and hydrated.</p>
                <button>Read more</button>
              </div>
            </div>
          </Scroll>
        </ScrollControls>
      </Suspense>


    </>
  );
};