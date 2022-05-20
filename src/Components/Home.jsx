import React from 'react'
import { KidsApparels } from '../Apparels/KidsApparels'
import { MensApparels } from '../Apparels/MensApparels'
import { WomensApparels } from '../Apparels/WomensApparels'
import {GiftApparels} from "../Apparels/GiftApparels";
import { FrontCrousel } from './FrontCrousel'

export const Home = () => {
  return (
    <div>
      <FrontCrousel />
      <MensApparels/>
      <hr />
      <WomensApparels/>
      <hr />
      <KidsApparels/>
      <hr />
      <GiftApparels/>
    </div>
  )
}
