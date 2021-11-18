import React from "react";
import less from './less/main.less'

export class App extends React.Component {
    constructor(){
        super()
        this.state = {
            date: new Date(),
        }
        setInterval(() => {
            this.setState({
                date:new Date()
            })
        }, 1000);
    }

    now(){
        return this.state.date.valueOf()
    }

    render(){
        return <div className="red">{this.now()}</div>
    }
}