import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class App extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
        <div>This is a simple React boilerplate</div>)
    }
}

ReactDOM.render(<App/>,document.getElementById('root'))