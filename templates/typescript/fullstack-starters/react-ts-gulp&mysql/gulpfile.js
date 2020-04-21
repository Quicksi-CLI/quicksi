const gulp = require("gulp");
const htmlmin = require('gulp-htmlmin');
const jsObfuscator = require('gulp-javascript-obfuscator');
const ts = require("gulp-typescript");
const tsProject = ts.createProject("tsconfig.json");
const pug = require('gulp-pug');
const watch = require('gulp-watch');
const multiProcess = require('gulp-multi-process');
const webpack = require('webpack');
const nodemon = require('gulp-nodemon');
const webpackStream = require('webpack-stream');
const webpackConfig = require('./webpack.config.js');



/**
 *
 */
const config = {
    client: {
        basePath: 'app/client-ts/',
        entryPoint: 'src/index.tsx',
        assets: {
            views: {
                html: ['views/*.html'],
                pug: ['views/*.pug']
            },
            list: ['assets/**/*']
        }
    },
    server: {

    }
};

gulp.task("client-views-pug", () => {
    return gulp.src(config.client.assets.views.pug.map(p => config.client.basePath + p))
        .pipe(pug())
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('build/app/client/'))
});

gulp.task("client-views-html", () => {
    return gulp.src(config.client.assets.views.html.map(p => config.client.basePath + p))
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('build/app/client/'));
});

gulp.task("client-views", gulp.parallel('client-views-pug', 'client-views-html'));

gulp.task("client-assets", () => {
    return gulp.src(config.client.assets.list.map(p => config.client.basePath + p))
        .pipe(gulp.dest('build/app/client/'))
});

gulp.task("client-source", function () {
    return gulp.src(config.client.basePath + config.client.entryPoint)
            .pipe(webpackStream(webpackConfig), webpack)
            .pipe(gulp.dest('./build/app/client/'));
});

gulp.task('build-client', gulp.parallel('client-views', 'client-assets', 'client-source'));


gulp.task("server-source", function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("build/"))
});

gulp.task('build-server', gulp.parallel('server-source'));

gulp.task('build', function(done) {
    return multiProcess(['build-server', 'build-client'], done);
});

gulp.task('watch-server', function() {
    nodemon({
        script: 'build/app/server/server.js',
        tasks: ['build-server'],
        watch: ['app/server/**/*', 'app/shared/**/*'],
        ext: '*'
    })
        .on('restart', function () {
            console.log('restarted!');
        })
        .on('crash', function() {
            console.error('Application has crashed!\n');
            stream.emit('restart', 10) // restart the server in 10 seconds
        });
});

gulp.task('watch-client', function() {
    gulp.watch(['app/client-ts/**/*', 'app/shared/**/*'], gulp.series('build-client'));
});

gulp.task('watch', function(done) {
    return multiProcess(['watch-client', 'watch-server'], done);
});

gulp.task('default', gulp.series('build', 'watch'));
