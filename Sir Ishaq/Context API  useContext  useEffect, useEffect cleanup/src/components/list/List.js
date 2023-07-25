import { useState } from "react";
import Item from "../item/Item";

function List({arr}){

    const newArr = arr.map((elem, index)=>{
        return (
            <Item key={index} title={elem} />
        );
    })
    return(
        <>
         {newArr}
        </>
    );
}

export default List;