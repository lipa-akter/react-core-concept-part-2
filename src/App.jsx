import Counter from './Counter';
import './App.css'
import Batsman from './batsman';



function App() {
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
