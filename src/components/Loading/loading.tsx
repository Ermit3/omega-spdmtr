import { Html, useProgress } from "@react-three/drei"

export const Loading = () => {
  const { active, progress, errors, item, loaded, total } = useProgress()

  return (
    <>
      <color attach="background" args={["#000000"]} />
      <Html center>
        <h2>
          {progress}% loaded
        </h2>
      </Html>
    </>
  )
}
