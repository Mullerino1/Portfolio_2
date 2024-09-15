type emailProps ={
  email: string
}

export default function Contact({props: emailProps}){
  const {email = "email"} = props
  return (
    <div>
      <Contact email={email} />
    </div>
  )
}