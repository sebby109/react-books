import '../CSSFiles/HomeScreen.css';
import '../Images/colours-books.jpg';
import '../Images/long-row-colorful-books.jpg';
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

function HomeScreen() {

  return (
    <div id="hsMain">
      <NavBar />
      <div id="hsDiv">
        <h6 id="welcome">Find your books</h6>
        <SearchBar />
        <Carousel fade indicators={false} controls={false}>
          <Carousel.Item>
            <Image id="cImg" src='https://images.pexels.com/photos/904616/pexels-photo-904616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
          </Carousel.Item>
          <Carousel.Item>
            <Image id="cImg" src='https://images.pexels.com/photos/2099266/pexels-photo-2099266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
          </Carousel.Item>
          <Carousel.Item>
            <Image id="cImg" src='https://images.pexels.com/photos/1516983/pexels-photo-1516983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
          </Carousel.Item>
        </Carousel>
      </div >


    </div >
  );
}

export default HomeScreen;