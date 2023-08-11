import React from 'react'
import '../styles/popup.scss'

const Popup = (
  {resetGame, restartGame, closePopup, action}
) => {

  const restart = ()=>{
    restartGame()
    closePopup()
  }
  const reset = ()=>{
    resetGame()
    closePopup()
  }

  return (
    <div className="card">
        <div className="dialog">
          {
            action==='restart'?
              <p>Do you want to Restart?</p>
            :
              <p>Do you want to Reset?</p>
          }
        </div>
        <div className="btm">
          <button id='action' className="btn" onClick={
            action==='restart'? restart : reset
          }>
            {action.toUpperCase()}
          </button>
          <button id='close' className="btn" onClick={closePopup}>CLOSE</button>
        </div>
    </div>
  )
}

export default Popup