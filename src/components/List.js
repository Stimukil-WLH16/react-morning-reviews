import React, {Component} from 'react'
import '../App.css'
import movies from '../data/movies.json'
import ListItem from './ListItem'

class List extends Component{
    constructor(){
        super()

        this.state = {
            movies: movies
        }
    }

    render(){

        const moviesMap = this.state.movies.map(movie => {
            return <ListItem key={movie.id} movie={movie}/>
        })

        return(
            <div>
                I am the List Component
                {moviesMap}
            </div>
        )
    }

}
export default List