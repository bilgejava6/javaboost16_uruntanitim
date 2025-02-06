import React from 'react'
import { IUserProfile } from '../../model/IUserProfile'

function UserCard(props: {user: IUserProfile}) {
    const user = props.user;
  return (
    <div className="card shadow ">
        <img src={user.picture.large} className='card-img-top' />
        <div className="card-body">
            <h4 className='card-title'>{user.name.title + ' '+ user.name.first + ' '+ user.name.last}</h4>
            <p>{user.location.country}</p>
        </div>
        <ul className="list-group">
            <li className="list-group-item">{user.email}</li>
            <li className="list-group-item">{user.phone}</li>                
        </ul>
        <div className="card-body">
            <div className="row justify-content-around">
                <div className='col-4'>
                    <input type="button" className="btn btn-success" value='Grup A'/>
                </div>
                <div className='col-4'>
                    <input type="button" className="btn btn-primary" value='Grup B'/>    
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserCard