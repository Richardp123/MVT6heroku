import React, { Component } from 'react';

class Landing extends Component {

  constructor(props){
    super(props);

    this.enterChatroom = this.enterChatroom.bind(this);
  }

  enterChatroom(){
    this.props.enterChatroom(true);
  }

  render() {

    return (
      <div>

        <div id="mainPage">

          <div id="mvtInfo">MOTOR VEHICKLE FEFT IS THE SICKSTH ITTERATION OF THE POPULAR CAR STEALING GAME MOTER VHIKKEL THEPHTD. ITS GOT AKSHIN PACKED CAR STEELING AND DRIVING. PLAY WITH YOURE FEIRNDS OR ALONE. YOU WILL HAVE LOTS OF FUNS.
            <br />
            <button onClick={this.enterChatroom} id="mvtBut">ENTER</button>
          </div>

          </div>
          <div id="mvtLogo">
        </div>

      </div>
    );
  }
}

export default Landing;
