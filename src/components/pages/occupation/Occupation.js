import React, { Component } from 'react'

export class Occupation extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             occupations : [
                    {
                    _id: "61b8df189986540016cd22b6",
                    name: "A",
                    __v: 0
                    },
                    {
                    _id: "61b8df209986540016cd22b8",
                    name: "B",
                    __v: 0
                    },
                    {
                    _id: "61b8df299986540016cd22ba",
                    name: "C",
                    __v: 0
                    }
             ]
        }
    }
    getOccupation = () =>{
        axios.get("https://fierce-ridge-76224.herokuapp.com/occupations/").then(
            Response =>{
                this.setState({
                    occupations : Response.data
                })
            }
        )
    }
    componentDidMount(){
        this.getOccupation()
    }
    
    render() {
        return (
            <div>
                <table class="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>VERSION</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.occupations.map(occupation =>(
                             
                        <tr>
                            
                             <td scope="row">{occupation._id}</td>
                                    <td>{occupation.name}</td>
                                    <td>{occupation.__v}</td>
                        </tr>
                            ))}
                    </tbody>
                </table>
                
            </div>
        )
    }
}

export default Occupation
