{
    "meta": {
        "type": "db",
        "canSave": true,
        "canEdit": true,
        "canStar": true,
        "slug": "metrix",
        "expires": "0001-01-01T00:00:00Z",
        "created": "2017-11-26T00:45:18Z",
        "updated": "2017-11-26T00:45:54Z",
        "updatedBy": "admin",
        "createdBy": "admin",
        "version": 2
    },
    "dashboard": {
        "annotations": {
            "list": [
                {
                    "builtIn": 1,
                    "datasource": "-- Grafana --",
                    "enable": true,
                    "hide": true,
                    "iconColor": "rgba(0, 211, 255, 1)",
                    "name": "Annotations & Alerts",
                    "type": "dashboard"
                }
            ]
        },
        "description": "Transaction Monitoring  system",
        "editable": true,
        "gnetId": null,
        "graphTooltip": 0,
        "hideControls": false,
        "id": null,
        "links": [],
        "refresh": false,
        "rows": [
            {
                "collapse": false,
                "height": 318,
                "panels": [
                    {
                        "aliasColors": {},
                        "bars": false,
                        "dashLength": 10,
                        "dashes": false,
                        "datasource": "postgres-datasource",
                        "description": "Count of Transaction processed",
                        "fill": 1,
                        "hideTimeOverride": false,
                        "id": 2,
                        "legend": {
                            "alignAsTable": true,
                            "avg": true,
                            "current": true,
                            "hideEmpty": false,
                            "hideZero": false,
                            "max": true,
                            "min": true,
                            "rightSide": false,
                            "show": true,
                            "sideWidth": null,
                            "total": false,
                            "values": true
                        },
                        "lines": true,
                        "linewidth": 1,
                        "links": [],
                        "nullPointMode": "null",
                        "percentage": false,
                        "pointradius": 3,
                        "points": true,
                        "renderer": "flot",
                        "seriesOverrides": [
                            {
                                "alias": "tx_processed",
                                "legend": true
                            }
                        ],
                        "spaceLength": 10,
                        "span": 6,
                        "stack": false,
                        "steppedLine": false,
                        "targets": [
                            {
                                "alias": "",
                                "format": "time_series",
                                "rawSql": "SELECT\r\n  $__time(measurement_date), sum(tx_processed)  as tx_processed\r\nFROM  \r\n  account_metrics\r\nWHERE\r\n  $__timeFilter(measurement_date) \r\n  and merchant_id in($merchant_id)\r\n  and account_id in($account_id)\r\n  and account_country in($account_country)  \r\ngroup by measurement_date",
                                "refId": "A"
                            }
                        ],
                        "thresholds": [],
                        "timeFrom": null,
                        "timeShift": null,
                        "title": "General - Transaction Processed",
                        "tooltip": {
                            "shared": false,
                            "sort": 0,
                            "value_type": "individual"
                        },
                        "type": "graph",
                        "xaxis": {
                            "buckets": null,
                            "mode": "time",
                            "name": null,
                            "show": true,
                            "values": []
                        },
                        "yaxes": [
                            {
                                "format": "short",
                                "label": "Count Transaction",
                                "logBase": 1,
                                "max": null,
                                "min": null,
                                "show": true
                            },
                            {
                                "decimals": null,
                                "format": "short",
                                "label": null,
                                "logBase": 1,
                                "max": null,
                                "min": null,
                                "show": false
                            }
                        ]
                    },
                    {
                        "aliasColors": {},
                        "bars": false,
                        "dashLength": 10,
                        "dashes": false,
                        "datasource": "postgres-datasource",
                        "description": "Count of Transaction processed",
                        "fill": 1,
                        "hideTimeOverride": false,
                        "id": 7,
                        "legend": {
                            "alignAsTable": true,
                            "avg": true,
                            "current": true,
                            "hideEmpty": false,
                            "hideZero": false,
                            "max": true,
                            "min": true,
                            "rightSide": false,
                            "show": true,
                            "sideWidth": null,
                            "total": false,
                            "values": true
                        },
                        "lines": true,
                        "linewidth": 1,
                        "links": [],
                        "nullPointMode": "null",
                        "percentage": false,
                        "pointradius": 3,
                        "points": true,
                        "renderer": "flot",
                        "seriesOverrides": [
                            {
                                "alias": "tx_processed",
                                "legend": true
                            }
                        ],
                        "spaceLength": 10,
                        "span": 6,
                        "stack": false,
                        "steppedLine": false,
                        "targets": [
                            {
                                "alias": "",
                                "format": "time_series",
                                "rawSql": "SELECT\r\n  $__time(measurement_date), sum(tx_processed)  as tx_processed\r\nFROM  \r\n  account_metrics\r\nWHERE\r\n  $__timeFilter(measurement_date) \r\n  and merchant_id in($merchant_id)\r\n  and account_id in($account_id)\r\n  and account_country in($account_country)  \r\ngroup by measurement_date",
                                "refId": "A"
                            }
                        ],
                        "thresholds": [],
                        "timeFrom": "7d",
                        "timeShift": "7d",
                        "title": "General - Transaction Processed",
                        "tooltip": {
                            "shared": false,
                            "sort": 0,
                            "value_type": "individual"
                        },
                        "type": "graph",
                        "xaxis": {
                            "buckets": null,
                            "mode": "time",
                            "name": null,
                            "show": true,
                            "values": []
                        },
                        "yaxes": [
                            {
                                "format": "short",
                                "label": "Count Transaction",
                                "logBase": 1,
                                "max": null,
                                "min": null,
                                "show": true
                            },
                            {
                                "decimals": null,
                                "format": "short",
                                "label": null,
                                "logBase": 1,
                                "max": null,
                                "min": null,
                                "show": false
                            }
                        ]
                    }
                ],
                "repeat": null,
                "repeatIteration": null,
                "repeatRowId": null,
                "showTitle": false,
                "title": "Dashboard Row",
                "titleSize": "h6"
            },
            {
                "collapse": false,
                "height": 464,
                "panels": [
                    {
                        "aliasColors": {},
                        "bars": false,
                        "dashLength": 10,
                        "dashes": false,
                        "datasource": "postgres-datasource",
                        "fill": 1,
                        "id": 5,
                        "legend": {
                            "alignAsTable": true,
                            "avg": true,
                            "current": false,
                            "max": true,
                            "min": true,
                            "show": true,
                            "sort": "min",
                            "sortDesc": false,
                            "total": false,
                            "values": true
                        },
                        "lines": true,
                        "linewidth": 1,
                        "links": [],
                        "nullPointMode": "null",
                        "percentage": false,
                        "pointradius": 3,
                        "points": true,
                        "renderer": "flot",
                        "seriesOverrides": [],
                        "spaceLength": 10,
                        "span": 6,
                        "stack": false,
                        "steppedLine": false,
                        "targets": [
                            {
                                "alias": "",
                                "format": "time_series",
                                "rawSql": "select $__time(measurement_date), \r\nSUM (CASE  WHEN account_country = 'AR' THEN (tx_processed) END) AS ARS_Argentina,\r\nSUM (CASE  WHEN account_country = 'BR' THEN (tx_processed) END) AS BRL_Brasil,\r\nSUM (CASE  WHEN account_country = 'CL' THEN (tx_processed) END) AS CLP_Chile,\r\nSUM (CASE  WHEN account_country = 'CO' THEN (tx_processed) END) AS COP_Colombia,\r\nSUM (CASE  WHEN account_country = 'MX' THEN (tx_processed) END) AS MXN_Mexico,\r\nSUM (CASE  WHEN account_country = 'PA' THEN (tx_processed) END) AS USD_Panama,\r\nSUM (CASE  WHEN account_country = 'PE' THEN (tx_processed) END) AS PEN_Peru\r\nfrom account_metrics\r\nwhere $__timeFilter(measurement_date) \r\nand merchant_id in($merchant_id)\r\nand account_id in($account_id)  \r\nand account_country in($account_country)  \r\ngroup by measurement_date",
                                "refId": "A"
                            }
                        ],
                        "thresholds": [],
                        "timeFrom": null,
                        "timeShift": null,
                        "title": "Transactions by Country",
                        "tooltip": {
                            "shared": true,
                            "sort": 0,
                            "value_type": "individual"
                        },
                        "type": "graph",
                        "xaxis": {
                            "buckets": null,
                            "mode": "time",
                            "name": null,
                            "show": true,
                            "values": []
                        },
                        "yaxes": [
                            {
                                "format": "short",
                                "label": "Nro Txs by country",
                                "logBase": 1,
                                "max": null,
                                "min": null,
                                "show": true
                            },
                            {
                                "format": "short",
                                "label": null,
                                "logBase": 1,
                                "max": null,
                                "min": null,
                                "show": true
                            }
                        ]
                    },
                    {
                        "aliasColors": {},
                        "bars": false,
                        "dashLength": 10,
                        "dashes": false,
                        "datasource": "postgres-datasource",
                        "fill": 1,
                        "hideTimeOverride": false,
                        "id": 8,
                        "legend": {
                            "alignAsTable": true,
                            "avg": true,
                            "current": false,
                            "max": true,
                            "min": true,
                            "show": true,
                            "sort": "min",
                            "sortDesc": false,
                            "total": false,
                            "values": true
                        },
                        "lines": true,
                        "linewidth": 1,
                        "links": [],
                        "nullPointMode": "null",
                        "percentage": false,
                        "pointradius": 3,
                        "points": true,
                        "renderer": "flot",
                        "seriesOverrides": [],
                        "spaceLength": 10,
                        "span": 6,
                        "stack": false,
                        "steppedLine": false,
                        "targets": [
                            {
                                "alias": "",
                                "format": "time_series",
                                "rawSql": "select $__time(measurement_date), \r\nSUM (CASE  WHEN account_country = 'AR' THEN (tx_processed) END) AS ARS_Argentina,\r\nSUM (CASE  WHEN account_country = 'BR' THEN (tx_processed) END) AS BRL_Brasil,\r\nSUM (CASE  WHEN account_country = 'CL' THEN (tx_processed) END) AS CLP_Chile,\r\nSUM (CASE  WHEN account_country = 'CO' THEN (tx_processed) END) AS COP_Colombia,\r\nSUM (CASE  WHEN account_country = 'MX' THEN (tx_processed) END) AS MXN_Mexico,\r\nSUM (CASE  WHEN account_country = 'PA' THEN (tx_processed) END) AS USD_Panama,\r\nSUM (CASE  WHEN account_country = 'PE' THEN (tx_processed) END) AS PEN_Peru\r\nfrom account_metrics\r\nwhere $__timeFilter(measurement_date) \r\nand merchant_id in($merchant_id)\r\nand account_id in($account_id)  \r\nand account_country in($account_country)  \r\ngroup by measurement_date",
                                "refId": "A"
                            }
                        ],
                        "thresholds": [],
                        "timeFrom": "7d",
                        "timeShift": "7d",
                        "title": "Transactions by Country",
                        "tooltip": {
                            "shared": true,
                            "sort": 0,
                            "value_type": "individual"
                        },
                        "type": "graph",
                        "xaxis": {
                            "buckets": null,
                            "mode": "time",
                            "name": null,
                            "show": true,
                            "values": []
                        },
                        "yaxes": [
                            {
                                "format": "short",
                                "label": "Nro Txs by country",
                                "logBase": 1,
                                "max": null,
                                "min": null,
                                "show": true
                            },
                            {
                                "format": "short",
                                "label": null,
                                "logBase": 1,
                                "max": null,
                                "min": null,
                                "show": true
                            }
                        ]
                    }
                ],
                "repeat": null,
                "repeatIteration": null,
                "repeatRowId": null,
                "showTitle": false,
                "title": "Dashboard Row",
                "titleSize": "h6"
            },
            {
                "collapse": false,
                "height": 355,
                "panels": [
                    {
                        "aliasColors": {},
                        "bars": false,
                        "dashLength": 10,
                        "dashes": false,
                        "datasource": null,
                        "fill": 1,
                        "id": 3,
                        "legend": {
                            "alignAsTable": true,
                            "avg": true,
                            "current": false,
                            "max": true,
                            "min": true,
                            "rightSide": false,
                            "show": true,
                            "sideWidth": null,
                            "total": false,
                            "values": true
                        },
                        "lines": true,
                        "linewidth": 1,
                        "links": [],
                        "nullPointMode": "null",
                        "percentage": false,
                        "pointradius": 3,
                        "points": true,
                        "renderer": "flot",
                        "seriesOverrides": [],
                        "spaceLength": 10,
                        "span": 6,
                        "stack": false,
                        "steppedLine": false,
                        "targets": [
                            {
                                "alias": "",
                                "format": "time_series",
                                "rawSql": "select $__time(measurement_date), \nSUM (tpv_captured) as tpv_captured,\nSUM (tpv_rejected) as tpv_rejected, \nSUM (tpv_error) as tpv_error,\nSUM (tpv_voided) as tpv_voided,\nSUM (tpv_chargeback) as tpv_chargeback,\nSUM (tpv_dispute) as tpv_dispute\nfrom account_metrics\nwhere $__timeFilter(measurement_date) \nand merchant_id in($merchant_id)\nand account_id in($account_id)\nand account_country in($account_country)  \ngroup by measurement_date",
                                "refId": "A"
                            }
                        ],
                        "thresholds": [],
                        "timeFrom": null,
                        "timeShift": null,
                        "title": "TPV by Country",
                        "tooltip": {
                            "shared": true,
                            "sort": 0,
                            "value_type": "individual"
                        },
                        "type": "graph",
                        "xaxis": {
                            "buckets": null,
                            "mode": "time",
                            "name": null,
                            "show": true,
                            "values": []
                        },
                        "yaxes": [
                            {
                                "decimals": null,
                                "format": "currencyUSD",
                                "label": "",
                                "logBase": 1,
                                "max": null,
                                "min": null,
                                "show": true
                            },
                            {
                                "format": "short",
                                "label": null,
                                "logBase": 1,
                                "max": null,
                                "min": null,
                                "show": false
                            }
                        ]
                    },
                    {
                        "aliasColors": {},
                        "bars": false,
                        "dashLength": 10,
                        "dashes": false,
                        "datasource": null,
                        "fill": 1,
                        "id": 9,
                        "legend": {
                            "alignAsTable": true,
                            "avg": true,
                            "current": false,
                            "max": true,
                            "min": true,
                            "rightSide": false,
                            "show": true,
                            "sideWidth": null,
                            "total": false,
                            "values": true
                        },
                        "lines": true,
                        "linewidth": 1,
                        "links": [],
                        "nullPointMode": "null",
                        "percentage": false,
                        "pointradius": 3,
                        "points": true,
                        "renderer": "flot",
                        "seriesOverrides": [],
                        "spaceLength": 10,
                        "span": 6,
                        "stack": false,
                        "steppedLine": false,
                        "targets": [
                            {
                                "alias": "",
                                "format": "time_series",
                                "rawSql": "select $__time(measurement_date), \nSUM (tpv_captured) as tpv_captured,\nSUM (tpv_rejected) as tpv_rejected, \nSUM (tpv_error) as tpv_error,\nSUM (tpv_voided) as tpv_voided,\nSUM (tpv_chargeback) as tpv_chargeback,\nSUM (tpv_dispute) as tpv_dispute\nfrom account_metrics\nwhere $__timeFilter(measurement_date) \nand merchant_id in($merchant_id)\nand account_id in($account_id)\nand account_country in($account_country)  \ngroup by measurement_date",
                                "refId": "A"
                            }
                        ],
                        "thresholds": [],
                        "timeFrom": "7d",
                        "timeShift": "7d",
                        "title": "TPV by Country",
                        "tooltip": {
                            "shared": true,
                            "sort": 0,
                            "value_type": "individual"
                        },
                        "type": "graph",
                        "xaxis": {
                            "buckets": null,
                            "mode": "time",
                            "name": null,
                            "show": true,
                            "values": []
                        },
                        "yaxes": [
                            {
                                "decimals": null,
                                "format": "currencyUSD",
                                "label": "",
                                "logBase": 1,
                                "max": null,
                                "min": null,
                                "show": true
                            },
                            {
                                "format": "short",
                                "label": null,
                                "logBase": 1,
                                "max": null,
                                "min": null,
                                "show": false
                            }
                        ]
                    }
                ],
                "repeat": null,
                "repeatIteration": null,
                "repeatRowId": null,
                "showTitle": false,
                "title": "Dashboard Row",
                "titleSize": "h6"
            }
        ],
        "schemaVersion": 14,
        "style": "dark",
        "tags": [],
        "templating": {
            "list": [
                {
                    "allValue": null,
                    "current": {
                        "text": "All",
                        "value": [
                            "$__all"
                        ]
                    },
                    "datasource": "postgres-datasource",
                    "hide": 0,
                    "includeAll": true,
                    "label": "account_country",
                    "multi": true,
                    "name": "account_country",
                    "options": [],
                    "query": "SELECT distinct account_country FROM account_metrics",
                    "refresh": 1,
                    "regex": "",
                    "sort": 1,
                    "tagValuesQuery": "",
                    "tags": [],
                    "tagsQuery": "",
                    "type": "query",
                    "useTags": false
                },
                {
                    "allValue": null,
                    "current": {
                        "text": "All",
                        "value": [
                            "$__all"
                        ]
                    },
                    "datasource": "postgres-datasource",
                    "hide": 0,
                    "includeAll": true,
                    "label": "merchant_id",
                    "multi": true,
                    "name": "merchant_id",
                    "options": [],
                    "query": "SELECT distinct  merchant_id FROM account_metrics",
                    "refresh": 1,
                    "regex": "",
                    "sort": 3,
                    "tagValuesQuery": "",
                    "tags": [],
                    "tagsQuery": "",
                    "type": "query",
                    "useTags": false
                },
                {
                    "allValue": null,
                    "current": {
                        "text": "All",
                        "value": [
                            "$__all"
                        ]
                    },
                    "datasource": "postgres-datasource",
                    "hide": 0,
                    "includeAll": true,
                    "label": "account_id",
                    "multi": true,
                    "name": "account_id",
                    "options": [],
                    "query": "select distinct account_id from account_metrics where merchant_id in ($merchant_id)",
                    "refresh": 1,
                    "regex": "",
                    "sort": 3,
                    "tagValuesQuery": "",
                    "tags": [],
                    "tagsQuery": "",
                    "type": "query",
                    "useTags": false
                }
            ]
        },
        "time": {
            "from": "2017-11-17T05:00:00.000Z",
            "to": "2017-11-21T04:59:59.000Z"
        },
        "timepicker": {
            "refresh_intervals": [
                "5s",
                "10s",
                "30s",
                "1m",
                "5m",
                "15m",
                "30m",
                "1h",
                "2h",
                "1d"
            ],
            "time_options": [
                "5m",
                "15m",
                "1h",
                "6h",
                "12h",
                "24h",
                "2d",
                "7d",
                "30d"
            ]
        },
        "timezone": "",
        "title": "metrix",
        "version": 2
    }
}