const Planets = [
  {
    name: "mercury",
    description: "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
    rotacionTime: "58.6",
    revolutionTime: "87.97",
    radius: "2,439.7",
    temp: "430",
    imageOverview: __dirname + "/../assets/" + 'geology-earth.png',
    imageStructure: "",
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

exports.allData = async(req, res)=>{
  res.json({Planets})
  console.log(__dirname + '../assets/planet-mars.svg' )
}

