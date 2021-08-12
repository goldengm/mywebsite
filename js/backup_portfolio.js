let items = [
    {
      type:'wordpress',
      image:'portfolios/bowengroup.png',
      title:'The Bowen Group',
      hover:'Wordpress',
      desc:'With well over a hundred years accumulated experience in military service and military family support, the Bowen management team is mission-focused and passionate about their customers.' ,  
    },   
    {
      type:'app',
      image:'portfolios/waiter.png',
      title:'WAITR',
      hover:'React Native',
      desc:'Waitr provides a selection of social media graphics for you to post on your restaurants social media channels, a delivery link button so you can advertise to your customers that you deliver.' ,  
    },   
    {
      type:'app',
      image:'portfolios/bee.png',
      title:'Bee Mortgage App',
      hover:'React Native',
      desc:'Bee, the contactless mortgage assistant, gives you a free income analysis to determine how much you can afford.' ,  
    },   
    {
      type:'wordpress',
      image:'portfolios/meritworld.png',
      title:'Merit Educational Consultants',
      hover:'Wordpress',
      desc:'Merit has provided custom-tailored college advisory to students across the country.',
    },  
    {
      type:'wordpress',
      image:'portfolios/envision.png',
      title:'Envision2bWell',
      hover:'PHP + Laravel',
      desc:'Envision2bWell, Inc is a mission-driven company dedicated to 360° Well-Being and Social Health Empowerment.' ,  
  
    },
      {
          type:'python',
          image:'portfolios/preventa-medical.png',
          title:'Preventa Medical',
          hover:'Python + Django',
          desc:'Enhanced Preventive Care With Advanced Imaging Analytics' ,  
        },   
        {
          type:'web',
          image:'portfolios/BestBankRates.png',
          title:'Banks Best Rates',
          hover:'PHP + CodeIgniter',
          desc:'Our commitment is to provide you the single most educational and informative financial website in the world' ,  
        },   
        {
          type:'web',
          image:'portfolios/prime-choice.png',
          title:'Prime Choice Group',
          hover:'NodeJS + ReactJS',
          desc:'Prime Choice includes recruiting, hiring, training assignments, promotions, compensation, benefits, discipline, and terminations.' ,  
        },
      {
       type:'app',
       image:'images/jap.jpg',
       title:'Brighterlink Dashboard',
       hover:'Angular.js + Node.js',
       desc:'Visualization Dashboard for Solar Energy Consumption'
      },   
      {
       type:'ecommerce',
       image:'images/react_reddit.jpg',
       title:'eCommerce Website',
       hover:'Magento',
       desc:'USAMM is the #1 official full-service destination for military medals.'
      },   
      {
       type:'app',
       image:'images/discountflights.jpg',
       title:'Airline Ticket Reservation',
       hover:'React.js + Laravel',
       desc:'Cheap Flights &amp; Airline Tickets for Your Trip | Discount Flights'
      },   
      {
       type:'ecommerce',
       image:'images/oco.jpg',
       title:'eCommerce Website',
       hover:'Magento',
       desc:'Contemporary fashion meets exceptional eye-care, online and at our Spitalfields Optical boutique.'
      },   
      {
       type:'app',
       image:'images/schoolhire.jpg',
       title:'Faculty Booking Services',
       hover:'Ruby + Angular.js',
       desc:'SchoolHire advertises facilities across the UK that are available for hire.'
      },   
      {
       type:'wordpress',
       image:'images/accf.jpg',
       title:'Medical Services',
       hover:'WordPress,WooCommerce',
       desc:'ACCF provides prevention, treatment and support information in Australia.'
      },   
      {
       type:'app',
       image:'images/family.jpg',
       title:'Family Travelling Social Site',
       hover:'Zend Framework',
       desc:'Find and book unforgettable family holidays'
      },   
      {
       type:'app',
       image:'images/hireanartist.jpg',
       title:'Post & Hire Talent Service',
       hover:'Laravel',
       desc:'From student with an idea to one of the UK’s Top 15 start-ups!'
      },   
      {
       type:'wordpress',
       image:'images/escapeadventure.jpg',
       title:'Adventure Travelling Social',
       hover:'WordPress',
       desc:'Most Adventure Travelling Social Website in the world.'
      },   
      {
       type:'app',
       image:'images/davidmaus.jpg',
       title:'Car Selling Services',
       hover:'React.js',
       desc:'David Maus Chevy has provided drivers with award-winning vehicles AND award-winning customer service!',
      },   
      {
       type:'ecommerce',
       image:'images/ifineedhelp.jpg',
       title:'eCommerce Website',
       hover:'Zend Framework',
       desc:'Using QR Code Technology that can be accessed by computer or cell phone to provide help.'},   
      {
       type:'app',
       image:'images/searchgurbani.jpg',
       title:'Instant Gurubani Search',
       hover:'CodeIgniter',
       desc:'A comprehensive web site on research and exploration of Sri Guru Granth Sahib.'
      },
      {
       type:'app',
       image:'images/betting.jpg',
       title:'Betting Forum',
       hover:'PHP + MySQL',
       desc:'Friendly community of people that love to bet and discuss everything related to gambling and even outside that topic'},
       {
       type:'app',
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
   