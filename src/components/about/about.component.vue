<template>
  <section class="section load about">
    <div class="background_anim grid__col--noGrow">
      <nav class="menu_top">
        <ul class="grid grid--alignMiddle grid--alignSpaceAround">
          <li><router-link to="/">back to home</router-link></li>
          <li></li>
          <li></li>
        </ul>
      </nav>
      <h1 class="titre">About me</h1>
    </div>
    <div class="prez bounceInRight grid grid--alignCenter grid--alignMiddle .grid__col--noGrow">
      <div>
        <h2>Hello, i'm Daniel Bodi</h2>
        <p>
          I'm a 33 years old UI Designer & Developer<br/>
          I live in Braine-le-Comte in Belgium
        </p>
      </div>
    </div>
    <div class="cv grid grid--alignCenter grid--alignMiddle .grid__col--grow">
      <div class="wrapper">
        <h3 class="titre-h3">Skills</h3>
        <div class="skills grid grid--alignCenter">
          <ul class="dev">
            <li>
              <p>
                <span class="skill">JS :</span>
                <span>Jquery, Angular 6+, Webpack</span>
              </p>
            </li>
            <li>
              <p>
                <span class="skill">css3 :</span>
                <span>Foundation, Bootstrap, Sass, Less</span>
              </p>
            </li>
            <li>
              <p>
                <span class="skill">html5</span>
              </p>
            </li>
          </ul>
          <ul class="design">
            <li><p><span class="skill">Sketch</span></p></li>
            <li><p><span class="skill">Photoshop</span></p></li>
            <li><p><span class="skill">Illustrator</span></p></li>
            <li><p><span class="skill">Indesign</span></p></li>
          </ul>
        </div>
        <div class="keywords">
          <h3 class="titre-h3">Knowledge</h3>
          <p>
  					<span>
  						Design systems, Atomic Design, Scrum methodoly, BEM methodology, adaptive & responsive design, cross-browser design, css layouting (Flex, Grid), User Inteface, User Experience, 2D Animation
  					</span>
          </p>
        </div>
        <div class="languages">
          <h3 class="titre-h3">Languages</h3>
          <p class="grid grid--alignMiddle">
            <span class="grid__col grid__col--no-padding">Spanish</span>
            <span class="grid__col grid__col--no-padding">French</span>
            <span class="grid__col grid__col--no-padding">English</span>
          </p>
        </div>
        <div class="download_cv grid grid--alignMiddle grid--alignCenter">
          <a target="_blank" class="btn btn--secondary" href="@/assets/images/BODI Daniel CV.pdf">Download my cv</a>
        </div>
      </div>
    </div>
    <div class="contact grid grid--alignCenter grid--alignMiddle grid__col--noGrow">
      <a class="btn" href="mailto:contact@danielbodigil.com">
        Contact me
      </a>
    </div>
  </section>

</template>

<style scoped lang="scss">
  .about .background_anim {
    flex: 1.5;
    width: 100%;
    z-index: 2;
    position: relative;
    margin: auto;
    text-align: center;
  }

  .about .prez {
    flex: 1.5;
  }
  .about .cv{
    background: rgba(50,50,50,0.1);
    width: 100%;
    flex: 6;
  }
  .about .contact{
    flex: 1;
  }
  .about .cv .wrapper{
    padding: 20px;
    max-height: 100%;
  }
  .about .cv .skills{
    width: 100%;
    margin: auto;

  }
  .about .cv .skills ul{
    width: 50%;
    max-width: 400px;
  }


  .cv .keywords{
    text-align: justify;
  }
  .cv .keywords p,
  .cv .languages p{
    max-width: 800px;
    margin: auto;

  }
  .cv .languages p span{
    text-align: center;
    border-width: 0 1px 0 1px;
    border-style: solid;
    border-color: rgb(196, 196, 196);
  }
  .cv .languages p span:first-of-type{
    text-align: left;
    border: 0;
  }
  .cv .languages p span:last-of-type{
    text-align: right;
    border: 0;
  }
  .download_cv {
    height: 70px;
  }
  .about .contact{
    height: 10%;
  }
  .contact div{
  }

  .about p span.skill{
    color: rgb(57, 58, 110);
    text-transform: uppercase;
  }
  .dev{
    text-align: left
  }
  .design{
    text-align: right;
    border-left: 1px solid rgb(196, 196, 196);
    margin-left: -1px;
  }

</style>
