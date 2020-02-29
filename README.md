这里就先公布一下最优方案吧：先安装cross-env插件，然后通过修改package.json中的命令行，传递进来新的PORT环境变量。本方案最完美，其余方案都是补充的逗逼方案。
全局安装cross-env：
npm install cross-env -g
修改package.json:
"scripts": {
    "start": "cross-env PORT=5000 react-scripts start",
    //...
}

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify






关于开展“服务不打烊”价值经营服务提升专项活动的通知(发展人激励1.移动完成 20户以上的，奖励发展人10元/户运营支撑补贴，每波次 300 元封顶；  2.每波次升5G完成 20户以上的，奖励发展人10元/户运营支撑补贴，每波次300元封顶；  3. 每波次优品包完成20户以上的，奖励发展人10元/户运营支撑补贴，每波次300元封顶；  4.每波次升五星完成5户以上的，奖励发展人20元/户运营支撑补贴，每波次300元封顶（注：两节期间截止3月31日，升五星50元/户，可重复享受）；  5.各单元重点推进一线人员的微信好友规模扩展，疫情期间业务咨询办理微信加好友，通过一人一码在线自助办理。活动期间门店老板好友数达到2500人或微信好友数提升超过500人，公司奖励200元并通报表彰。)