import React, { Component } from "react";
import { Menu, Container } from "semantic-ui-react";
import Head from "next/head";
import { Link } from "../routes";
class Layout extends Component {
  // state = {  }
  render() {
    return (
      <Container>
        <Head>
          <link
            rel="stylesheet"
            href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
          />
        </Head>
        <Menu style={{ marginTop: "10px" }}>
          <Link route={`/`}>
            <a className="item">Ait</a>
          </Link>
          <Menu.Menu position="right" header="true">
            <Link route={`/register`}>
              <a className="item">Register</a>
            </Link>

            <Link route={`/update`}>
              <a className="item">Update</a>
            </Link>
          </Menu.Menu>
        </Menu>
        {this.props.children}
      </Container>
    );
  }
}

export default Layout;
