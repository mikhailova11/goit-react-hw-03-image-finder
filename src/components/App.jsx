import React, {Component} from 'react';
import Searchbar from './Searchbar';
import Loader from './Loader';
import Button from './Button';
import ImageGallery from './ImageGallery';
import Modal from './Modal';
import "../styles.css"

class App extends Component {
  state = {
    showModal: false,
  }

  togleModal = () => {
    this.setState(({showModal}) => ({
      showModal: !showModal
    }))
  }

  onSubmit = () => {
    
  }
  render () {
    const {showModal} = this.state
    return (
      <div className='App'>
        <Searchbar 
        text='Search' 
        onSubmit={this.onSubmit} />
        <Loader />
        <Button text='Load more...' />
        <ImageGallery onClick={this.togleModal}/>

        {showModal && <Modal onClose={this.togleModal}>
          <img src="" alt=""/>
        </Modal>}
        
      </div>
    );
  }
};

export default App
