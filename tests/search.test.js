import {test} from 'node:test';
import assert from 'node:assert/strict';
import {places,filterPlaces,startingPrice} from '../dist/app.js';

test('budget excludes unknown pricing and never treats missing rent as free',()=>{
  const result=filterPlaces(places,{budget:'800'});
  assert.deepEqual(result.map(p=>p.id),['orchard']);
  assert.equal(startingPrice(places.find(p=>p.id==='here')),null);
});
test('bedroom and budget filters use the matching layout price',()=>{
  assert.equal(filterPlaces(places,{beds:'1',budget:'700'}).length,0);
  assert.deepEqual(filterPlaces(places,{beds:'1',budget:'800'}).map(p=>p.id),['orchard']);
});
test('furnished filter uses furnished prices rather than the unfurnished minimum',()=>{
  assert.equal(filterPlaces(places,{filter:'furnished',budget:'800'}).length,0);
  assert.deepEqual(filterPlaces(places,{filter:'furnished',budget:'900',beds:'2'}).map(p=>p.id),['orchard']);
});
test('search, amenities, saved state and sorting compose',()=>{
  assert.deepEqual(filterPlaces(places,{query:'URBANA',filter:'parking',savedOnly:true,saved:['ashton'],sort:'price'}).map(p=>p.id),['ashton']);
  const result=filterPlaces(places,{sort:'price'});
  assert.equal(result[0].id,'orchard');
  assert.equal(startingPrice(result.at(-1)),null);
});
test('unknown bedroom configurations are not presented as matching a selected layout',()=>{
  assert(!filterPlaces(places,{beds:'2'}).some(p=>p.id==='dean'));
});
test('every listing has an HTTPS source and explicit eligibility and availability caveats',()=>{
  for(const p of places){assert(p.source.startsWith('https://'));assert(p.eligibility);assert(p.rateNote);}
});
