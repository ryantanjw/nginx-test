// import { expect } from 'chai';
// import { getCurrentTimestamp, server } from '../src/server.js';

// describe('Timestamp Function', () => {
//   it('should return a valid ISO timestamp', () => {
//     const timestamp = getCurrentTimestamp();
//     const isoRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;
//     expect(timestamp).to.match(isoRegex);
//   });

//   it('should return the current timestamp', () => {
//     const timestamp = getCurrentTimestamp();
//     const now = new Date().toISOString();
//     expect(new Date(timestamp).getTime()).to.be.closeTo(new Date(now).getTime(), 1000);
//   });

//   // Close the server after all tests
//   after(() => {
//     server.close();
//   });
// });


// test.js - ESLint Security Plugin Test File
// This file contains intentional security issues for testing ESLint security plugin

console.log("Starting ESLint security plugin test...");

// Test 1: Basic function that should pass
function safeFunction() {
    const message = "This is a safe function";
    console.log(message);
    return message;
}

// Test 2: Function with potential security issue
function riskyFunction() {
    const userInput = "alert('XSS')";
    
    // This should trigger: security/detect-eval-with-expression
    const result = eval(`console.log('${userInput}')`);
    
    return result;
}

// Test 3: Another security issue (if you add more security rules)
function anotherRiskyFunction() {
    const code = "console.log('Hello World')";
    
    // This should also trigger security warnings
    eval(code);
}

// Test 4: Safe alternative (this should pass)
function safeParse() {
    const jsonString = '{"name": "test", "value": 42}';
    try {
        const parsed = JSON.parse(jsonString);
        console.log(parsed);
        return parsed;
    } catch (error) {
        console.error("Parse error:", error);
        return null;
    }
}

// Run the tests
console.log("Running safe function:");
safeFunction();

console.log("Running safe parse:");
safeParse();

console.log("Test file completed - check ESLint output for security warnings!");

// Export for potential use in other files
module.exports = {
    safeFunction,
    safeParse
};