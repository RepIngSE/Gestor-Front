import MenuBar from '../Components/MenuBar/MenuBar';
import '../../styles/Principal.css';
import React from 'react';

const AddUser = () => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', width: '100vw' }}>
      <div style={{ height: '100vh' }}>
        <MenuBar />
      </div>

      <div
        className='user-content'
        style={{
          flex: 1,
          background: '#f4f6fa',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 24,
        }}
      >
        <div
          className='applicant'
          style={{
            width: '100%',
            maxWidth: 900, // más ancho
            background: '#fff',
            borderRadius: 12,
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            padding: 32, // más padding
            display: 'flex',
            flexDirection: 'column',
            margin: 24,
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
            <h2 style={{ fontSize: 22, fontWeight: 'bold', color: '#000' }}>Add User</h2>
            <button
              onClick={() => window.history.back()}
              style={{
                border: 'none',
                background: 'transparent',
                fontWeight: 'bold',
                fontSize: 22,
                cursor: 'pointer',
              }}
            >
              ×
            </button>
          </div>

          <form
            className='formPrincipal'
            onSubmit={(e) => e.preventDefault()}
            style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              gap: 32,
              justifyContent: 'space-between',
            }}
          >
            <div style={{ flex: 1, minWidth: 300, maxWidth: 400, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[['Document', 'text'], ['Names', 'text'], ['Email', 'email']].map(([label, type]) => (
                <div key={label} style={{ display: 'flex', flexDirection: 'column' }}>
                  <label
                    className='textoFormulario'
                    style={{ marginBottom: 4, color: '#000', fontWeight: 500 }}
                  >
                    {label}:
                  </label>
                  <input
                    className='formularioInput'
                    type={type}
                    style={{
                      border: '1px solid #0a3871',
                      borderRadius: 4,
                      padding: 8,
                      fontSize: 14,
                    }}
                  />
                </div>
              ))}
            </div>
            <div style={{ flex: 1, minWidth: 300, maxWidth: 400, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[['Phone', 'text'], ['Area', 'select'], ['Rol', 'text']].map(([label, type]) => (
                <div key={label} style={{ display: 'flex', flexDirection: 'column' }}>
                  <label
                    className='textoFormulario'
                    style={{ marginBottom: 4, color: '#000', fontWeight: 500 }}
                  >
                    {label}:
                  </label>
                  {type === 'select' ? (
                    <select
                      className='formularioInput'
                      style={{
                        border: '1px solid #0a3871',
                        borderRadius: 4,
                        padding: 8,
                        fontSize: 14,
                      }}
                    >
                      <option>Seleccionar...</option>
                      <option>Área 1</option>
                      <option>Área 2</option>
                    </select>
                  ) : (
                    <input
                      className='formularioInput'
                      type={type}
                      style={{
                        border: '1px solid #0a3871',
                        borderRadius: 4,
                        padding: 8,
                        fontSize: 14,
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: 20,
                marginTop: 20,
                width: '100%',
              }}
            >
              <button
                type='submit'
                className='buttonCreate'
                style={{
                  backgroundColor: '#0a3871',
                  color: 'white',
                  padding: '8px 24px',
                  borderRadius: 6,
                  border: 'none',
                  fontWeight: 'bold',
                }}
              >
                Add
              </button>
              <button
                type='button'
                onClick={() => window.history.back()}
                className='buttonCreate'
                style={{
                  backgroundColor: '#c3c6d1',
                  color: '#000',
                  padding: '8px 24px',
                  borderRadius: 6,
                  border: 'none',
                  fontWeight: 'bold',
                }}
              >
                Exit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
