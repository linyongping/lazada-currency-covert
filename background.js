'use strict';

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: '#3aa757'}, function() {
    console.log("The color is green.");
  });
});

let ratesData;

async function getRates(params) {
  console.log('log', 'getfetch')
  try {
    const data = await request()
    if(data) {
      ratesData = data
    }
    console.log('data', data);
  }catch(e) {
    console.log('error',e)
  }
}

function request(params) {
  return new Promise((resolve, reject) => {
    fetch('http://api.fixer.io/latest?base=CNY')
    .then(response => response.json())
    .then(data => resolve(data))
    .catch(e => reject(e))
  })
}

getRates()

console.log(fetch)
