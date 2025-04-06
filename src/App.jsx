import Counter from './Counter';
import './App.css'
import Batsman from './batsman';

import Players from './player';

import Post from './posts';
import Friends from './friends';
import Users from './use';
import { Suspense } from 'react';




    // const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users")
    // .then(res => res.json())


  // const fetchFriends = async() =>{
  //   const res = await fetch("https://jsonplaceholder.typicode.com/users");
  //   return res.json();
  // }
  

  //  const fetchPost = async() => {
  //   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  //   return res.json();
  //  }


function App() {

  // const friendsPromise = fetchFriends();

  // const postPromise = fetchPost();

  function handleclick(){
    alert('I am clicked')
  }


// Arrow function
const handleclick3 =() => {
  alert('clicked 3')
}

const handleAdd5 = (num) => {
  const newNum = num + 5;
  alert(newNum);
}





  return (
   
    <>
      
      <h1>Vite + React</h1>

      <Players 
      ></Players>
      {/* <Suspense fallback={<h4>posts are coming...</h4>}>
        <Post postPromise={postPromise}></Post>
      </Suspense> */}

      {/* <Suspense fallback={<h3>loding...</h3>}>
      <Users fetchUsers = {fetchUsers}></Users>
      </Suspense> */}

      {/* <Suspense fallback={<h3>Friends are coming for treat...</h3> }>
          <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense> */}
      

      <Batsman></Batsman>
      <Counter></Counter>


      {/* <button>Click Me</button> */}
      <button onClick={handleclick}>Click Me</button>
      <button onClick={handleclick3}>Click Me 3</button>
      <button onClick={function handleclick2(){alert('clicked 2')}}>Click Me-2</button>
      <button onClick={() => alert('click 4')}> click Me 4</button>
      <button onClick={() => handleAdd5(7)}> click Me 5</button>
      
    </>
  )
}

export default App
