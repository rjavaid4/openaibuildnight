import {test} from 'node:test';
import assert from 'node:assert/strict';
import {places,filterPlaces,startingPrice,listingSummary} from '../dist/app.js';

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
  assert.deepEqual(filterPlaces(places,{query:'CHAMPAIGN',filter:'parking',savedOnly:true,saved:['ashton'],sort:'price'}).map(p=>p.id),['ashton']);
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


test('selected layout quote is consistent and estimated split has an explicit occupancy',()=>{
  const orchard=places.find(p=>p.id==='orchard');
  const quote=listingSummary(orchard,{beds:'1',filter:'furnished'});
  assert.equal(quote.price,810);
  assert.equal(quote.layout.beds,1);
  assert.equal(quote.people,1);
  assert.equal(quote.perPerson,810);
  assert.equal(quote.availability,'Not confirmed');
  assert.equal(listingSummary(places.find(p=>p.id==='here')).perPerson,null);
});

test('all 20 community photos are local image files with official source credits',async()=>{
  const {readFile}=await import('node:fs/promises');
  assert.equal(places.length,20);
  for(const p of places){
    assert(p.photo.startsWith('photos/'));
    assert.equal(p.illustration,false);
    assert(p.photoSource.startsWith('https://'));
    const b=await readFile(new URL('../dist/'+p.photo,import.meta.url));
    assert(b.length>2000,p.id+' photo must be a downloaded image');
  }
});
