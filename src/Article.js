import React from 'react';


export default class Article extends React.Component {

  componentDidMount() {
    console.log('componentDidMount() lifecycle Article')
  }
  componentDidUpdate() {
    console.log('componentDidUPdate() lifecycle Article')
  }
  
  render() {
  return (
<div>
      <div>
        Article
      </div>
            <div>
            Time {new Date().toLocaleString() + ""}
          </div>
          </div>
  )
  }
}




