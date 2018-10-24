import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";


class App extends React.Component {

  state = {
    friends: friends,
    score: 0,
    message: "",
    notClicked: friends
  };

  imageShuffle = item => {
    for (let x = item.length - 1; x > 0; x--) {
        let y = Math.floor(Math.random() * (x + 1));
        [item[x], item[y]] = [item[y], item[x]];
    }
  };

  click = (id) => {
    const check = this.state.notClicked.find(data => data.id === id);
    if(check === undefined){
      this.setState({
      message: "Sorry, you lost! You scored " + this.state.score + " points! Try again!",
      score: 0,
      notClicked: friends
      })
    }else{
      const newNotClicked = this.state.notClicked.filter(data => data.id !== id);
      
      this.setState({
        score: this.state.score + 1,
        message: "Good Job! Keep it up!",
        friends:friends,
        notClicked: newNotClicked
      });

      this.imageShuffle(friends);
    };
  }

  render(){  
    return <div>
        <h1 className="title">Memory Game</h1>
        <h2>Current Score: {this.state.score} {this.state.message}</h2>      
        <Wrapper>
            {this.state.friends.map(item => (
              <FriendCard click={this.click} id={item.id} name={item.name} image={item.image} key={item.id}/>
            ))}
        </Wrapper>
      </div>

  }
};

export default App;
