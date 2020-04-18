'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users', [
            {
                firstName: 'John',
                lastName: 'Doe',
                email: 'demo1@demo.com',
                password: '$2a$10$/42hO/OUbGrQsbarWo6mSuh7hCUIPsVAfbJykajeB5PDCP5juolxy\'',
                profilePic: "https://porteous.com.au/wp-content/uploads/2016/09/dummy-profile-pic-male-300x300.jpg",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                firstName: 'Grace',
                lastName: 'Baker',
                email: 'demo2@demo.com',
                password: '$2a$10$/42hO/OUbGrQsbarWo6mSuh7hCUIPsVAfbJykajeB5PDCP5juolxy\'',
                profilePic: "https://porteous.com.au/wp-content/uploads/2016/09/dummy-profile-pic-male-300x300.jpg",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                firstName: 'Hannah',
                lastName: 'Carr',
                email: 'demo3@demo.com',
                password: '$2a$10$/42hO/OUbGrQsbarWo6mSuh7hCUIPsVAfbJykajeB5PDCP5juolxy\'',
                profilePic: "https://porteous.com.au/wp-content/uploads/2016/09/dummy-profile-pic-male-300x300.jpg",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                firstName: 'Irene',
                lastName: 'Ball',
                email: 'demo4@demo.com',
                password: '$2a$10$/42hO/OUbGrQsbarWo6mSuh7hCUIPsVAfbJykajeB5PDCP5juolxy\'',
                profilePic: "https://porteous.com.au/wp-content/uploads/2016/09/dummy-profile-pic-male-300x300.jpg",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                firstName: 'Heather',
                lastName: 'Fisher',
                email: 'demo5@demo.com',
                password: '$2a$10$/42hO/OUbGrQsbarWo6mSuh7hCUIPsVAfbJykajeB5PDCP5juolxy\'',
                profilePic: "https://porteous.com.au/wp-content/uploads/2016/09/dummy-profile-pic-male-300x300.jpg",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                firstName: 'Justin',
                lastName: 'Beaber',
                email: 'demo6@demo.com',
                password: '$2a$10$/42hO/OUbGrQsbarWo6mSuh7hCUIPsVAfbJykajeB5PDCP5juolxy\'',
                profilePic: "https://porteous.com.au/wp-content/uploads/2016/09/dummy-profile-pic-male-300x300.jpg",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                firstName: 'Steven',
                lastName: 'Smith',
                email: 'demo7@demo.com',
                password: '$2a$10$/42hO/OUbGrQsbarWo6mSuh7hCUIPsVAfbJykajeB5PDCP5juolxy\'',
                profilePic: "https://porteous.com.au/wp-content/uploads/2016/09/dummy-profile-pic-male-300x300.jpg",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                firstName: 'Kennan',
                lastName: 'Williams',
                email: 'demo8@demo.com',
                password: '$2a$10$/42hO/OUbGrQsbarWo6mSuh7hCUIPsVAfbJykajeB5PDCP5juolxy\'',
                profilePic: "https://porteous.com.au/wp-content/uploads/2016/09/dummy-profile-pic-male-300x300.jpg",
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                firstName: 'Joshua',
                lastName: 'English',
                email: 'demo9@demo.com',
                password: '$2a$10$/42hO/OUbGrQsbarWo6mSuh7hCUIPsVAfbJykajeB5PDCP5juolxy\'',
                profilePic: "https://porteous.com.au/wp-content/uploads/2016/09/dummy-profile-pic-male-300x300.jpg",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                firstName: 'Victor',
                lastName: 'Henry',
                email: 'demo10@demo.com',
                password: '$2a$10$/42hO/OUbGrQsbarWo6mSuh7hCUIPsVAfbJykajeB5PDCP5juolxy\'',
                profilePic: "https://porteous.com.au/wp-content/uploads/2016/09/dummy-profile-pic-male-300x300.jpg",
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Users', null, {});
    }
};
