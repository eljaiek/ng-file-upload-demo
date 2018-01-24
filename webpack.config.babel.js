/**
 * Created by eljaiek on 6/29/17.
 */

'use strict';

import WebpackConfig, {environment} from "webpack-config";

const DEF_ENV = 'dev';

environment.setAll({
    env: () => process.env.NODE_ENV !== undefined ? process.env.NODE_ENV : DEF_ENV
});

export default new WebpackConfig().extend('./config/webpack.[env].config');