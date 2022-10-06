document.addEventListener( 'DOMContentLoaded', function() {
    let splide = new Splide( '.splide',{
      wheel:false
    } );
    splide.mount();

    let second = new Splide('#thumbnails',{
  fixedWidth  : 90,
  fixedHeight : 64,
  gap         : 5,
  rewind      : true,
  pagination  : false,
  isNavigation: true,
  arrows:false,
  drag:false,
  breakpoints : {
    600: {
      fixedWidth : 60,
      fixedHeight: 44,
    },
  },
    })
    
    let main = new Splide('#main',{
      type      : 'fade',
      rewind    : true,
      fixedWidth:367,
      fixedHeight:271,
      width:560,
      height:325,
      pagination: false,
    })


    let near = new Splide('#near_places',{
      wheel:false,
      pagination:false,
      perPage:4,
      drag:false,
      rewind:true,
      fixedWidth:260,
      fixedHeight:230,
      gap:40
    });

    near.mount();
    main.sync(second);
    main.mount();
    second.mount();
   
  } );

