//this file is no longer used, data is stored in firebase instead of local storage

export function addItemToStorage(item){
    //the id refers to product id
    const items = localStorage.getItem("cart") ?
    JSON.parse(localStorage.getItem("cart")) : [];

    let temp = [...items];
    const index = items.findIndex(element=>element.id===item.id&&element.flavor===item.flavor);
    if(index!==-1){
        temp[index].quantity += item.quantity;
    } else {
        temp = [...items,item];   
    }

    localStorage.setItem("cart",JSON.stringify(temp));
}

export function getItemsFromStorage(){
    const items = localStorage.getItem("cart") ?
    JSON.parse(localStorage.getItem("cart")) : [];
    return items;
}

export function removeItemsFromStorageByIndex(index){
    const items = localStorage.getItem("cart") ?
    JSON.parse(localStorage.getItem("cart")) : [];
    let temp = [...items];
    temp.splice(index,1);
    
    localStorage.setItem("cart",JSON.stringify(temp));
}

export function updateItems(newItems){
    localStorage.setItem("cart",JSON.stringify(newItems));
}