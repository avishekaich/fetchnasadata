import React, { Component } from "react";
import NewsArticle from "./NewsArticle";

export class News extends Component {
  articles = [];
  // const cameraInfo = data.photos[0].camera;
  constructor() {
    super();
    this.state = {
      // newsarticles: this.articles,
    };
  }

  async componentDidMount() {
    // let url =
    //   "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=luhAN7hK9UfXrLQNcUYeD7WkMmbAs4HlaNWfKEoA";

    let data = await fetch(
      "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=luhAN7hK9UfXrLQNcUYeD7WkMmbAs4HlaNWfKEoA"
    );
    let parsedData = await data.json();
    console.log(parsedData.photos[0].rover);
    this.setState({ articles: parsedData.photos });
  }

  render() {
    return (
      <div className="my-4">
        <h4 className="mb-3">This is a News component.</h4>
        <div className="row">
          {this.state.articles?.map((element) => {
            return (
              <div
                className="col-xl-3 col-lg-4 col-md-6 mb-4"
                // key={element}
              >
                <NewsArticle
                  imageUrl={element.img_src}
                  earthdate={element.earth_date}
                  cameraFullName={element.camera.full_name}
                  cameraName={element.camera.name}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
