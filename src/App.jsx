import './App.css'
import TrackerContainer from './components/TrackerContainer'

const App = () => {
  return (
    <div className='App'>
      <div class="header">
        <img class="icon" src="https://i.imgur.com/fuKMQ36.png"/>
        <h1>Community Speedrun Tracker</h1>
      </div>
      <TrackerContainer />
    </div>
  )
}

export default App