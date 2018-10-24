import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

class App extends React.Component {

  state = {
    friends: friends,
    score: 0,
    message: ""
  };

  imageShuffle = item => {
    for (let x = item.length - 1; x > 0; x--) {
        let y = Math.floor(Math.random() * (x + 1));
        [item[x], item[y]] = [item[y], item[x]];
    }
  };

  click = (id) => {
    console.log(id);
    console.log(this.state.friends[id-1].id);
    console.log(this.state.friends);


    if(this.state.friends[id-1].clicked){
      this.lose();
    }else{
      var newState = {...this.state};

      newState.friends[id-1].clicked = true;

      newState.score = this.state.score + 1;
      newState.message = "Good Job! Keep it up!";
      this.setState(newState);     
      this.imageShuffle(newState.friends);
    };


  }

  lose = () => {
    var newState = {...this.state};
    newState.message = "Sorry, you lost! You scored " + this.state.score + " points! Try again!";
    newState.score = 0;
    newState.friends = friends;
    this.setState(newState); 
  }


  render(){  
    return <div>
        <h1 className="title">Memory Game</h1>
        <h2>Current Score: {this.state.score} {this.state.message}</h2>      
        <Wrapper>
            {this.state.friends.map(item => (
              <FriendCard click={this.click} id={item.id} name={item.name} image={item.image} clicked={item.clicked} key={item.id}/>
            ))}
        </Wrapper>
      </div>

  }
};

export default App;
