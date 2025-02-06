import React from 'react'
import { IUserProfile } from '../../model/IUserProfile'
interface teamUser{
    userName: string, 
    image: string, 
    uuid: string
}
function TeamList(props: 
    {teamName: string, teamsSelect: 'A' | 'B', 
        teamUserList: teamUser[]
        }) {
    // const tN = props.teamName;
    const {teamName, teamsSelect, teamUserList} = props;
    console.log('Team List render');
  return (
    <div className='row mt-5'>
        <div className="col">
            <div className="card">
                <div className={teamsSelect==='A' ? "body text-bg-danger p-1" : "body text-bg-warning p-1"} >
                    <h4 className='card-title text-center text-white'>{teamName}</h4>
                    <ul className="list-group mt-4">
                        {
                            teamUserList.map((u,index)=>{
                                return <li key={index} className="list-group-item">
                                            <div className="row">
                                                <div className="col-3">
                                                    <img src={u.image} style={{width:30, height:30, borderRadius: 30}} />
                                                </div>
                                                <div className="col-6">
                                                    <label>{u.userName}</label>
                                                </div>
                                                <div className="col-3">
                                                    <input type="button" className='btn btn-danger' value=" X " />
                                                </div>
                                            </div>
                                        </li>
                            })
                        }
                        
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TeamList