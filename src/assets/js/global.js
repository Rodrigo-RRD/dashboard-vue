// global.js ou routerHelper.js
const routerHelper = {
    navigateToHome(router) {
        router.push('/');
    },
    navigateToLogin(router) {
        router.push('/login');
    },
    navigateToCadastro(router) {
        router.push('/cadastro');
    },
    navigateToDashBoard(router) {
        router.push('/dashBoard');
    }
    ,
    navigateToAbout(router) {
        router.push('/about');
    }
};

// Exportando o objeto `routerHelper` como exportação padrão
export default routerHelper;
