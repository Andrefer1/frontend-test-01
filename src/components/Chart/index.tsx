import * as Highcharts from 'highcharts';
import Exporting from 'highcharts/modules/exporting';

import { Data, TChart } from "../../@types";

interface ChartProps {
    chart: TChart
}

export function Chart({ chart }: ChartProps) {
    const { id, dataName, titleText, seriesName } = chart

    Exporting(Highcharts)

    Highcharts.getJSON(`https://demo-live-data.highcharts.com/${dataName}.json`,
        function (data: Data) {

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
        }
    )

    return (
        <>
            <div id={`chart-${id}`} />
        </>
    )
}