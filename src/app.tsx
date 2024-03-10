import PageMain from './pages/main-page';

type AppProps = {
  placesCount: number;
};

function App(props: AppProps): JSX.Element {
  const { placesCount } = props;
  return (
    <PageMain
      placesCount={placesCount}
    />
  );
}

export default App;
