import React, { Component } from "react";

export class News extends Component {
  articles = [];
  constructor(props) {
    super(props);
    this.state = {
      photo: null
    };
  }

  componentDidMount() {
    const apiUrl =
      "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=luhAN7hK9UfXrLQNcUYeD7WkMmbAs4HlaNWfKEoA";


    
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("There is problem!");
        }
        return response.json();
      })
      .then((data) => {
        // Assuming the response has the same structure as the provided example
        //this.setState({ photo: data, loading: false });
        this.setState({ photo: data, loading: false });
      });
  }

  render() {
    return <div></div>;
  }
}

export default News;
