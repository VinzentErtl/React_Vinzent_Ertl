import React from 'react'
import Table from '../../pages/Table'
import TheScore from './TheScore'
import Names from './Names'

export default function Scorer() {
  return (
   <div>
      <TheScore/>
    <div className=' pl-28 pr-28 pt-1 flex flex-row justify-between gap-7'>
    <div className='w-[26rem] border-solid border border-black p-2 flex items-center bg-yellow-500 justify-between flex-row'>
        <h1>Platz</h1>
        <h2>Name</h2>
        <h3>Toranzahl</h3>
        </div>
  <div className='w-[26rem] border-solid border border-black p-2 flex items-center bg-yellow-500 justify-between flex-row'>
     <h1>Platz</h1>
        <h2>Name</h2>
        <h3>Toranzahl</h3>
  </div>
  <div className='w-[26rem] border-solid border border-black p-2 flex items-center bg-yellow-500 justify-between flex-row'>
     <h1>Platz</h1>
        <h2>Name</h2>
        <h3>Toranzahl</h3>
  </div>
</div>
<Names/>
<Names/>
<Names/>
<Names/>
<Names/>
<Names/>
<Names/>
<Names/>
<Names/>
<Names/>
</div>
)
 
}
