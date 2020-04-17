import { check } from 'express-validator';

export class Validators {
    static getSignUpValidators() {
        return [
            check('email', 'validation:signUp:emailIsIncorrect').trim().isEmail(),
            check('firstName', 'validation:signUp:emptyFirstName').not().isEmpty(),
            check('lastName', 'validation:signUp:emptyLastName').not().isEmpty(),
            check('password', 'validation:signUp:passwordMustBeEightCharactersLong').trim().isLength({ min: 8 })
        ];
    }

    static getLoginValidators() {
        return [
            check('email', 'validation:signUp:emailIsIncorrect').trim().not().isEmpty().isEmail(),
            check('password', 'validation:signUp:passwordIsEmpty').trim().not().isEmpty()
        ]
    }
}