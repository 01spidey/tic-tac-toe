import React, { useState } from 'react'
import '../styles/content.scss'
import Popup from './Popup'
import {IoFlagSharp} from 'react-icons/io5'
import {IoMdRefresh} from 'react-icons/io'
import Board from './Board'
import { ImCross } from 'react-icons/im';
import { FaCircle } from 'react-icons/fa';


const Content = () => {

    const [player, setPlayer] = useState('X')
    const [section, setSection] = useState(4)
    const [grid, setGrid] = useState(3)
    const [mode, setMode] = useState('person-duo')
    const [popup, setPopup] = useState(null)


    const startGame = ()=>{
        setSection(4)
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
        setPopup(true)
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
                    <p>Player Side</p>
                </div>

                <div className="choose-side-card__content">
                    <div className="choose-side-card__content__sub" id={
                        player==='X'?'x_card_sub_active' : 'x_card_sub_inactive'}
                        onClick={()=>setPlayer('X')}
                        >
                        <span>
                            <ImCross/>
                        </span>
                    </div>

                    <div className="choose-side-card__content__sub" id={
                        player==='O'?'o_card_sub_active' : 'o_card_sub_inactive'}
                        onClick={()=>setPlayer('O')}
                        >
                        <span>
                            <FaCircle/>
                        </span>
                    </div>
                </div>
                
                <p className="dialog">
                    You will Play as <span style={
                        {
                            color: player==='X'?'#ee6352':'#59cd90',
                            fontWeight: 'bold'
                        }
                    }>'{player}'</span>
                </p>
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
                                    action = {popup}
                                />
                            </div>
                        :
                        null
                    }
                    <Board 
                        gridSize = {grid} 
                        player = {player}
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
                                <p>Player-1&nbsp;:&nbsp;</p>
                                <span>{player}</span>
                            </div>

                            <div className="players__player"
                                style={{
                                    backgroundColor: player==='X'?'#59cd90':'#ee6352',
                                }}
                            >
                                <p>{
                                    mode==='person-duo'?'Player-2':'AI Bot'
                                }&nbsp;:&nbsp;</p>
                                <span>{player==='X'?'O':'X'}</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="side-nav__btm">
                        <div className="side-nav__btm__btn" onClick={()=>{setPopup('reset');}}>
                            <IoMdRefresh/>
                            <p>Reset</p>
                        </div>
                        <div className="side-nav__btm__btn" onClick={()=>{setPopup('restart')}}>
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