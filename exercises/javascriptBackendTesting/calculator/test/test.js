var expect = require("chai").expect;
var calc = require('../lib/calculator');

describe('Calculator tests', function(){

    describe('test Add function',function(){
        it('Add two numbers', function(){
            let sum = calc.add(2,2);
            expect(sum).to.equal(4);
        });
    });
    describe('test divide function',function(){
        it('Will throw an error when dividing by 0', function(){
            expect(() => calc.divide(3,0)).to.throw('Idiot, you tried to divide by zero')
        });
    });
});