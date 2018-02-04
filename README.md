# currency_exchange_crawler
Da Afghanistan Bank Currency Exchange Rate Crawler - jQuery snippet 

It is a JS (specifically jQuery) snippet which parse currency exchange rates from Da-Afghanistan-Bank website and return the result as JSON array.

The get_currency_rates function will download the specified url (http://dab.gov.af/en/dab/currency) then use the jQuery find function to find the tr's containing the exchange rates.

Note: This is snippet only works with current format of DAB (Da Afghanistan Bank) html structure, so it may not work in future.

Example:
```
// call the function with a callback function
get_currency_rates(function(currency_rates) {
  // for now, just print it in console
  console.log(currency_rates);
});
```
