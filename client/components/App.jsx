import React from 'react'

import ErrorMessage from './ErrorMessage'
import LoadSubreddit from './LoadSubreddit'
import SubredditList from './SubredditList'
import WaitIndicator from './WaitIndicator'
import LoadHarryPotter from './LoadHarryPotter'
import HarryPotter from './HarryPotter'

const App = () => (
  <div className='app'>
    <ErrorMessage />
    <LoadSubreddit />
    <WaitIndicator />
    <SubredditList />
    <LoadHarryPotter />
    <HarryPotter />
  </div>
)

export default App
