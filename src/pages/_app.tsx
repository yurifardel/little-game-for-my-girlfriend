import '../styles/globals.css';

type sut = {
  Component: (p: object) => any
  pageProp: []
}

const MyApp: React.FC<sut> = ({Component, ...pageProps}) => {
  return <Component {...pageProps} />;
}

export default MyApp;
