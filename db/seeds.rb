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
  title:  'Killarney Park Running Track',
  description: 'A large track in Killarney park near the rec centre',
  latitude: 49.226176,
  longitude: -123.041667,
  image: "https://s3-media0.fl.yelpcdn.com/bphoto/x7P0SJqnQ3Mjff_J_fb2iw/ls.jpg"
)
running.locations.create!(
  title:  'Empire Field Running Track',
  description: 'New running track at Empire field in East Vancouver',
  latitude: 49.281833,
  longitude: -123.032329,
  image: "https://vancouver.ca/images/cov/icons/Hastings_track_feature.jpg"
)
running.locations.create!(
  title:  'Douglas Park Running Track',
  description: 'A track that circles a large park in a lovely neighbourhood',
  latitude: 49.251903,
  longitude: -123.124281,
  image: "https://vancouver.ca//parks/parks/images/douglas01.jpg"
)
running.locations.create!(
  title:  'Tynehead Regional Park',
  description: 'Dog friendly walking trails near the Serpentine River.',
  latitude: 49.178504,
  longitude: -122.758684,
  image: "https://www.vancouvertrails.com/images/photos/tynehead-regional-park-6.jpg"
)
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
  title:  'David Lam Park Basketball Court',
  description: 'Outdoor basketball in the heart of Yaletown',
  latitude: 49.271693,
  longitude: -123.126053,
  image: "https://basketball604.com/wp-content/uploads/2019/03/blog-2-a-1464x975.jpg"
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
basketball.locations.create!(
  title: 'The Nash Family Basketball Court',
  description: 'A new and colourful basketball court dedicated to Steve Nash',
  latitude: 49.283491,
  longitude: -123.043149,
  image: "https://i.cbc.ca/1.4844478.1538275973!/fileImage/httpImage/nash-family-court.png"
)


biking.locations.create!(
  title: 'Bow River Pathway',
  description: 'Take in the view of the city skyline with a ride along the Bow River. Begin this exuberant ride at the Peace Bridge and ride along the Bow River Pathway down to Edworthy Park.',
  latitude: 51.46982,
  longitude: -112.712341,
  image: 'https://www.visitcalgary.com/sites/default/files/2021-01/biking_small_image_2020.jpg'
)
biking.locations.create!(
  title: 'Hunter Park',
  description: 'Well maintained windy mountain bike trail in North Van',
  latitude: 49.338626,
  longitude: -123.046241,
  image: 'https://www.windhammountain.com/wp-content/uploads/2015/12/9N9A0109-533x370.jpg'
)

biking.locations.create!(
  title: 'Capilano River Regional Park',
  description: 'Forested trails for hiking and mountain biking',
  latitude: 49.351613,
  longitude: -123.113531,
  image: "https://www.nvrc.ca/sites/default/files/styles/page_-_banner/public/images/primary/capilanotrail.jpg"
)

