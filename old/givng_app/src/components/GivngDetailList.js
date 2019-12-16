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
  
        const givngTitle = this.state.givngList.map((givngList, index) => {
            return (
                <>
                <h1>{givngList.theme}</h1>
                <h2>Total Budget: {givngList.budget}</h2>
                </>
            )
        })
        return (<div>
            {givngTitle}
            
            
        </div> );
    }
}



export default GivngDetailList
;