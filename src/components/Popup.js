import React, { useEffect } from 'react'
import '../styles/popup.scss'

const Popup = (
  {restartGame, closePopup, popupData, setPopupData, resetFunction, timer, setTimer, window, turn, setTurn}
) => {

  const restart = ()=>{
    restartGame()
    closePopup()
  }

  const [status, setStatus] = React.useState('')

  useEffect(()=>{
    setStatus(popupData.message.split(' ')[1])
  }, [popupData])

  const reset = () => {
    console.log('Resetting Game!!')
    popupData.callThis()
    closePopup();
    setPopupData(null)
  };

  useEffect(()=>{
    console.log('Timer: ', timer)
  }, [timer])

  const close = () => {

    if(timer===0){
      setTimer(window)
      setTurn(turn==='X'? 'O' : 'X')
    }else{ 
      setTimer(timer-1)
    }
    closePopup();
    setPopupData(null)
  }

  return (

    <div className="card">
        <div className="dialog">
          <p
            style={{
              color: status==='won'? '#4caf50' : status==='lost'? 'red' : '#35363a'
            }}
          >{popupData.message}</p>
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
          style={
            status==='won'?{
              backgroundColor: '#4caf50',
              color: 'white'
            }:
            status==='lost'?{
              backgroundColor: 'red',
              color: 'white'
            }
            :
            {
              backgroundColor: '#35363a',
              color: 'white'
            }
          } 
          onClick={
            (popupData.action==='over')?reset : close
          }>
            CLOSE
          </button>
        </div>
    </div>
  )
}

export default Popup