import test from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';import {analyse,render} from '../src/index.js';import {parseCSV,toCSV,escape} from '../src/util.js';
const data=JSON.parse(fs.readFileSync(new URL('../examples/input.json',import.meta.url),'utf8'));
test('the complete synthetic example produces a readable report',()=>{const r=analyse(data);assert.ok(r.title);assert.ok(r.summary);assert.match(render(r),/<h2>/);assert.ok(Array.isArray(r.issues));});
test('quoted CSV and dangerous spreadsheet values remain safe',()=>{assert.equal(parseCSV('id,note\r\n1,"one, two"')[0].note,'one, two');assert.throws(()=>parseCSV('id,note\n1,"unclosed'),/Unclosed/);assert.match(toCSV([{name:'=HYPERLINK("x")'}]),/'=HYPERLINK/);});
test('HTML escaping never emits an executable supplied tag',()=>{assert.equal(escape('<script>"&'), '&lt;script&gt;&quot;&amp;');});

test('inactive answers are removed from every output',()=>{const r=analyse(data);assert.doesNotMatch(JSON.stringify(r),/Inactive answer that must not appear/);assert.equal(r.answers.vehicles,undefined);});
test('changing branch does not retain another service answer',()=>{const d=structuredClone(data);d.selectedService='vehicle';const r=analyse(d);assert.equal(r.answers.location,undefined);assert.equal(r.answers.message,undefined);});
test('missing active required answers produce visible review questions',()=>{const d=structuredClone(data);d.answers={};assert.equal(analyse(d).issues.length,2);d.selectedService='not-a-route';assert.throws(()=>analyse(d),/configured service/);});
