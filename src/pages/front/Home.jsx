import React from 'react'
import Featured from '../../layouts/Featured'
import Slider from '../../layouts/Slider'
import Intro from '../../layouts/Intro'
import CatagoryButtons from '../../layouts/CatagoryButtons'

const Home = () => {
  return (
    <>
      <Slider />
      <Featured />
      <CatagoryButtons />
      <Intro />
    </>

  )
}

export default Home