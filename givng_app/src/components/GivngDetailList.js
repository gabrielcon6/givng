import React from 'react';

import { SERVER_URL } from "../config";

class GivngDetailList
 extends React.Component {
    state = { 
        givngList: []
     };
    componentDidMount() {
        let self = this;

        fetch(SERVER_URL + "/givngs.json") 
            .then(response => response.json())
            .then(json => {
                self.setState(state => {
                    console.log("json :", json);

                    return {
                        ...state,
                        givngList: [...json]
                    };
                });
            });
    }
    render() { 
        const givngElements = this.state.givngList.map((givngList, index) => {
            return (
                <tbody id="myTable" key={givngList.id}>
                    <tr>
                        <td>
                            {givngList.date
                                .split("-")
                                .reverse()
                                .join("/")}
                        </td>
                        <td>{givngList.budget}</td>
                        <td>{givngList.theme}</td>
                        
                    </tr>
                </tbody>
                // </Fragment>
            );
        });
        return (<div>
            
            <h4>Givngs</h4>
            <container>
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Budget</th>
                            <th>Theme</th>
                           
                        </tr>
                    </thead>
                    {givngElements}
                </table>
            </container>
        </div> );
    }
}



export default GivngDetailList
;