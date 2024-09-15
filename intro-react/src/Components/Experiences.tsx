

export default function Experiences({props: experienceOne, experienceTwo }) {

  return (
    <div>
      <Experiences description={experienceOne} />
      <Experiences description={experienceTwo} />
    </div>
  )
}