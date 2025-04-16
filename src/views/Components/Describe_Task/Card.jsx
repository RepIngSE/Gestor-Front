import './DescribeTask.css';
import { useState } from 'react';

const CardTask = (props)=>{

    const {type} = props; 
    const [isVisible, setisVisible] = useState(false)
    const changeVisible =() =>{setisVisible(!isVisible)}

    return(
        <div className = {`recTask ${type == 'New' && 'recTaskNew'} ${type == 'Pending' && 'recTaskPending'} ${type == 'Progress' && 'recTaskProgress'} ${type == 'Finish' && 'recTaskFinish'}`}>
            <div className = {`recPriority ${type == 'New' && 'recColorNew'} ${type == 'Pending' && 'recColorPending'} ${type == 'Progress' && 'recColorProgress'} ${type == 'Finish' && 'recColorFinish'}`}>
                #
            </div>
            <div className = 'recDescribe'>
                <div className = 'taskHeader'> 
                    <label className = 'textDescriptionCard titTask'> Tittle Task </label>
                    <label className = 'textDescriptionCard typeTask'> {type} Task </label>
                </div>
                <div className = 'taskBody'>
                    <label> Describe...</label>
                </div>
                    {type == 'New' &&
                        <div className = 'taskFooter'> 
                            <button className = 'btnTask recColorNew'> Assign </button> 
                            <button className = 'btnTask recColorNew' onClick={changeVisible}> Save </button> 
                    </div>}

                    {type == 'Pending' &&
                        <div className = 'taskFooter'> 
                            <button className = 'btnTask recColorPending'> Employee in charge </button> 
                    </div>}

                    {type == 'Progress' &&
                        <div className = 'taskFooter'> 
                            <button className = 'btnTask recColorProgress'> Employee in charge </button> 
                            <button className = 'btnTask recColorProgress'> Initial Date </button> 
                    </div>}

                    {type == 'Finish' &&
                        <div className = 'taskFooter'> 
                            <button className = 'btnTask recColorFinish'> Employee in charge </button> 
                            <button className = 'btnTask recColorFinish'> Initial Date </button> 
                            <button className = 'btnTask recColorFinish'> Final Date </button> 
                    </div>}
            </div>
        <div className = {isVisible?'Available':'notAvailable'}>
            <div className = 'recFormNotification'>
                <div className = 'NotificationHeader'>
                    <label> New Task </label>
                </div>
                    <textarea className = 'NotificationBody'> Comment.. </textarea>
                <div className = 'NotificationFooter'>
                    <button className = 'btnNotification' onClick = {changeVisible}> Notify </button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default CardTask
