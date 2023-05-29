export const addTask = (id, text, isComplited, change) => ({
    type: "ADD_TASK",
    id,
    text,
    isComplited,
    change
})


export const removeTask = (id) => ({
    type: "REMOVE_TASK",
    id,
})

export const checkTask = (id, text, isComplited, change) => ({
    type: "CHECK_TASK",
    id,
    text,
    isComplited,
    change
})

export const addText = (text) => ({
    type: "ADD_TEXT",
    text,
})

export const editTask = (id, text, change) => {
      if(change) {
        return ({
            type: "EDIT_TASK1",
            id,
            text,
        })
      } else {
        return ({
            type: "EDIT_TASK2",
            id,
        })
      }
    }





