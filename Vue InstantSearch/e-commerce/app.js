// Add here your javascript code

var search = instantsearch({
  // Replace with your own values
  appId: 'B1G2GM9NG0',
  apiKey: 'aadef574be1f9252bb48d4ea09b5cfe5', // search only API key, no ADMIN key
  indexName: 'demo_ecommerce',
  urlSync: true
});

// initialize SearchBox
search.addWidget(
  instantsearch.widgets.searchBox({
    container: '#search-box',
  })
);

search.addWidget(
  instantsearch.widgets.hits({
    container: '#hits',
  })
);

search.start();
