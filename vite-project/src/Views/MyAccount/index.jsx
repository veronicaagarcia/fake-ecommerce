import { useContext, useState, useRef } from 'react'
import { CartContext } from '../../Context'
import Layout from "../../Components/Layout"

function MyAccount () {

    const context = useContext(CartContext)
    const [view, setView] = useState('userInfo')
    const account = localStorage.getItem('account')
    const parsedAccount = JSON.parse(account)
    const form = useRef(null)

    const editAccount = () => {
    const formData = new FormData(form.current)
	const data = {
        name: formData.get('name'),
		email: formData.get('email'),
		password: formData.get('password')
	}
    const stringifyAccount = JSON.stringify(data)
    localStorage.setItem('account', stringifyAccount)
    context.setAccount(data)
  }

  const renderUserInfo = () => {
    return (
      <div className='flex flex-col w-80 mt-8'>
        <p>
          <span className='font-bold text-md'>Name: </span>
          <span>{parsedAccount?.name}</span>
        </p>
        <p>
          <span className='font-bold text-md'>Email: </span>
          <span>{parsedAccount?.email}</span>
        </p>
        <button
          className='border border-cyan-600 text-cyan-600 rounded-lg mt-6 py-3'
          onClick={() => setView('editUserInfo')}>
          Edit
        </button>
      </div>
    )
  }

  const renderEditUserInfo = () => {
    return (
      <form ref={form} className='flex flex-col gap-4 w-80 mt-8'>
        <div className='flex flex-col gap-1'>
          <label htmlFor="name" className='font-light text-md'>Your name:</label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={parsedAccount.name}
            placeholder="Ana"
            className='rounded-lg text-black/60 border border-black placeholder:font-light placeholder:text-md placeholder:text-black/60 focus:outline-none py-2 px-4'
          />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor="email" className='font-light text-md'>Your email:</label>
          <input
            type="text"
            id="email"
            name="email"
            defaultValue={parsedAccount.email}
            placeholder="ana@email.com"
            className='rounded-lg text-black/60 border border-black placeholder:font-light placeholder:text-md placeholder:text-black/60 focus:outline-none py-2 px-4'
          />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor="password" className='font-light text-md'>Your password:</label>
          <input
            type="text"
            id="password"
            name="password"
            defaultValue={parsedAccount.password}
            placeholder="******"
            className='rounded-lg text-black/60 border border-black placeholder:font-light placeholder:text-md placeholder:text-black/60 focus:outline-none py-2 px-4'
          />
        </div>
        <button
          className='bg-cyan-400 text-white w-full rounded-lg py-3'
          onClick={() => {setView('userInfo'), editAccount()}}>
          Edit
        </button>
      </form>
    )
  }

  const renderView = () => view === 'editUserInfo' ? renderEditUserInfo() : renderUserInfo()

  return (
    <Layout>
      <h1 className="font-medium mt-3 text-lg">My Account</h1>
      {renderView()}
    </Layout>
  )
}

export default MyAccount