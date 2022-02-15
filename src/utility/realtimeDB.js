import { ref, set, get, child } from "firebase/database";
import {db} from './firebase';

export function updateCartItems(uid,items){
    set(ref(db,`users/${uid}/cart`),[...items]);
}

export async function getCartItems(uid){
    const snapshot = await get(child(ref(db),`users/${uid}/cart`));
    return snapshot.val() || [];
}

export async function addCartItem(uid,newItem){
    let items = await getCartItems(uid) || [];
    console.log(items);
    const index = items.findIndex(item=>item.id===newItem.id);
    if(index!==-1) items[index].quantity += newItem.quantity;
    else items = [...items,newItem];
    set(ref(db,`users/${uid}/cart`),[...items]); 
}

export async function removeByIndex(uid,index){
    let items = await getCartItems(uid);
    items.splice(index,1);
    set(ref(db,`users/${uid}/cart`),[...items]);
}