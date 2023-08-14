import React, { useEffect } from 'react'
import '../styles/popup.scss'

const Popup = (
  {resetGame, restartGame, closePopup, popupData, resetFunction}
) => {

  const restart = ()=>{
    restartGame()
    closePopup()
  }

  const reset = () => {
    popupData.callThis()
    closePopup();
  };

  useEffect(()=>{
    console.log('resetFunction changed', typeof resetFunction)
  }, [resetFunction])

  return (

    <div className="card">
        <div className="dialog">
          <p>{popupData.message}</p>
        </div>

        <div className="btm">
          {
            popupData.action!=='over'?
              <button id='action' className="btn" onClick={
                popupData.action==='restart'? restart : ()=>{
                  resetFunction();
                  closePopup();
                }
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