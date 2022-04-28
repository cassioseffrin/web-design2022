import * as React from 'react';
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
} from 'react-router-dom';
import { servidorREST } from './auth';

export default function App() {
  return (
    <AuthProvider>
      <h1>Nome do Sistema</h1>

      <p>Aplicativo React com Auth Provider</p>

      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<PublicPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/protected"
            element={
              <RequireAuth>
                <PrivatePage />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

function Layout() {
  return (
    <div>
      <StatusLogin />

      <ul>
        <li>
          <Link to="/">paginas publicas</Link>
        </li>
        <li>
          <Link to="/protected">paginas privadas</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

interface AuthContextType {
  user: any;
  entrar: (user: string, callback: VoidFunction) => void;
  sair: (callback: VoidFunction) => void;
}

let AuthContext = React.createContext<AuthContextType>(null!);

function AuthProvider({ children }: { children: React.ReactNode }) {
  let [user, setUser] = React.useState<any>(null);

  let entrar = (userPasswd: string, callback: VoidFunction) => {
    return servidorREST.entrar(() => {
      setUser(userPasswd);
      callback();
    });
  };

  let sair = (callback: VoidFunction) => {
    return servidorREST.sair(() => {
      setUser(null);
      callback();
    });
  };

  let value = { user, entrar, sair };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function useAuth() {
  return React.useContext(AuthContext);
}

function StatusLogin() {
  let auth = useAuth();
  let navigate = useNavigate();

  if (!auth.user) {
    return <p>nao logado.</p>;
  }

  return (
    <p>
      Ola {auth.user}!{' '}
      <button
        onClick={() => {
          auth.sair(() => navigate('/'));
        }}
      >
        Sair
      </button>
    </p>
  );
}

function RequireAuth({ children }: { children: JSX.Element }) {
  let auth = useAuth();
  let location = useLocation();

  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

function LoginPage() {
  let navigate = useNavigate();
  let location = useLocation();
  let auth = useAuth();


  let from = location.pathname || '/';

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    let formData = new FormData(event.currentTarget);
    let usuario = formData.get('usuario') as string;

    auth.entrar(usuario, () => {
      navigate(from, { replace: true });
    });
  }

  return (
    <div>
      <p>vc deve estar logado {from}</p>

      <form onSubmit={handleSubmit}>
        <label>
          login: <input name="usuario" type="text" />
        </label>{' '}
        <button type="submit">logar</button>
      </form>
    </div>
  );
}

function PublicPage() {
  return <h3>Tela login</h3>;
}

function PrivatePage() {
  return <h3>Ola, voce esta vendo uma pagina privada</h3>;
}
