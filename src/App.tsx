import './App.css'
import { useState } from 'react'
import explosion from './assets/explosion-boom.gif'

function App() {
  const [spinning, setSpinning] = useState(false)
  const [overlay, setOverlay] = useState(false)
  const [clickCount, setClickCount] = useState(0)

  const handleClick = () => {
    setClickCount(Date.now())
    setSpinning(true)
    setOverlay(true)
    setTimeout(() => {
      setSpinning(false)
      setOverlay(false)
    }, 1600)
  }

  return (
    <>
      <section id="welcome">
        <div className="profile-container">
          <button className='noStyle' onClick={handleClick}>
            <img
              src="pfp.webp"
              alt="Profile picture"
              className={`profile-pic ${spinning ? 'spinning' : ''}`}
            />
          </button>
          {overlay && <img src={explosion + '?t=' + clickCount} alt="Explosion" className="explosion-overlay" />}
        </div>
        <h1>Welcome to my website!</h1>
        <p>
          This is the place where I will display my projects, and anything else I find interesting. Feel free to explore and get in touch!
        </p>
      </section>

      <section id="projects">
        <h2>My projects</h2>
        <p>Here are some of the projects I've worked on:</p>
          <section>
            <a href="https://github.com/JamesShayler/sharproject-webpage" target="_blank" rel="noopener noreferrer">
              <h3>Sharproject (This website)</h3>
              <p>I would say this is self explanatory!</p>
              <img
                src="https://opengraph.githubassets.com/card/JamesShayler/sharproject-webpage"
                alt="project preview"
              />
            </a>
          </section>
      </section>


      <section id="next-steps">
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>My other homes!</h2>
          <p>You can also find me here :0</p>
          <ul>
            <li>
              <a href="https://github.com/JamesShayler" target="_blank" rel="noopener noreferrer">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="" target="_blank" rel="noopener noreferrer">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@sharrr-r" target="_blank" rel="noopener noreferrer">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#yt-icon"></use>
                </svg>
                Youtube
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default App
