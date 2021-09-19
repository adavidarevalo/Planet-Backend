exports.Planet =[ 
  {
    name: "mercury",
    source: 'https://en.wikipedia.org/wiki/Mercury_(planet)',  
    main:[
      {
        name: 'rotacionTime',
        data: '58.6'
      },
      {
        name: 'revolutionTime',
        data: '87.97'
      },
      {
        name: 'radius',
        data: '2,439.7'
      },
      {
        name: 'temp',
        data: '430'
      },
    ],
    overview: {
      image: 'https://i.ibb.co/bdHQk76/planet-mercury.png',
      description: 'Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun is planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.'
    },
    structure: {
      image: 'https://i.ibb.co/4gTry19/planet-mercury-internal.png',
      description: 'Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet is density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth is density.'
    },
    surface: {
      image: "https://i.ibb.co/FHFShpx/geology-mercury.png",
      description: 'Mercury is surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars is or the Moon is.'
    }
  },
  {
    name: "mars",
    description: "loren"
  },  
  {
    name: "venus",
    description: "loren"
  }
  ]


const Planets = [
  {
    name: "mercury",
    description: "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
    rotacionTime: "58.6",
    revolutionTime: "87.97",
    radius: "2,439.7",
    temp: "430",
    imageOverview: __dirname + "/../assets/" + 'geology-earth.png',
    imageStructure: "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='290' height='290'><defs><circle id='a' cx='145' cy='145' r='145'/><circle id='c' cx='145' cy='145' r='145'/></defs><g fill='none' fill-rule='evenodd'><circle cx='145' cy='145' r='145' fill='#DEF4FC' fill-rule='nonzero'/><mask id='b' fill='#fff'><use xlink:href='#a'/></mask><path fill='#B1D5E2' fill-rule='nonzero' d='M154 253c6.627 0 12 5.373 12 12s-5.373 12-12 12h-20c-6.627 0-12-5.373-12-12s5.373-12 12-12h20zm86-48c6.627 0 12 5.373 12 12s-5.373 12-12 12h-62c-6.627 0-12-5.373-12-12s5.373-12 12-12h62zm-110 0c6.627 0 12 5.373 12 12s-5.373 12-12 12-12-5.373-12-12 5.373-12 12-12zm-45-60c0-6.627-5.373-12-12-12H2c-6.627 0-12-5.373-12-12s5.373-12 12-12h49c6.627 0 12-5.373 12-12s-5.373-12-12-12h-5c-6.627 0-12-5.373-12-12s5.373-12 12-12h73c6.627 0 12 5.373 12 12s-5.373 12-12 12H99v.01c-6.395.262-11.5 5.53-11.5 11.99s5.105 11.728 11.5 11.99v.01h45c6.627 0 12 5.373 12 12s-5.373 12-12 12h-2l-.001.01c-6.395.263-11.499 5.53-11.499 11.99s5.104 11.727 11.499 11.99l.001.01h52c6.627 0 12 5.373 12 12s-5.373 12-12 12H70c-6.627 0-12-5.373-12-12s5.373-12 12-12h3c6.627 0 12-5.373 12-12zm160 12c6.627 0 12 5.373 12 12s-5.373 12-12 12-12-5.373-12-12 5.373-12 12-12zm-223 0c6.627 0 12 5.373 12 12s-5.373 12-12 12H2c-6.627 0-12-5.373-12-12s5.373-12 12-12h20zm199-96c6.627 0 12 5.373 12 12s-5.373 12-12 12h-20c-6.627 0-12-5.373-12-12s5.373-12 12-12h20zm24-48c6.627 0 12 5.373 12 12s-5.373 12-12 12h-58c-6.627 0-12-5.373-12-12s5.373-12 12-12h58z' mask='url(#b)'/><mask id='d' fill='#fff'><use xlink:href='#c'/></mask><path fill='#000' fill-rule='nonzero' mask='url(#d)' opacity='.078' d='M146 0h145v290H146z'/></g></svg>",
    imageGeology: "",
  },
  {
    name: "venus",
    description: "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.",
    rotacionTime: "243",
    revolutionTime: "224.7",
    radius: "6,051.8",
    temp: "471",
    imageOverview: "",
    imageStructure: "",
    imageGeology: "",
  },
  {
    name: "earth",
    description: "Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.",
    rotacionTime: "0.99",
    revolutionTime: "365.26",
    radius: "6,371",
    temp: "16",
    imageOverview: "",
    imageStructure: "",
    imageGeology: "",
  },
  {
    name: "mars",
    description: "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the Red Planet",
    rotacionTime: "1.03",
    revolutionTime: "1.88",
    radius: "3,389.5 ",
    temp: "-28",
    imageOverview: "",
    imageStructure: "",
    imageGeology: "",
  },
  {
    name: "jupiter",
    description: "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.",
    rotacionTime: "9.93",
    revolutionTime: "11.86",
    radius: "369,911",
    temp: "-108",
    imageOverview: "",
    imageStructure: "",
    imageGeology: "",
  },
  {
    name: "saturn",
    description: "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.",
    rotacionTime: "10.8",
    revolutionTime: "29.46",
    radius: "58,232",
    temp: "-138",
    imageOverview: "",
    imageStructure: "",
    imageGeology: "",
  },
  {
    name: "uranus",
    description: "Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.",
    rotacionTime: "17.2 ",
    revolutionTime: "84",
    radius: "25,362",
    temp: "-195",
    imageOverview: "",
    imageStructure: "",
    imageGeology: "",
  },
  {
    name: "neptune",
    description: "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.",
    rotacionTime: "16.08",
    revolutionTime: "164.79",
    radius: "24,622",
    temp: "-201",
    imageOverview: "",
    imageStructure: "",
    imageGeology: "",
  },
]