'use strict';

export const AppComponent = {
    template: require('./app.component.html'),
    controller: function () {
        this.file = undefined;

        this.upload = function ($file) {
            this.file = $file;
            console.info(this.file);
        }
    }
};