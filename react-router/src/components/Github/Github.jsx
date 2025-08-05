import React from 'react'
import { useEffect } from 'react'
import {useLoaderData} from 'react-router-dom'

function Github() {
  // use hook
  const data = useLoaderData()
  // const [data, setData] = React.useState([])
  // const API = "https://api.github.com/users/hiteshchoudhary"
  // useEffect(() => {
  //   fetch(API)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log(data);
  //     setData(data)
      
  //   })
  // }, [])

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github followers: {data.followers}
      <img src={data.avatar_url} width={300} alt=""></img>
      </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/hiteshchoudhary")
  return response.json()
}