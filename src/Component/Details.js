import React, { Component } from 'react';

class Details extends Component {
  render() {
    return (
      <div className='infodisplay'>
        <h1>Employe Feedback Data</h1>
        <div className='displayInfo'>
          {this.props.data.map((value, index) => {
            return (
              <div className='detailbox'>
                Name : {value.name} || Department : {value.dept} || Rating:
                {value.rating}
              </div>
            );
          })}
        </div>
        <button className='goback' onClick={() => this.props.back()}>
          Go Back
        </button>
      </div>
    );
  }
}

export default Details;
