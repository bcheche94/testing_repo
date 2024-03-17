import React, {useState} from 'react'


import axios from 'axios'
import {useNavigate} from 'react-router-dom'



const New_Page_Main_Func = () => {

  const [xuiname,setXuiname] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate()

  const Handle_Save_Item = () => {
    const data = {
      xuiname,
      email,
      password
    }
    setLoading(true)
    axios
    .post('/api/makenewitem', data)
    .then(() => {
      setLoading(false)
      navigate('/')

    })
    .catch(error => {
      setLoading(false)
      alert('An error has occured! Please check console output!')
      console.log(error)
    })

  }

  return (
    <div className='p-4'>

      <h1 className='text-3xl my-4'> Create Item </h1>

      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>

        <div className='my-4'>

          <label className='text-xl mr-4 text-gray-500'>Xuiname</label>

          <input className='border-2 border-gray-500 px-4 py-2 w-full'
          onChange={(e) => setXuiname(e.target.value)}
          value={xuiname}
          type="text" 
          />

        </div>

        <div className='my-4'>

          <label className='text-xl mr-4 text-gray-500'>Email</label>

          <input className='border-2 border-gray-500 px-4 py-2 w-full'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="text" 
          />

        </div>

        <div className='my-4'>

          <label className='text-xl mr-4 text-gray-500'>Password</label>

          <input className='border-2 border-gray-500 px-4 py-2 w-full'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="text" 
          />

        </div>

        <button onClick={Handle_Save_Item} className='p-2 bg-sky-300 m-8'>Save</button>

      </div>

    </div>
  )
}

export default New_Page_Main_Func