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
              <tbody id="myTable" key={givngList.id}>
                <div class="d-flex flex-row justify-content-around my-3 px-5 text-center flex-wrap">
                  <div class="d-flex callOuts flex-column p-4 m-2 flex-fill">
                    <h3>{givngList.name}</h3>
                    <p>{givngList.budget}</p>
                    <a href="#" class="btn btn-outline-info">
                      Learn More
                    </a>
                  </div>
                  <div class="d-flex callOuts flex-column p-4 m-2 flex-fill">
                    <h3>{givngList.name}</h3>
                    <p>{givngList.budget}</p>
                    <a
                      href="#"
                      class="btn btn-outline-info"
                    >
                      Learn More
                    </a>
                  </div>
                  <div class="d-flex callOuts flex-column p-4 m-2 flex-fill">
                    <h3>{givngList.name}</h3>
                    <p>{givngList.budget}</p>
                    <a href="#" class="btn btn-outline-info">
                      Learn More
                    </a>
                  </div>
                </div>
              </tbody>
            );
        });
        return (
          <div>
            <Container>
              <h4>Groups</h4>
              {givngElements}
            </Container>
          </div>
        );
    }
}



export default Groups;