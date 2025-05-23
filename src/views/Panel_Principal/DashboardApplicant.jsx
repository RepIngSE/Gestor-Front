import MenuBar from '../Components/MenuBar/MenuBar';
import '../../styles/Principal.css';

const DashboardApplicant = () => (
  <div style={{ display: 'flex', minHeight: '100vh', width: '100vw', background: '#f4f6fa' }}>
    <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
      <div style={{ width: '100%', maxWidth: 900, margin: '0 auto', display: 'flex', flexDirection: 'row', gap: 40, justifyContent: 'center', alignItems: 'center' }}>
        {/* Create Task Card */}
        <div style={{ flex: 1, background: '#fff', borderRadius: 16, boxShadow: '0 2px 16px rgba(0,0,0,0.07)', padding: 40, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minWidth: 320 }}>
          <i className="fa-solid fa-file-circle-plus fa-3x" style={{ color: '#0a3871', marginBottom: 24 }}></i>
          <h2 style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 16 }}>Crear Tarea</h2>
          <button
            className='buttonCreate'
            style={{ width: '100%', maxWidth: 200, fontSize: 18, padding: '12px 0', borderRadius: 8 }}
            onClick={() => window.location.href = '/adminArea/createTask'}
          >
            Ir a crear tarea
          </button>
        </div>
        {/* View Tasks Card */}
        <div style={{ flex: 1, background: '#fff', borderRadius: 16, boxShadow: '0 2px 16px rgba(0,0,0,0.07)', padding: 40, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minWidth: 320 }}>
          <i className="fa-regular fa-eye fa-3x" style={{ color: '#0a3871', marginBottom: 24 }}></i>
          <h2 style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 16 }}>Ver Tareas</h2>
          <button
            className='buttonCreate'
            style={{ width: '100%', maxWidth: 200, fontSize: 18, padding: '12px 0', borderRadius: 8 }}
            onClick={() => window.location.href = '/adminArea/principalTask'}
          >
            Ir a ver tareas
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default DashboardApplicant;
