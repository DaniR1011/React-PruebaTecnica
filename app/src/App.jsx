import { NavLink, Outlet } from 'react-router-dom'
import facebook from './assets/facebook.png'
import twitter from './assets/twitter (1).png'
import instagram from './assets/instagram.png'
import appstore from './assets/appstore.png'
import playstore from './assets/playstore.png'
import microsoft from './assets/microsoft.png'

function App() {

  return (
    <div className="App">
      <nav className='nav'>
        <h1>DEMO Streaming</h1>
      <div className='textNav'>
        <button className='login'>Log in</button>
        <button className='freeTrial'>Start your free trial</button>
      </div>
      </nav>
      <main>
        <Outlet />
      </main>
      <footer>
      <div className='footer'>
        <p> Home | Terms and Conditions | Privacy Policy | Collection Statement | Help | Manage Account</p>
        <p>Copyright © 2016 DEMO Streaming. All Rights Reserved.</p>
      <div className='pictures'>
      <div className='aplications'>
        <img src={facebook} alt="logo facebook" />
        <img src={twitter} alt="logo twitter" />
        <img src={instagram} alt="logo instagram" />
        </div>
        <div className='store'>
        <img src={playstore} alt="logo playstore" />
        <img src={appstore} alt="logo appstore" />
        <img src={microsoft} alt="logo microsoft" />
        </div>
      </div>
      </div>
      </footer>
    </div>
  )
}

export default App
