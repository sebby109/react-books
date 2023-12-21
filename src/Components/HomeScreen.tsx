import '../CSSFiles/HomeScreen.css';
import '../Images/colours-books.jpg';
import '../Images/long-row-colorful-books.jpg';
import NavBar from './NavBar';
import SearchBar from './SearchBar';

function HomeScreen() {

  return (
    <div id="hsMain">
      <NavBar />
      <div id="hsDiv">
        <SearchBar />
      </div >
      <div id="credits"><a href='https://www.freepik.com/premium-photo/stack-books-mug-cozy-reading-with-warm-drink_21273917.htm#page=7&query=books%20and%20tea&position=23&from_view=search&track=ais&uuid=e09ce514-0d59-4c1b-bcce-34c06306ca9c'>
        Background image credit
      </a>
      </div>
    </div>
  );
}

export default HomeScreen;