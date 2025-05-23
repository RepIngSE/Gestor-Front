import './DescribeTask.css';
import { useParams } from 'react-router-dom';
import CardTask from './Card';
import { useState, useEffect, useContext } from 'react';
import { DescribeTaskApi } from '../../../Services/Api_DescribeTask';
import SessionContext from '../../../SessionContext';

const DescribeTask = ({ typeview }) => {
  const { param } = useParams();
  console.log('🧭 Param:', param);
  const { document } = useContext(SessionContext);
  const [tasks, setTasks] = useState([]);
  console.log('✅ DescribeTask componente montado');


  const paramMap = {
    New: 'New Task',
    Pending: 'Pending',
    Progress: 'In Progress',
    Finish: 'Finish Task',
  };

  const idStatus = paramMap[param];

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        //if (!document) return; // Espera a tener la cédula

        const data = await DescribeTaskApi(document); // Aquí se pasa
        setTasks(data);
      } catch (error) {
        console.error('Error al obtener tareas:', error);
      }
    };

    fetchTasks();
  }, [document]); // Se vuelve a ejecutar si cambia la cédula

  const filteredTasks = tasks.filter(task => task.Id_Status === idStatus);

  return (
    <div className='describeTask'>
      {filteredTasks.map(task => (
        <CardTask
          key={task.ID}
          type={param}
          name={task.NAME}
          descrip={task.DESCRIPTION}
          priority={task.PRIORITY}
          typeview={typeview}
        />
      ))}
    </div>
  );
};

export default DescribeTask;
