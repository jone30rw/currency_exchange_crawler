/**
 * @author Mohammad Hassany <jone30rw@gmail.com>
 * 
 * The get_currency_rates function will download the specified url (http://dab.gov.af/en/dab/currency) then use the jQuery find function to find the tr's containing the exchange rates.
 * Note: This is snippet only works with current format of DAB (Da Afghanistan Bank) html structure, so it may not work in future.
 *
 * Example:
 *   // call the function with a callback function
 *   get_currency_rates(function(currency_rates) {
 *     // for now, just print it in console
 *     console.log(currency_rates);
 *   });
 */
function get_currency_rates(callback) {
    // use jQuery get to load the html page
    $.get('http://dab.gov.af/en/dab/currency', function(html) {
        var exchange_rates = [];

        // find the tr's that contains the exchange rates
        $(html).find('#dataContainer div.Contents > table:first > tbody > tr').each(function() {
            var exchange_tr = $(this);

            // discard the tr if it doesn't contain the currency name
            if (exchange_tr.find('td:nth-child(1)').text().length < 1) 
                return;

            // find and store the specific values in json array
            exchange_rates.push({
                'currency': exchange_tr.find('td:nth-child(1)').text(),
                'cash_sell': exchange_tr.find('td:nth-child(2)').text(),
                'cash_buy': exchange_tr.find('td:nth-child(3)').text(),
                'trans_sell': exchange_tr.find('td:nth-child(4)').text(),
                'trans_buy': exchange_tr.find('td:nth-child(5)').text()
            });
        });
    
        // if there is callback, then call it with json values
        if (callback)
            callback(exchange_rates);
    });
}
