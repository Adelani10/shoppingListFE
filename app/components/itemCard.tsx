import { useProjectContext } from '@/context'
import React from 'react'
import { FaPlus } from "react-icons/fa6";

export default function ItemCard({item}: any) {
  const {darkmode} = useProjectContext()
  return (
    <div className={`${!darkmode? "bg-white" : "bg-darkmodeTertiary"} w-36 flex justify-between items-center px-2 py-1 rounded-lg h-10`}>
      <h3 className='text-sm'>{item}</h3>
      <FaPlus className='text-gray-400 h-3' />
    </div>
  )
}
