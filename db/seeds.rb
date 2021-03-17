basketball = Activity.create!(
  name: 'Basketball',
  icon: ''
)
calisthenics = Activity.create!(
  name: 'Calisthenics',
  icon: ''
)
running = Activity.create!(
  name: 'Running',
  icon: ''
)
biking = Activity.create!(
  name: 'Biking',
  icon: ''
)

basketball.locations.create!(
  title:  'Kitsilano Beach Basketball Court',
  description: 'Outdoor basketball court with beauftiul backdrop next to the ocean',
  latitude: 49.275865,
  longitude: -123.152283,
  image: "https://i.pinimg.com/originals/9a/fa/0a/9afa0aff5b7bb1e41a3b4de509a83921.jpg"
)
running.locations.create!(
  title:  'Douglas Park Running Track',
  description: 'A track that circles a large park in a lovely neighbourhood',
  latitude: 49.251903,
  longitude: -123.124281,
  image: "https://vancouver.ca//parks/parks/images/douglas01.jpg"
)
running.locations.create!(
  title:  'Quarry Rock',
  description: 'A scenic hike close to great coffee and food',
  latitude: 49.329947,
  longitude: -122.949554,
  image: "https://www.vancouvertrails.com/images/hikes-small/quarry-rock.jpg"
)
