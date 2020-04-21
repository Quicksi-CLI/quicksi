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
