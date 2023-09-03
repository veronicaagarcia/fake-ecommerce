import { useContext, useState, useRef } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { CartContext } from '../../Context'
import Layout from "../../Components/Layout"
function SignIn () {
  const context = useContext(CartContext)
  const [view, setView] = useState('userInfo')

  const account = localStorage.getItem('account')
  const parsedAccount = JSON.parse(account)

  const form = useRef(null)
 
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
  const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState

  const signIn = () => {
    const stringifySignOut = JSON.stringify(false)
    localStorage.setItem('signOut', stringifySignOut)
    context.setSignOut(false)
        
    return <Navigate replace to={'/'} />
  }

  const createAccount = () => {
    const formData = new FormData(form.current)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password')
    }
    
    const stringifyAccount = JSON.stringify(data)
    localStorage.setItem('account', stringifyAccount)
    context.setAccount(data)
          
    signIn()
	}


  const renderLogIn = () => {
    return (
    <div className='flex flex-col w-80'>
      <p>
        <span className='font-bold text-dm'>Email: </span>
        <span>{parsedAccount?.email}</span>
      </p>
      <p>
        <span className='font-bold text-dm'>Password: </span>
        <span>{parsedAccount?.password}</span>
      </p>
      <Link to="/">
        <button
          className='bg-cyan-400 disabled:bg-cyan-400 text-white w-full rounded-lg py-3 mt-4 mb-2'
          disabled={!hasUserAnAccount}
          onClick={() => signIn()}>
          Log in
        </button>
      </Link>
      <div className='text-center'>
        <a className='font-light text-xs underline underline-offset-4' href='/'>Forgot my password</a>
      </div>
      <button
        className='border border-cyan-400 disabled:text-cyan-600 disabled:border-cyan-600 rounded-lg mt-6 py-3'
        onClick={() => setView('createUserInfo')}
        disabled={hasUserAnAccount}>
        Sign up
      </button>
    </div>
    )
  }
  const renderCreateUserInfo = () => {
    return (
    <form ref={form} className='flex flex-col gap-4 w-80'>
      <div className='flex flex-col gap-1'>
        <label htmlFor="name" className='font-light text-sm'>Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          defaultValue={parsedAccount?.name}
          placeholder="Name"
          className='rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black focus:outline-none py-2 px-4'
        />
      </div>
      <div className='flex flex-col gap-1'>
        <label htmlFor="email" className='font-light text-sm'>Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            defaultValue={parsedAccount?.email}
            placeholder="name@email.com"
            className='rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black focus:outline-none py-2 px-4'
          />
      </div>
      <div className='flex flex-col gap-1'>
        <label htmlFor="password" className='font-light text-sm'>Password:</label>
        <input
          type="text"
          id="password"
          name="password"
          defaultValue={parsedAccount?.password}
          placeholder="******"
          className='rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black focus:outline-none py-2 px-4'
        />
      </div>
      <Link to="/">
        <button
          className='bg-cyan-400 text-white w-full rounded-lg py-3'
          onClick={() => createAccount()}>
          Create
        </button>
      </Link>
    </form>
    )
  }
    
  const renderView = () => view === 'createUserInfo' ? renderCreateUserInfo() : renderLogIn()
    
  return (
    <Layout>
      <h1 className="font-medium mt-3 text-lg mb-10">Sign In</h1>
      {renderView()}
    </Layout>
  )
}

export default SignIn