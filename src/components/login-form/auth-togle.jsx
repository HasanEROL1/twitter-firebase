

const AuthToggle = ({isSignup, setIsSignup}) => {
  return (
      <p className="mt-5  select-none">
          <span className="text-center text-sm text-gray-500">{isSignup ? "Hesabınız Varsa" : "Hesabınız Yoksa"}</span>
          <span onClick={()=> setIsSignup(!isSignup)}
          className="cursor-pointer ms-2 text-xl text-center text-blue-500 hover:underline">{isSignup ? "Giriş Yapın" : "Kaydolun"}</span>
      </p>
  )
}

export default AuthToggle