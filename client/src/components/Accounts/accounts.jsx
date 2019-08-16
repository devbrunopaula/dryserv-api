import React, { Component } from 'react'

class Accounts extends Component {

    state = {
        data: []
    }
  

    componentDidMount(){
        this.getAccounts()
    }

    getAccounts = () =>{
        fetch(`https://dryserv-api.herokuapp.com/accounts`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Request-Method': 'GET'
            }

        })
            .then((response) => response.json())
            .then((data) => { 
                console.log(data);
                this.setState({data: data})
             });
    
    }

    render() {

        const { data }= this.state
        return (
            <div>
                <h1>Hello from Accounts Page</h1>
                <ul>
                    {data.map( account => {
                        return(
                            <>
                            <li key={account.id}>{account.name}</li>
                            <p>{account.phone1}</p>
                            </>
                        )
                    }
                    )}
                </ul>
            </div>
        )
    }
}

export default Accounts