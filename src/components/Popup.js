import React from 'react'
import '../styles/popup.scss'

const Popup = (
  {resetGame, restartGame, closePopup, popupData}
) => {

  const restart = ()=>{
    restartGame()
    closePopup()
  }

  const reset = () => {
    popupData.callThis()
    closePopup();
  };

  return (

    <div className="card">
        <div className="dialog">
          <p>{popupData.message}</p>
        </div>

        <div className="btm">
          {
            popupData.action!=='over'?
              <button id='action' className="btn" onClick={
                popupData.action==='restart'? restart : reset
              }>
                {popupData.action.toUpperCase()}
              </button>
            :null
          }
          

          <button id='close' className="btn" 
          onClick={
            (popupData.action==='over')?reset : closePopup
          }>
            CLOSE
          </button>
        </div>
    </div>
  )
}

export default Popup