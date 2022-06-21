import { Header } from './components/Header';
import { ProductList } from './components/ProductList';
import { Container } from '@mui/material';

function App() {
  return (
    <>
      <Header></Header>
      <Container maxWidth="lg">
        <ProductList></ProductList>
      </Container>
    </>
  );
}

export default App;
