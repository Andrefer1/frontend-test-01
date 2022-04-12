import * as Highcharts from 'highcharts';
import Exporting from 'highcharts/modules/exporting';

Exporting(Highcharts)

export function Chart() {
    Highcharts.getJSON('https://demo-live-data.highcharts.com/aapl-c.json', function (data: any) {

        Highcharts.chart('container', {
            rangeSelector: {
                selected: 1
            },
            title: {
                align: 'left',
                text: 'AAPL Stock Price'
            },
            series: [{
                type: 'line',
                name: 'AAPL',
                data: data,
            }]
        })
    })

    return (
        <>
            <div id="container"></div>
        </>
    )
}