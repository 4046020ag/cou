import React, {useState} from 'react';


import ListItem from "./Listitem";


function App() {

  const [list, setList] = useState([1, 2, 3, 4]);

  const counterPlus = (index) => {

    const newArr = list.map((el, i) => {
      if (index === i) {
        return el + 1
      }

      return el
    })

    setList(newArr)

  }
  const counterMinus = (index) => {

    const newAr = list.map((el, i) => {
      if (index === i) {
        return el - 1
      }

      return el
    })

    setList(newAr)

  }


  return (
      <div>

        {list.map((el, index) => {
          return <ListItem counterPlus={counterPlus} counterMinus={counterMinus} index={index} el={el}/>


        })

        }
      </div>
  );
}

export default App;
