CREATE TABLE users (
    id              INTEGER         NOT NULL AUTO_INCREMENT,
    email           varchar(255)    NOT NULL,
    password        varchar(255)    NOT NULL,

    PRIMARY KEY             (`id`),
    INDEX `index_email`     (`email`),
    INDEX `index_password`  (`password`)
);

INSERT INTO users (email, password) VALUES ('admin@foo.bar', 'pwd');