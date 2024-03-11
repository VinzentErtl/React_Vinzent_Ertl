import React from 'react'
import TopMenu from '../components/Menu/TopMenu'
import TheScore from '../components/Tabelle/TheScore'
import Score10 from '../components/JAVA/Score10'
import Score20 from '../components/JAVA/Score20'
import Score30 from '../components/JAVA/Score30'


export default function GoalScorer() {
  return (
    <div>
        <TopMenu/>
        <TheScore/>
        <div className='pl-28 pt-2 pr-28 flex flex-row justify-between'>
        <Score10/>
        <Score20/>
        <Score30/>
        </div>
    </div>
  )
}
