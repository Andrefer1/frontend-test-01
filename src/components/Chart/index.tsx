import * as Highcharts from 'highcharts';
import Exporting from 'highcharts/modules/exporting';

import { Data, TChart } from "../../@types";

interface ChartProps {
    chart: TChart
    deleteChart: (id: number) => void
}

export function Chart({ chart, deleteChart }: ChartProps) {
    const { id, dataName, titleText, seriesName } = chart

    Exporting(Highcharts)

    Highcharts.getJSON(`https://demo-live-data.highcharts.com/${dataName}.json`,
        function (data: Data) {

            Highcharts.chart(`chart-${id}`, {
                credits: {
                    enabled: false
                },
                exporting: {
                    buttons: {
                        contextButton: {
                            menuItems: ["Edit", "Delete",]
                        }
                    },
                    menuItemDefinitions: {
                        Edit: {
                            onclick: function () {
                                this.renderer.label(
                                    'You just clicked a custom menu item',
                                    100,
                                    100
                                )
                                    .attr({
                                        fill: '#a4edba',
                                        r: 5,
                                        padding: 10,
                                        zIndex: 10
                                    })
                                    .css({
                                        fontSize: '1.5em'
                                    })
                                    .add();
                            },
                            text: 'Editar'
                        },
                        Delete: {
                            onclick: function () {
                                deleteChart(id)
                            },
                            text: 'Excluir'
                        }
                    },
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