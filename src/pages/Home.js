import React from 'react'

import TopMenu from '../components/Menu/TopMenu'
import Table from './Table'
import Tabelcomp from '../components/Tabelle/Tabelcomp'
import Place from '../components/Tabelle/Place'


export default function Home() {
  return (
    <div>
        <TopMenu/>
        <Table/>
        <Place/>
    </div>
  )
}
