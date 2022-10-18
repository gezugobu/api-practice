import React, {useState, useEffect} from 'react'

function APIPractice() {
    const [user, setUser] = useState ([])
    useEffect(() => {
      fetch ("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data)=> {
        console.log(data)
        setUser(data.results)})
    }, [])
    console.log(user)
  return (
    <div>
<h1>User</h1>
{user.map((personInfo)=>{
    return(
        <div key={personInfo.id.value}>
        
        <h2 >Name: {personInfo.name.first} {personInfo.name.last} </h2>
        <h2>Age: {personInfo.dob.age} </h2>
        <img src={personInfo.picture.large} alt="user" />
        </div>
)})
}
    </div>
  )
}

export default APIPractice;

