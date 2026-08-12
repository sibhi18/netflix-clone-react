const movies = [
  {
    id: 1,
    title: "Inception",
    year: 2010,
    rating: 8.8,
    category: "Sci-Fi",
    type: "movie",
    image: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg"
  },
  {
    id: 2,
    title: "Interstellar",
    year: 2014,
    rating: 8.7,
    category: "Sci-Fi",
    type: "movie",
    image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
  },
  {
    id: 3,
    title: "The Matrix",
    year: 1999,
    rating: 8.7,
    category: "Sci-Fi",
    type: "movie",
    image: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg"
  },
  {
    id: 4,
    title: "Blade Runner 2049",
    year: 2017,
    rating: 8.0,
    category: "Sci-Fi",
    type: "movie",
    image: "https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg"
  },
  {
    id: 5,
    title: "Avatar",
    year: 2009,
    rating: 7.6,
    category: "Sci-Fi",
    type: "movie",
    image: "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg"
  },
  {
    id: 6,
    title: "Avatar: The Way of Water",
    year: 2022,
    rating: 7.6,
    category: "Sci-Fi",
    type: "movie",
    image: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg"
  },
  {
    id: 7,
    title: "Dune",
    year: 2021,
    rating: 8.0,
    category: "Sci-Fi",
    type: "movie",
    image: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg"
  },
  {
    id: 8,
    title: "The Martian",
    year: 2015,
    rating: 8.0,
    category: "Sci-Fi",
    type: "movie",
    image: "https://image.tmdb.org/t/p/w500/5BHuvQ1V3kL2q1.jpg"
  },
  {
    id: 9,
    title: "Edge of Tomorrow",
    year: 2014,
    rating: 7.9,
    category: "Sci-Fi",
    type: "movie",
    image: "https://image.tmdb.org/t/p/w500/xjw5trHV7Mwo61P0kCTy8.jpg"
  },
  {
    id: 10,
    title: "Gravity",
    year: 2013,
    rating: 7.7,
    category: "Sci-Fi",
    type: "movie",
    image: "https://image.tmdb.org/t/p/w500/kZ2nZw8D681.jpg"
  },
  

{
  id: 31,
  title: "The Hangover",
  year: 2009,
  rating: 7.7,
  category: "Comedy",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/uluhlXubGu1VxU63X9Vmgg4.jpg"
},

{
  id: 32,
  title: "Superbad",
  year: 2007,
  rating: 7.6,
  category: "Comedy",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/ek8e8txUyUwd2BNqj6lFEerJ2m.jpg"
},

{
  id: 33,
  title: "The Mask",
  year: 1994,
  rating: 7.0,
  category: "Comedy",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/8xYw2r.jpg"
},

{
  id: 34,
  title: "Dumb and Dumber",
  year: 1994,
  rating: 7.3,
  category: "Comedy",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/4d6l0k4M4t5Y7m.jpg"
},

{
  id: 35,
  title: "21 Jump Street",
  year: 2012,
  rating: 7.2,
  category: "Comedy",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/8v3sq.jpg"
},

{
  id: 36,
  title: "22 Jump Street",
  year: 2014,
  rating: 7.0,
  category: "Comedy",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/850.jpg"
},

{
  id: 37,
  title: "We're the Millers",
  year: 2013,
  rating: 7.0,
  category: "Comedy",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/2p2.jpg"
},

{
  id: 38,
  title: "Bridesmaids",
  year: 2011,
  rating: 6.8,
  category: "Comedy",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/6l.jpg"
},

{
  id: 39,
  title: "Mean Girls",
  year: 2004,
  rating: 7.1,
  category: "Comedy",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/fXm3.jpg"
},

{
  id: 40,
  title: "White Chicks",
  year: 2004,
  rating: 5.8,
  category: "Comedy",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/aHTUPO.jpg"
},

{
  id: 41,
  title: "Rush Hour",
  year: 1998,
  rating: 7.0,
  category: "Comedy",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/3hL2Q8.jpg"
},

{
  id: 42,
  title: "Rush Hour 2",
  year: 2001,
  rating: 6.7,
  category: "Comedy",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/aBQ.jpg"
},

{
  id: 43,
  title: "Rush Hour 3",
  year: 2007,
  rating: 6.4,
  category: "Comedy",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/3x.jpg"
},

{
  id: 44,
  title: "Ace Ventura: Pet Detective",
  year: 1994,
  rating: 6.9,
  category: "Comedy",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/pqi.jpg"
},

{
  id: 45,
  title: "Bruce Almighty",
  year: 2003,
  rating: 6.8,
  category: "Comedy",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/fc.jpg"
},

{
  id: 46,
  title: "Yes Man",
  year: 2008,
  rating: 6.7,
  category: "Comedy",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/16y.jpg"
},

{
  id: 47,
  title: "Liar Liar",
  year: 1997,
  rating: 6.9,
  category: "Comedy",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/4y.jpg"
},

{
  id: 48,
  title: "The Proposal",
  year: 2009,
  rating: 6.8,
  category: "Comedy",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/5M0.jpg"
},

{
  id: 49,
  title: "Central Intelligence",
  year: 2016,
  rating: 6.4,
  category: "Comedy",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/7ir.jpg"
},

{
  id: 50,
  title: "Game Night",
  year: 2018,
  rating: 6.9,
  category: "Comedy",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/85R.jpg"
},

{
  id: 51,
  title: "Tropic Thunder",
  year: 2008,
  rating: 6.9,
  category: "Comedy",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/5Q.jpg"
},

{
  id: 52,
  title: "Step Brothers",
  year: 2008,
  rating: 6.6,
  category: "Comedy",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/7M.jpg"
},

{
  id: 53,
  title: "Elf",
  year: 2003,
  rating: 7.1,
  category: "Comedy",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/o.jpg"
},

{
  id: 54,
  title: "The Other Guys",
  year: 2010,
  rating: 6.7,
  category: "Comedy",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/3.jpg"
},

{
  id: 55,
  title: "Horrible Bosses",
  year: 2011,
  rating: 6.6,
  category: "Comedy",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/4.jpg"
},

{
  id: 56,
  title: "Get Smart",
  year: 2008,
  rating: 6.2,
  category: "Comedy",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/1v.jpg"
},

{
  id: 57,
  title: "Mr. Bean's Holiday",
  year: 2007,
  rating: 6.4,
  category: "Comedy",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/6.jpg"
},

{
  id: 58,
  title: "The Intern",
  year: 2015,
  rating: 7.2,
  category: "Comedy",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/9.jpg"
},

{
  id: 59,
  title: "We're No Angels",
  year: 1989,
  rating: 6.1,
  category: "Comedy",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/2.jpg"
},

{
  id: 60,
  title: "Night at the Museum",
  year: 2006,
  rating: 6.5,
  category: "Comedy",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/3.jpg"
},

{
  id: 61,
  title: "The Dark Knight",
  year: 2008,
  rating: 9.0,
  category: "Action",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
},
{
  id: 62,
  title: "Gladiator",
  year: 2000,
  rating: 8.5,
  category: "Action",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg"
},
{
  id: 63,
  title: "Avengers: Endgame",
  year: 2019,
  rating: 8.3,
  category: "Action",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg"
},
{
  id: 64,
  title: "Avengers: Infinity War",
  year: 2018,
  rating: 8.4,
  category: "Action",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg"
},
{
  id: 65,
  title: "Iron Man",
  year: 2008,
  rating: 7.9,
  category: "Action",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBYI0dWDJa.jpg"
},
{
  id: 66,
  title: "Captain America: The Winter Soldier",
  year: 2014,
  rating: 7.7,
  category: "Action",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/tVFRpFw3xTedgPGqxW0AOI8Qhh0.jpg"
},
{
  id: 67,
  title: "Guardians of the Galaxy",
  year: 2014,
  rating: 8.0,
  category: "Action",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg"
},
{
  id: 68,
  title: "Black Panther",
  year: 2018,
  rating: 7.3,
  category: "Action",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg"
},
{
  id: 69,
  title: "Thor: Ragnarok",
  year: 2017,
  rating: 7.9,
  category: "Action",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/rzRwTcFvttcN1ZpX2xv9w6gGqT6.jpg"
},
{
  id: 70,
  title: "Spider-Man: No Way Home",
  year: 2021,
  rating: 8.2,
  category: "Action",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"
},
{
  id: 71,
  title: "Spider-Man: Homecoming",
  year: 2017,
  rating: 7.4,
  category: "Action",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/c24sv2weTHPsmDa7jP7AqQZ1qSc.jpg"
},
{
  id: 72,
  title: "John Wick",
  year: 2014,
  rating: 7.4,
  category: "Action",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg"
},
{
  id: 73,
  title: "John Wick: Chapter 2",
  year: 2017,
  rating: 7.5,
  category: "Action",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/5aW0.jpg"
},
{
  id: 74,
  title: "John Wick: Chapter 3",
  year: 2019,
  rating: 7.4,
  category: "Action",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/ziEuG1essDuWuC5lpWUaw1uXY2O.jpg"
},
{
  id: 75,
  title: "John Wick: Chapter 4",
  year: 2023,
  rating: 7.7,
  category: "Action",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7.png"
},
{
  id: 76,
  title: "Mad Max: Fury Road",
  year: 2015,
  rating: 8.1,
  category: "Action",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/hA2ple9q4qnwxp3hKVNhroipsir.jpg"
},
{
  id: 77,
  title: "Top Gun: Maverick",
  year: 2022,
  rating: 8.2,
  category: "Action",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg"
},
{
  id: 78,
  title: "Mission: Impossible - Fallout",
  year: 2018,
  rating: 7.7,
  category: "Action",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/AkJQpZp9WoNdj7pLYsj1L8qN.jpg"
},
{
  id: 79,
  title: "Die Hard",
  year: 1988,
  rating: 8.2,
  category: "Action",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/yFihWxQcmqcaBR31QM6Y8gT.jpg"
},
{
  id: 80,
  title: "Terminator 2: Judgment Day",
  year: 1991,
  rating: 8.6,
  category: "Action",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/5M0j0B18abtBI5g2QY9.jpg"
},
{
  id: 81,
  title: "300",
  year: 2006,
  rating: 7.6,
  category: "Action",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/2L2.jpg"
},
{
  id: 82,
  title: "Man of Steel",
  year: 2013,
  rating: 7.1,
  category: "Action",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/8GFtkASPfa1A7lD2d3qQ5mQ9b7L.jpg"
},
{
  id: 83,
  title: "Wonder Woman",
  year: 2017,
  rating: 7.4,
  category: "Action",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/v4ncgZjG2ZuWjYQW0W9K8H8f7Y.jpg"
},
{
  id: 84,
  title: "Aquaman",
  year: 2018,
  rating: 6.8,
  category: "Action",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/ydUpl3QYy1X7w2kY5y9L4vM4G6.jpg"
},
{
  id: 85,
  title: "The Batman",
  year: 2022,
  rating: 7.8,
  category: "Action",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg"
},
{
  id: 86,
  title: "The Equalizer",
  year: 2014,
  rating: 7.2,
  category: "Action",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/2eQfjx7r1q.jpg"
},
{
  id: 87,
  title: "Taken",
  year: 2008,
  rating: 7.8,
  category: "Action",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/y5nO.jpg"
},
{
  id: 88,
  title: "Casino Royale",
  year: 2006,
  rating: 8.0,
  category: "Action",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/lMrxYKKHD4p.jpg"
},
{
  id: 89,
  title: "Skyfall",
  year: 2012,
  rating: 7.8,
  category: "Action",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/izrHg2UzxG.jpg"
},
{
  id: 90,
  title: "Fast Five",
  year: 2011,
  rating: 7.3,
  category: "Action",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/gEfQjjQwY7.jpg"
},
// 🔥 THRILLER MOVIES

{
  id: 91,
  title: "The Silence of the Lambs",
  year: 1991,
  rating: 8.6,
  category: "Thriller",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/uS9m8OBk1A8eM.jpg"
},
{
  id: 92,
  title: "Se7en",
  year: 1995,
  rating: 8.6,
  category: "Thriller",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/6yoghtyTpznpBik8EngEmj.jpg"
},
{
  id: 93,
  title: "Shutter Island",
  year: 2010,
  rating: 8.2,
  category: "Thriller",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/4GDy0PHYX3VRXU.jpg"
},
{
  id: 94,
  title: "Gone Girl",
  year: 2014,
  rating: 8.1,
  category: "Thriller",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/lZ7Weh7Y8n5m.jpg"
},
{
  id: 95,
  title: "Prisoners",
  year: 2013,
  rating: 8.1,
  category: "Thriller",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/uhviy.jpg"
},
{
  id: 96,
  title: "The Prestige",
  year: 2006,
  rating: 8.5,
  category: "Thriller",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/5MXyQfz8xUP3dIFh2G4B6Wm4r2T.jpg"
},
{
  id: 97,
  title: "Joker",
  year: 2019,
  rating: 8.4,
  category: "Thriller",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"
},
{
  id: 98,
  title: "Black Swan",
  year: 2010,
  rating: 8.0,
  category: "Thriller",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/rH19vkj5sY2.jpg"
},
{
  id: 99,
  title: "Nightcrawler",
  year: 2014,
  rating: 7.8,
  category: "Thriller",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/j9q7.jpg"
},
{
  id: 100,
  title: "The Departed",
  year: 2006,
  rating: 8.5,
  category: "Thriller",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/nT97ifVT2J1yMQmeq20Qblg61T.jpg"
},
{
  id: 101,
  title: "No Country for Old Men",
  year: 2007,
  rating: 8.2,
  category: "Thriller",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/6d5XOcz.jpg"
},
{
  id: 102,
  title: "Memento",
  year: 2000,
  rating: 8.4,
  category: "Thriller",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/fKTPH2WvH8n.jpg"
},
{
  id: 103,
  title: "The Sixth Sense",
  year: 1999,
  rating: 8.2,
  category: "Thriller",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/vOyfUXN.jpg"
},
{
  id: 104,
  title: "A Quiet Place",
  year: 2018,
  rating: 7.5,
  category: "Thriller",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/nAU74GmpUk7t5iklEp3R4iH4f7.jpg"
},
{
  id: 105,
  title: "The Invisible Man",
  year: 2020,
  rating: 7.1,
  category: "Thriller",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/5EufsDwXdY2L.jpg"
},
{
  id: 106,
  title: "Split",
  year: 2016,
  rating: 7.3,
  category: "Thriller",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/bqb9Wsm.jpg"
},
{
  id: 107,
  title: "Glass",
  year: 2019,
  rating: 6.7,
  category: "Thriller",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/sv5.jpg"
},
{
  id: 108,
  title: "The Girl with the Dragon Tattoo",
  year: 2011,
  rating: 7.8,
  category: "Thriller",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/2B.jpg"
},
{
  id: 109,
  title: "Zodiac",
  year: 2007,
  rating: 7.7,
  category: "Thriller",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/6YmeO4.jpg"
},
{
  id: 110,
  title: "The Game",
  year: 1997,
  rating: 7.7,
  category: "Thriller",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/4z.jpg"
},
{
  id: 111,
  title: "Enemy",
  year: 2013,
  rating: 6.9,
  category: "Thriller",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/7u.jpg"
},
{
  id: 112,
  title: "The Machinist",
  year: 2004,
  rating: 7.5,
  category: "Thriller",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/9p.jpg"
},
{
  id: 113,
  title: "Wind River",
  year: 2017,
  rating: 7.7,
  category: "Thriller",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/pyS.jpg"
},
{
  id: 114,
  title: "Sicario",
  year: 2015,
  rating: 7.7,
  category: "Thriller",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/lGO.jpg"
},
{
  id: 115,
  title: "Sicario: Day of the Soldado",
  year: 2018,
  rating: 7.1,
  category: "Thriller",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/msq.jpg"
},
{
  id: 116,
  title: "The Town",
  year: 2010,
  rating: 7.5,
  category: "Thriller",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/3NI.jpg"
},
{
  id: 117,
  title: "Argo",
  year: 2012,
  rating: 7.7,
  category: "Thriller",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/5h.jpg"
},
{
  id: 118,
  title: "Captain Phillips",
  year: 2013,
  rating: 7.8,
  category: "Thriller",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/2h.jpg"
},
{
  id: 119,
  title: "The Guilty",
  year: 2021,
  rating: 6.3,
  category: "Thriller",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/a5.jpg"
},
{
  id: 120,
  title: "Searching",
  year: 2018,
  rating: 7.6,
  category: "Thriller",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/9N.jpg"
},

// 🎭 DRAMA MOVIES

{
  id: 121,
  title: "The Shawshank Redemption",
  year: 1994,
  rating: 9.3,
  category: "Drama",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg"
},
{
  id: 122,
  title: "Forrest Gump",
  year: 1994,
  rating: 8.8,
  category: "Drama",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg"
},
{
  id: 123,
  title: "The Green Mile",
  year: 1999,
  rating: 8.6,
  category: "Drama",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/8VG8fDNiy50H4FedGwdSVUPoaJe.jpg"
},
{
  id: 124,
  title: "Fight Club",
  year: 1999,
  rating: 8.8,
  category: "Drama",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3.jpg"
},
{
  id: 125,
  title: "Good Will Hunting",
  year: 1997,
  rating: 8.3,
  category: "Drama",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/z2FnLKpFi1HPO7BEJxdkv6hpJSU.jpg"
},
{
  id: 126,
  title: "A Beautiful Mind",
  year: 2001,
  rating: 8.2,
  category: "Drama",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/rEIg5yJdNoYFMof.jpg"
},
{
  id: 127,
  title: "The Pursuit of Happyness",
  year: 2006,
  rating: 8.0,
  category: "Drama",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/lBYOkHsG.jpg"
},
{
  id: 128,
  title: "Whiplash",
  year: 2014,
  rating: 8.5,
  category: "Drama",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/7fn624j5lj3xTme2SgiLCeuedmO.jpg"
},
{
  id: 129,
  title: "The Social Network",
  year: 2010,
  rating: 7.8,
  category: "Drama",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/n0ybibhJtQ5icDqTp8eRytcIHJx.jpg"
},
{
  id: 130,
  title: "The Wolf of Wall Street",
  year: 2013,
  rating: 8.2,
  category: "Drama",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/pWHf4khOloNVfCxscsXFj3jj6gP.jpg"
},
{
  id: 131,
  title: "The Revenant",
  year: 2015,
  rating: 8.0,
  category: "Drama",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/ji3ecJphATlVgWNY0B0RVXZizdf.jpg"
},
{
  id: 132,
  title: "12 Years a Slave",
  year: 2013,
  rating: 8.1,
  category: "Drama",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/xdANQijuNrJaw1HA61rDccME4Th.jpg"
},
{
  id: 133,
  title: "The Pianist",
  year: 2002,
  rating: 8.5,
  category: "Drama",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/2hF2H.jpg"
},
{
  id: 134,
  title: "Schindler's List",
  year: 1993,
  rating: 9.0,
  category: "Drama",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/sF1U4EUQS8YHUYb.jpg"
},
{
  id: 135,
  title: "The Godfather",
  year: 1972,
  rating: 9.2,
  category: "Drama",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1f.jpg"
},
{
  id: 136,
  title: "The Godfather Part II",
  year: 1974,
  rating: 9.0,
  category: "Drama",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/hek3koDUyRQk.jpg"
},
{
  id: 137,
  title: "There Will Be Blood",
  year: 2007,
  rating: 8.2,
  category: "Drama",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/fa0RDkAlCBr.jpg"
},
{
  id: 138,
  title: "The Departed",
  year: 2006,
  rating: 8.5,
  category: "Drama",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/nT97ifVT2J1yMQmeq20Qblg61T.jpg"
},
{
  id: 139,
  title: "American Beauty",
  year: 1999,
  rating: 8.0,
  category: "Drama",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/wby9315Q.jpg"
},
{
  id: 140,
  title: "Requiem for a Dream",
  year: 2000,
  rating: 8.3,
  category: "Drama",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/nOd6vjEmz.jpg"
},
{
  id: 141,
  title: "The Blind Side",
  year: 2009,
  rating: 7.6,
  category: "Drama",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/bMgq7VBriuBFknXE.jpg"
},
{
  id: 142,
  title: "Room",
  year: 2015,
  rating: 8.1,
  category: "Drama",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/pCdm.jpg"
},
{
  id: 143,
  title: "Marriage Story",
  year: 2019,
  rating: 7.7,
  category: "Drama",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/2JR.jpg"
},
{
  id: 144,
  title: "The Father",
  year: 2020,
  rating: 8.2,
  category: "Drama",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/uxW.jpg"
},
{
  id: 145,
  title: "Manchester by the Sea",
  year: 2016,
  rating: 7.8,
  category: "Drama",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/oX.jpg"
},
{
  id: 146,
  title: "Moonlight",
  year: 2016,
  rating: 7.4,
  category: "Drama",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/93.jpg"
},
{
  id: 147,
  title: "The Imitation Game",
  year: 2014,
  rating: 8.0,
  category: "Drama",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/zSqJ1qFq8NXF.jpg"
},
{
  id: 148,
  title: "Catch Me If You Can",
  year: 2002,
  rating: 8.1,
  category: "Drama",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/ctjEj2xM.jpg"
},
{
  id: 149,
  title: "The Last Samurai",
  year: 2003,
  rating: 7.8,
  category: "Drama",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/lsas2t.jpg"
},
{
  id: 150,
  title: "Life of Pi",
  year: 2012,
  rating: 7.9,
  category: "Drama",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/m5w2hy.jpg"
},

// 🌎 ADVENTURE MOVIES

{
  id: 151,
  title: "The Lord of the Rings: The Fellowship of the Ring",
  year: 2001,
  rating: 8.9,
  category: "Adventure",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg"
},
{
  id: 152,
  title: "The Lord of the Rings: The Two Towers",
  year: 2002,
  rating: 8.8,
  category: "Adventure",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/5VTN0pR8gcqV3E2f9.jpg"
},
{
  id: 153,
  title: "The Lord of the Rings: The Return of the King",
  year: 2003,
  rating: 9.0,
  category: "Adventure",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3.jpg"
},
{
  id: 154,
  title: "Pirates of the Caribbean: The Curse of the Black Pearl",
  year: 2003,
  rating: 8.1,
  category: "Adventure",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/z8onk7LV9Mmw6zK.jpg"
},
{
  id: 155,
  title: "Pirates of the Caribbean: Dead Man's Chest",
  year: 2006,
  rating: 7.4,
  category: "Adventure",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/uXEqmloGyP7UXA.jpg"
},
{
  id: 156,
  title: "Pirates of the Caribbean: At World's End",
  year: 2007,
  rating: 7.1,
  category: "Adventure",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/jGWpG4YhpQw.jpg"
},
{
  id: 157,
  title: "Indiana Jones and the Raiders of the Lost Ark",
  year: 1981,
  rating: 8.4,
  category: "Adventure",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/ceG9VzoRAVGwivFU403Wc3A.jpg"
},
{
  id: 158,
  title: "Indiana Jones and the Last Crusade",
  year: 1989,
  rating: 8.2,
  category: "Adventure",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/sizg1AU8f8JDZX4Q.jpg"
},
{
  id: 159,
  title: "Jurassic Park",
  year: 1993,
  rating: 8.2,
  category: "Adventure",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/fjTU1Bgh3KJu4O.jpg"
},
{
  id: 160,
  title: "Jurassic World",
  year: 2015,
  rating: 6.9,
  category: "Adventure",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/A0LZhxk.jpg"
},
{
  id: 161,
  title: "King Kong",
  year: 2005,
  rating: 7.0,
  category: "Adventure",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/6a.jpg"
},
{
  id: 162,
  title: "The Mummy",
  year: 1999,
  rating: 7.1,
  category: "Adventure",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/4k.jpg"
},
{
  id: 163,
  title: "The Mummy Returns",
  year: 2001,
  rating: 6.4,
  category: "Adventure",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/3y.jpg"
},
{
  id: 164,
  title: "National Treasure",
  year: 2004,
  rating: 6.9,
  category: "Adventure",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/px.jpg"
},
{
  id: 165,
  title: "National Treasure: Book of Secrets",
  year: 2007,
  rating: 6.5,
  category: "Adventure",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/x.jpg"
},
{
  id: 166,
  title: "The Revenant",
  year: 2015,
  rating: 8.0,
  category: "Adventure",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/ji3ecJphATlVgWNY0B0RVXZizdf.jpg"
},
{
  id: 167,
  title: "Life of Pi",
  year: 2012,
  rating: 7.9,
  category: "Adventure",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/m5w2hy.jpg"
},
{
  id: 168,
  title: "The Secret Life of Walter Mitty",
  year: 2013,
  rating: 7.3,
  category: "Adventure",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/tE.jpg"
},
{
  id: 169,
  title: "Jumanji: Welcome to the Jungle",
  year: 2017,
  rating: 6.9,
  category: "Adventure",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/pSg.jpg"
},
{
  id: 170,
  title: "Jumanji: The Next Level",
  year: 2019,
  rating: 6.7,
  category: "Adventure",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/jL.jpg"
},
{
  id: 171,
  title: "Uncharted",
  year: 2022,
  rating: 6.3,
  category: "Adventure",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/rJHC1Rq.jpg"
},
{
  id: 172,
  title: "The Lost City",
  year: 2022,
  rating: 6.1,
  category: "Adventure",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/so.jpg"
},
{
  id: 173,
  title: "Tomb Raider",
  year: 2018,
  rating: 6.3,
  category: "Adventure",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/s4.jpg"
},
{
  id: 174,
  title: "Prince of Persia: The Sands of Time",
  year: 2010,
  rating: 6.6,
  category: "Adventure",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/8.jpg"
},
{
  id: 175,
  title: "Journey to the Center of the Earth",
  year: 2008,
  rating: 5.8,
  category: "Adventure",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/5.jpg"
},
{
  id: 176,
  title: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
  year: 2005,
  rating: 7.2,
  category: "Adventure",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/iREd0rNCjYdf5Ar0v.jpg"
},
{
  id: 177,
  title: "The Chronicles of Narnia: Prince Caspian",
  year: 2008,
  rating: 6.5,
  category: "Adventure",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/qxz.jpg"
},
{
  id: 178,
  title: "The Hobbit: An Unexpected Journey",
  year: 2012,
  rating: 7.8,
  category: "Adventure",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/yHA9Fc37VmpUA5Un.jpg"
},
{
  id: 179,
  title: "The Hobbit: The Desolation of Smaug",
  year: 2013,
  rating: 7.8,
  category: "Adventure",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/xQYiXsheRCDBA39D.jpg"
},
{
  id: 180,
  title: "The Hobbit: The Battle of the Five Armies",
  year: 2014,
  rating: 7.4,
  category: "Adventure",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/xT98tL.jpg"
},

// 🧙 FANTASY MOVIES

{
  id: 181,
  title: "Harry Potter and the Sorcerer's Stone",
  year: 2001,
  rating: 7.6,
  category: "Fantasy",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg"
},
{
  id: 182,
  title: "Harry Potter and the Chamber of Secrets",
  year: 2002,
  rating: 7.4,
  category: "Fantasy",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/sdEOH0992YZ0QSxg.jpg"
},
{
  id: 183,
  title: "Harry Potter and the Prisoner of Azkaban",
  year: 2004,
  rating: 7.9,
  category: "Fantasy",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/aWxwnYoe8p2d2.jpg"
},
{
  id: 184,
  title: "Harry Potter and the Goblet of Fire",
  year: 2005,
  rating: 7.8,
  category: "Fantasy",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/fECBtHlr0RB2.jpg"
},
{
  id: 185,
  title: "Harry Potter and the Order of the Phoenix",
  year: 2007,
  rating: 7.5,
  category: "Fantasy",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/5aOyriWk.jpg"
},
{
  id: 186,
  title: "Harry Potter and the Half-Blood Prince",
  year: 2009,
  rating: 7.6,
  category: "Fantasy",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/z7uo9zmQdQwU5Z.jpg"
},
{
  id: 187,
  title: "Harry Potter and the Deathly Hallows: Part 1",
  year: 2010,
  rating: 7.7,
  category: "Fantasy",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/iGoXIpQb7Pot00E.jpg"
},
{
  id: 188,
  title: "Harry Potter and the Deathly Hallows: Part 2",
  year: 2011,
  rating: 8.1,
  category: "Fantasy",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/c54HpQmuwXjHq2C9.jpg"
},
{
  id: 189,
  title: "Fantastic Beasts and Where to Find Them",
  year: 2016,
  rating: 7.2,
  category: "Fantasy",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/h6NYfVUyM.jpg"
},
{
  id: 190,
  title: "The Golden Compass",
  year: 2007,
  rating: 6.0,
  category: "Fantasy",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/4r2.jpg"
},
{
  id: 191,
  title: "Maleficent",
  year: 2014,
  rating: 7.0,
  category: "Fantasy",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/bDG3yei.jpg"
},
{
  id: 192,
  title: "Maleficent: Mistress of Evil",
  year: 2019,
  rating: 6.6,
  category: "Fantasy",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/tBuabjEqxzo.jpg"
},
{
  id: 193,
  title: "Alice in Wonderland",
  year: 2010,
  rating: 6.6,
  category: "Fantasy",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/o0kre9wRCZ6.jpg"
},
{
  id: 194,
  title: "Alice Through the Looking Glass",
  year: 2016,
  rating: 6.6,
  category: "Fantasy",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/kb.jpg"
},
{
  id: 195,
  title: "Beauty and the Beast",
  year: 2017,
  rating: 7.0,
  category: "Fantasy",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/6iIcq.jpg"
},
{
  id: 196,
  title: "Cinderella",
  year: 2015,
  rating: 6.8,
  category: "Fantasy",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/j91.jpg"
},
{
  id: 197,
  title: "Snow White and the Huntsman",
  year: 2012,
  rating: 5.9,
  category: "Fantasy",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/b.jpg"
},
{
  id: 198,
  title: "The Huntsman: Winter's War",
  year: 2016,
  rating: 6.0,
  category: "Fantasy",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/c.jpg"
},
{
  id: 199,
  title: "Stardust",
  year: 2007,
  rating: 7.6,
  category: "Fantasy",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/A.jpg"
},
{
  id: 200,
  title: "The Princess Bride",
  year: 1987,
  rating: 8.0,
  category: "Fantasy",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/2FC.jpg"
},
{
  id: 201,
  title: "Pan's Labyrinth",
  year: 2006,
  rating: 8.2,
  category: "Fantasy",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/2F2.jpg"
},
{
  id: 202,
  title: "The Shape of Water",
  year: 2017,
  rating: 7.3,
  category: "Fantasy",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/9z8.jpg"
},
{
  id: 203,
  title: "Doctor Strange",
  year: 2016,
  rating: 7.5,
  category: "Fantasy",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/xf8P.jpg"
},
{
  id: 204,
  title: "Doctor Strange in the Multiverse of Madness",
  year: 2022,
  rating: 6.9,
  category: "Fantasy",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/9G.jpg"
},
{
  id: 205,
  title: "Thor",
  year: 2011,
  rating: 7.0,
  category: "Fantasy",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/prSfAi1xGrhL.jpg"
},
{
  id: 206,
  title: "Thor: The Dark World",
  year: 2013,
  rating: 6.8,
  category: "Fantasy",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/wp6OxE.jpg"
},
{
  id: 207,
  title: "The Chronicles of Narnia",
  year: 2005,
  rating: 7.2,
  category: "Fantasy",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/iREd0rNCjYdf5Ar0v.jpg"
},
{
  id: 208,
  title: "Percy Jackson & the Olympians",
  year: 2010,
  rating: 5.9,
  category: "Fantasy",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/5Q.jpg"
},
{
  id: 209,
  title: "Clash of the Titans",
  year: 2010,
  rating: 5.8,
  category: "Fantasy",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/4g.jpg"
},
{
  id: 210,
  title: "Wrath of the Titans",
  year: 2012,
  rating: 5.7,
  category: "Fantasy",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/7.jpg"
},

// 🕵️ CRIME MOVIES

{
  id: 211,
  title: "The Godfather",
  year: 1972,
  rating: 9.2,
  category: "Crime",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1f.jpg"
},
{
  id: 212,
  title: "The Godfather Part II",
  year: 1974,
  rating: 9.0,
  category: "Crime",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/hek3koDUyRQk.jpg"
},
{
  id: 213,
  title: "Goodfellas",
  year: 1990,
  rating: 8.7,
  category: "Crime",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/aKuFiU82s5ISJpGZp7Y.jpg"
},
{
  id: 214,
  title: "Scarface",
  year: 1983,
  rating: 8.3,
  category: "Crime",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/iQ5ztdjvteGeboxtm.jpg"
},
{
  id: 215,
  title: "The Irishman",
  year: 2019,
  rating: 7.8,
  category: "Crime",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/mbm8k3.jpg"
},
{
  id: 216,
  title: "Casino",
  year: 1995,
  rating: 8.2,
  category: "Crime",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/4TS5O1IP42bY2BvgMxL.jpg"
},
{
  id: 217,
  title: "Heat",
  year: 1995,
  rating: 8.3,
  category: "Crime",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/umSVjVdbVw.jpg"
},
{
  id: 218,
  title: "The Usual Suspects",
  year: 1995,
  rating: 8.5,
  category: "Crime",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/jgJoRWltoS.jpg"
},
{
  id: 219,
  title: "American Gangster",
  year: 2007,
  rating: 7.8,
  category: "Crime",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/6wD.jpg"
},
{
  id: 220,
  title: "The Wolf of Wall Street",
  year: 2013,
  rating: 8.2,
  category: "Crime",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/pWHf4khOloNVfCxscsXFj3jj6gP.jpg"
},
{
  id: 221,
  title: "Catch Me If You Can",
  year: 2002,
  rating: 8.1,
  category: "Crime",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/ctjEj2xM.jpg"
},
{
  id: 222,
  title: "The Town",
  year: 2010,
  rating: 7.5,
  category: "Crime",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/3NI.jpg"
},
{
  id: 223,
  title: "Prisoners",
  year: 2013,
  rating: 8.1,
  category: "Crime",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/uhviy.jpg"
},
{
  id: 224,
  title: "Zodiac",
  year: 2007,
  rating: 7.7,
  category: "Crime",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/6YmeO4.jpg"
},
{
  id: 225,
  title: "The Departed",
  year: 2006,
  rating: 8.5,
  category: "Crime",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/nT97ifVT2J1yMQmeq20Qblg61T.jpg"
},
{
  id: 226,
  title: "Reservoir Dogs",
  year: 1992,
  rating: 8.3,
  category: "Crime",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/xi8Iu6qyTfy.jpg"
},
{
  id: 227,
  title: "Pulp Fiction",
  year: 1994,
  rating: 8.9,
  category: "Crime",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfb.jpg"
},
{
  id: 228,
  title: "Once Upon a Time in America",
  year: 1984,
  rating: 8.3,
  category: "Crime",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/i0enkzs4.jpg"
},
{
  id: 229,
  title: "Donnie Brasco",
  year: 1997,
  rating: 7.7,
  category: "Crime",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/xtN.jpg"
},
{
  id: 230,
  title: "Carlito's Way",
  year: 1993,
  rating: 7.9,
  category: "Crime",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/v1.jpg"
},
{
  id: 231,
  title: "Training Day",
  year: 2001,
  rating: 7.7,
  category: "Crime",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/bP.jpg"
},
{
  id: 232,
  title: "The Equalizer",
  year: 2014,
  rating: 7.2,
  category: "Crime",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/2eQfjx7r1q.jpg"
},
{
  id: 233,
  title: "John Wick",
  year: 2014,
  rating: 7.4,
  category: "Crime",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg"
},
{
  id: 234,
  title: "Road to Perdition",
  year: 2002,
  rating: 7.7,
  category: "Crime",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/6.jpg"
},
{
  id: 235,
  title: "The Untouchables",
  year: 1987,
  rating: 7.8,
  category: "Crime",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/8.jpg"
},
{
  id: 236,
  title: "Public Enemies",
  year: 2009,
  rating: 6.9,
  category: "Crime",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/9.jpg"
},
{
  id: 237,
  title: "Black Mass",
  year: 2015,
  rating: 6.5,
  category: "Crime",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/7.jpg"
},
{
  id: 238,
  title: "Legend",
  year: 2015,
  rating: 7.0,
  category: "Crime",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/2.jpg"
},
{
  id: 239,
  title: "The Gentlemen",
  year: 2019,
  rating: 7.8,
  category: "Crime",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/jtrhTYB7xSrJx.jpg"
},
{
  id: 240,
  title: "Lock, Stock and Two Smoking Barrels",
  year: 1998,
  rating: 8.1,
  category: "Crime",
  type: "movie",
  image: "https://image.tmdb.org/t/p/w500/8k.jpg"
}


];

export default movies;