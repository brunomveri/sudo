# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users.create!({
  name:  'Michael Johnson',
  email: 'mjohnson@email.com',
  password: 'password123'
})
users.create!({
  name:  'Sara Smith',
  email: 'sarasmith@email.com',
  password: 'password123'
})
users.create!({
  name:  'Evan Douglas',
  email: 'edouglas@email.com',
  password: 'password123'
})


locations.create!({
  title:  'Kitsilano Beach Basketball Court',
  description: 'Outdoor basketball court with beauftiul backdrop next to the ocean',
  latitude: 0,
  longitude: 0,
  image: "https://i.pinimg.com/originals/9a/fa/0a/9afa0aff5b7bb1e41a3b4de509a83921.jpg"
})
locations.create!({
  title:  'Douglas Park Running Track',
  description: 'A track that circles a large park in a lovely neighbourhood',
  latitude: 0,
  longitude: 0,
  image: "https://vancouver.ca//parks/parks/images/douglas01.jpg"
})
locations.create!({
  title:  'Quarry Rock',
  description: 'A scenic hike close to great coffee and food',
  latitude: 0,
  longitude: 0,
  image: "https://www.vancouvertrails.com/images/hikes-small/quarry-rock.jpg"
})



events.create!({
  name: 'Beach Volleyball at Kits Beach',
  description: 'Orgaizing a beach volleyball game at Kits beach this Friday night! Bring a volleyball if you have one!',
  capacity: 12,
  start_time: DateTime.strptime("03/28/2009 18:00", "%m/%d/%Y %H:%M"),
  end_time: DateTime.strptime("03/28/2009 21:00", "%m/%d/%Y %H:%M"),
  theme: "Sports"
})
events.create!({
  name: 'Free outdoor yoga class!',
  description: 'Im hosting a beginners yoga class at dude chilling park! Open to anyone!',
  capacity: 50,
  start_time: DateTime.strptime("03/27/2009 10:00", "%m/%d/%Y %H:%M"),
  end_time: DateTime.strptime("03/27/2009 12:00", "%m/%d/%Y %H:%M"),
  theme: "Yoga"
})
events.create!({
  name: 'Spikeball at Spanish Banks',
  description: 'Looking for a few people who want to play spikeball',
  capacity: 3,
  start_time: DateTime.strptime("03/26/2021 17:00", "%m/%d/%Y %H:%M"),
  end_time: DateTime.strptime("03/26/2021 20:00", "%m/%d/%Y %H:%M"),
  theme: "Sports"
})


activities.create!({
  name: 'Volleyball',
  icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Volleyball_icon_by_Arthur_Shlain.svg/768px-Volleyball_icon_by_Arthur_Shlain.svg.png'
})

activities.create!({
  name: 'Yoga',
  icon: 'https://www.vhv.rs/dpng/d/450-4501659_free-yoga-symbol-png-yoga-icon-png-transparent.png'
})

activities.create!({
  name: 'Sports',
  icon: 'https://image.flaticon.com/icons/png/512/2158/2158445.png'
})