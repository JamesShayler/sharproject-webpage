import './App.css'

function App() {
  return (
    <>
      <section id="welcome">
        <img
          src="https://cdn.discordapp.com/avatars/645190447949676544/67e7ef40bf6072aea67512939f35e558.webp"
          alt="Profile picture"
          className="profile-pic"
        />
        <h1>Welcome to my personal webpage!</h1>
        <p>
          This is a place where I share my projects, thoughts, and anything else
          I find interesting. Feel free to explore and get in touch!
        </p>
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
              <a href="https://github.com/JamesShayler" target="_blank">
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
              <a href="" target="_blank">
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
              <a href="https://www.youtube.com/@sharrr-r" target="_blank">
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
