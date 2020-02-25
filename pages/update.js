import React, { Component } from "react";
import { Form, Grid, Input, Button, Message } from "semantic-ui-react";
import Layout from "./layout";
import web3 from "../ethereum/web3";
import ait from "../ethereum/Ait";

class change extends Component {
  state = {
    name: "",
    rollno: "",
    branch: "",
    regno: "",
    dob: "",
    bloodGp: " ",
    nloading: false,
    rloading: false,
    bloading: false,
    dloading: false,
    gloading: false,
    lloading: false,
    nerrmsg: "",
    rerrmsg: "",
    berrmsg: "",
    derrmsg: "",
    gerrmsg: "",
    lerrmsg: ""
  };
  changeName = async () => {
    this.setState({ nloading: true, nerrmsg: "" });
    try {
      const accounts = await web3.eth.getAccounts();
      await ait.methods
        .changeName(this.state.name, this.state.regno)
        .send({ from: accounts[0] });
      // console.log(this.state.regno);
    } catch (error) {
      this.setState({ nerrmsg: error.message });
    }
    this.setState({ nloading: false });
  };

  changeRollNo = async () => {
    this.setState({ rloading: true, rerrmsg: "" });
    try {
      const accounts = await web3.eth.getAccounts();
      await ait.methods
        .changeRollno(this.state.rollno, this.state.regno)
        .send({ from: accounts[0] });
    } catch (error) {
      this.setState({ rerrmsg: error.message });
    }
    this.setState({ rloading: false });
  };

  changeBranch = async () => {
    this.setState({ bloading: true, berrmsg: "" });
    try {
      const accounts = await web3.eth.getAccounts();
      await ait.methods
        .changeBranch(this.state.branch, this.state.regno)
        .send({ from: accounts[0] });
    } catch (error) {
      this.setState({ berrmsg: error.message });
    }
    this.setState({ bloading: false });
  };

  changeDob = async () => {
    this.setState({ dloading: true, derrmsg: "" });
    try {
      const accounts = await web3.eth.getAccounts();
      await ait.methods
        .changeDob(this.state.dob, this.state.regno)
        .send({ from: accounts[0] });
    } catch (error) {
      this.setState({ derrmsg: error.message });
    }

    this.setState({ dloading: false });
  };

  changeBloodGp = async () => {
    this.setState({ gloading: true, gerrmsg: "" });
    try {
      const accounts = await web3.eth.getAccounts();
      await ait.methods
        .changeBloodGp(this.state.bloodGp, this.state.regno)
        .send({ from: accounts[0] });
    } catch (error) {
      this.setState({ gerrmsg: error.message });
    }

    this.setState({ gloading: false });
  };

  left = async () => {
    this.setState({ lloading: true, lerrmsg: "" });
    try {
      const accounts = await web3.eth.getAccounts();
      await ait.methods.left(this.state.regno).send({ from: accounts[0] });
    } catch (error) {
      this.setState({ lerrmsg: error.message });
    }
    this.setState({ lloading: false });
  };

  render() {
    return (
      <Layout>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Form>
                <Form.Field inline>
                  <label>Reg No. </label>
                  <Input
                    value={this.state.regno}
                    onChange={event =>
                      this.setState({ regno: event.target.value })
                    }
                  />
                </Form.Field>
              </Form>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Form onSubmit={this.changeName} error={!!this.state.nerrmsg}>
                <Form.Field inline>
                  <label>Name :</label>
                  <Input
                    value={this.state.name}
                    onChange={event =>
                      this.setState({ name: event.target.value })
                    }
                  />
                  <Button
                    positive
                    style={{ marginLeft: "10px" }}
                    loading={this.state.nloading}
                  >
                    Submit
                  </Button>
                  <Message error header="oops!" content={this.state.nerrmsg} />
                </Form.Field>
              </Form>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Form onSubmit={this.changeRollNo} error={!!this.state.rerrmsg}>
                <Form.Field inline>
                  <label>Roll No :</label>
                  <Input
                    value={this.state.rollno}
                    onChange={event =>
                      this.setState({ rollno: event.target.value })
                    }
                  />
                  <Button
                    positive
                    style={{ marginLeft: "10px" }}
                    loading={this.state.rloading}
                  >
                    Submit
                  </Button>
                  <Message error header="oops!" content={this.state.rerrmsg} />
                </Form.Field>
              </Form>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Form onSubmit={this.changeBranch} error={!!this.state.berrmsg}>
                <Form.Field inline>
                  <label>Branch :</label>
                  <Input
                    value={this.state.branch}
                    onChange={event =>
                      this.setState({ branch: event.target.value })
                    }
                  />
                  <Button
                    positive
                    style={{ marginLeft: "10px" }}
                    loading={this.state.bloading}
                  >
                    Submit
                  </Button>
                </Form.Field>
                <Message error header="oops!" content={this.state.berrmsg} />
              </Form>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Form onSubmit={this.changeDob} error={!!this.state.derrmsg}>
                <Form.Field inline>
                  <label>Date of Birth :</label>
                  <Input
                    value={this.state.dob}
                    onChange={event =>
                      this.setState({ dob: event.target.value })
                    }
                  />
                  <Button
                    positive
                    style={{ marginLeft: "10px" }}
                    loading={this.state.dloading}
                  >
                    Submit
                  </Button>
                </Form.Field>
                <Message error header="oops!" content={this.state.derrmsg} />
              </Form>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Form onSubmit={this.changeBloodGp} error={!!this.state.gerrmsg}>
                <Form.Field inline>
                  <label>Blood Group :</label>
                  <Input
                    value={this.state.bloodGp}
                    onChange={event =>
                      this.setState({ bloodGp: event.target.value })
                    }
                  />
                  <Button
                    positive
                    style={{ marginLeft: "10px" }}
                    loading={this.state.gloading}
                  >
                    Submit
                  </Button>
                  <Message error header="oops!" content={this.state.gerrmsg} />
                </Form.Field>
              </Form>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Form onSubmit={this.left} error={!!this.state.lerrmsg}>
                <Message error header="oops!" content={this.state.lerrmsg} />

                <Button
                  positive
                  style={{ marginTop: "10px" }}
                  negative
                  loading={this.state.lloading}
                >
                  LEFT!!!!
                </Button>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Layout>
    );
  }
}

export default change;
