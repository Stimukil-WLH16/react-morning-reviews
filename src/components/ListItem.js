import React from 'react'

function ListItem(props){
    return(
        <div>
            {props.movie.title}
            {props.movie.year}
        </div>
    )
}

export default ListItem