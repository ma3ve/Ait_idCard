import React, { Component } from "react";
import web3 from "../ethereum/web3";
import Layout from "./layout";
import ait from "../ethereum/Ait";
import { Form, Button, Input, Table } from "semantic-ui-react";
class Index extends Component {
  state = {
    regno: 0,
    name: " ",
    rollno: "",
    branch: " ",
    dob: " ",
    bloodGp: "",
    loading: false
  };
  onSubmit = async event => {
    event.preventDefault();
    this.setState({ loading: true });

    const student = await ait.methods.student(this.state.regno).call();
    this.setState({
      name: student.name,
      rollno: student.rollno,
      branch: student.branch,
      dob: student.dob,
      bloodGp: student.bloodGp,
      isStudent: student.isStudent
    });
    this.setState({ loading: false });
  };

  renderTable() {
    return (
      <Table>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Is Registered</Table.Cell>
            <Table.Cell>{this.state.isStudent ? "Yes" : "No"}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Name</Table.Cell>
            <Table.Cell>{this.state.name}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Roll No</Table.Cell>
            <Table.Cell>{this.state.rollno}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Branch</Table.Cell>
            <Table.Cell>{this.state.branch}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Date of Birth</Table.Cell>
            <Table.Cell>{this.state.dob}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Blood Group</Table.Cell>
            <Table.Cell>{this.state.bloodGp}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    );
  }
  render() {
    // const { student } = this.state;
    return (
      <Layout>
        <h1>it is index page</h1>
        <Form onSubmit={this.onSubmit}>
          <Form.Field>
            <label>regno</label>
            <Input
              value={this.state.regno}
              onChange={event => this.setState({ regno: event.target.value })}
            />
          </Form.Field>
          <Button primary loading={this.state.loading}>
            Submit
          </Button>
        </Form>
        {this.renderTable()}
        {/* <h1>{this.state.name}</h1> */}
      </Layout>
    );
  }
}

export default Index;
