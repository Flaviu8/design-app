import './App.css';
import MainLeftSide from './components/main/MainLeftSide';
import MainRightSide from './components/main/MainRightSide';



function App() {
  return (
    <div style={{
      display: "flex"
    }}>
      <MainLeftSide/>
      <MainRightSide />
    </div>
  );
}

export default App;
