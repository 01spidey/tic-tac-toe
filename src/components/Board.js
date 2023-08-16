import React, { useEffect, useState } from 'react'
import '../styles/board.scss'
import { ImCross } from 'react-icons/im';
import { FaCircle } from 'react-icons/fa';
import confetti from '../assets/confetti.json'
import sad from '../assets/sad.json'
import handshake from '../assets/handshake.json'
import Popup from './Popup';

const Board = (
    {
        gridSize,
        player,
        timer,
        setTimer,
        setPopup,
        setResetFunction,
        setAnimation,
        window,
        turn, setTurn, popupData
    }
) => {

    const [gridCells, setGridCells] = useState([])

    
    const [winner, setWinner] = useState(null)
    const [winningCells, setWinningCells] = useState([])
    const [gameOver, setGameOver] = useState(false)
    
    const [timerId, setTimerId] = useState(null);


    const resetBoard = ()=>{

        let temp = []
        console.log('Resetting board')
        for(let i=0;i<gridSize;i++){
            let row = []
            for(let j=0;j<gridSize;j++){
                row.push('-')
            }
            temp.push(row)
        }
        
        setGridCells(temp)
        setTimer(window)

        setTurn(player)

        setWinner(null)
        setWinningCells([])
        
        setGameOver(false)
       
    }



    useEffect(()=>{
        setResetFunction(()=>resetBoard)
        resetBoard()
    }, [])

    useEffect(()=>{
        clearTimeout(timerId)
        console.log(popupData)
        if(timer>0 && !popupData){
            const newTimerId = setTimeout(() => {
                setTimer(timer-1)
            }, 1000);
            setTimerId(newTimerId)
        }
    }, [timer,gridCells])


    useEffect(()=>{
        console.log('Time is changed', timer)
        if(timer===0){
            setPopup({
                action: 'over',
                message: 'You ran out of time!',
                callThis: ()=>{
                    clearTimeout(timerId)
                    setTimer(window)
                    setTurn(turn==='X'?'O':'X')
                }
            })
        }
    }, [timer])

    useEffect(()=>{
        validateBoard()
    }, [gridCells])

    useEffect(()=>{
        if(winner!==null){
            if(winner==='draw'){
                // I need to add a timeout for 2s here
                setAnimation(handshake)
                setTimeout(() => {
                    setAnimation(null)
                    setPopup({
                        action: 'over',
                        message: 'The game ended in a draw!',
                        callThis: resetBoard
                    }) 
                }, 2500);

                
            }else{
                if(winner===player) setAnimation(confetti)
                else setAnimation(sad)

                setTimeout(() => {
                    setAnimation(null)
                    setPopup({
                        action: 'over',
                        message: `you ${winner===player?'won':'lost'} the game!`,
                        callThis: resetBoard
                    })    
                }, 2500);
                
            }
        }

    }, [winner])

    const validateBoard = ()=>{

        const toCheck = turn==='X'?'O':'X'
        
        let flag = true
        
        try{

            let matchingCells = []

            // Checking rows
            for(let i=0;i<gridSize;i++){
                flag = true
                matchingCells = []

                for(let j=0;j<gridSize;j++){
                    if(gridCells[i][j]!==toCheck) flag = false
                    else matchingCells.push([i, j])
                }
                if(flag){
                    setGameOver(true)
                    setWinner(toCheck)
                    setWinningCells(matchingCells)
                }
            }

            // Checking columns
            flag = true
            
            for(let i=0;i<gridSize;i++){
                flag = true
                matchingCells = []
                for(let j=0;j<gridSize;j++){
                    if(gridCells[j][i]!==toCheck) flag = false
                    else matchingCells.push([j, i])
                }
                if(flag){
                    setGameOver(true)
                    setWinner(toCheck)
                    setWinningCells(matchingCells)
                }
            }

            // Checking left-right diagonals
            flag = true
            matchingCells = []
            for(let i=0;i<gridSize;i++){
                if(gridCells[i][i]!==toCheck) flag = false
                else matchingCells.push([i, i])
            }
            if(flag){
                setGameOver(true)
                setWinner(toCheck)
                setWinningCells(matchingCells)
            }

            // Checking right-left diagonals
            flag = true
            matchingCells = []
            for(let i=0;i<gridSize;i++){
                if(gridCells[i][gridSize-i-1]!==toCheck) flag = false
                else matchingCells.push([i, gridSize-i-1])
            }
            if(flag){
                setGameOver(true)
                setWinner(toCheck)
                setWinningCells(matchingCells)
            }

            // Checking for draw
            flag = true
            let count = 0
            // console.log('Checking for draw')
            for(let i=0;i<gridSize;i++){
                for(let j=0;j<gridSize;j++){
                    if(gridCells[i][j]==='-') count++;
                }
            }
            if(count===0){
                setGameOver(true)
                setWinner('draw')
                setWinningCells([])
            }

            return null

        }
        catch(err){
            // console.log(err)
            return null
        }
    }

    const isCellMatching = (i,j)=>{
        for(let k=0;k<winningCells.length;k++){
            if(winningCells[k][0]===i && winningCells[k][1]===j) return true
        }
        return false
    }

    const setCell = (i, j, turn)=>{
        let temp = [...gridCells]
        temp[i][j] = turn
        setGridCells(temp)
        setTurn(turn==='X'?'O':'X')
        setTimer(window)
    }

  return (
    <div className="board-main">

        <table>
            
            <tbody>
                {
                    gridCells.map((row, i)=>{
                        return (
                            <tr key={i}>
                                {
                                    row.map((cell, j)=>{
                                        return (
                                            {
                                                '-': 
                                                <td className={`cellHover ${(!isCellMatching(i,j) && gameOver)? 'cell-inactive':''}`}
                                                style={
                                                    {
                                                        fontSize : gridSize===3?'4rem':
                                                        gridSize===4?'3rem':
                                                        gridSize===5?'2rem':null,
                                                        color: turn==='X'?'#ee6352':'#59cd90'
                                                    }
                                                }
                                                key={j} onClick={()=>setCell(i, j, turn)}> 
                                                    <span>
                                                        {turn==='X'?
                                                            <ImCross />:
                                                            <FaCircle />
                                                        }
                                                    </span>
                                                </td>,
                                                
                                                'X': 
                                                <td className={`${(!isCellMatching(i,j) && gameOver?'cell-inactive': 'cell-x')}`} 
                                                    style={
                                                        {
                                                            fontSize : gridSize===3?'4rem':
                                                            gridSize===4?'3rem':
                                                            gridSize===5?'2rem':null
                                                        }
                                                    }
                                                key={j} >
                                                    <span>
                                                        <ImCross />
                                                    </span>
                                                </td>,
                                                
                                                'O': 
                                                <td className={`${(!isCellMatching(i,j) && gameOver?'cell-inactive': 'cell-o')}`}
                                                    style={
                                                        {
                                                            fontSize : gridSize===3?'4rem':
                                                            gridSize===4?'3rem':
                                                            gridSize===5?'2rem':null
                                                        }
                                                    }
                                                key={j} >
                                                    <span>
                                                        <FaCircle />
                                                    </span>
                                                </td>
                                            }[cell]          
                                        )
                                    })
                                }
                            </tr>
                        )
                    })
                }
            </tbody>

        </table>
    </div>
  )

}

export default Board