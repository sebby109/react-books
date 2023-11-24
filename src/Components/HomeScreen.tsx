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
    </div>
  );
}

export default HomeScreen;