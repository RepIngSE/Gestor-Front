import './DescribeTask.css';
import {useParams} from "react-router-dom";
import CardTask from './Card';

const DescribeTask = ()=>{

const { param } = useParams()

    return(
        <div className = 'describeTask'>
            <CardTask type = {param} ></CardTask>
        </div>
    )
}

export default DescribeTask