import SignIn from 'src/components/sign-in/sign-in.component'
import SignUp from 'src/components/sign-up/sign-up.component'

const SignInAndSignUp = () => (
  <div className="flex flex-col p-5 md:flex-row md:p-20 w-full">
    <SignIn></SignIn>
    <SignUp></SignUp>
  </div>
)

export default SignInAndSignUp
