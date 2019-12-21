import React, { Component } from "react";
import GivngDetail from "../components/GivngDetail";
import Groups from "../components/Groups";
import { SERVER_URL } from "../config";
import axios from 'axios';

class GivngDetailsPage extends Component {
  state = {
    givng: {
      id: null,
      name: "",
      budget: 0,
      groups: []
    }
  };

  componentDidMount() {
    this.fetchGroupDetail();
  }

  fetchGroupDetail() {
    const givingId = this.props.givngId;
    axios.get(`${SERVER_URL}/givngs/${givingId}.json`).then(res => {
      this.setState({ givng: res.data });
    });
  }
  
  addNewGivng = newGivng => {
    newGivng.givng_id = this.state.givng.id;
    axios
      .post(`${SERVER_URL}/groups.json`, { group: newGivng })
      .then(res => {
        console.log("Added new group successfull");
        console.log(res);
        this.fetchGroupDetail();
      })
      .catch(error => {
        console.log("Failed to add new group");
        console.log(error);
      });
  };

  addNewPerson = newPerson => {
    console.log(newPerson);
    // TODO: add axios request to post the person object.
    axios
      .post(`${SERVER_URL}/people.json`, { person: newPerson })
      .then(res => {
        console.log("Added new person successfull");
        console.log(res);
        this.fetchGroupDetail();
      })
      .catch(error => {
        console.log("Failed to add new person");
        console.log(error);
      });
  };

  deleteGivngGroup = groupId => {
    console.log("DELETING GROUP");
    axios
      .delete(`${SERVER_URL}/groups/${groupId}`)
      .then(res => {
        console.log("DELETING GROUP SUCCESSFULL");
        this.fetchGroupDetail();
      })
      .catch(err => {
        console.log("DELETING GROUP FAILED");
      });
  };

  deletePerson = (personId) => {
    console.log("DELETE PERSON");
    // todo: axios delete person
    axios
      .delete(`${SERVER_URL}/people/${personId}`)
      .then(res => {
        console.log("DELETEING PERSON SUCCESSFUL");
        this.fetchGroupDetail();
      })
      .catch(err => {
        console.log("DELETING PERSON FAILED");
      });
  };

  render() {
    return (
      <div>
        <GivngDetail givng={this.state.givng} />
        <Groups
          groups={this.state.givng.groups}
          onAddNewGivng={this.addNewGivng}
          onAddPerson={this.addNewPerson}
          onDeleteGroup={this.deleteGivngGroup}
          onDeletePerson={this.deletePerson}
        />

      </div>
    );
  }
}

export default GivngDetailsPage;
