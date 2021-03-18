# Users Seeds

users = [
  ['amelia@example.ca', '1234'],
  ['john@example.ca', '1234']
]

users.each do | email, password |
  User.create(
    email: email,
    password: password
  )
end

# Activities Seeds

running = Activity.create!(
  name: 'Running',
  icon: 'https://img.icons8.com/ios/452/running.png'
)
basketball = Activity.create!(
  name: 'Basketball',
  icon: 'https://img.icons8.com/android/452/basketball.png'
)
biking = Activity.create!(
  name: 'Biking',
  icon: 'https://i.pinimg.com/564x/23/13/eb/2313ebaeb4d88715a6e9e236852d86a1.jpg'
)
calisthenics = Activity.create!(
  name: 'Calisthenics',
  icon: 'https://image.shutterstock.com/image-vector/stretching-calisthenics-wellness-icon-design-260nw-1433051642.jpg'
)
tennis = Activity.create!(
  name: 'Tennis',
  icon: ''
)
volleyball = Activity.create!(
  name: 'Volleyball',
  icon: ''
)
hiking = Activity.create!(
  name: 'Hiking',
  icon: ''
)

# Locations Seeds

running.locations.create!(
  title:  'Douglas Park Running Track',
  description: 'A track that circles a large park in a lovely neighbourhood',
  latitude: 49.251903,
  longitude: -123.124281,
  image: "https://vancouver.ca//parks/parks/images/douglas01.jpg"
)
running.locations.create!(
  title:  'Camosun Park Running Track',
  description: 'A 400m gravel track bordering Pacific Spirit Park',
  latitude: 49.257358,
  longitude: -123.201413,
  image: "https://vancouver.ca/images/parkfinder/camosun_title.jpg"
)

basketball.locations.create!(
  title:  'Kitsilano Beach Basketball Court',
  description: 'Outdoor basketball court with beauftiul backdrop next to the ocean',
  latitude: 49.275865,
  longitude: -123.152283,
  image: "https://i.pinimg.com/originals/9a/fa/0a/9afa0aff5b7bb1e41a3b4de509a83921.jpg"
)
basketball.locations.create!(
  title: 'Mt. Pleasant Basketball Court',
  description: 'A basketball court in the middle of a lively park',
  latitude: 49.257173,
  longitude: -123.106222,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt01amuo4lC0JB7WRWfGcNUYKtWYzFVQBAiQ&usqp=CAU"
)
basketball.locations.create!(
  title: 'John Laurie Park',
  description: 'A great place to play basketball',
  latitude: 51.11459608347758,
  longitude: -114.15036644449772,
  image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.iberkshires.com%2Fstory%2F58186%2FLakewood-Park-Basketball-Court-Dedicated-in-Pittsfield-.html&psig=AOvVaw1BEK99ew6dMeBwfRtbVZcJ&ust=1616088689897000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPCX-tztt-8CFQAAAAAdAAAAABAD"
)

biking.locations.create!(
  title: 'Bow River Pathway',
  description: 'Take in the view of the city skyline with a ride along the Bow River. Begin this exuberant ride at the Peace Bridge and ride along the Bow River Pathway down to Edworthy Park.',
  latitude: 51.46982,
  longitude: -112.712341,
  image: 'https://www.visitcalgary.com/sites/default/files/2021-01/biking_small_image_2020.jpg'
)

biking.locations.create!(
  title: 'Stanley Park Seawall',
  description: 'One of Vancouvers most famous outdoor activites. Cycle around Stanley Park right next to the ocean with a view of the mountains and the city.',
  latitude: 49.297115,
  longitude: -123.132900,
  image: 'https://averagejoecyclist.com/wp-content/uploads/2015/06/stanley-park-seawall.indexed.png'
)

calisthenics.locations.create!(
  title:  'Douglas Park Fitness Circuit',
  description: 'Workout area with chinup bars, parallel bars, hurdles, and benches',
  latitude: 49.253241,
  longitude: -123.120396,
  image: "https://www.theunconventionalroute.com/wp-content/uploads/2017/06/douglas-park-vancouver-calisthenics-park.jpg"
)
calisthenics.locations.create!(
  title:  'Second Beach Calisthenics Park',
  description: 'Rings, chinup bar, and gymnastic bar with lots of lawn space for ground exercises',
  latitude: 49.294425010629006,
  longitude: -123.14861287635614,
  image: "https://assets.change.org/photos/8/yt/ck/ZNytcKrznBggRNv-800x450-noPad.jpg?1528967585"
)

tennis.locations.create!(
  title: 'Memorial West Park Tennis Courts',
  description: 'Public tennis and pickleball courts',
  latitude: 49.243996,
  longitude: -123.188431,
  image: "https://insidevancouver.ca/wp-content/uploads/2016/05/Discover-Outdoors-Vancouver-Tennis-Courts5-550x347.jpg"
)

volleyball.locations.create!(
  title: 'Spanish Banks Beach Volleyball Courts',
  description: 'Public beach volleyball courts',
  latitude: 49.277059,
  longitude: -123.216605,
  image: "https://farm4.staticflickr.com/3731/12826435625_d36de16eff_o.jpg"
)

hiking.locations.create!(
  title: 'Quarry Rock',
  description: 'A scenic hike close to great coffee and food',
  latitude: 49.329947,
  longitude: -122.949554,
  image: "https://www.vancouvertrails.com/images/hikes-small/quarry-rock.jpg"
)
hiking.locations.create!(
  title: 'Lynn Canyon',
  description: 'Hike with a free suspension bridge',
  latitude: 49.343153,
  longitude: -123.018713,
  image: "https://afar-production.imgix.net/uploads/images/post_images/images/1724j28N3c/original_f13c489a3e25e30118e99f14f11933a3.jpg?1448133375?ixlib=rails-0.3.0&auto=format%2Ccompress&crop=entropy&fit=crop&h=719&q=80&w=954"
)
hiking.locations.create!(
  title: 'Lake Trail, Stanley Park',
  description: 'Hike with a free suspension bridge',
  latitude: 49.303761,
  longitude: -123.145418,
  image: "https://vancouversbigtrees.files.wordpress.com/2012/06/stanley-park-map.jpg"
)
hiking.locations.create!(
  title: 'Lovers Walk, Stanley Park',
  description: 'A walk next to some of the biggest cedars in Vancouver',
  latitude: 49.300213,
  longitude: -123.153070,
  image: "https://vancouversbigtrees.files.wordpress.com/2012/06/stanley-park-map.jpg"
)
hiking.locations.create!(
  title: 'Beaver Lake Trail, Stanley Park',
  description: 'A walk next to some of the biggest cedars in Vancouver',
  latitude: 49.303029,
  longitude: -123.139769,
  image: "https://vancouversbigtrees.files.wordpress.com/2012/06/stanley-park-map.jpg"
)
hiking.locations.create!(
  title: 'Third Beach Trail, Stanley Park',
  description: 'A walk that leads to one of the most beautiful and secluded beaches in Vancouver',
  latitude: 49.304741,
  longitude: -123.154875,
  image: "https://www.ctvnews.ca/polopoly_fs/1.5048313.1596308628!/httpImage/image.jpeg_gen/derivatives/landscape_960/image.jpeg"
)

# Favourites Seeds

user_1_favourites = [
  'Kitsilano Beach Basketball Court',
  'Lynn Canyon',
  'Spanish Banks Beach Volleyball Courts',
  'Third Beach Trail, Stanley Park',
  'Douglas Park Fitness Circuit'
]

user_1_favourites.each do | location_title |
  User.first.locations << (Location.find_by title: location_title)
end