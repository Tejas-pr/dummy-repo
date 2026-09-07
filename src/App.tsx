import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import AuthPage from './AuthPage'; // Import the new AuthPage component
import './App.css'

function App() {
  // State to manage the current view: 'counter' or 'auth'
  const [view, setView] = useState<'counter' | 'auth'>('counter');
  const [count, setCount] = useState(0)

  // Function to switch view to authentication
  const handleAuthClick = () => {
    setView('auth');
  };

  // Function to switch view back to counter
  const handleCounterClick = () => {
    setView('counter');
  };

  return (
    <>
      {view === 'counter' ? (
        // Main Counter View
        <section id="center">
          <div className="hero">
            <img src={heroImg} className="base" width="170" height="179" alt="" />
            <img src={reactLogo} className="framework" alt="React logo" />
            <img src={viteLogo} className="vite" alt="Vite logo" />
          </div >
          <div>
            <h1 className="app-title">Counter App</h1>
            <p>
              Edit <code className="code-snippet">src/App.tsx</code> and save to test <code className="code-snippet">HMR</code>
            </p>
          </div >
          <button
            type="button"
            className="counter"
            onClick={() => setCount((count) => count + 1)}
          >
            Count is {count}
          </button>
          <button
            type="button"
            className="auth-button"
            onClick={handleAuthClick}
          >
            Go to Login
          </button>
        </section>

        <div className="ticks"></div >

        <section id="next-steps">
          <div id="docs">
            <svg className="icon" role="presentation" aria-hidden="true">
              <use href="/icons.svg#documentation-icon"></use>
            </svg>
            <h2>Documentation</h2>
            <p>Your questions, answered</p>
            <ul>
              <li className="nav-item">
                <a href="https://vite.dev/" target="_blank">
                  <img className="logo" src={viteLogo} alt="" />
                  Explore Vite
                </a>
              </li>
              <li className="nav-item">
                <a href="https://react.dev/" target="_blank">
                  <img className="button-icon" src={reactLogo} alt="" />
                  Learn more
                </a>
              </li>
            </ul>
          </div >
          <div id="social">
            <svg className="icon" role="presentation" aria-hidden="true">
              <use href="/icons.svg#social-icon"></use>
            </svg>
            <h2>Connect with us</h2>
            <p>Join the Vite community</p>
            <ul className="social-list">
              <li className="nav-item">
                <a href="https://github.com/vitejs/vite" target="_blank">
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
              <li className="nav-item">
                <a href="https://chat.vite.dev/" target="_blank">
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
              <li className="nav-item">
                <a href="https://x.com/vite_js" target="_blank">
                  <svg
                    className="button-icon"
                    role="presentation"
                    aria-hidden="true"
                  >
                    <use href="/icons.svg#x-icon"></use>
                  </svg>
                  X.com
                </a>
              </li>
              <li className="nav-item">
                <a href="https://bsky.app/profile/vite.dev" target="_blank">
                  <svg
                    className="button-icon"
                    role="presentation"
                    aria-hidden="true"
                  >
                    <use href="/icons.svg#bluesky-icon"></use>
                  </svg>
                  Bluesky
                </a>
              </li>
            </ul>
          </div >
        </section>

        <div className="ticks"></div >
        <section id="spacer"></section>
      ) : (
        // Authentication View
        <AuthPage />
      )}
    </>
  )
}

export default App
