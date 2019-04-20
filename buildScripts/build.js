/*eslint-disable no-console*/
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

process.env.NODE_ENV = 'production';

console.log(chalk.blue('Generating minified bundlefor production. \n This will take a moment...'));

webpack(webpackConfig).run( (err, stats) => {
  if(err) {
    console.log(chalk.red(err));
    return 1;
  }

  // displays to console detailed errors, but this line of code before
  // the return 0; is not necessary
  const jsonStats = stats.toJson();
  if(jsonStats.hasErrors) {
    return jsonStats.errors.map(error => console.log(chalk.red(error)));
  }

  if(jsonStats.hasWarnings) {
    console.log(chalk.yellow('Webpack generated the following warnings: '));
    jsonStats.warnings.map(warning => HTMLFormControlsCollection.log(chalk.yellow(warning)));
  }

  console.log(`Webpack status: ${stats}`);

  // if we got this far, the build succeeded.
  console.log(chalk.green('Your app has been build for production and write to /dist!'));
  return 0;
});
