import React from "react";

class MemeGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topText: "",
      bottomText: "",
      randomImage: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: [],
      isFetchFinished: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.setRandomImage = this.setRandomImage.bind(this)
    this.getRandomImage = this.getRandomImage.bind(this)
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(json => {
        const { memes } = json.data;
        console.log(memes[0])
        this.setState({
          allMemeImgs: memes,
          isFetchFinished: true
        });
      });
  }

  getRandomImage(){
      return this.state.allMemeImgs[Math.floor(Math.random() * this.state.allMemeImgs.length)].url
  }

  setRandomImage(){
    event.preventDefault()
    this.setState({
        randomImage: this.getRandomImage()
    })
  }

  handleChange(){
      const {name,value} = event.target
      this.setState({
          [name]: value
      })
  }

  render() {
    return (
      <div>
        <form className="meme-form">
          <input
            type="text"
            name="topText"
            placeholder="top text"
            value={this.state.topText}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="bottomText"
            placeholder="bottom text"
            value={this.state.bottomText}
            onChange={this.handleChange}
          />
          { this.state.isFetchFinished ? <button onClick={this.setRandomImage}>Random Meme Image!</button> : <button>Loading...</button>}
        </form>
        <div className="meme">
            <img src={this.state.randomImage}/>
            <h2 className="top">{this.state.topText}</h2>
            <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
      </div>
    );
  }
}

export default MemeGenerator;
