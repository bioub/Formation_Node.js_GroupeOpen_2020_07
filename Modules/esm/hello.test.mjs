import { equal } from 'assert';
import hello from './hello.mjs';

try {
    equal(hello('Romain'), 'Hello Romain !');
    console.log('Tests OK');
} catch (error) {
    console.log('Tests KO');
}