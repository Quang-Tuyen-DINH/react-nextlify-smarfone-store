import React, { Component } from 'react'

export default class Default extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
            <h1 className="display-3">404 error</h1>
            <h1>page not found</h1>
            <br />
            <h4>the requested url
              <span className="text-danger">
                {this.props.location.pathname}
              </span>{" "}
              was not found
            </h4>
          </div>
        </div>
      </div>
    )
  }
}
