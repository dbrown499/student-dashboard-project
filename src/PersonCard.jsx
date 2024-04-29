import React, { useState } from 'react'
import './PersonCard.css'
import LeftNavBar from './LeftNavBar';
// import ShowMore from './ShowMore.jsx'
// import InfoList from './data/data.json'
import leftNavBar from './LeftNavBar.jsx'
// import App from './App.jsx'

const PersonCard = (prop) => {
    function formatDate(inputDate) {
        const parsedDate = new Date(inputDate);

        const formattedDate = parsedDate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: '2-digit'
        });

        return formattedDate;
    }

   



    // const button = document.getElementsByTagName("button")
    // const studentTitle = document.getElementsByClassName("student-list-title")

    // function changeTitle(title){
    //     for(let i = 0; i < title.length; i++){
    //         button[i].addEventListener("click", (e) =>{
    //             if(button[i])
    //             studentTitle.textContent = button[i].textContent;
    //         })
    //     }
    //     return studentTitle;
    // }


    // console.log(changeTitle(button))



    return (
        <>
   
            <h1 className='student-list-title'>All Students</h1>
            <p className='student-number'>Total Students:  <span className='student-num'>{(prop.list).length}</span></p>


            {prop.list.map(info => {
                return (
                        <div className='each-card' key={info.id}>
                            <div id='section-one'>
                                <img src={info.profilePhoto} />
                                <div className='info'>
                                    <p className='name'>{info.names.preferredName} {info.names.surname}</p>
                                    <p className='email'>{info.username}</p>
                                    <p className='bday'><span id='bday-word'>Birthday:</span> {formatDate(info.dob)}</p>
                                    <button className='more-info'>Show More...</button>
                                </div>
                            </div>
                            {/* <p className='status'>On Track to Graduate</p> */}
                            {/* <ShowMore></ShowMore> */}
                        </div>)
                })
            }
         </>
    )
}

export default PersonCard