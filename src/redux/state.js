import {rerenderEntireTree} from "../render";

let state={
    profilePage:{
        posts:[
            {id: 1, message: "Java Rush it is not cool", likesCount:12},
            {id: 2, message: 'Code Academy its the best', likesCount:10},
            {id: 3, message: 'hi', likesCount:1},
            {id: 4, message: 'Do not sleep', likesCount:5}
        ]

    },
 dialogsPage:{
     messages:[
         {id: 1, message: 'Hi how are you'},
         {id: 2, message: 'Do not be upset'},
         {id: 3, message: 'Does not matter'},
         {id: 4, message: 'Why are you here'},
         {id: 5, message: 'Do not be shy'},
         {id: 6, message: 'Call after six'}
     ],
     dialogs:[
         {id : 1, name: 'Alex'},
         {id : 2, name: 'Ivan'},
         {id : 3, name: 'Dasha'},
         {id : 4, name: 'Sveta'},
         {id : 5, name: 'Marina'},
         {id : 6, name: 'Viktor'}
     ]
 },
    sidebarPage:{
        sidebar:
        [
    {id:1, name: 'Alex'},
    {id:2, name: 'Kolia'},
    {id:3, name: 'Varia'}
]
    }

}
export let addPost =(postMessage)=> {
    let newPost={id:5,
        message:postMessage,
        likesCount:0};

    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export default state;