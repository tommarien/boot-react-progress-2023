import useWindowSize from './hooks/useWindowSize';

function App() {
  const { height, width } = useWindowSize();
  return (
    <>
      <h1>Hello, bootcampers</h1>

      <h2>Window Size</h2>

      <ul>
        <li>Height: {height}</li>
        <li>Width: {width}</li>
      </ul>
    </>
  );
}

export default App;
