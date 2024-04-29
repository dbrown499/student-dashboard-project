import React, { useState } from 'react'
import InfoList from './data/data.json'
import './App.css'
import PersonCard from './PersonCard.jsx'
import LeftNavbar from './LeftNavBar.jsx'
import ShowMore from './ShowMore.jsx'


function App() {
  const [list, setList] = useState(InfoList);
  
  const [title, setTitle] = useState("All Students")

  function changeTitleName(){
      setTitle(title += "hi")
    }
  
    // const [showMore, setShowMore] = useState(false);

    // function extendPersonCard(){
    //   const card = document.getElementsByClassName("each-card")
    //   const personCard = {ShowMore}
    //   const togehter = card.appendChild(personCard)
    //   return togehter
    //   }
// console.log(extendPersonCard())
  // function changeTitleName(){
  //   setTitle()
  // }

  function getAllStudents() {
    const newArr = InfoList;
    setList(newArr);
  }

  function getWinter25() {
      const newArr = InfoList.filter(studentSemester => {
        return studentSemester.cohort.cohortCode === "Winter2025";
      });
      setList(newArr);
  }

  function getWinter26() {
      const newArr = InfoList.filter(studentSemester => {
        return studentSemester.cohort.cohortCode === "Winter2026";
      });
      setList(newArr);
  }

  function getFall26() {
    const newArr = InfoList.filter(studentSemester => {
      return studentSemester.cohort.cohortCode === "Fall2026";
    });
    setList(newArr);
  }

  function getSummer26() {
    const newArr = InfoList.filter(studentSemester => {
      return studentSemester.cohort.cohortCode === "Summer2026";
    });
    setList(newArr);
  }

  function getSpring26() {
    const newArr = InfoList.filter(studentSemester => {
      return studentSemester.cohort.cohortCode === "Spring2026";
    });
    setList(newArr);
  }

  function getFall25() {
    const newArr = InfoList.filter(studentSemester => {
      return studentSemester.cohort.cohortCode === "Fall2025";
    });
    setList(newArr);
  }

  function getSummer25() {
    const newArr = InfoList.filter(studentSemester => {
      return studentSemester.cohort.cohortCode === "Summer2025";
    });
    setList(newArr);
  }

  function getSpring25() {
    const newArr = InfoList.filter(studentSemester => {
      return studentSemester.cohort.cohortCode === "Spring2025";
    });
    setList(newArr);
  }


  return (
    <div className='main-container'>
      <LeftNavbar 
      funcA={getAllStudents}
      funcB={getWinter26}
      funcC={getFall26}
      funcD={getSummer26}
      funcE={getSpring26}
      funcF={getWinter25}
      funcG={getFall25}
      funcH={getSummer25}
      funcI={getSpring25} 
      
    />
      <main>
      <PersonCard 
      // title={changeTitleName}   
      list={list}
      // card={extendPersonCard}
      />
      {/* <ShowMore></ShowMore> */}
      </main>
    </div>

  );
}

export default App;