biking.locations.create!(
  title: 'Burnaby Mountain biking trails',
  description: 'Mountain biking trails just minutes from the city',
  latitude: 49.274875,
  longitude: -122.905749,
  image: 'https://i.pinimg.com/originals/5a/31/41/5a3141df4042b01dbd7ccd180ba77dc9.jpg'
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
calisthenics.locations.create!(
  title:  'Gates Park Outdoor Gym',
  description: 'Fully outdoor public workout gym with circuit machines in Port Coquitlam',
  latitude: 49.260159,
  longitude: -122.791990,
  image: "https://live.staticflickr.com/2945/15276444739_f6e86d2b63_b.jpg"
)

tennis.locations.create!(
  title: 'Memorial West Park Tennis Courts',
  description: 'Public tennis and pickleball courts',
  latitude: 49.243996,
  longitude: -123.188431,
  image: "https://insidevancouver.ca/wp-content/uploads/2016/05/Discover-Outdoors-Vancouver-Tennis-Courts5-550x347.jpg"
)

tennis.locations.create!(
  title: 'David Lam Park Tennis Courts',
  description: 'Public tennis courts in the heart of Yaletown.',
  latitude: 49.271423,
  longitude: -123.126254,
  image: "https://thetennistourist.com/wp-content/uploads/2015/05/IMG_3100-1024x683.jpg"
)

tennis.locations.create!(
  title: 'Granville Park Public Tennis Courts',
  description: '4 Tennis courts located near Granville and 14th',
  latitude: 49.258420,
  longitude: -123.142388,
  image: "https://vancouver.ca//parks/parks/images/granville01.jpg"
)

tennis.locations.create!(
  title: 'Grays Park Tennis Courts',
  description: 'Centrally located public tennis courts in Vancouver',
  latitude: 49.240506,
  longitude: -123.085247,
  image: "https://s3-media0.fl.yelpcdn.com/bphoto/zMU78UquvpFWT7ydx4vVOA/o.jpg"
)

tennis.locations.create!(
  title: 'Slocan Park Tennis Courts',
  description: 'Public tennis courts located in East Vancouver',
  latitude: 49.243913,
  longitude: -123.046237,
  image: "https://fastly.4sqi.net/img/general/600x600/4AlsfF4vL7FUA-Pa-clTC9mgCtEc2a4amwFezggSJe8.jpg"
)

tennis.locations.create!(
  title: 'Centrel Park tennis courts',
  description: 'Public tennis courts in central park',
  latitude: 49.226844,
  longitude: -123.013960,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_4CnN7uWfd11WuZsaDHaxKLvFy7lT5KnZfQ&usqp=CAU"
)
tennis.locations.create!(
  title: 'Stanley Park tennis courts West',
  description: '16 Public tennis courts in Stanley Park',
  latitude: 49.292070,
  longitude: -123.145246,
  image: "https://fastly.4sqi.net/img/general/600x600/kWQyw6HxJRdYOR2pqcHpjsBI7BlPUOVJgGd8w-sD6ws.jpg"
)
tennis.locations.create!(
  title: 'Stanley Park tennis courts North',
  description: '4 Public tennis courts in Stanley Park',
  latitude: 49.293520,
  longitude: -123.139379,
  image: "https://stanleyparkvan.com/photos2/stanley-park-van-00442-tennis-courts.jpg"
)

tennis.locations.create!(
  title: 'McBride Park Tennis Courts',
  description: '4 public tennis courts in Kitsilano',
  latitude: 49.268071,
  longitude: -123.180785,
  image: "https://assets.change.org/photos/2/uz/yd/YqUZYdkBWnsedJI-800x450-noPad.jpg?1526049897"
)
tennis.locations.create!(
  title: 'Ambleside Tennis Courts',
  description: 'Tennis courts next to the ocean in West Vancouver',
  latitude: 49.327017,
  longitude: -123.151224,
  image: "https://www.vmcdn.ca/f/files/glaciermedia/import/lmp-all/1617530-ambleside-tennis-courts-google-maps-copy.jpeg;w=960"
)

volleyball.locations.create!(
  title: 'Spanish Banks Beach Volleyball Courts',
  description: 'Public beach volleyball courts',
  latitude: 49.277059,
  longitude: -123.216605,
  image: "https://farm4.staticflickr.com/3731/12826435625_d36de16eff_o.jpg"
)
volleyball.locations.create!(
  title: 'Marpole Public Beach Volleyball Courts',
  description: 'Public beach volleyball courts in south Vancouver',
  latitude: 49.202140,
  longitude: -123.125056,
  image: "https://www.eastbayri.com/uploads/original/20200305-113845-sand%20volleyball%20court-example.png.jpg"
)
volleyball.locations.create!(
  title: 'Kitsilano Beach Volleyball Courts',
  description: 'Public beach volleyball courts at Kits beach. Bring your own net and ball!',
  latitude: 49.275841,
  longitude: -123.153202,
  image: "https://fastly.4sqi.net/img/general/600x600/2869597_00osQ7xPuu5Gk_oA7tPE5O_V_W-iENbPrcLHkWmXpKk.jpg"
)

hiking.locations.create!(
  title: 'Salish Trail',
  description: 'Walk through the Pacific Spirit Regional Park',
  latitude: 49.236902,
  longitude: -123.203551,
  image: "https://cdn-assets.alltrails.com/uploads/photo/image/14609208/large_c30a5eb00ac63eb6d59be71ed75a743a.jpg"
)
hiking.locations.create!(
  title: 'Huckleberry Trail',
  description: 'Walk through the Pacific Spirit Regional Park',
  latitude: 49.257992,
  longitude: -123.203410,
  image: "https://cdn-assets.alltrails.com/uploads/photo/image/23104731/large_141da3ae2b7bfdb17edf1eb489f49f1f.jpg"
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
  title: 'Camosun Trail',
  description: "Long trail through the forests on Vancouver's West Side. Good for running or walking.",
  latitude: 49.258007,
  longitude: -123.202992,
  image: "https://meccms.wpengine.com/wp-content/uploads/2018/03/lynn-canyon-park-trail-forest-897668234-800x320.jpg?v=1521668028"
)
hiking.locations.create!(
  title: 'Pioneer Trail',
  description: "Walking trail in Pacific Spirit Park near UBC",
  latitude: 49.270211,
  longitude: -123.228771,
  image: "https://cdn2.apstatic.com/photos/hike/7067529_smallMed_1583210843.jpg"
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
hiking.locations.create!(
  title: 'Ligthouse Park',
  description: 'A scenic park with trails and views of downtown Vancouver.',
  latitude: 49.332784,
  longitude: -123.263120,
  image: "https://westvancouver.ca/sites/default/files/lighthouse_2.jpg"
)
hiking.locations.create!(
  title: 'Burnaby Mountain hiking trails south',
  description: 'Mountain in Burnaby with endless trails to explore',
  latitude: 49.273445,
  longitude: -122.909206,
  image: "https://cdn-assets.alltrails.com/static-map/production/best/area/10162670/parks-canada-british-columbia-burnaby-mountain-conservation-area-walking-10162670-20210212201558000000000-763x240-1.png"
)
hiking.locations.create!(
  title: 'Burnaby Mountain hiking trails north',
  description: 'Mountain in Burnaby with endless trails to explore',
  latitude: 49.282611,
  longitude: -122.936015,
  image: "https://cdn-assets.alltrails.com/static-map/production/best/area/10162670/parks-canada-british-columbia-burnaby-mountain-conservation-area-walking-10162670-20210212201558000000000-763x240-1.png"
)
hiking.locations.create!(
  title: 'Deer Lake Trails',
  description: 'Beatuful walking trails around Deer Lake',
  latitude: 49.238367,
  longitude: -122.988384,
  image: "https://www.vancouvertrails.com/images/photos/deer-lake-3.jpg"
)
hiking.locations.create!(
  title: 'West Forest Trails',
  description: 'Walking trails and paths near Deer Lake',
  latitude: 49.235473,
  longitude: -122.989127,
  image: "https://www.burnaby.ca/Assets/New+Things+To+Do/Explore+The+Outdoors/Nature+Trails+Carousel+2.jpg"
)
hiking.locations.create!(
  title: 'Grouse Grind',
  description: 'Steep hike up Grouse Mountain with a beautiful view at the top and a gondola ride back down the mountain.',
  latitude: 49.371066,
  longitude: -123.098664,
  image: "https://www.vmcdn.ca/f/files/via/import/2019/05/02113428_grouse-grind-opening.jpg;w=960"
)
hiking.locations.create!(
  title: 'Dog Mountain Trail',
  description: 'Hike to the top of Dog Mountain with panaramic views at the top',
  latitude: 49.362115,
  longitude: -122.951769,
  image: "https://i.redd.it/0a4dfd8f73z21.jpg"
)
hiking.locations.create!(
  title: 'Capilano River Regional Park',
  description: 'Forested trails for hiking and mountain biking',
  latitude: 49.350634,
  longitude: -123.112524,
  image: "https://www.nvrc.ca/sites/default/files/styles/page_-_banner/public/images/primary/capilanotrail.jpg"
)
hiking.locations.create!(
  title: 'New Brighton Park',
  description: 'Scenic walking trails in East Van near the ocean',
  latitude: 49.288902,
  longitude: -123.036365,
  image: "https://i2.wp.com/www.awalkandalark.com/wp-content/uploads/2020/05/New-Brighton-Park.jpg?fit=640%2C480&ssl=1"
)

# Favourites Seeds

user_1_favourites = [
  'Kitsilano Beach Basketball Court',
  'Lynn Canyon',
  'Spanish Banks Beach Volleyball Courts',
  'Third Beach Trail, Stanley Park',
  'Douglas Park Fitness Circuit',
  'David Lam Park Tennis Courts',
  'Hunter Park',
  'Burnaby Mountain biking trails',
  'Gates Park Outdoor Gym',
  'Empire Field Running Track'
]

user_1_favourites.each do | location_title |
  User.first.locations << (Location.find_by title: location_title)
end