import React, { useEffect, useState } from 'react'
import '../styles/content.scss'
import Popup from './Popup'
import {IoFlagSharp} from 'react-icons/io5'
import {IoMdRefresh} from 'react-icons/io'
import Board from './Board'
import { ImCross } from 'react-icons/im';
import { FaCircle, FaCheckCircle} from 'react-icons/fa';
import {BiSolidAlarm} from 'react-icons/bi'
import {BsGridFill} from 'react-icons/bs'


const Content = () => {

    const [player, setPlayer] = useState('X')
    const [section, setSection] = useState(4)
    const [grid, setGrid] = useState(3)
    const [mode, setMode] = useState('person-duo')
    const [popup, setPopup] = useState(null)
    const [difficulty, setDifficulty] = useState('Easy')
    const [window, setWindow] = useState(30)

    const [reset, setReset] = useState(false)

    // const [resetFunction, setResetFunction] = useState(null)

    // I need to create a usestate for realtime timer binding
    const [timer, setTimer] = useState(window)


    const startGame = ()=>{
        setSection(4)
    }

    // useEffect(()=>{
    //     if(reset){
    //         setReset(false)
    //     }
    // }, [reset])

    // React.useEffect(()=>{
    //     console.log('Timer Started')
    //     // timerFunction()
    // }, [])

    // This is the timer function
    // React.useEffect(()=>{
    //     if(timer===0){
    //         console.log('Game Over')
    //     }
    //     else{
    //         setTimeout(()=>{
    //             setTimer(timer-1)
    //         }, 1000)
    //     }
    // })

    const timerFunction = ()=>{
        while(timer>0){
            setTimeout(()=>{
                setTimer(timer-1)
                
            }, 1000)
        }
        if(timer===0){
            console.log('Game Over')
        }
    }

    const resetGame = ()=>{
        console.log('Game Reset')
    }

    const closePopup = ()=>{
        console.log('Popup Closed')
        setPopup(null)
    }

    const restartGame = ()=>{
        setSection(1)
        setPlayer('X')
        setGrid(3)
        setMode('person-duo')
        setDifficulty('Easy')
        setWindow(30)
        console.log('Game Restarted')
    }

  return (
    <div className="content">
    {
        section===1?
            <div className='start-card'>
                <div className="start-card__title">
                    <p>Grid Size</p>
                </div>
                <div className="start-card__content">
                    <div className={`start-card__content__sub ${grid===3?'active':'inactive'}`} id='3x3' onClick={()=>setGrid(3)}>
                        <table>
                            <tbody>
                                <tr>
                                    <td/><td/><td/>
                                </tr>
                                <tr>
                                    <td/><td/><td/>
                                </tr>
                                <tr>
                                    <td/><td/><td/>
                                </tr>
                            </tbody>
                        </table>
                        <p className='dialog'>3x3</p>
                    </div>

                    <div className={`start-card__content__sub ${grid===4?'active':'inactive'}`} id='4x4' onClick={()=>setGrid(4)}>
                        <table>
                            <tbody>
                                <tr>
                                    <td/><td/><td/><td/>
                                </tr>
                                <tr>
                                    <td/><td/><td/><td/>
                                </tr>
                                <tr>
                                    <td/><td/><td/><td/>
                                </tr>
                                <tr>
                                    <td/><td/><td/><td/>
                                </tr>
                            </tbody>
                            
                        </table>
                        <p className='dialog'>4x4</p>
                    </div>

                    <div className={`start-card__content__sub ${grid===5?'active':'inactive'}`} id='5x5' onClick={()=>setGrid(5)}>
                        <table>
                            <tbody>
                                <tr>
                                    <td/><td/><td/><td/><td/>
                                </tr>

                                <tr>
                                    <td/><td/><td/><td/><td/>
                                </tr>
                                
                                <tr>
                                    <td/><td/><td/><td/><td/>
                                </tr>
                                
                                <tr>
                                    <td/><td/><td/><td/><td/>
                                </tr>
                                
                                <tr>
                                    <td/><td/><td/><td/><td/>
                                </tr>

                            </tbody>
                        </table>
                        <p className='dialog'>5x5</p>
                    </div>
                </div>
            </div> :

        section===2?
        
            <div className="choose-mode-card">
                <div className="choose-mode-card__title">
                    <p>Player Mode</p>
                </div>

                <div className="choose-mode-card__content">
                    <div className={`choose-mode-card__content__sub ${mode==='person-duo'?'active':'inactive'}`} id='person-duo' onClick={()=>setMode('person-duo')}>
                        <div className="img">
                            <span className="material-symbols-outlined">
                                person
                            </span>
                            <p>v/s</p>
                            <span className="material-symbols-outlined">
                                person
                            </span>

                        </div>
                        <p className='dialog'>Player&nbsp;-&nbsp;Player</p>
                    </div>
                    <div className={`choose-mode-card__content__sub ${mode==='pc-duo'?'active':'inactive'}`} id='pc-duo' onClick={()=>setMode('pc-duo')}>
                        <div className="img">
                            <span className="material-symbols-outlined">
                                person
                            </span>
                            <p>v/s</p>
                            <span className="material-symbols-outlined">
                                robot_2
                            </span>
                        </div>
                        <p className='dialog'>Player&nbsp;-&nbsp;AI</p>
                    </div>
                </div>
                
            </div> :
        
        section===3?
            <div className="choose-side-card">
                <div className="choose-side-card__title">
                    <p>Game Configurations</p>
                </div>

                <div className="choose-side-card__content">
                    <div className="choose-side-card__sub">
                        <div className="choose-side-card__sub__title">
                            <p>Choose Your Side</p>
                        </div>
                    </div>

                    <div className="choose-side-card__sub">

                        <div className="choose-side-card__sub__content"
                            onClick={()=>setPlayer('X')}
                            >
                            <span style={{color:player==='X'?'#ee6352':'#aaa'}}
                            >
                                <ImCross/>
                            </span>
                        </div>

                        <div className="choose-side-card__sub__content"
                            onClick={()=>setPlayer('O')}
                            >
                            <span style={{color:player==='O'?'#59cd90':'#aaa'}}
                            >
                                <FaCircle/>
                            </span>
                        </div>

                    </div>
                </div>

                <div className="choose-side-card__content">
                    <div className="btm-sub">
                        <div className="title">
                            Difficulty
                        </div>
                        <div className="btm-content">
                            <div className="difficulty-card"
                                onClick={()=>setDifficulty('Easy')}
                                style={ {backgroundColor: difficulty==='Easy'?'green':'#aaa'}}
                            >
                                <span>
                                   <FaCheckCircle/> 
                                </span>
                                <p>Easy</p>
                            </div>

                            <div className="difficulty-card"
                                onClick={()=>setDifficulty('Medium')}
                                style={ {backgroundColor: difficulty==='Medium'?'orange':'#aaa'}}
                            >
                                <span>
                                   <FaCheckCircle/> 
                                </span>
                                <p>Medium</p>
                            </div>

                            <div className="difficulty-card"
                                onClick={()=>setDifficulty('Hard')}
                                style={{backgroundColor: difficulty==='Hard'?'red':'#aaa'}}
                            >
                                <span>
                                   <FaCheckCircle/> 
                                </span>
                                <p>Hard</p>
                            </div>
                        </div>
                    </div>

                    <div className="btm-sub">
                        <div className="title">
                            Window Duration
                        </div>

                        <div className="btm-content">
                            <div className="difficulty-card"
                                onClick={()=>setWindow(30)}
                                style={ {backgroundColor: window===30?'green':'#aaa'}}
                            >
                                <span>
                                   <BiSolidAlarm/>
                                </span>
                                <p>30 sec</p>
                            </div>

                            <div className="difficulty-card"
                                onClick={()=>setWindow(20)}
                                style={ {backgroundColor: window===20?'orange':'#aaa'}}
                            >
                                <span>
                                   <BiSolidAlarm/> 
                                </span>
                                <p>20 sec</p>
                            </div>

                            <div className="difficulty-card"
                                onClick={()=>setWindow(10)}
                                style={{backgroundColor: window===10?'red':'#aaa'}}
                            >
                                <span>
                                   <BiSolidAlarm/>
                                </span>
                                <p>10 sec</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        
        :

        section===4?
        
            <div className="game-card-main">
                <div className="game-card">

                    {
                        popup?
                            <div className="popup-container">
                            
                                <Popup 
                                    resetGame = {resetGame} 
                                    restartGame = {restartGame} 
                                    closePopup = {closePopup}
                                    popupData = {popup}
                                    setreset = {setReset}
                                />
                            </div>
                        :
                        null
                    }
                        <Board 
                            gridSize = {grid} 
                            player = {player}
                            timer = {timer}
                            setPopup = {setPopup} 
                            reset = {reset}
                            setReset = {setReset} 
                        />
                    
                </div>

                <div className="side-nav">

                    <div className="side-nav__title">
                        <p>Game</p>
                    </div>

                    <div className="side-nav__content">
                        
                        <div className="players">
                            
                            <div className="players__player"
                                style={
                                    {
                                        backgroundColor: player==='X'?'#ee6352':'#59cd90',
                                    }
                                }
                            >
                                <p>You&nbsp;:&nbsp;</p>
                                <span>{player}</span>
                            </div>

                            <div className="players__player"
                                style={{
                                    backgroundColor: player==='X'?'#59cd90':'#ee6352',
                                }}
                            >
                                <p>{
                                    mode==='person-duo'?'Player':'AI Bot'
                                }&nbsp;:&nbsp;</p>
                                <span>{player==='X'?'O':'X'}</span>
                            </div>
                        </div>

                        <div className="info-box-main">
                            <p className="title">Configuration</p>
                            <div className='info-box'>
                                <div className="info">
                                    <div className="field" style={{backgroundColor : '#fc8019'}}>
                                        <span> <BsGridFill/> </span>
                                        <p>{`${grid} x ${grid}`}</p>
                                    </div>
                                    
                                </div>

                                <div className="info">
                                    <div className="field"
                                        style={{
                                            backgroundColor: difficulty==='Easy'?'green':difficulty==='Medium'?'orange':'red',
                                        }}
                                    >
                                        <span> <FaCheckCircle/> </span>
                                        <p>{difficulty}</p>
                                    </div>
                                    
                                </div>

                                <div className="info">
                                    <div className="field"
                                        style={{
                                            backgroundColor: window===30?'green':window===20?'orange':'red',
                                        }}
                                    >
                                        <span> <BiSolidAlarm/> </span>
                                        <p>{window} sec</p>
                                    </div>
                                    
                                </div>
                            </div>
                            
                        </div>

                        <div className="info-box-main">
                            <p className="title">Timer</p>
                            <div className='info-box'>
                                <div className="timer-box"
                                    style={{
                                        backgroundColor: 
                                            timer<=window/3?'red':
                                            timer<=window/2?'orange':'green',
                                    }}
                                >
                                    <div className="time">{timer}</div>
                                    <div className="sub">s</div>
                                </div>
                            </div>
                        </div>

                    </div>
                    
                    <div className="side-nav__btm">
                        <div className="side-nav__btm__btn" onClick={()=>{
                            setPopup({
                                action: 'reset',
                                message: 'Are you sure you want to reset the game?',
                                
                            });
                        }}>
                            <IoMdRefresh/>
                            <p>Reset</p>
                        </div>
                        <div className="side-nav__btm__btn" onClick={()=>{setPopup({
                            action: 'restart',
                            message: 'Are you sure you want to restart the game?'
                        })}}>
                            <IoFlagSharp/>
                            <p>Start Again</p>
                        </div>
                    </div>
                </div>
            </div>
        
        :

        null
    }    
        

    {
        section!==4?
            <div className="btm-nav">
                {
                    section!==1?
                        <div className="nav-btn" id='prev' onClick={()=>{setSection(section-1)}}>
                            <span className="material-symbols-outlined">
                                navigate_before
                            </span>
                            <p>Prev</p>
                        </div>: <div></div>
                }
                {
                    section!==3?
                    <div id='next' className="nav-btn" onClick={()=>{setSection(section+1)}}>
                        <p>Next </p>
                        <span className="material-symbols-outlined">
                            navigate_next
                        </span>
                    </div> :
                    <div className="start-btn" onClick={startGame} style={
                        {
                            backgroundColor: player==='X'?'#ee6352':'#59cd90'
                        }
                    }>
                        <p>Start Game</p>
                        <span className="material-symbols-outlined">
                            warning
                        </span>
                    </div>
                }
                
            </div>:null
    }



    </div>
  )
}

export default Content