# Ihor Zenich's Grunt Framework
I use Pug+SASS+PostCSS(+Autoprefixer+cssnext)+linters/optimizers on Grunt+Connect+LiveReload.

Instalation procedure is similar for Win/Mac/Linux.

## 1. Install Node.js (needed for Grunt)
```
# Win
choco install -y nodejs.install

# Mac
brew install node
npm install npm --global
```

## 2. Install Grunt
```
npm install grunt-cli -g
```

## 3. Install Java SE Runtime Environment  (need for Grunt HTML Validator)
```
# Win
choco install -y jre8

# Mac
brew cask install java
```

## 4. Install Environment
### 4.1 Once execute:
```
npm i
```

### 4.2 Add [“LiveReload”](https://chrome.google.com/webstore/detail/jnihajbhpnppcggbcgedagnkighmdlei?utm_source=chrome-app-launcher-info-dialog) plugin to Chrome

## 5. Run
```
grunt prod
grunt server
```

Open http://localhost:8000/ in Chrome. Click “LiveReload” icon.

Note: If you run Grunt from shell by `grunt` you willn't see Execution Timings. If you want to see timings, please execute the commands above.

## Authors
Based on [iDeus HTML Framework](https://github.com/ideus-team/html-framework) created by me and [Valery Bogdanov](https://github.com/radkill).
Inspired by [HTML5 Boilerplate](https://github.com/h5bp/html5-boilerplate) and [Harry Roberts's ITCSS](https://github.com/ahmadajmi/awesome-itcss).

## Thanks
To [Matt Bailey](https://github.com/matt-bailey/grunt-frontend-boilerplate) and [Eric Nishio](http://ericnish.io/blog/how-to-neatly-separate-grunt-files) for Grunt configuration tips.
