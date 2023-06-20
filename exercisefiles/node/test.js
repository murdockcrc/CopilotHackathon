//write npm command line to install mocha
//npm install --global mocha

//command to run this test file
//mocha test.js

const assert = require('assert');
const http = require('http');

const server = require('./nodeserver.js');

describe('Node Server', () => {
    it('should return "key not passed" if key is not passed', (done) => {
        http
        .get('http://localhost:3000/get' , (res) => {
            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });
            res.on('end', () => {
                assert.equal(data, 'key not passed');
                done();
            });
        });
    });

    //add test to check get when key is equal to world

    it('should return "hello world" if key is equal to world', (done) => {
        http
        .get('http://localhost:3000/get?key=world' , (res) => {
            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });
            res.on('end', () => {
                assert.equal(data, 'hello world');
                done();
            });
        });
    });

    //add a test to validate a spanish phone number. write the test so that it validates two numbers
    //one valid spanish phone number and one invalid spanish phone number
    it('should return "valid spanish phone number" if phone number is valid', (done) => {
        http
        .get('http://localhost:3000/validatephonenumber?phoneNumber=%2B34666777888' , (res) => {
            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });
            res.on('end', () => {
                assert.equal(data, 'valid');
                done();
            });
        });
    });

    //write test to validate validateSpanishDNI
   

    //write test for returnColorCode red should return code #FF0000


   //write test for daysBetweenDates

});