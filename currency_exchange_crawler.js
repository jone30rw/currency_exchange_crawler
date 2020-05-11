/**
 * @author Mohammad Hassany <jone30rw@gmail.com>
 * 
 * The load_dab_exchange_rates function will load the http://dab.gov.af/exchange-rates page, 
 * then parse the content for the exchange rates.
 *
 * Example:
 *   // call the function with a callback function,
 *   load_dab_exchange_rates(function(exchange_rates) {
 *     // for now, just print it in console
 *     console.log(exchange_rates);
 *   }, '01/01/2020');
 */
function load_dab_exchange_rates(callback, date='') {
    // use jQuery get to load the html page
    $.get('https://dab.gov.af/exchange-rates?field_date_value=' + date, function(html) {
        const exchange_rates = [];
        $('main .table-responsive').first().find('tbody > tr').each(function() {
            const cols = $(this).find('td');

            exchange_rates.push({ 
                currency: cols[0].innerText, 
                cash_sell: cols[1].innerText, 
                cash_buy: cols[2].innerText, 
                transfer_sell: cols[3].innerText, 
                transfer_buy: cols[4].innerText
            });
        });
    
        // if there is callback, then call it with json values
        if (callback) callback(exchange_rates);
    });
}
