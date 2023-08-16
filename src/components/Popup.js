import React, { useEffect } from 'react'
import '../styles/popup.scss'

const Popup = (
  {resetGame, restartGame, closePopup, popupData, resetFunction}
) => {

  const restart = ()=>{
    restartGame()
    closePopup()
  }
  
  // @output() output = new EventEmitter<String>();
  // output.emit('Tom')
  //
  // 
  const [status, setStatus] = React.useState('')

  useEffect(()=>{
    setStatus(popupData.message.split(' ')[1])
  }, [popupData])

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
            (popupData.action==='over')?reset : closePopup
          }>
            CLOSE
          </button>
        </div>
    </div>
  )
}

export default Popup