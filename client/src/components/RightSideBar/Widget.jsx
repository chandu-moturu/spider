import React from 'react'
import './RightSideBar.css'
import comment from '../../assets/comment-regular.svg'
import pen from '../../assets/pen-solid.svg'
import slack from '../../assets/slack.svg'

const Widget = () => {
  return (
    <div className='widget'>
        <h4>The overflow blog</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
                <img src={pen} alt="pen" width='18'/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas temporibus, ea quis fugit et id harum modi, odit, quas repellat beatae corrupti earum maxime. Repudiandae provident quod quidem rem cum.</p>

            </div>
            <div className='right-sidebar-div-2'>
                <img src={pen} alt="pen" width='18'/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas temporibus, ea quis fugit et id harum modi, odit, quas repellat beatae corrupti earum maxime. Repudiandae provident quod quidem rem cum.</p>

            </div>
            
        </div>
        <h4>The overflow blog</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
                <img src={comment} alt="pen" width='18'/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas temporibus, ea quis fugit et id harum modi, odit, quas repellat beatae corrupti earum maxime. Repudiandae provident quod quidem rem cum.</p>

            </div>
            <div className='right-sidebar-div-2'>
                <img src={comment} alt="pen" width='18'/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas temporibus, ea quis fugit et id harum modi, odit, quas repellat beatae corrupti earum maxime. Repudiandae provident quod quidem rem cum.</p>

            </div>
            
        </div>
        <h4>The overflow blog</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
                <img src={slack} alt="pen" width='18'/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas temporibus, ea quis fugit et id harum modi, odit, quas repellat beatae corrupti earum maxime. Repudiandae provident quod quidem rem cum.</p>

            </div>
            <div className='right-sidebar-div-2'>
                <img src={slack} alt="pen" width='18'/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas temporibus, ea quis fugit et id harum modi, odit, quas repellat beatae corrupti earum maxime. Repudiandae provident quod quidem rem cum.</p>

            </div>
            
        </div>

    </div>
  )
}

export default Widget