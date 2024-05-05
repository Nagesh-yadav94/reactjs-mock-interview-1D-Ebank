import Header from '../Header'
import './index.css'

const Home = () => (
  <div>
    <Header />
    <div className="home-container">
      <h1 className="home-heading">Your Flexibility, Our Excellence</h1>
      <img
        className="digital-card-image"
        alt="digital card"
        src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
      />
    </div>
  </div>
)

export default Home
