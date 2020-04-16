  
import yaml from 'js-yaml';
import fs from 'fs';
import config from './config.json';

try {
    const configYml = yaml.safeLoad(fs.readFileSync(process.env.YML, 'utf8'));
    config.settings = configYml[process.env.NODE_ENV];
    config.api = configYml.api;
    config.constant = configYml.constant;
} catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
}

module.exports = config;