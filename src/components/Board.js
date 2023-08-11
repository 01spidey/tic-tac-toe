import React, { useEffect, useState } from 'react'
import '../styles/board.scss'
import { ImCross } from 'react-icons/im';
import { FaCircle } from 'react-icons/fa';

const Board = (
    {
        gridSize,
        player
    }
) => {

    const [gridCells, setGridCells] = useState([])
    const [turn, setTurn] = useState(player)

    useEffect(()=>{
        let temp = []
        for(let i=0;i<gridSize;i++){
            let row = []
            for(let j=0;j<gridSize;j++){
                row.push('-')
            }
            temp.push(row)
        }
        setGridCells(temp)
    }, [])

    const setCell = (i, j, turn)=>{
        let temp = [...gridCells]
        temp[i][j] = turn
        setGridCells(temp)
        setTurn(turn==='X'?'O':'X')
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
                                                <td className={turn==='X'?'cellHover':'cellHover'} 
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
                                                <td className='cell-x' 
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
                                                <td className='cell-o' 
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