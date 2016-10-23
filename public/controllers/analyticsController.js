/**
 * Created by huzhenzhe on 10/21/16.
 */

'use strict';
trackingApp.controller('analyticsController', analyticsController);

function analyticsController($scope, $http){
    var googleDataSession = [], googleDataAvg = [], googleBanceRate = [];
    $http.get('testgoogledata.json').success(function(data) {
        googleDataSession = data.sessions;
        googleDataAvg = data.AvgSessionDuration;
        googleBanceRate = data.BounceRate;

        console.log(JSON.stringify(googleDataAvg));
        console.log(JSON.stringify(googleDataSession));

        $(function () {
            $('#container').highcharts({
                chart: {
                    type: 'spline'
                },
                title: {
                    text: 'Sales Sessions'
                },
                xAxis: {
                    categories: googleDataAvg,
                    title: {
                        text: 'Date'
                    }
                },
                yAxis: {
                    title: {
                        text: 'Sessions'
                    },
                    min: 0
                },
                tooltip: {
                    headerFormat: '<b>{series.name}</b><br>',
                    pointFormat: '{point.x:%e. %b}: {point.y:.2f}'
                },

                plotOptions: {
                    spline: {
                        marker: {
                            enabled: true
                        }
                    }
                },

                credits: {
                    enabled: false
                },

                series: [{
                    name: 'Sessions',
                    data: googleDataSession

                }]
            });
        });

    $(function () {
        $('#barChart').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: 'Bounce Rate Bar Charts'
            },
            subtitle: {
                text: 'Source: google analytics'
            },
            xAxis: {
                categories: googleDataAvg,
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Bounce Rate (%)'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },

            credits: {
                enabled: false
            },
            series: [{
                name: 'Bounce Rate',
                data: googleBanceRate
            }]
        });
    });

    });
}