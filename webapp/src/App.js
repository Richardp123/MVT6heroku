import React, { Component } from 'react';
import './App.css';
import Chatroom from "./comp/Chatroom";
import Landing from "./comp/Landing";

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      landingDisplay:true,
      chatroomDisplay:false
    }
    this.enterChatroom = this.enterChatroom.bind(this);
  }

  enterChatroom(show){
    this.setState({
      landingDisplay:false,
      chatroomDisplay:true
    })
  }

  render() {

    var mycomp = null;

    if(this.state.landingDisplay === true){
      mycomp = <Landing enterChatroom={this.enterChatroom}/>;
    } else if(this.state.chatroomDisplay === true){
      mycomp = <Chatroom />;
    }

    return (
      <div className="App">

        {mycomp}

      </div>
    );
  }
}

export default App;
