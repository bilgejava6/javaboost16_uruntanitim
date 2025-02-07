import React, { useEffect, useState } from 'react'
import { IUserProfile } from '../model/IUserProfile';
import UserCard from '../component/molecules/UserCard';
import TeamList from '../component/molecules/TeamList';
import { useDispatch } from 'react-redux';
import { fetchUserList } from '../store/feature/userSlice';
import { useAppSelector, useAppDispatch } from '../util/Hooks';

export default function GlobalStateExample() {
   const userList = useAppSelector(state=> state.user.userList);
   const dispath =  useAppDispatch();
   useEffect(()=>{
        dispath(fetchUserList())
  },[]);  
  console.log('GlobalState Ana Sayfa Render')
  return (
    <div className="container-fluid">
        <div className="row">
            <div className="col-9">
                <div className="row">
                    {
                        userList?.map((ahmetAmcaNasilsin,index)=>{
                            return <div key={index} className="col-4 p-2">
                                <UserCard user={ahmetAmcaNasilsin} />
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
                                                  
                            />
                </div>
                <div className="row mt-2">
                        <TeamList                         
                            teamName='B Takımı: Filler' 
                            teamsSelect='B'
                            
                            />
                </div>
                  
            </div>
        </div>
    </div>
  )
}
