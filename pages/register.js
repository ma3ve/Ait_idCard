import React, { Component } from "react";
import web3 from "../ethereum/web3";
import { Input, Form, Button, Message, Grid } from "semantic-ui-react";
import Layout from "./layout";
import ait from "../ethereum/Ait";
import { Link } from "../routes";

class register extends Component {
  state = {
    regno: "",
    name: " ",
    rollno: "",
    branch: " ",
    dob: " ",
    bloodGp: "",
    errmsg: "",
    loading: false
  };
  onSubmit = async () => {
    event.preventDefault();
    this.setState({ loading: true, errmsg: "" });
    const { regno, name, rollno, branch, dob, bloodGp } = this.state;
    const accounts = await web3.eth.getAccounts();
    // console.log(accounts[0]);
    const manager = await ait.methods.manager().call();
    try {
      await ait.methods
        .register(regno, name, rollno, branch, dob, bloodGp)
        .send({ from: accounts[0] });
    } catch (err) {
      this.setState({ errmsg: err.message });
    }
    this.setState({ loading: false });
  };
  render() {
    return (
      <Layout>
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column width={13}>
              <Form onSubmit={this.onSubmit} error={!!this.state.errmsg}>
                <Form.Field>
                  <label>Registration No</label>
                  <Input
                    value={this.state.regno}
                    onChange={event =>
                      this.setState({ regno: event.target.value })
                    }
                  />
                </Form.Field>
                <Form.Field>
                  <label>Name</label>
                  <Input
                    value={this.state.name}
                    onChange={event =>
                      this.setState({ name: event.target.value })
                    }
                  />
                </Form.Field>
                <Form.Field>
                  <label>Roll No</label>
                  <Input
                    value={this.state.rollno}
                    onChange={event =>
                      this.setState({ rollno: event.target.value })
                    }
                  />
                </Form.Field>
                <Form.Field>
                  <label>Branch</label>
                  <Input
                    value={this.state.branch}
                    onChange={event =>
                      this.setState({ branch: event.target.value })
                    }
                  />
                </Form.Field>
                <Form.Field>
                  <label>Date of Birth</label>
                  <Input
                    value={this.state.dob}
                    onChange={event =>
                      this.setState({ dob: event.target.value })
                    }
                  />
                </Form.Field>
                <Form.Field>
                  <label>Blood Group</label>
                  <Input
                    value={this.state.bloodGp}
                    onChange={event =>
                      this.setState({ bloodGp: event.target.value })
                    }
                  />
                </Form.Field>
                <Message error header="opps" content={this.state.errmsg} />

                <Button primary loading={this.state.loading}>
                  Submit
                </Button>
              </Form>
            </Grid.Column>
            <Grid.Column width={3}>
              <Link route={`/change`}>
                <a>
                  <Button primary floated="right">
                    Update!!
                  </Button>
                </a>
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Layout>
    );
  }
}

export default register;
