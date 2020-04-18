import React from "react";
import Modal from "react-modal";
import "../App.css";
class Modall extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      img: "",
      name: "",
      star: "",
      year: "",
      duration: "",
    };
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  
  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  add = (e) => {
    e.preventDefault()
    const { img, name, star, year, duration } = this.state;
    const newMovie = {
      img, name, star, year, duration
    }
    console.log(newMovie)
   this.props.add(newMovie);
   this.setState({
     modalIsOpen:false
   })
  };
  render() {
    return (
      <div className="add">
        <button
          type="button"
          class="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"onClick={this.openModal}
        >
          Add movie
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          className="modall"
          contentLabel="Example Modal"
        >
        
            <label for="lname">Image Url</label>
            <input
              type="text"
              id="lname"
              name="img"
              placeholder="Image url.."
              onChange={this.handleChange}
            />
            <label for="fname">Movie Name</label>
            <input
              type="text"
              id="fname"
              name="name"
              placeholder="Movie name.."
              onChange={this.handleChange}
            />

            <label for="lname">Movie rating</label>
            <input
              type="text"
              id="lname"
              name="star"
              placeholder="Movie rating.."
              onChange={this.handleChange}
            />
            <label for="lname">year</label>
            <input
              type="text"
              id="lname"
              name="year"
              placeholder="Movie year.."
              onChange={this.handleChange}
            />
          

          <button 
                  type="button"
                  class="btn btn-primary"
                  data-dismiss="modal"
                  onClick={(e)=>this.add(e)}
                >
                  Save
                </button>
 
        </Modal>
      </div>
    );
  }
}
export default Modall;
