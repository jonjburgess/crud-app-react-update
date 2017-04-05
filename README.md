This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Initial Setup
Install `create-react-app` globally
```
npm install create-react-app -g
```
Then create your application (note: `my-app` is whatever you want to call your application).
```
create-react-app my-app
cd my-app
npm start
```
At this point you should see the standard starting page for the react boilerplate

## Customisation (optional)
You can actually leave things here and move on but I really like to use sass to add and manage my css as i find it a lot cleaner. There are multiple ways to add this but my preferred way is to add it to the webpack build process so it is automated along with the rest of the application.
```
npm run eject
```
This is a one way process but exposes the files you need to edit. The next step is to install sass and its loader.
```
npm install sass-loader node-sass --save-dev
```
Once these steps are complete you need to add sass to the webpack loader config located in the new `config` folder. Once in this folder look for the file `webpack.config.dev.js`.

At this point fine the 'loaders' array insode the `modules` block and add the following for activate `scss` and/or `sass`.
```
{
  test: /\.scss$/,
  include: paths.appSrc,
  loaders: ["style", "css", "sass"]
}
```
and/or
```
{
  test: /\.sass$/,
  include: paths.appSrc,
  loaders: ["style", "css", "sass"]
}
```
Once this is done it is very important to add the extension to the `exclude` list inside the same `loaders` array.
```
/\.sass$/,
/\.scss$/,
```
Now this is all up and running rename the file `src/App.css` to `src/App.scss` or `src/App.sass` and replace the reference in you `src/App.js` file.
```
import './App.scss';
```
or
```
import './App.sass';
```
