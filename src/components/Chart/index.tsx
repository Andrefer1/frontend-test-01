import * as Highcharts from 'highcharts';
import Exporting from 'highcharts/modules/exporting';

Exporting(Highcharts)

interface ChartProps {
    id: string
    dataName: string
    titleText: string
    seriesName: string
}

export function Chart({ id, dataName, titleText, seriesName }: ChartProps) {
    Highcharts.getJSON(`https://demo-live-data.highcharts.com/${dataName}.json`, function (data: any) {

        Highcharts.chart(`chart-${id}`, {
            credits: {
                enabled: false
            },
            rangeSelector: {
                selected: 1
            },
            title: {
                align: 'left',
                text: titleText
            },
            series: [{
                type: 'line',
                name: seriesName,
                data: data,
            }]
        })
    })

    return (
        <>
            <div id={`chart-${id}`} />
        </>
    )
}