import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

class App extends React.Component {

  state = {
    friends: friends
  };

  delete = () => {
   let filteredFriends = this.state.friends.filter((item) => {
     return (item.id !== id)
   })
   this.setState({friends: filteredFriends})
  }

  

  render(){  
    return <Wrapper>
      <h1 className="title">Friends List</h1>
      {this.state.friends.map(item => (
        <FriendCard delete={this.delete} id={item.id} name={item.name} image={item.image} occupation={item.occupation} location={item.location} key={item.id}/>
      ))}
    </Wrapper>
  }
};

export default App;
