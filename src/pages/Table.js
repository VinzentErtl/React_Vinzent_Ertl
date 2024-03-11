import React from 'react'
import Tabelcomp from '../components/Tabelle/Tabelcomp'
import Place from '../components/Tabelle/Place'

export default function Table() {
  return (
    <div className='pl-64 pt-24 pr-64 flex flex-row justify-between'>
      <div className='w-[26rem] border-solid border-[0.1rem] border-black p-2 mt-1.5 flex items-center bg-neutral-400'>Meisterschaftsrunde</div>
      <div className='w-[26rem] border-solid border-[0.1rem] border-black p-2 mt-1.5 flex items-center bg-neutral-400'>Relegationsrunde</div>
    </div>
  )
}
   