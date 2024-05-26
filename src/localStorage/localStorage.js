// get data from local storage

const getItemFromLS = () =>{
    const getItem = localStorage.getItem('cards')
    if (getItem) {
        return JSON.parse(getItem)
    }

    return []
}

// save data in local storage
const saveItemInLS = card =>{
   const saveItem = JSON.stringify(card)
   localStorage.setItem('cards', saveItem)
}

// add item in local storage

const addItemToLS = id =>{
    const addItem = getItemFromLS()
    addItem.push(id)
    saveItemInLS(addItem)
}

// remove single item from local storage
const removeSingleItemFromLS = id =>{
    const cards = getItemFromLS()
    const remainingItem = cards.filter(idx => idx !== id)
    saveItemInLS(remainingItem)
}


// remove all item from local storage

const removeAllItem = () =>{
  const allItem = getItemFromLS()
  localStorage.clear(allItem)
}

export {getItemFromLS, addItemToLS, removeSingleItemFromLS, removeAllItem}