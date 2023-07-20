import { useState } from "react";

function Item({title}) {
    const [myTitle, setMyTitle] = useState(title);
    const changeIt = ()=>{
        setMyTitle("Update")
    }
  return (
    <div>
      {myTitle}
      <button onClick={changeIt}>Change</button>
    </div>
  )
}

export default Item
