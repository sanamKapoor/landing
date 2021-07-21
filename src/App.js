import Cards from './components/Cards';
import Search from './components/Search';
import SideBar from './components/SideBar';
import NavBar from './components/NavBar';
import Stripe from './components/Stripe';

function App() {
  return (
    <>
      <NavBar />
      <Stripe />
      <hr className="my-1" />
      <div className="container-fluid p-2">
        <div className="row p-1 p-lg-2">
          <div className="d-none d-lg-block col-lg-3 col-xl-2">
            <SideBar />
          </div>
          <div className="col-12 col-lg-9 col-xl-10">
            <Search />
            <Cards />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
