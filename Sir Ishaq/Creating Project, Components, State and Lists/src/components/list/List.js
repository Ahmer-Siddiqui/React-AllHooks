import Item from "../item/Item";

function List(){
    const arr = ['Item 1'];
    // const arr = ['Item 1', 'Item 2'];
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