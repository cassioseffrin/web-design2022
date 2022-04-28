
const servidorREST = {
  isAuthenticated: false,
  entrar(callback: VoidFunction) {
    servidorREST.isAuthenticated = true;
    setTimeout(callback, 100);
  },
  sair(callback: VoidFunction) {
    servidorREST.isAuthenticated = false;
    setTimeout(callback, 100);
  },
};

export { servidorREST };
