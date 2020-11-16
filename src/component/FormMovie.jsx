import React, { Component } from "react";

class FormMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      poster: "",
      comment: ""
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitForm = (e) => {
    e.preventDefault();
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    };
    const url = "https://post-a-form.herokuapp.com/api/movies";
    fetch(url, config)
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          alert(res.error);
        } else {
          alert(`Your movie has been successfully added!`);
        }
      })
      .catch((e) => {
        console.error(e);
        alert("There was an error when adding your movie.");
      });
  };

  render() {
    const { title, poster, comment } = this.state;
    return (
      <div className="FormMovie">
        <h1>Favorites movies</h1>

        <form onSubmit={this.submitForm}>
          <fieldset>
            <legend>Submition Form</legend>
            <div className="form-data">
              <label htmlFor="title">Movie Name</label>
              <input
                type="text"
                id="title"
                name="title"
                onChange={this.onChange}
                value={title}
              />
            </div>

            <div className="form-data">
              <label htmlFor="poster"> Poster Movie URL</label>
              <input
                type="text"
                id="poster"
                name="poster"
                onChange={this.onChange}
                value={poster}
              />
            </div>

            <div className="form-data">
              <label htmlFor="comment">Comments</label>
              <textarea
                type="text"
                id="comment"
                name="comment"
                onChange={this.onChange}
                value={comment}
              />
            </div>
            <hr />
            <div className="form-data">
              <input type="submit" value="Send" />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default FormMovie;
