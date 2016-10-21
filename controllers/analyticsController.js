/**
 * Created by huzhenzhe on 10/21/16.
 */

'use strict';
trackingApp.controller('analyticsController', analyticsController);

function analyticsController($scope, $http){
    var googleData = {};
    $http.get('testgoogledata.json').success(function(data) {
        googleData = data;
        console.log(JSON.stringify(googleData.sessions));

        $(function () {
            $('#container').highcharts({
                chart: {
                    type: 'spline'
                },
                title: {
                    text: 'Sales Sessions'
                },
                xAxis: {
                    categories: [
                        "1/1/1904  12:26:55 AM",
                        "1/1/1904  12:08:46 AM",
                        "1/1/1904  12:01:03 AM",
                        "1/1/1904  12:04:09 AM",
                        "1/1/1904  12:01:39 AM",
                        "1/1/1904  12:07:49 AM",
                        "1/1/1904  12:06:21 AM",
                        "1/1/1904  12:00:07 AM",
                        "1/1/1904  12:00:45 AM",
                        "1/1/1904  12:05:46 AM"
                    ],
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
                    data:
                        [58,16,14,11,9,8,7,6,6,6]

                }]
            });
        });

    });






        //var chart = new Highcharts.Chart({
        //    chart: {
        //        renderTo: '#barChart',
        //        defaultSeriesType: 'column'
        //        //events: {
        //        //    load: googleData
        //        //}
        //    },
        //    title: {
        //        text: 'Google Analytics Data(July to August)'
        //    },
        //    subtitle: {
        //        text: 'Source: Google Analytics'
        //    },
        //
        //    xAxis: {
        //        type: 'datetime',
        //        crosshair: true
        //    },
        //
        //    yAxis: {
        //        min: 0,
        //        title: {
        //            text: 'Bounce Rate (%)'
        //        }
        //    },
        //    tooltip: {
        //        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        //        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        //        '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
        //        footerFormat: '</table>',
        //        shared: true,
        //        useHTML: true
        //    },
        //
        //    plotOptions: {
        //        column: {
        //            pointPadding: 0.2,
        //            borderWidth: 0
        //        }
        //    },
        //
        //    series: [{
        //        //name: 'Random data',
        //        data: googleData.session
        //    }]
        //});

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
                categories: [
                    "1/1/1904  12:26:55 AM",
                    "1/1/1904  12:08:46 AM",
                    "1/1/1904  12:01:03 AM",
                    "1/1/1904  12:04:09 AM",
                    "1/1/1904  12:01:39 AM",
                    "1/1/1904  12:07:49 AM",
                    "1/1/1904  12:06:21 AM",
                    "1/1/1904  12:00:07 AM",
                    "1/1/1904  12:00:45 AM",
                    "1/1/1904  12:05:46 AM"
                ],
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
                data: [
                    13.79,
                    18.75,
                    50,
                    72.73,
                    66.67,
                    0,
                    42.86,
                    83.33,
                    88.33,
                    33.33
                ]


            }]
        });
    });


}