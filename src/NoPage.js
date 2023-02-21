import React from 'react';


export default class NoPage extends React.Component {

  componentDidMount() {
    console.log('componentDidMount() lifecycle')
  }
  render() {
  return (

      <div>
        nopage!
      </div>

  )
  }
}




