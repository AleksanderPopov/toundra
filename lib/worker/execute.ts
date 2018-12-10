// @ts-ignore
import { parentPort, workerData } from 'worker_threads';
import { Runner } from './runner';


// const {testName} = workerData;
// const specPath = require('path').resolve('./built/spec.js');
const {specPath, suiteName, testName} = workerData;
Runner.initialize({specPath: specPath, suiteName: suiteName, testName: testName}).run().then(result => {
    parentPort.postMessage(result);
});