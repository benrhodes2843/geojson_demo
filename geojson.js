// 1. erase everything below this line and paste in your geojson
// 2. add the following before your pasted content, so that the map
//    will understand how to find your geojson. See README.md for more info
//
//    var json =
//
//    See example below:

var json = {
"type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#04ff00",
        "marker-size": "medium",
        "marker-symbol": "triangle-stroked",
        "title": "Starting Point"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -96.66325092315674,
          40.806176004691544
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "stroke": "#555555",
        "stroke-width": 2,
        "stroke-opacity": 1,
        "title": "run first segment"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -96.66320800781249,
            40.80620848836415
          ],
          [
            -96.66329383850098,
            40.80987904095344
          ],
          [
            -96.6675853729248,
            40.80994400465744
          ],
          [
            -96.66833639144897,
            40.81340323002828
          ],
          [
            -96.6730785369873,
            40.81335450979636
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "stroke": "#555555",
        "stroke-width": 2,
        "stroke-opacity": 1,
        "title": "run second segment"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -96.67311072349548,
            40.8133626298375
          ],
          [
            -96.67412996292114,
            40.81337074987764
          ],
          [
            -96.67411923408508,
            40.81313526831
          ],
          [
            -96.67487025260924,
            40.81207153081358
          ],
          [
            -96.67518138885498,
            40.81137319005429
          ],
          [
            -96.67541742324829,
            40.81123514508067
          ],
          [
            -96.6757607460022,
            40.811153942020816
          ],
          [
            -96.67615771293639,
            40.81104025757012
          ],
          [
            -96.6766834259033,
            40.81083724913792
          ],
          [
            -96.67696237564087,
            40.81059363819943
          ],
          [
            -96.67728424072266,
            40.810171377120604
          ],
          [
            -96.67737007141113,
            40.80985467954804
          ],
          [
            -96.67820692062378,
            40.80987904095344
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "stroke": "#555555",
        "stroke-width": 2,
        "stroke-opacity": 1,
        "title": "run third segment"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -96.6782283782959,
            40.80989528188541
          ],
          [
            -96.68221950531006,
            40.80989528188541
          ],
          [
            -96.68224096298216,
            40.809099471544386
          ],
          [
            -96.68376445770264,
            40.80911571266716
          ],
          [
            -96.68376445770264,
            40.80806003141889
          ],
          [
            -96.68681144714355,
            40.80804379003772
          ],
          [
            -96.68599605560303,
            40.8060947954405
          ],
          [
            -96.68560981750488,
            40.80551008589939
          ],
          [
            -96.68494462966919,
            40.80490912905829
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "stroke": "#555555",
        "stroke-width": 2,
        "stroke-opacity": 1,
        "title": "run fourth segment"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -96.68494462966919,
            40.80494161335099
          ],
          [
            -96.68262720108032,
            40.802781373258256
          ],
          [
            -96.68183326721191,
            40.80218039170857
          ],
          [
            -96.68088912963867,
            40.80203420618445
          ],
          [
            -96.67990207672119,
            40.80175807709381
          ],
          [
            -96.67910814285278,
            40.801303273734405
          ],
          [
            -96.67870044708252,
            40.80089719667298
          ],
          [
            -96.67837858200073,
            40.80058857644474
          ],
          [
            -96.67803525924683,
            40.8002637114964
          ],
          [
            -96.67743444442749,
            40.79984138468652
          ],
          [
            -96.67691946029663,
            40.79950027260927
          ],
          [
            -96.67638301849365,
            40.79925662005228
          ],
          [
            -96.67584657669067,
            40.798964235803325
          ],
          [
            -96.67526721954346,
            40.79925662005228
          ],
          [
            -96.67524576187134,
            40.79946778565333
          ],
          [
            -96.67524576187134,
            40.80260270363621
          ],
          [
            -96.672842502594,
            40.80257021819871
          ],
          [
            -96.67286396026611,
            40.80620848836415
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#ff0000",
        "marker-size": "medium",
        "marker-symbol": "star-stroked",
        "title": "Ending Point"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -96.67290687561035,
          40.806176004691544
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#7e7e7e",
        "marker-size": "medium",
        "marker-symbol": "",
        "title": "bench by Calvary Cemetery",
        "image": "<a data-flickr-embed=\"true\" href=\"https://www.flickr.com/photos/190032975@N06/50401584768/in/dateposted-public/\" title=\"bench\"><img src=\"https://live.staticflickr.com/65535/50401584768_1569b7603b_m.jpg\" width=\"180\" height=\"240\" alt=\"bench\"></a><script async src=\"//embedr.flickr.com/assets/client-code.js\" charset=\"utf-8\"></script>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -96.66563272476196,
          40.80987904095344
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#7e7e7e",
        "marker-size": "medium",
        "marker-symbol": "",
        "title": "treehouse",
        "image": "<a data-flickr-embed=\"true\" href=\"https://www.flickr.com/photos/190032975@N06/50402279211/in/dateposted-public/\" title=\"treehouse\"><img src=\"https://live.staticflickr.com/65535/50402279211_39bf5b12c8_m.jpg\" width=\"180\" height=\"240\" alt=\"treehouse\"></a><script async src=\"//embedr.flickr.com/assets/client-code.js\" charset=\"utf-8\"></script>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -96.6680359840393,
          40.81192536707681
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#7e7e7e",
        "marker-size": "medium",
        "marker-symbol": "",
        "title": "cyclist sculpture #1",
        "image": "<a data-flickr-embed=\"true\" href=\"https://www.flickr.com/photos/190032975@N06/50402277376/in/dateposted-public/\" title=\"bike on O\"><img src=\"https://live.staticflickr.com/65535/50402277376_3e1b90643f_m.jpg\" width=\"180\" height=\"240\" alt=\"bike on O\"></a><script async src=\"//embedr.flickr.com/assets/client-code.js\" charset=\"utf-8\"></script>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -96.66983842849731,
          40.813386989954935
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#7e7e7e",
        "marker-size": "medium",
        "marker-symbol": "",
        "title": "Woods Park Sign",
        "image": "<a data-flickr-embed=\"true\" href=\"https://www.flickr.com/photos/190032975@N06/50401587463/in/dateposted-public/\" title=\"woods park sign\"><img src=\"https://live.staticflickr.com/65535/50401587463_e23ca919d3_m.jpg\" width=\"180\" height=\"240\" alt=\"woods park sign\"></a><script async src=\"//embedr.flickr.com/assets/client-code.js\" charset=\"utf-8\"></script>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -96.67312145233154,
          40.81335450979636
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#7e7e7e",
        "marker-size": "medium",
        "marker-symbol": "",
        "title": "cyclist sculpture #2",
        "image": "<a data-flickr-embed=\"true\" href=\"https://www.flickr.com/photos/190032975@N06/50401577858/in/dateposted-public/\" title=\"bike by zoo\"><img src=\"https://live.staticflickr.com/65535/50401577858_e74ce4b68f_m.jpg\" width=\"180\" height=\"240\" alt=\"bike by zoo\"></a><script async src=\"//embedr.flickr.com/assets/client-code.js\" charset=\"utf-8\"></script>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -96.67580366134644,
          40.79894799219618
        ]
      }
    }
  ]
}
