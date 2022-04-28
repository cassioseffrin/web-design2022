
const servidorREST = {
  isAuthenticated: false,
  entrar(callback: VoidFunction) {
    servidorREST.isAuthenticated = true;
    setTimeout(callback, 400);
  },
  sair(callback: VoidFunction) {
    servidorREST.isAuthenticated = false;
    setTimeout(callback, 400);
  },
};

export { servidorREST };
