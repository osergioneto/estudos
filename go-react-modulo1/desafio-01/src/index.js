import React, { Component, Fragment } from "react";
import { render } from "react-dom";

import Header from "./js/components/Header";
import Post from "./js/components/Post";
import "./reset.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          profilePicture:
            "https://avatars3.githubusercontent.com/u/17184941?s=460&v=4",
          name: "Sérgio Deusdedith de Araujo Neto",
          timePost: "3 minutos",
          postText: `It is a long established fact that a reader will be distracted 
          by the readable content of a page when looking at its layout. The point 
          of using Lorem Ipsum is that it has a more-or-less normal distribution 
          of letters, as opposed to using 'Content here, content here', making it 
          look like readable English. Many desktop publishing packages and web page 
          editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' 
          will uncover many web sites still in their infancy. Various versions have 
          evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`
        },
        {
          profilePicture:
            "https://avatars1.githubusercontent.com/u/1024025?s=400&v=4",
          name: "Linus Torvalds",
          timePost: "2 horas",
          postText: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
        },
        {
          profilePicture:
            "https://avatars3.githubusercontent.com/u/499550?s=400&v=4",
          name: "Evan You",
          timePost: "5 dias",
          postText: `Contrary to popular belief, Lorem Ipsum is not simply random text. 
          It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. 
          Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, 
          looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, 
          and going through the cites of the word in classical literature, discovered the undoubtable source. 
          Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" 
          (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book 
          is a treatise on the theory of ethics, very popular during the Renaissance. 
          The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`
        }
      ]
    };
  }
  render() {
    console.log(
      this.state.data.map((obj, index) =>
        console.log(obj.profilePicture, obj.name, obj.timePost)
      )
    );
    return (
      <Fragment>
        <Header />
        {this.state.data.map((obj, index) => {
          return (
            <Post
              picture={obj.profilePicture}
              name={obj.name}
              timePost={obj.timePost}
              postText={obj.postText}
            />
          );
        })}
      </Fragment>
    );
  }
}

render(<App />, document.getElementById("app"));