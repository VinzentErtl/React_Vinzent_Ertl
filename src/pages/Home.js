import React from 'react'

import TopMenu from '../components/Menu/TopMenu'
import Table from './Table'
import Tabelcomp from '../components/Tabelle/Tabelcomp'
import Place from '../components/Tabelle/Place'
import Position from '../components/Tabelle/Position'
import FullTable from '../components/JAVA/FullTable'
import FullTable2 from '../components/JAVA/FullTable2'



export default function Home() {
  return (
    <div>
        <TopMenu/>
        <Table/>
        <Place/>
        <div className='pl-64 pt-2 pr-64 flex flex-row justify-between'>
        <FullTable/>
        <FullTable2/>
        </div>
    </div>
  )
}
