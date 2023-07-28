import './App.css';
import useAuth from './hooks/useAuth';
import Router from './router/Router';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const auth = useAuth();
  return <Router authProvider={auth} />;
}

export default App;
