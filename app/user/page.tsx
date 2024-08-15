'use client'
 
import { useGetAllUser } from '@/lib/fetchers/UserFetcher'
import React from 'react'
 
const User = () => {
  const { data, state, isError, mutate } = useGetAllUser()
 
  if (state) {
    return <>
      LOADING...
    </>
  }
 
  if (isError) {
    return <>
      ENCOUNTERED ERROR!
    </>
  }
 
  if (data) {
    return (
      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
    )
  }
 
  return (
    <>No data</>
  )
}
 
export default User