import MenuBar from '../Components/MenuBar/MenuBar';
import '../../styles/Principal.css';
import '../../styles/Profile.css';
import React, { useRef, useState } from 'react';

const Profile = () => {
  const [image, setImage] = useState(null);
  const fileInput = useRef();

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', width: '100vw' }}>
      <div style={{ height: '100vh' }}>
        <MenuBar />
      </div>

      <div
        className='user-content'
        style={{
          flex: 1,
          background: '#c6e2ff', // azul claro
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 24,
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: 450,
            background: 'transparent',
            borderRadius: 16,
            padding: 32,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div style={{ marginBottom: 24, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img
              src={image || 'https://cdn-icons-png.flaticon.com/512/149/149071.png'}
              alt='Profile'
              style={{ width: 100, height: 100, borderRadius: '50%', objectFit: 'cover', marginBottom: 10 }}
            />
            <input
              type='file'
              accept='image/*'
              style={{ display: 'none' }}
              ref={fileInput}
              onChange={handleImageChange}
            />
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 10,
              width: '100%',
            }}
          >
            <input
              placeholder='Names'
              className='formularioInput'
              style={{ gridColumn: 'span 2', padding: 10, borderRadius: 8 }}
            />
            <input placeholder='Position in the company' className='formularioInput' style={{ padding: 10, borderRadius: 8 }} />
            <input placeholder='Rol' className='formularioInput' style={{ padding: 10, borderRadius: 8 }} />
            <input placeholder='# of contact' className='formularioInput' style={{ padding: 10, borderRadius: 8 }} />
            <input placeholder='Email' className='formularioInput' style={{ padding: 10, borderRadius: 8 }} />

            <button
              className='buttonCreate'
              type='submit'
              style={{
                gridColumn: 'span 2',
                backgroundColor: '#001f54',
                color: 'white',
                padding: 10,
                borderRadius: 12,
                marginTop: 10,
              }}
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
