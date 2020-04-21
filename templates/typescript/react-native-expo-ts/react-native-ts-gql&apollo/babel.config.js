module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          extensions: [
            ".js",
            ".jsx",
            ".ts",
            ".tsx",
            ".android.js",
            ".android.tsx",
            ".ios.js",
            ".ios.tsx"
          ],
          root: ["./src"],
          alias: {
            "_modules": "./src/modules",
            "_graph": "./src/graph",
            "_nav": "./src/nav",
            "_utils": "./src/utils",
          }
        }
      ]
    ]
  };
};
