let items = [
  {
    type:'web',
    image:'images/bowengroup.png',
    title:'The Bowen Group',
    hover:'Wordpress',
    tech:['wordpress','elementro', 'MySQL'],
    desc:'With well over a hundred years accumulated experience in military service and military family support, the Bowen management team is mission-focused and passionate about their customers.' ,  
  },   
  {
    type:['ios','android'],
    image:'images/waiter.png',
    title:'WAITR',
    hover:'React Native',
    tech:["React Native"],
    desc:'Waitr provides a selection of social media graphics for you to post on your restaurants social media channels, a delivery link button so you can advertise to your customers that you deliver.' ,  
  },   
  {
    type:'web',
    image:'images/meritworld.png',
    title:'Merit Educational Consultants',
    tech:['wordpress','elementro', 'MySQL'],
    hover:'Wordpress',
    desc:'Merit has provided custom-tailored college advisory to students across the country.',
  },  
  {
    type:['web','android'],
    image:'images/envision.png',
    title:'Envision2bWell',
    hover:'PHP + Laravel',
    tech:['HTML', 'CSS', 'JS', 'Jquery', 'Bootstrap', 'PHP', 'Laravel', 'MySQL'],
    desc:"Envision2bWell, Inc is a mission-driven company dedicated to 360° Well-Being and Social Health Empowerment.Our integrated TeleWellness platform connects with a variety of wellness professionals including therapists, counselors, physicians, fitness instructors, nutritionists." ,  

  },   
  {
    type:'web',
    image:'images/preventa-medical.png',
    title:'Preventa Medical',
    hover:'Python + Django',
    tech:['HTML', 'CSS', 'JS', 'Jquery', 'Bootstrap', 'Python', 'Django', 'Firebase'],
    desc:'Enhanced Preventive Care With Advanced Imaging Analytics. Peventa helped us tremendously especially during the current public health crisis so my patients can get the care they need without leaving their homes' ,  
  },   
  {
    type:'web',
    image:'images/BestBankRates.png',
    title:'Banks Best Rates',
    hover:'PHP + CodeIgniter',
    tech:['HTML', 'CSS', 'JS', 'Jquery', 'Bootstrap', 'PHP', 'CodeIgniter', 'MySQL'],
    desc:'Our commitment is to provide you the single most educational and informative financial website in the world' ,  
  },   
  {
    type:'web',
    image:'images/prime-choice.png',
    title:'Prime Choice Group',
    hover:'NodeJS + ReactJS',
    tech:['HTML','CSS','JS','Bootstrap','NodeJs','ReactJS'],
    desc:'Prime Choice includes recruiting, hiring, training assignments, promotions, compensation, benefits, discipline, and terminations.' ,  
  },
  {
   type:'web',
   image:'images/all_care.jpg',
   title:'All Care Medical',
   hover:'Angular.js + Swift',
   tech:['HTML', 'CSS', 'JS', 'Jquery', 'Bootstrap', 'PHP', 'CodeIgniter', 'MySQL'],
   desc:'All Care website provides medical facilities to its users with latest technology.'
  },   

    {
     type:'web',
     image:'images/jap.jpg',
     title:'Brighterlink Dashboard',
     hover:'Angular.js + Node.js',
     desc:'Visualization Dashboard for Solar Energy Consumption',
     tech:['AngularJS','NodeJS'],
    },   
    {
     type:'web',
     image:'images/react_reddit.jpg',
     title:'eCommerce Website',
     hover:'Magento',
     desc:'USAMM is the #1 official full-service destination for military medals.',
     tech:['Magento'],
    },   
    {
     type:'web',
     image:'images/discountflights.jpg',
     title:'Airline Ticket Reservation',
     hover:'React.js + Laravel',
     desc:'Cheap Flights &amp; Airline Tickets for Your Trip | Discount Flights',
     tech:['ReactJS','Laravel'],
    },   
    {
      tech:[],
     type:'web',
     image:'images/oco.jpg',
     title:'eCommerce Website',
     hover:'Magento',
     desc:'Contemporary fashion meets exceptional eye-care, online and at our Spitalfields Optical boutique.'
    },   
    {
      tech:['Ruby','AngularJS'],
     type:'web',
     image:'images/schoolhire.jpg',
     title:'Faculty Booking Services',
     hover:'Ruby + Angular.js',
     desc:'SchoolHire advertises facilities across the UK that are available for hire.'
    },   
    {
      tech:[],
     type:'web',
     image:'images/accf.jpg',
     title:'Medical Services',
     hover:'WordPress,WooCommerce',
     desc:'ACCF provides prevention, treatment and support information in Australia.'
    },   
    {
      tech:['Zend Framework'],
     type:'web',
     image:'images/family.jpg',
     title:'Family Travelling Social Site',
     hover:'Zend Framework',
     desc:'Find and book unforgettable family holidays'
    },   
    {
      tech:['Laravel'],
     type:'app',
     image:'images/hireanartist.jpg',
     title:'Post & Hire Talent Service',
     hover:'Laravel',
     desc:'From student with an idea to one of the UK’s Top 15 start-ups!'
    },   
    {
      tech:['Wordpress'],
     type:'web',
     image:'images/escapeadventure.jpg',
     title:'Adventure Travelling Social',
     hover:'WordPress',
     desc:'Most Adventure Travelling Social Website in the world.'
    },   
    {
      tech:['ReactJS'],
     type:'web',
     image:'images/davidmaus.jpg',
     title:'Car Selling Services',
     hover:'React.js',
     desc:'David Maus Chevy has provided drivers with award-winning vehicles AND award-winning customer service!',
    },   
    {
      tech:['ReactJS'],
     type:'web',
     image:'images/ifineedhelp.jpg',
     title:'eCommerce Website',
     hover:'Zend Framework',
     desc:'Using QR Code Technology that can be accessed by computer or cell phone to provide help.'},   
    {
      tech:['HTML','CSS','JS','PHP','Laravel','MySQL'],
     type:'web',
     image:'images/searchgurbani.jpg',
     title:'Instant Gurubani Search',
     hover:'CodeIgniter',
     desc:'A comprehensive web site on research and exploration of Sri Guru Granth Sahib.'
    },
    {
    tech:['PHP','MySQL'],
     type:'web',
     image:'images/betting.jpg',
     title:'Betting Forum',
     hover:'PHP + MySQL',
     desc:'Friendly community of people that love to bet and discuss everything related to gambling and even outside that topic'},
     {
    tech:['HTML','CSS','JS','PHP','Laravel','MySQL'],
     type:'web',
     image:'images/realestate.jpg',
     title:'Real Estate Properties',
     hover:'Laravel',
     desc:'Providing Buying and Renting Real Estate Services in UK'   
    },   
        
       
  ]
  
  function filterSelection(c) {
    // alert(c)
    let div = ''
    for(let i=0;i<items.length;i++) {
      let item = items[i]
      let img_url = 'http://magehire.com/schmid/'+item.image
      if(item.type.indexOf(c)>-1) {
        div = div+'<div class="portfolio__item app" data-name="app">'+
        '<div class="portfolio__item__left"><a>'+
        '<img src="'+img_url+'" class="" alt="image hover effects"  style="height:250px;width:100%;">'+
          '</a></div>'+
        +'<div class="portfolio__item__right">'+
        '<h2 class="portfolio__item__info portfolio_heading" style="height:25px;">'+item.title+'</h2>'+
        '<p class="portfolio__item__hover__description">'+item.desc+'</p>'+ 
        '<div class="technology__stack">';
        div+='<p class="text-light text-justify my-1">TECH STACK:</p>';
        for(t in item.tech){
          div+='<button class="btn btn-light btn-sm m-1 mb-3">'+item.tech[t]+'</button>';
        }
        div+='</div>'+
        '</div>'+
        '</div>';
      }else if(c==="all"){
        div = div+'<div class="portfolio__item app" data-name="app">'+
        '<div class="portfolio__item__left"><a>'+
        '<img src="'+img_url+'" class="" alt="image hover effects"  style="height:250px;width:100%;">'+
          '<div class=" ">'+   
        '</div></a></div>'+
        +'<div class="portfolio__item__right">'+
        '<h2 class="portfolio__item__info portfolio_heading" style="height:25px;">'+item.title+'</h2>'+
        '<p class="portfolio__item__hover__description">'+item.desc+'</p>'+ 
        '<div class="technology__stack">';
        div+='<p class="text-light text-justify my-1">TECH STACK:</p>';
        for(t in item.tech){
          div+='<button class="btn btn-light btn-sm m-1 mb-3">'+item.tech[t]+'</button>';
        }
        div+='</div>'+
        '</div>'+
        '</div>'; 
    }
     
      
  
    }
    $(".portfolio__items-container").html(div)
  }
  
  filterSelection('all')
 