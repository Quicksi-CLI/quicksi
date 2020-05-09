---
id: version-1.0.0-React-Native-TS
title: React-Native-TS
original_id: React-Native-TS
---

All starters for `React-native` mobile development with, `TypeScript` and the `React-native` cli support

<img alt="JavaScript" src="/img/react-native.png" width= "100%" class="docImage"/>

## react-native-ts-e2e

[![HitCount](http://hits.dwyl.com/AnayoOleru/quicksi/ree/master/templates/typescript/react-native-ts/react-native-ts-e2e.svg)](http://hits.dwyl.com/AnayoOleru/quicksi/tree/master/templates/typescript/react-native-ts/react-native-ts-e2e) 


```sh

# dependencies
  "scripts": {
    "start": "react-native start",
    "rename": "sh ./scripts/rename.sh",
    "prettier": "prettier --list-different 'src/**/*.{ts,tsx,json,md}'",
    "test": "jest",
    "build:e2e:ios": "detox build --configuration ios.sim.release",
    "build:e2e:android": "detox build --configuration android.emu.release",
    "test:e2e:ios": "detox test --configuration ios.sim.release",
    "test:e2e:android": "detox test --configuration android.emu.release",
    "e2e:ios": "yarn build:e2e:ios && yarn test:e2e:ios",
    "e2e:android": "yarn build:e2e:android && yarn test:e2e:android",
    "lint": "yarn tslint && yarn stylelint",
    "tslint": "tsc -p . --noEmit --skipLibCheck; tslint --fix 'src/**/*.{ts,tsx}' -p .",
    "stylelint": "stylelint 'src/**/*.{ts,tsx}'",
    "prepare": "patch-package && sh ./scripts/postinstall.sh",
    "clean": "rm -rf {yarn.lock,node_modules} **/{node_modules,coverage,build,Pods,Podfile.lock,yarn.lock}",
    "ios": "react-native run-ios --simulator='iPhone 11'",
    "android": "react-native run-android"
  }
```
### Features
- JavaScript programming language
- Prettier
- Mobile app
- Android 
- IOS
- React-Native cli


*After generating this starter, your code will look like this*
[View here](https://github.com/AnayoOleru/quicksi/tree/master/templates/typescript/react-native-ts/react-native-ts-e2e)

***starter name***

```bash
# starter name

react-native-ts-e2e
```