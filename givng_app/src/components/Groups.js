import React from 'react';

import { SERVER_URL } from "../config";
import "bootstrap/dist/css/bootstrap.min.css";
import {Container} from "react-bootstrap";
import "./Groups.css";

class Groups
    extends React.Component {
    state = {
        givngList: []
    };
    componentDidMount() {
        let self = this;

        fetch(SERVER_URL + "/groups.json")
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
              <div key={givngList.id}>
                
                    <h3>{givngList.name}</h3>
                    <p>{givngList.budget}</p>
                    <a href="#" class="btn btn-outline-info">
                      Learn More
                    </a>
              </div>
            );
        });
        return (
          <div>
            <Container>
              <h4>Groups</h4>
              {givngElements}
              <br />
              <button>Add a new group</button>
            </Container>
          </div>
        );
    }
}



export default Groups;