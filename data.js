var APP_DATA = {
  "scenes": [
    {
      "id": "0-road-view",
      "name": "Road View",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 0.0018556537155944852,
        "pitch": 0.09725720773420221,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": -0.15538224675239753,
          "pitch": 0.3545140674518006,
          "rotation": 0,
          "target": "1-parking-zone"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-parking-zone",
      "name": "Parking Zone",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 2.2664698152634397,
        "pitch": 0.16568482880828128,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": 2.9094339780580984,
          "pitch": 0.4000796482559501,
          "rotation": 0.7853981633974483,
          "target": "2-entrance"
        },
        {
          "yaw": 1.5388120687107847,
          "pitch": 0.3426168871707773,
          "rotation": 12.566370614359176,
          "target": "3-front-view"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-entrance",
      "name": "Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -2.51843886221749,
        "pitch": 0.2610302080380933,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": -3.044160053427282,
          "pitch": 0.15418677150456261,
          "rotation": 0.7853981633974483,
          "target": "8-reception"
        },
        {
          "yaw": 3.0793210370800885,
          "pitch": 0.480777364714827,
          "rotation": 0,
          "target": "5-ground-path"
        },
        {
          "yaw": 2.8666357042479866,
          "pitch": 0.15909755476879184,
          "rotation": 5.497787143782138,
          "target": "40-front-garden"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-front-view",
      "name": "Front View",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -2.5999273971954757,
        "pitch": 0.10847948840445198,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": 2.746803175054195,
          "pitch": 0.37246051910060274,
          "rotation": 0,
          "target": "4-overview"
        },
        {
          "yaw": -0.4491376176713615,
          "pitch": 0.3871862275012141,
          "rotation": 0,
          "target": "1-parking-zone"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-overview",
      "name": "Overview",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 0.9547012705652307,
        "pitch": 0,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": 1.9591118734096398,
          "pitch": 0.33613830944983825,
          "rotation": 0,
          "target": "3-front-view"
        },
        {
          "yaw": 0.12804694517265602,
          "pitch": 0.2821699200950327,
          "rotation": 0,
          "target": "5-ground-path"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-ground-path",
      "name": "Ground Path",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 0.8734947829487005,
        "pitch": 0.2483125972141078,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": 1.7591928767197356,
          "pitch": 0.33766670494416573,
          "rotation": 0,
          "target": "2-entrance"
        },
        {
          "yaw": 0.16857083195646183,
          "pitch": 0.2558256642954895,
          "rotation": 0,
          "target": "6-basket-ball-court"
        },
        {
          "yaw": -2.7679854192218905,
          "pitch": 0.3570179580409292,
          "rotation": 0,
          "target": "4-overview"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-basket-ball-court",
      "name": "Basket Ball Court",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 2.4723663663830937,
        "pitch": 0.01844293346693604,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": 0.9613265122927785,
          "pitch": 0.283149976103374,
          "rotation": 0,
          "target": "7-cricket-ground"
        },
        {
          "yaw": -2.0018824404669697,
          "pitch": 0.10282214044530491,
          "rotation": 18.06415775814132,
          "target": "8-reception"
        },
        {
          "yaw": -1.744135027089973,
          "pitch": 0.166378674403731,
          "rotation": 0.7853981633974483,
          "target": "5-ground-path"
        },
        {
          "yaw": 2.348230090773874,
          "pitch": 0.37803795585734257,
          "rotation": 0,
          "target": "23-basketball-court"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-cricket-ground",
      "name": "Cricket Ground",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 2.1036392636645083,
        "pitch": -0.06801331152012757,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": -0.8434734565627302,
          "pitch": 0.34307271511246995,
          "rotation": 0,
          "target": "6-basket-ball-court"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-reception",
      "name": "Reception",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -3.01879022868952,
        "pitch": 0.18942518188814716,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": -1.4640270623732654,
          "pitch": 0.48396495695372543,
          "rotation": 0,
          "target": "9-corridor"
        },
        {
          "yaw": -0.06441533229464369,
          "pitch": 0.45253402427531597,
          "rotation": 0,
          "target": "2-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-corridor",
      "name": "Corridor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -3.118630888097318,
        "pitch": 0.15960659796632548,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": 2.953003820556839,
          "pitch": 0.4231957775396147,
          "rotation": 0,
          "target": "10-outside"
        },
        {
          "yaw": -0.11328154078661612,
          "pitch": 0.7261591854890579,
          "rotation": 0,
          "target": "8-reception"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-outside",
      "name": "Outside",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 2.9735844969499112,
        "pitch": 0.07982234825268009,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": -2.046891955498552,
          "pitch": 0.22032879799687777,
          "rotation": 5.497787143782138,
          "target": "11-principal-office"
        },
        {
          "yaw": 1.5458471174149047,
          "pitch": 0.26628849236255725,
          "rotation": 0,
          "target": "12-ground-floor"
        },
        {
          "yaw": -0.20283725061290703,
          "pitch": 0.4921580518855748,
          "rotation": 0,
          "target": "9-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-principal-office",
      "name": "Principal Office",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -2.9348127001859705,
        "pitch": 0.13994308559516533,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": -0.7493804907953034,
          "pitch": 0.6637655869580872,
          "rotation": 0,
          "target": "10-outside"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-ground-floor",
      "name": "Ground Floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -2.2731902756278277,
        "pitch": 0.028015514980126,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": -1.1257005215288665,
          "pitch": 0.593693996502866,
          "rotation": 0,
          "target": "13-class-room"
        },
        {
          "yaw": 0.00249877502129614,
          "pitch": 0.594663797516727,
          "rotation": 0,
          "target": "10-outside"
        },
        {
          "yaw": 3.0629403619018163,
          "pitch": 0.42551776214170545,
          "rotation": 0,
          "target": "14-corridor-2"
        },
        {
          "yaw": -2.9660823470899693,
          "pitch": 0.23588076623245868,
          "rotation": 0.7853981633974483,
          "target": "27-first-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-class-room",
      "name": "Class Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.8268860995849003,
          "pitch": 0.6000915769109074,
          "rotation": 0,
          "target": "12-ground-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-corridor-2",
      "name": "Corridor-2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -2.606762097966639,
        "pitch": 0.13299384429044814,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": -0.06609721623792275,
          "pitch": 0.2966012018166051,
          "rotation": 0,
          "target": "12-ground-floor"
        },
        {
          "yaw": -0.48896790817004465,
          "pitch": 0.4171518754638832,
          "rotation": 5.497787143782138,
          "target": "15-play-class"
        },
        {
          "yaw": 3.0101416376345345,
          "pitch": 0.5149670132176976,
          "rotation": 0,
          "target": "16-corridor-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-play-class",
      "name": "Play Class",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.093137430808781,
          "pitch": 0.5937665402574019,
          "rotation": 5.497787143782138,
          "target": "14-corridor-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-corridor-4",
      "name": "Corridor-4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 2.4581217444991346,
        "pitch": 0.38003810556763185,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": 0.7772030954333502,
          "pitch": 0.3024163780754403,
          "rotation": 0,
          "target": "14-corridor-2"
        },
        {
          "yaw": 2.036800481305689,
          "pitch": 0.21829413995576985,
          "rotation": 0,
          "target": "22-corridor-5"
        },
        {
          "yaw": -2.5514277035496917,
          "pitch": 0.4850530946264193,
          "rotation": 0,
          "target": "17-between-blocks"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-between-blocks",
      "name": "Between Blocks",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -3.1201439219708167,
        "pitch": 0.11370986182432574,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": 0.5525156803456284,
          "pitch": 0.2312475860317349,
          "rotation": 0,
          "target": "16-corridor-4"
        },
        {
          "yaw": -2.5355679058029175,
          "pitch": 0.17894085246536484,
          "rotation": 0,
          "target": "18-mess"
        },
        {
          "yaw": 2.245545522007193,
          "pitch": 0.23922866904334228,
          "rotation": 0,
          "target": "19-swimming--badminton"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-mess",
      "name": "Mess",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.357720490324235,
          "pitch": 0.06615344381788901,
          "rotation": 7.0685834705770345,
          "target": "17-between-blocks"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-swimming--badminton",
      "name": "Swimming & Badminton",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 0.27086630762227415,
        "pitch": 0.17845168888539575,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": -0.14902685051194808,
          "pitch": 0.1841887475963624,
          "rotation": 0,
          "target": "20-swimming-pool"
        },
        {
          "yaw": 0.3338418177233127,
          "pitch": 0.3051586944328122,
          "rotation": 0.7853981633974483,
          "target": "21-badminton-court"
        },
        {
          "yaw": 1.5344487974573369,
          "pitch": 0.256834400377592,
          "rotation": 0,
          "target": "17-between-blocks"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-swimming-pool",
      "name": "Swimming Pool",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 0.028130075291715073,
        "pitch": 0.006360994842168566,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": 1.5762082356140255,
          "pitch": 0.3925469140077702,
          "rotation": 0.7853981633974483,
          "target": "19-swimming--badminton"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-badminton-court",
      "name": "Badminton court",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 1.095164400469196,
        "pitch": 0.30525628611260913,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": -1.5816371547604025,
          "pitch": 0.2862094156780941,
          "rotation": 5.497787143782138,
          "target": "19-swimming--badminton"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-corridor-5",
      "name": "Corridor-5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 2.569453493688899,
        "pitch": 0.2588356987103353,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": 2.8070889283610105,
          "pitch": 0.32649854738638595,
          "rotation": 0,
          "target": "24-corridor-6"
        },
        {
          "yaw": 2.2118907318090333,
          "pitch": 0.5323863227184873,
          "rotation": 0,
          "target": "23-basketball-court"
        },
        {
          "yaw": -0.33118881767206254,
          "pitch": 0.3443359610658163,
          "rotation": 0,
          "target": "16-corridor-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-basketball-court",
      "name": "Basketball court",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -0.2983010367967953,
        "pitch": 0.22301612666590032,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": -0.9776136589868116,
          "pitch": 0.14750908048333855,
          "rotation": 0.7853981633974483,
          "target": "22-corridor-5"
        },
        {
          "yaw": -1.134545296578013,
          "pitch": 0.33624672310345716,
          "rotation": 5.497787143782138,
          "target": "6-basket-ball-court"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-corridor-6",
      "name": "Corridor-6",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -2.443715980711069,
        "pitch": 0.14956063477749026,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": 1.3499952745298636,
          "pitch": 0.32490143026948104,
          "rotation": 0,
          "target": "22-corridor-5"
        },
        {
          "yaw": 2.9940226586481646,
          "pitch": 0.258254164442997,
          "rotation": 0,
          "target": "25-shooting-class"
        },
        {
          "yaw": -1.7088285355207073,
          "pitch": 0.2351218849309582,
          "rotation": 5.497787143782138,
          "target": "26-music-class"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-shooting-class",
      "name": "Shooting Class",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 0.2302349226034952,
        "pitch": 0.01535608794929999,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": -0.18960975763741672,
          "pitch": 0.07985569982126606,
          "rotation": 0,
          "target": "24-corridor-6"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-music-class",
      "name": "Music Class",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 0.15236308622799122,
        "pitch": 0.04771440974278818,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": -0.7571969578053697,
          "pitch": 0.2621621017868634,
          "rotation": 18.06415775814132,
          "target": "24-corridor-6"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "27-first-floor",
      "name": "First Floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -1.5978789250395735,
        "pitch": 0.23748033934835888,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": 2.4430079471332586,
          "pitch": 0.6616321234619775,
          "rotation": 0,
          "target": "12-ground-floor"
        },
        {
          "yaw": 1.9768171065853943,
          "pitch": 0.28039639267730365,
          "rotation": 0,
          "target": "33-second-floor"
        },
        {
          "yaw": -2.2455712479224808,
          "pitch": 0.45882508834763946,
          "rotation": 0,
          "target": "28-corridor--7"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "28-corridor--7",
      "name": "Corridor -7",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -1.6637421664163021,
        "pitch": 0.23172647520196854,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": -1.4666503078292088,
          "pitch": 0.16085537764472058,
          "rotation": 0.7853981633974483,
          "target": "30-computer-lab"
        },
        {
          "yaw": -1.6152317881893712,
          "pitch": 0.3690108414455189,
          "rotation": 0,
          "target": "29-bio-lab"
        },
        {
          "yaw": -0.013738054634348629,
          "pitch": 0.4288968410282621,
          "rotation": 0,
          "target": "31-corridor-8"
        },
        {
          "yaw": 1.558756946312358,
          "pitch": 0.5395306234970327,
          "rotation": 0,
          "target": "27-first-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "29-bio-lab",
      "name": "Bio Lab",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -0.7859444836602218,
        "pitch": 0.31091982120186046,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": 2.901040545727785,
          "pitch": 0.41768951178567626,
          "rotation": 0,
          "target": "28-corridor--7"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "30-computer-lab",
      "name": "Computer Lab",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 0.789111629891039,
        "pitch": 0.0025593479915499984,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": 2.8708994503349334,
          "pitch": 0.3772830176246753,
          "rotation": 0,
          "target": "28-corridor--7"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "31-corridor-8",
      "name": "Corridor-8",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 0.7200223716176737,
        "pitch": 0.09971516131012947,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": -0.14261708706411902,
          "pitch": 0.28358603441096264,
          "rotation": 5.497787143782138,
          "target": "32-artscraft-class"
        },
        {
          "yaw": -2.8532226656836883,
          "pitch": 0.3412421205108185,
          "rotation": 0,
          "target": "28-corridor--7"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "32-artscraft-class",
      "name": "Arts&Craft class",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 0.6979919937970926,
        "pitch": 0.10461004025186149,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": 2.4276908044899965,
          "pitch": 0.4692706847067942,
          "rotation": 0,
          "target": "31-corridor-8"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "33-second-floor",
      "name": "Second Floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 1.8096710180877746,
        "pitch": 0.3593071897190292,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": -0.28075530259782155,
          "pitch": 0.5158470496734537,
          "rotation": 0,
          "target": "27-first-floor"
        },
        {
          "yaw": 1.389188177212878,
          "pitch": 0.5744076353187673,
          "rotation": 0,
          "target": "34-corridor-9"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "34-corridor-9",
      "name": "Corridor-9",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 2.576694108745053,
        "pitch": 0.132601894589218,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": 2.4978901475787794,
          "pitch": 0.20368834350556142,
          "rotation": 0.7853981633974483,
          "target": "39-physics-lab"
        },
        {
          "yaw": 2.3017795813597974,
          "pitch": 0.3560476691733445,
          "rotation": 0,
          "target": "36-chemistry-lab"
        },
        {
          "yaw": 2.086988814649679,
          "pitch": 0.24114528614902397,
          "rotation": 5.497787143782138,
          "target": "37-library"
        },
        {
          "yaw": -2.3895617162786085,
          "pitch": 0.2112701717116412,
          "rotation": 5.497787143782138,
          "target": "35-dance-class"
        },
        {
          "yaw": -0.5335101883216904,
          "pitch": 0.4147955947595321,
          "rotation": 0,
          "target": "33-second-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "35-dance-class",
      "name": "Dance class",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 0.4309574425701985,
        "pitch": 0.06142435179719996,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": -1.4769007428597565,
          "pitch": 0.5287919237431495,
          "rotation": 0,
          "target": "34-corridor-9"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "36-chemistry-lab",
      "name": "Chemistry Lab",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -1.4354524386710459,
        "pitch": 0.37805226046609164,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": 2.444343671524294,
          "pitch": 0.3390234010626383,
          "rotation": 0,
          "target": "34-corridor-9"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "37-library",
      "name": "Library",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 2.061007895646135,
        "pitch": 0.0828298077265277,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": -2.0986809144362972,
          "pitch": 0.36816264536093257,
          "rotation": 5.497787143782138,
          "target": "34-corridor-9"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "38-music-class",
      "name": "Music Class",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "39-physics-lab",
      "name": "Physics Lab",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 0.02229219506318536,
        "pitch": 0.07143146295316072,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": 1.359724091092236,
          "pitch": 0.4243450453269162,
          "rotation": 5.497787143782138,
          "target": "34-corridor-9"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "40-front-garden",
      "name": "Front Garden",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -1.9954797103435737,
        "pitch": 0.17177495957382583,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": -2.605722409806308,
          "pitch": 0.19374611797822894,
          "rotation": 0.7853981633974483,
          "target": "2-entrance"
        },
        {
          "yaw": -2.8065364151556906,
          "pitch": 0.17058455165280506,
          "rotation": 5.497787143782138,
          "target": "5-ground-path"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
