const AppConfig = ($urlRouterProvider, $locationProvider, $stateProvider) => {
    'ngInject';
    $locationProvider.html5Mode(true);

    'ngInject';
    $stateProvider.state('app-root', {
        url: '/',
        template: '<app-root></app-root>'
    });

    'ngInject';
    $urlRouterProvider.otherwise('/');
};

export default AppConfig;