import React, {PureComponent} from 'react';
import Searchbar from './Searchbar';
import Loader from './Loader';
import Button from './Button';
import ImageGallery from './ImageGallery';
import Modal from './Modal';
import "../styles.css"
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class App extends PureComponent {
  state = {
    showModal: false,
    hits: [],
    value: '',
    status: 'idle',
    activeIndex: 0,
    error: null,
    page: 1
    
  }
//componentDidUpdate всегда делается через  проверку if... так как может зациклиться
   componentDidUpdate(prevProps, prevState) {
    const {value, page, hits} = this.state
    
    const API_KEY =  '24874837-d0558540b09f2ee4305703a66';
    const BASE_URL = 'https://pixabay.com/api/';

    

    if(prevState.value !== value ||
      prevState.page !== this.state.page){

      this.setState({page: 1,
        status: 'pending'});

         fetch(`${BASE_URL}?key=${API_KEY}&q=${value}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`)
         .then(
          (response) => {
            if (!response.ok) {
              throw new Error(response.status);
            }
            return response.json();
          }
        )
        .then (hits => 
          this.setState({
          hits: hits.hits,
          status: 'resolve',
        })

        )
        .then (()=>{
          if (page > 1) {
            this.setState(prevState => ({
              hits: [ ...hits, ...prevState.hits],
            }))
            window.scrollTo({
              top: document.documentElement.scrollHeight,
              behavior: 'smooth',
            });
          }}
        )

      .catch (error => 
        this.setState({error: error.message})
      )
    }


  }
  

  togleModal = () => {
    this.setState(({showModal}) => ({
      showModal: !showModal,
      status: 'resolve',
    }))
  }
  handleFormSubmit = (value) => {
    this.setState({value})
  }
  activeIdx = (activeIndex) =>{
    this.setState({activeIndex,
      status: 'pending'}) 
  }
  handleClickLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
    console.log ('click')
  };
  

  
   
  render () {
    const {showModal, status, hits, activeIndex, error} = this.state
    const activeIdx = hits[activeIndex]

    return (
      <div className='App'>

        {error && <p>Whoops, something went wrong: {error.message}</p>}

        <Searchbar  onSubmit={this.handleFormSubmit}/>

        {status === 'pending' && <Loader/>}
        
        {status === 'resolve' && 
        <ImageGallery onClick={this.togleModal} hits={hits} activeIdx={this.activeIdx}/>
        }

        {status === 'resolve' &&   
        <Button onClick={this.handleClickLoadMore}>Load more...</Button>}

        
        {showModal && <Modal onClose={this.togleModal}>
          
          <img src={activeIdx.largeImageURL} alt={activeIdx.tags} />
        </Modal>} 

        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />

      </div>
    );
  }
};

export default App
