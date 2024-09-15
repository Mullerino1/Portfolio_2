type ContactProps = {
  email: string
}

 function Contact(props: ContactProps) {
  return (
      <p>
        {props.email}
      </p>
    
  )
}




// type ExperienceProps = {
//   experienceOne: string,
//   experienceTwo: string
// }

// function Experience(props: ExperienceProps){
//   return (
//     <>
//       {props.experienceOne}
//       {props.experienceTwo}
//     </>
//   )
// }

type HeaderProps = {
  student: string,
  degree: string,
  points: number
}

function Header(props: HeaderProps){
  return (
  <>
    {props.student}
    {props.degree} {props.points} 
  </>

  )
}


function Experiences({ experienceOne, experienceTwo }) {
  return (
    <div>
      <Experience description={experienceOne} />
      <Experience description={experienceTwo} />
    </div>
  )
}



function App() {
  const student = 'Halgeir Geirson'
  const degree = 'Bachelor IT'
  const points = 180
  const experienceOne = 'Figma UI for customer X'
  const experienceTwo = 'Website for customer Y'
  const email = 'student@hiof.no'

  return (
    <div>
      <Header student={student} degree={degree} points={points} />
      <Experiences experienceOne={experienceOne} experienceTwo={experienceTwo} />
      <Contact email={email} />
    </div>
  )
}

export default App

