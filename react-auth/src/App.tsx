import * as React from 'react';
import { PublicPage } from './components/PublicPage'
import { PrivatePage } from './components/PrivatePage'
import { Menu } from './components/Menu'
import {
  Routes,
  Route,

  useNavigate,
  useLocation,
  Navigate,
  Outlet,
} from 'react-router-dom';
import { servidorREST } from './auth';
export default function App() {
  return (
    <AuthProvider>
      <img src='cover.jpeg' width={'100%'} />
      <Routes>
        <Route element={<Menu />}>
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
// function Menu() {
//   return (
//     <div style={{ display: 'flex' }}>
//       <div style={{ flex: 1, backgroundColor: 'blue' }} >
//         <StatusLogin />
//         <ul>
//           <li>
//             <Link to="/">paginas publicas</Link>
//           </li>
//           <li>
//             <Link to="/protected">paginas privadas</Link>
//           </li>
//         </ul>
//       </div>
//       <div style={{ flex: 2 }} >
//         <Outlet />
//       </div>
//     </div>
//   );
// }
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


