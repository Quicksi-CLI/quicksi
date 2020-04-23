---
id: version-1.9.x-tutorial-anayo-oleru
title: Anayo Oleru
original_id: tutorial-anayo-oleru
---

I am a Software Engineer and lover of open-source.

<img alt="quicksi" src="/img/mocha&chai.png" width= "100%" class="docImage"/>

## Easy Setup For NodeJS Test with Mocha And Chai ```126```

[![HitCount](http://hits.dwyl.com/AnayoOleru/setup-nodejs-test-mocha-chai.svg)](http://hits.dwyl.com/AnayoOleru/setup-nodejs-test-mocha-chai)

> This tutorial code is ```126```

- A YouTube TDD setup for NodeJs crash course, that explains the types of testing for developers and how to setup test with mocha, chai and supertest. 

### Video
https://www.youtube.com/watch?v=rrj2YTNuG_w

This is a simple simple NodeJS starter kit for the tutorial. Contains a ES6 simple express server, with babel a transpiler.

The tutorial shows how you can bring in Mocha, Chai and supertest into this app. Use quicksi command to generate the repo and follow through the video.

### Github

https://github.com/AnayoOleru/setup-nodejs-test-mocha-chai



```
<!-- Sample unit test -->
import chai from 'chai';
import { describe, it } from 'mocha';

const { expect } = chai;

describe('Mock Test', () => {
    it('should equal 2', () => {
        expect(2 === 1).to.eql(false);
    });
    it('should return 11', () => {
        expect(9+2).to.eql(11);
    })
});

```

## Get started

- run ```npx quicksi```
- choose ```tutorials```
- Run ``` select input field```
- Type in this tutorial code ```126```
