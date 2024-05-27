import React from 'react'
import Base from '../components/Base'
import Row from '../components/Row'
import requests from '../Request'
const Home = () => {
  return (
    <div>
      <Base/>
      <Row rowID='1' title="Popular" fetchURL={requests.requestPopular}/>
      <Row rowID='2' title="Up Coming" fetchURL={requests.requestUpcoming}/>
      <Row rowID='3' title="Top Rated" fetchURL={requests.requestTopRated}/>
      <Row rowID='4' title="Trending" fetchURL={requests.requestTrending}/>
      <Row rowID='5' title="Horror" fetchURL={requests.requestHorror}/>
    </div>
  )
}

export default Home
