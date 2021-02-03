import React from 'react'
import MyProfilPhoto from '../../assets/profile_photo.jpg'
import './profilStyle.css'

const ProfilPhoto = () => {
    return (
        <div>
            <img src={MyProfilPhoto} alt='profile_photo' className="photo" style={{width:250}}></img>
        </div>
    )
}

export default ProfilPhoto
