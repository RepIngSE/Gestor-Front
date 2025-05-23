import '../../styles/Principal.css';
import '../../styles/Profile.css';
import React, { useContext, useRef, useState, useEffect } from 'react';
import SessionContext from '../../SessionContext';
import { getProfileApi } from '../../Services/Api_Profile';

const Profile = () => {
  const [image, setImage] = useState(null);
  const fileInput = useRef();
  const { document }= useContext(SessionContext)
  const [profile, setProfile] = useState({
    nameFull: '',
    email: '',
    phone: '',
    rol: '',
    area: '',
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getProfileApi(document);
        setProfile({
          nameFull: `${data.NAME} ${data.LAST_NAME}`,
          email: `${data.EMAIL}`,
          phone: `${data.PHONE}`,
          rol: `${data.ROL}`,
          area: `${data.AREA}`
        });
      } catch (error) {
        console.error('❌ Error cargando perfil:', error);
      }
    };

    if (document) {
      fetchProfile();
    }
  }, [document]);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', width: '100vw' }}>
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
              type="text"
              value={profile.nameFull}
              readOnly
              style={{ gridColumn: 'span 2', padding: 10, borderRadius: 8 }}
            />
            <input 
              type="text"
              value={profile.area}
              readOnly
              style={{ padding: 10, borderRadius: 8 }} />
            <input 
              type="text"
              value={profile.rol}
              readOnly
              style={{ padding: 10, borderRadius: 8 }} />
            <input 
              type="text"
              value={profile.phone}
              readOnly
              style={{ padding: 10, borderRadius: 8 }} />
            <input
              type="text"
              value={profile.email}
              readOnly
              style={{ padding: 10, borderRadius: 8 }} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
