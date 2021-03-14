# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create!(
  name:  'Michael Johnson',
  email: 'mjohnson@email.com',
  password: 'password123'
)
User.create!(
  name:  'Sara Smith',
  email: 'sarasmith@email.com',
  password: 'password123'
)
User.create!(
  name:  'Evan Douglas',
  email: 'edouglas@email.com',
  password: 'password123'
)


Location.create!(
  title:  'Kitsilano Beach Basketball Court',
  # user_id: users.first,
  # activity_id: activities.first,
  description: 'Outdoor basketball court with beauftiul backdrop next to the ocean',
  latitude: 49.275865,
  longitude: -123.152283,
  image: "https://i.pinimg.com/originals/9a/fa/0a/9afa0aff5b7bb1e41a3b4de509a83921.jpg"
)
Location.create!(
  title:  'Douglas Park Running Track',
  # user_id: users.second,
  # activity_id: activities.second,
  description: 'A track that circles a large park in a lovely neighbourhood',
  latitude: 49.251903,
  longitude: -123.124281,
  image: "https://vancouver.ca//parks/parks/images/douglas01.jpg"
)
Location.create!(
  title:  'Quarry Rock',
  # user_id: users.third,
  # activity_id: activities.third,
  description: 'A scenic hike close to great coffee and food',
  latitude: 49.329947,
  longitude: -122.949554,
  image: "https://www.vancouvertrails.com/images/hikes-small/quarry-rock.jpg"
)


Event.create!(
  name: 'Beach Volleyball at Kits Beach',
  # user_id: users.first,
  # activity_id: locations.first,
  description: 'Orgaizing a beach volleyball game at Kits beach this Friday night! Bring a volleyball if you have one!',
  capacity: 12,
  start_time: DateTime.strptime("03/28/2009 18:00", "%m/%d/%Y %H:%M"),
  end_time: DateTime.strptime("03/28/2009 21:00", "%m/%d/%Y %H:%M"),
  theme: "Sports"
)
Event.create!(
  name: 'Free outdoor yoga class!',
  # user_id: users.second,
  # activity_id: locations.second,
  description: 'Im hosting a beginners yoga class at dude chilling park! Open to anyone!',
  capacity: 50,
  start_time: DateTime.strptime("03/27/2009 10:00", "%m/%d/%Y %H:%M"),
  end_time: DateTime.strptime("03/27/2009 12:00", "%m/%d/%Y %H:%M"),
  theme: "Yoga"
)
Event.create!(
  name: 'Spikeball at Spanish Banks',
  # user_id: users.third,
  # activity_id: locations.third,
  description: 'Looking for a few people who want to play spikeball',
  capacity: 3,
  start_time: DateTime.strptime("03/26/2021 17:00", "%m/%d/%Y %H:%M"),
  end_time: DateTime.strptime("03/26/2021 20:00", "%m/%d/%Y %H:%M"),
  theme: "Sports"
)


Activity.create!(
  name: 'Basketball',
  icon: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/basketball-312-594135.png'
)
Activity.create!(
  name: 'Running',
  icon: 'https://cdn1.iconfinder.com/data/icons/sport-collection/100/Sport-014-512.png'
)
Activity.create!(
  name: 'Hiking',
  icon: 'https://e7.pngegg.com/pngimages/513/217/png-clipart-man-walking-signage-bidezidor-kirol-logo-pictogram-symbol-sign-hiking-icon-miscellaneous-angle.png'
)

