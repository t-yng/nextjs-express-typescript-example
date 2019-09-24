const path = require('path');

module.exports = ({ config, mode }) => {
    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        loader: require.resolve('babel-loader'),
        options: {
            presets: [['react-app', { flow: false, typescript: true }]],
            plugins: ["styled-jsx/babel"]
        },
    });

    config.resolve.extensions.push('.ts', '.tsx');
    return config;
};