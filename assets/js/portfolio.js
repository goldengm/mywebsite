let items = [
    {
     type:'ios',
     image:'portfolios/anamel-beauty.png',
     title:'Orchid Beauty',
     hover:'Angular.js + Swift',
     desc:'Website and Mobile App for Beauty Services'
    },   
    {
     type:'android',
     image:'portfolios/android-tv-app.jpg',
     title:'Android TV App',
     hover:'React Native + Node.JS',
     desc:'#1 App for Entertainment containing variety of channels'
    },   
    {
     type:'android',
     image:'portfolios/BAC.jpg',
     title:'Student Management Tools for Staff',
     hover:'React.js + React Native',
     desc:' BAC Lecturer Management APP is designed for BAC Academic'
    },   
    {
     type:'digital',
     image:'portfolios/beacon.jpg',
     title:'Company Website',
     hover:'React.js + Node.js',
     desc:'make up the world with Beacon'
    },   
    {
     type:'android',
     image:'portfolios/bus-ticket.jpg',
     title:'E-Ticket Website',
     hover:'React Native',
     desc:'Ticket Website enables user to search for available buses and schedules accross the city'
    },   
    {
     type:'android',
     image:'portfolios/chattracker.png',
     title:'Social Networking Messenger',
     hover:'React Native',
     desc:'Social Networking Messenger is a social networking app. All in one inclusive, for dating/professional networking/ social messaging. '
    },   
    {
     type:'android',
     image:'portfolios/criket-dream.png',
     title:'Games',
     hover:'Flutter',
     desc:'Dream Cricket is the most addictive cricket game to play with friends. Users can earn Paytm and PayPal money via refer friends '
    },   
    {
     type:'iot',
     image:'portfolios/drone1.jpg',
     title:'Drone Navigator',
     hover:'IoT Analytics',
     desc:' A robust application build to Go without any external OS dependencies'
    },   
    {
     type:'web',
     image:'portfolios/getlook.png',
     title:'Appointment Scheduler',
     hover:'Ruby + React Native',
     desc:'Appointment Scheduler is one of the Best Home Salon and Spa Services which brings Best Beauty Professionals at your home'
    },   
    {
     type:'digital',
     image:'portfolios/leader-bloom.jpg',
     title:'Leadership Platform',
     hover:'Kotlin',
     desc:'Leadership Platform is a fully-integrated leadership platform that supports leaders with aligning strategic initiatives to the roles of individuals and team'},   
    {
     type:'ios',
     image:'portfolios/lucky-music-design.jpg',
     title:'Music App',
     hover:'React Native',
     desc:'Enjoy the videos and music you love, upload original content, and share it all with friends, family, and the world'},   
    {
     type:'digital',
     image:'portfolios/matchup.png',
     title:'Dating App',
     hover:'CodeIgniter',
     desc:'Plenty of serious single Aussies, women and men, are waiting for you. Come join free and see what happens!'
    },
    {
     type:'ios',
     image:'portfolios/netplay.png',
     title:'Video Sharing Platform',
     hover:'Flutter',
     desc:'Enjoy the videos and music you love, upload original content, and share it all with friends, family, and the world'},   
    {
     type:'web',
     image:'portfolios/onlinetutorial.jpg',
     title:'Online Tutorial',
     hover:'Laravel',
     desc:'An online tutorial is a self study activity designed to teach a specific learning outcome.'   
    },   
    {
     type:'android',
     image:'portfolios/parking-app.png',
     title:'Parking App',
     hover:'Android',
     desc:'An easy-to-use parking app that allows users to PLAN, FIND, PAY and MANAGE parking wherever they are.'   
    },   
 
    {
     type:'digital',
     image:'portfolios/peekbox.png',
     title:'Personalized Organizer',
     hover:'Mean Stack',
     desc:'Great opportunity to stay updated regarding various events, Deals and much more with Peekbook!'   
    },  
    {
      type:'android',
      image:'portfolios/Personal Expense Manager.jpg',
      title:'Personal Expense Manager',
      hover:'React Native',
      desc:'Looking for an expense and budget tool? Stop searching. Personal Expense Manager is simple, intuitive, stable and feature-rich app that is just designed for you.'   
     },  
     {
      type:'web',
      image:'portfolios/plybazar.jpg',
      title:'Online Shopping App',
      hover:'Ruby + React Native',
      desc:"India's largest online marketplace on plywood, laminate, furniture, plywood machinery, plywood dealers "   
     },   
     {
      type:'android',
      image:'portfolios/qr.jpg',
      title:'QR SCANNER',
      hover:'Android',
      desc:'QR Scanner can scan and read all QR codes / barcode types including text, url, ISBN, calendar, email, location, Wi-Fi and many more formats.'   
     },   
     {
      type:'iot',
      image:'portfolios/quantow2.png',
      title:'Toy Car Controller',
      hover:'IoT Analytics',
      desc:"World's Smallest Smartphone Controlled Car"   
     },   
     {
      type:'web',
      image:'portfolios/richies.jpg',
      title:'Dating Site',
      hover:'PHP + MySQL',
      desc:'There is only one happiness in this life, to love and beloved. Tons of elements, Consistent style included'   
     },   
     {
      type:'ios',
      image:'portfolios/showertimer.jpg',
      title:'Shower Timer',
      hover:'Swift',
      desc:"Showr helps you spend less time in the shower and still enjoy it while you're in there!"   
     },   
     {
      type:'android',
      image:'portfolios/storibud.jpg',
      title:'Content Sharing',
      hover:'React Native',
      desc:'Get Boared? Enjoy sharing Music, Videos, Literature and Artwork here!'   
     },   
     {
      type:'web',
      image:'portfolios/sursangeet.png',
      title:'Musical Group Site',
      hover:'Mean Stack',
      desc:'Music gives a soul to the universe, wings to the mind, flight to the imagination and life to everything!'   
     },   
     {
      type:'ios',
      image:'portfolios/sworkit.jpg',
      title:'Workout App',
      hover:'React Native',
      desc:'Sworkit allows you to customize and play personalized video workouts that fit into your life. Never get bored, never have an excuse. '   
     },   
     {
      type:'android',
      image:'portfolios/zinc.png',
      title:'Take-out App',
      hover:'Kotlin',
      desc:'Are You Hungry? Order yummy food online from restaurants and get it delivered to your home!'   
     },   
       
  ]
  
  function filterSelection(c) {
    // alert(c)
    let div = ''
    for(let i=0;i<items.length;i++) {
      let item = items[i]
      let img_url = 'http://magehire.com/schmid/'+item.image
     if(c === item.type) {
        div = div+'<div class="portfolio__item app" data-name="app">'+
        '<a>'+
        '<img src="'+img_url+'" class="portfolio__item__thumbnail" alt="image hover effects" style="height:300px;">'+
          '<h2 class="portfolio__item__info portfolio_heading">'+item.title+'</h2>'+
          '<div class="portfolio__item__hover portfolio_des">'+
           '<h2 class="portfolio__item__hover__title">'+item.hover+'<span'+
                'class="portfolio__title__dot title__dot--white"></span>'+
            '</h2>'+
            '<p class="portfolio__item__hover__description">'+item.desc+'</p>'+     
        '</div></a></div>'
      }else if(c==="all"){
        div = div+'<div class="portfolio__item app" data-name="app">'+
        '<a>'+
        '<img src="'+img_url+'" class="portfolio__item__thumbnail" alt="image hover effects"  style="height:300px;">'+
          '<h2 class="portfolio__item__info portfolio_heading" style="height:25px;">'+item.title+'</h2>'+
          '<div class="portfolio__item__hover portfolio_des">'+
           '<h2 class="portfolio__item__hover__title">'+item.hover+'<span'+
                'class="portfolio__title__dot title__dot--white"></span>'+
            '</h2>'+
            '<p class="portfolio__item__hover__description">'+item.desc+'</p>'+     
        '</div></a></div>'
      }
     
      
  
    }
    $(".portfolio__items-container").html(div)
  }
  
  filterSelection('all')
 