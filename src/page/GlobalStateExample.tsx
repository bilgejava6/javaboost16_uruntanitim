import React, { useEffect, useState } from 'react'
import { IUserProfile } from '../model/IUserProfile';
import UserCard from '../component/molecules/UserCard';
import TeamList from '../component/molecules/TeamList';

export default function GlobalStateExample() {
  const [userList, setUserList] = useState<IUserProfile[]>();
  const [aTeam,setATeam] = useState([
    {
        userName: 'muhammet', 
        image: 'https://picsum.photos/100/100', 
        uuid: '12'
    },
    {
        userName: 'Ahmet', 
        image: 'https://picsum.photos/100/100', 
        uuid: '12'
    },
    {
        userName: 'Deniz', 
        image: 'https://picsum.photos/100/100', 
        uuid: '12'
    }
  ]);
  const [bTeam,setBTeam] = useState([
    {
        userName: 'demet', 
        image: 'https://picsum.photos/100/100', 
        uuid: '12'
    }
  ]);
  useEffect(()=>{
    fetch('https://randomuser.me/api/?results=50')
    .then(res=>res.json())
    .then(data=>setUserList(data.results))
  },[]);  
  return (
    <div className="container-fluid">
        <div className="row">
            <div className="col-9">
                <div className="row">
                    {
                        userList?.map(ahmetAmcaNasilsin=>{
                            return <div className="col-4 p-2">
                                <UserCard user={ahmetAmcaNasilsin}/>
                            </div>
                        })
                    }
                </div>
            </div>
            <div className="col-3">
                <div className="row">
                        <TeamList 
                            teamName='A Takımı: Kaplanlar'
                            teamsSelect='A'
                            teamUserList={aTeam}                          
                            />
                </div>
                <div className="row mt-2">
                        <TeamList                         
                            teamName='B Takımı: Filler' 
                            teamsSelect='B'
                            teamUserList={bTeam}
                            />
                </div>
                  
            </div>
        </div>
    </div>
  )
}
