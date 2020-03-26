import React from 'react'
import './App.css'
import List from './components/List'

function App(){
    return(
    <div className="App">
        <h1 className="movie-title-list">The Most Amazing Movie List</h1>
        <List />
    </div>
    )
}

export default App













// class App extends React.Component{
//     constructor(){
//         super()
//     }
//     render(){
//         return(
//             <div className="App">
//                 <h1 className="movie-list-title">The Most Amazing Movie List</h1>
//             </div>
//         )
//     }
// }
// export default App