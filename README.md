[![forthebadge](https://forthebadge.com/images/badges/as-seen-on-tv.svg)](https://forthebadge.com)

# react-start
A opinionated React Boilerplate with focus on simplicity and extendability. Use this as the start of your React project and extend to your projects requirements.
Precommit is setup to run `lint-staged` and `yarn test` everytime you commit your changes. Making sure that your code is on point.

This boilerplate is setup to use css (sass of scss) modules. When you build your app the classes wil be obfuscated. So css for your components stay locally scoped. Then the css is merged into 1 file and minified for performance.

## Quick start

1.  Make sure that you have Node v8 or above and Yarn installed.
2.  Clone this repo using `git clone --depth=1 https://github.com/lhstraathof/react-start.git`
3.  Move to the appropriate directory: `cd react-start`.<br />
4.  Run `yarn` in order to install dependencies.<br />
    _At this point you can run `yarn start` to see the example app at `http://localhost:9000`._
5.  When you are ready you build your app run `yarn build`

Now you're ready to rumble!
