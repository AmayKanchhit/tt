<!DOCTYPE html>
<head>
    <meta charset="utf-8">
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
</head>
<body class="base">
    <nav class="dark base padding">
        <div class="float-right">
            <a href="#" class="tight padding">Login</a> 
            <a href="#" class="tight padding">Sign Up</a>
        </div>
        <a href="" class="bold brand">Train Ticket Booking</a>
    </nav>
    <section style="min-height: 50vh;" class="dark_white text-center vertical-center page padding trim">
        <div>
            <h1 class="big">Book Train Tickets Now</h1>
            <p class="huge">When Urgency Matters</p>
            <p>Whether you need to travel for work or an emergency, we've got you covered.</p>
            <a class="big base button no-underline" href="">Get Started</a>
        </div>
    </section>
    <section class="base type padding trim">
        <h1>Why Choose Us?</h1>
        <p class="huge">Fast, Reliable, Convenient</p>
        <p>With our train ticket booking service, you can easily and quickly secure your train tickets, even when you're in a hurry. Here's why you should choose us:</p>
        <h2>Affordable Prices</h2>
        <p>Our ticket prices are competitive and affordable, ensuring that you can book your ticket without breaking the bank.</p>
        <h2>Wide Selection of Trains</h2>
        <p>We offer a wide range of train options, so you can choose the one that suits your travel needs the best.</p>
        <h2>Flexible Booking Options</h2>
        <p>Whether you prefer to book online, through our mobile app, or over the phone, we provide flexible booking options for your convenience.</p>
    </section>
    <section class="complement page two columns tablet padding">
        <div class="type">
            <h1>Book Anytime, Anywhere</h1>
            <p>With our user-friendly platform, you can book train tickets on the go, anytime and anywhere. No need to waste time standing in long queues or dealing with complicated booking processes.</p>
        </div>
        <div class="type">
            <h1>Secure and Safe</h1>
            <p>Your privacy and security are our top priorities. We use advanced encryption technology to ensure that your personal and payment information is protected.</p>
        </div>
    </section>
    <section class="base page three columns desktop padding">
        <div class="type">
            <h1>Fast and Reliable</h1>
            <p>When you're in urgency, time is of the essence. We provide fast and reliable ticket booking services, so you can get your tickets in no time.</p>
        </div>
        <div class="type">
            <h1>24/7 Customer Support</h1>
            <p>We have a dedicated customer support team available 24/7 to assist you with any queries or issues you may have. We strive to provide the best customer service experience.</p>
        </div>
        <div class="type">
            <h1>Easy Cancellation and Refunds</h1>
            <p>We understand that plans can change. That's why we offer easy cancellation and refund options for your convenience. No hassle, no stress.</p>
        </div>
    </section>
    <section style="min-height: 62vh;" class="complement page text-center vertical-center full_width padding">
        <div>
            <h1 class="text-crunch">Book Your Train Tickets Now</h1>
            <p class="big gutter-bottom">Travel with Ease, Even in Urgency</p>
            <p class="gutter-bottom">Don't let your urgent travel plans stress you out. Book your train tickets now and enjoy a hassle-free journey.</p>
            <p class="type two columns tablet">
                <a class="big base button margin-auto" href="">Get Started</a> 
                <a class="big base button margin-auto" href="">Contact Us</a>
            </p>
        </div>
    </section>
    <footer class="base page padding trim">
        <ul class="text-left">
            <li class="tight padding"><a class="tight padding" href="">About Us</a></li>
            <li class="tight padding"><a class="tight padding" href="">Privacy Policy</a></li>
            <li class="tight padding"><a class="tight padding" href="">Terms and Conditions</a></li>
            <li class="tight padding"><a class="tight padding" href="">Contact Us</a></li>
        </ul>
        <p class="text-center">Train Ticket Booking &copy; 2022. All rights reserved.</p>
    </footer>
</body>
<style>/* A California Stylesheet (MIT License) */
/* https://github.com/casscss/cass */

:root, html {
  --base-h:204;
  --base-s:76%;
  --base-l:43%;
  --base-tone:var(--white);
  --alt-tone:var(--white);
  --acc-tone:var(--white);
    --text-measure:50;
    --font-size-base:16px;
    --text-indent:1ch;
    --padding-base:1rem;
    --margin-base:1rem;
    --card:calc(var(--type)*.6);
    --type:calc(var(--text-measure)*.55rem);
    --page:calc(var(--type)*1.6);
    --a:1;
    --width:100%;
    --padding:calc(var(--padding-base)*.6);
    --p:var(--padding);
    --margin:calc(var(--margin-base)*.6);
    --m:var(--margin);
    --font-size:calc(var(--font-size-base) - 2px);
    --box-shadow:0 1px .3em hsla(var(--b-h),var(--b-s),var(--b-l),0.2);
    --v:1;
    --w-h:var(--base-h);
    --w-s:calc(var(--base-s)*.1);
    --w-l:calc(99% + (var(--v) * .1%));
    --b-h:var(--base-h);
    --b-s:calc(var(--base-s)*.1);
    --b-l:calc(var(--base-l)*.2);
    --white:hsl(var(--w-h),var(--w-s),var(--w-l));
    --w:var(--white);
    --black:hsl(var(--b-h),var(--b-s),var(--b-l));
    --b:var(--black);
    color:var(--b);
    background-color:var(--w);
    font-family:"Helvetica Neue",-apple-system,"Segoe UI",Roboto,Ubuntu,sans-serif;
    line-height:1.5;
    overflow-x:hidden
  }
  * { 
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-size:calc(var(--font-size) * var(--i,1) * var(--j,1))
  }
  body{min-height:100vh}
  body * {
    padding-left:calc(50% - var(--width) * .5);
    padding-right:calc(50% - var(--width) * .5)
  }
  h1{--i:2}
  h2{--i:1.8}
  h3{--i:1.4}
  h4{--i:1.2}
  h5{--i:1.1}
  h1,h2,h3,h4,h5,h6{
    --j:1;
    line-height:1.25;
    margin-bottom:.5em;
    letter-spacing:-.02em
  }
  span,em,strong,i,pre,code,address,blockquote,cite,a{padding-left: unset; padding-right: unset}
  p,ul,ol{margin:0;margin-bottom:var(--m);list-style-position: inside}
  a{color:inherit}
  pre,code,input,textarea{line-height:inherit; border:var(--border); max-width:100%}
  img{max-width:100%}
  button,.button{
    display:inline-block;
    padding:.6em 1em;
    border:none;
    border-radius:6px;
    cursor:pointer;
    line-height:1.75
  }
  .button:active,button:active{
    transform:scale(.98);
    box-shadow:unset
  }
  .float-right{float:right;}
  .text-center{text-align:center}
  .text-left{text-align:left}
  .text-right{text-align:right}
  .text-crunch{line-height:1.25}
  .text-indent{text-indent:var(--text-indent)}
  .sans-serif{font-family:var(--font-family)}
  .monospace{font-family:monospace}
  .bold{font-weight:bold}
  .italic{font-style:italic}
  .underline{text-decoration:underline}
  .caps{text-transform:uppercase}
  .tiny{--j:.85}
  .small{--j:.9}
  .medium{--j:1}
  .big{--j:1.2}
  .huge{--j:1.4}
  .cursor,.pointer{cursor:pointer}
  .rounded{border-radius:.6em}
  .border{border:var(--border)}
  .dashed{border-style:dashed}
  .thick{border-width:2px}
  .shadow{box-shadow:var(--box-shadow)}
  .inset{box-shadow:inset var(--box-shadow)}
  .block{display:block}
  .inline{display:inline}
  .hide,.hide.mobile,.hide.mobile.tablet{display:none}
  .hide.tablet,.hide.desktop{display:initial}
  .fixed,.fixed.mobile,.fixed.mobile.tablet{position:fixed}
  .fixed.tablet,.fixed.desktop{position:initial}
  .relative{position:relative}
  .absolute{position:absolute}
  .top{top:0}
  .right{right:0}
  .bottom{bottom:0}
  .left{left:0}
  .vertical-center{display:flex; flex:0 1 auto; flex-direction:column; justify-content:center}
  .card{--width:var(--card)}
  .type{--width:var(--type)}
  .page{--width:var(--page)}
  .width{max-width:var(--width);padding:0}
  .force.width{width:var(--width);padding:0}
  .width.padding{padding:var(--p)}
  .full.width{width:100%;--width:100%}
  .full.height{height:100%}
  .padding-top,.padding{padding-top:var(--p)}
  .padding-bottom,.padding{padding-bottom:var(--p)}
  .padding-left,.padding{padding-left:max(var(--p), calc(50% - (var(--width) * .5)))}
  .padding-right,.padding{padding-right:max(var(--p), calc(50% - (var(--width) * .5)))}
  .margin{margin:var(--m)}
  .margin-top{margin-top:var(--m)}
  .margin-right{margin-right:var(--m)}
  .margin-bottom{margin-bottom:var(--m)}
  .margin-left{margin-left:var(--m)}
  .gutter-bottom{margin-bottom:calc(2*var(--m))}
  .margin-auto{margin-left:auto; margin-right:auto}
  .tight{--p:calc(var(--padding)*.6)}
  .loose{--p:calc(var(--padding)*1.6)}
  .tight *,.loose *{--p:var(--padding)}
  .narrow{--m:calc(var(--margin)*.5)}
  .gutter{--m:calc(var(--margin)*2)}
  .narrow *,.gutter *{--m:var(--margin)}
  .trim > *:last-child {margin-bottom:0}
  .columns{
    --c:12;
    --multi:repeat(var(--c),minmax(0,1fr));
    --single:repeat(1,minmax(0,1fr));
    display:grid;
    gap:var(--m);
    grid-template-columns:var(--multi)
  }
  .columns.tablet,.columns.desktop{grid-template-columns:var(--single)}
  .columns > .wide{grid-column:auto / span var(--c,1)}
  .tablet > .wide,.desktop > .wide{width:100%; grid-column:unset}
  .golden{--multi:1.618fr 1fr}
  .golden.reverse{--multi:1fr 1.618fr}
  .one{--c:1}
  .two{--c:2}
  .three{--c:3}
  .four{--c:4}
  .five{--c:5}
  .six{--c:6}
  .seven{--c:7}
  .eight{--c:8}
  .nine{--c:9}
  .ten{--c:10}
  .eleven{--c:11}
  .twelve{--c:12}
  @media screen and (min-width:28rem) {
    :root {
      --width:100%;
      --padding:calc(var(--padding-base) * .8);
      --margin:calc(var(--margin-base) * .8);
      --font-size:calc((var(--font-size-base) - 1px) * var(--j, 1));
    }
    .columns.mobile{grid-template-columns:var(--single)}
    .columns.tablet{grid-template-columns:var(--multi)}
    .hide.mobile{display:initial}
    .hide.tablet{display:none}
    .fixed.mobile{position:initial}
    .fixed.tablet{position:fixed}
    .mobile > .wide {grid-column:unset}
    .tablet > .wide {grid-column:auto / span var(--c,1)}
  }
  @media screen and (min-width:45rem) {
    :root {
      --width:var(--page);
      --padding:var(--padding-base);
      --margin:var(--margin-base);
      --font-size:calc(var(--font-size-base) * var(--j, 1));
    }
    .columns.mobile.tablet{grid-template-columns:var(--single)}
    .columns.desktop{grid-template-columns:var(--multi)}
    .hide.mobile.tablet{display:initial}
    .hide.desktop{display:none}
    .fixed.mobile.tablet{position:initial}
    .fixed.desktop{position:fixed}
    .mobile.tablet > .wide{grid-column:unset}
    .desktop > .wide{grid-column:auto / span var(--c,1)}
  }
  .no-gap{gap:0}
  .no-bold{font-weight:normal}
  .no-underline{text-decoration:none}
  .no-text-indent{--text-indent:0}
  .no-padding{padding:0}
  .no-margin{margin:0}
  .no-margin-top{margin-top:0}
  .no-margin-bottom{margin-bottom:0}
  .no-overflow{overflow:hidden}
  .base,.accent,.complement,.red,.orangered,.orange,.gold,.yellow,.lime,.jade,.green,.teal,.aqua,.cyan,.sky,.blue,.indigo,.purple,.magenta,.pink,.brown,.gray,.white,.black,.border{
    color:var(--t);
    background-color:hsla(
      var(--h), 
      calc(((var(--sat, var(--s)) * 5) + var(--base-s))/6), 
      calc(((var(--lit, var(--l)) * 5) + var(--base-l))/6),
      var(--a)
    );
    --border: 1px solid hsl(var(--hue, var(--h)), clamp(0%, calc(.7 * var(--sat, var(--s))), 50%), clamp(0%, calc(.7 * var(--lit, var(--l))), 60%))
  }
  .white,.black{background-color:hsla(var(--h),var(--sat, var(--s)),var(--lit, var(--l)),var(--a))}
  .base,.gray{color:var(--base-tone)}
  .complement{color:var(--alt-tone)}
  .accent{color:var(--acc-tone)}
  .bright,.dim,.light,.dark{
    --scu:calc((100% - var(--s)) * .25 );
    --sfu:calc(var(--s) * .3 );
    --lcu:calc((100% - var(--l)) * .1 );
    --lfu:calc(var(--l) * .2 )
  }
  .bright *,.dim *{--sat:var(--s)}
  .light *,.dark *{--lit:var(--l)}
  .light{color:var(--b);--lit:calc(var(--l) + (5%) + (var(--lcu) * var(--v) * var(--vv)))}
  .dark{color:var(--w);--lit:calc(var(--l) - (10%) - (var(--lfu) * var(--v) * var(--vv)))}
  .bright{--sat:calc(var(--s) + (15%) + (var(--scu) * var(--v) * var(--vv)))}
  .dim{--sat:calc(var(--s) - (15%) - (var(--sfu) * var(--v) * var(--vv)))}
  .base,.complement,.accent{--h:var(--base-h);--s:var(--base-s);--l:var(--base-l);--vv:.3}
  .complement{--h:calc(var(--base-h) + 180)}
  .accent{--h:calc(var(--base-h) + 30)}
  .white{--h:var(--w-h);--s:var(--w-s);--l:var(--w-l);--vv:.1;color:var(--b)}
  .black{--h:var(--b-h);--s:var(--b-s);--l:var(--b-l);--vv:.2;color:var(--w)}
  .gray{--h:var(--base-h);--s:calc(var(--base-s) * .1);--l:clamp(30%,var(--base-l),70%);--vv:.3;--t:var(--w)}
  .brown    {--h: 25;--s:clamp(35%,calc(var(--base-s)*.8),54%);--l:40%;--vv:.3;--t:var(--w)}
  .red      {--h:  3;--s:71%;--l:50%;--vv:.3;--t:var(--w)}
  .orangered{--h: 24;--s:90%;--l:50%;--vv:.3;--t:var(--w)}
  .orange   {--h: 38;--s:95%;--l:60%;--vv:.2;--t:var(--b)}
  .gold     {--h: 48;--s:95%;--l:70%;--vv:.3;--t:var(--b)}
  .yellow   {--h: 54;--s:95%;--l:60%;--vv:.5;--t:var(--b)}
  .lime     {--h: 85;--s:60%;--l:60%;--vv:.3;--t:var(--b)}
  .green    {--h:120;--s:50%;--l:40%;--vv:.5;--t:var(--w)}
  .jade     {--h:144;--s:30%;--l:40%;--vv:.3;--t:var(--w)}
  .teal     {--h:168;--s:30%;--l:40%;--vv:.5;--t:var(--w)}
  .aqua     {--h:174;--s:60%;--l:50%;--vv:.5;--t:var(--b)}
  .cyan     {--h:180;--s:85%;--l:55%;--vv:.6;--t:var(--b)}
  .sky      {--h:200;--s:80%;--l:75%;--vv:.5;--t:var(--b)}
  .blue     {--h:222;--s:70%;--l:60%;--vv:.5;--t:var(--w)}
  .indigo   {--h:245;--s:65%;--l:45%;--vv:.4;--t:var(--w)}
  .purple   {--h:275;--s:60%;--l:48%;--vv:.5;--t:var(--w)}
  .magenta  {--h:300;--s:65%;--l:75%;--vv:.4;--t:var(--b)}
  .pink     {--h:335;--s:80%;--l:80%;--vv:.3;--t:var(--b)}
  .very *,.hella *,.super *{--v:1}
  .very{--v:2}
  .hella,.super{--v:4}
  .text-dark{color:var(--b)}
  .text-light{color:var(--w)}
  .text-color{color:hsl(var(--hue,var(--h)),var(--sat,var(--s)),var(--t-l));background-color:transparent}
  .text-color.text-light{--t-l:clamp(50%,var(--lit,var(--l)),100%)}
  .text-color,.text-color.text-dark{--t-l:clamp(0%,var(--lit,var(--l)),44%)}
  </style>
</html>
