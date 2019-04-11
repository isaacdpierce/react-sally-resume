function App(props) {
  console.log(props);
  return <main>{props.children}</main>;
}

function Header(props) {
  const { name, title } = props;
  return (
    <header>
      <figure>
        <img
          src='sallystudent.jpg'
          alt='Sally working at her computer'
          id='profile-pic'
        />
        <figcaption>
          <h1>{name}</h1>
          <p>I'm a passionate {title} looking to break into the industry</p>
        </figcaption>
      </figure>

      <address className='contact-info'>
        <p>
          <a href='mailto:hello@sallystudent.com'>hello@sallystudent.com</a>
        </p>
        <p>
          <a href='tel:+333-555-9999'>+333-555-9999</a>
        </p>
      </address>
    </header>
  );
}

function Nav() {
  return (
    <nav>
      <li>
        <a href='#education'>Education</a>
      </li>
      <li>
        <a href='#employment'>Employment</a>
      </li>
      <li>
        <a href='#skills'>Skills</a>
      </li>
      <li>
        <a href='#interests'>Interests</a>
      </li>
    </nav>
  );
}

function Education(props) {
  const { school1, degree1 } = props;
  return (
    <section className='education' id='education'>
      <h2>Education</h2>
      <div className='education__card'>
        <h3>School</h3>
        <p>{school1}</p>
        <h4>Graduated</h4>
        <p>2015</p>
        <h4>Degree</h4>
        <p>{degree1}</p>
      </div>
    </section>
  );
}

function Employment() {
  return (
    <section className='employment' id='employment'>
      <h2>Employment</h2>
      <div className='employment__card'>
        <h3>Company</h3>
        <p>Mad Startup</p>
        <h4>Date employed</h4>
        <p>Jan 2015 - Mar 2017</p>
        <h4>title</h4>
        <p>Team Coordinator</p>
        <h4>Achievements</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac sem
          in leo elementum molestie. Interdum et malesuada fames ac ante ipsum
          primis in faucibus. Proin vel tortor eget turpis cursus pulvinar.
          Fusce nec ex vitae diam feugiat bibendum. Integer libero mi, iaculis
          sed libero ac, mattis varius mi. Sed fringilla, ex eget finibus
          auctor, ipsum enim interdum dui, ut dignissim nulla ante sed sem.
          Aliquam suscipit dictum erat, at rhoncus nibh imperdiet ac.
        </p>
      </div>
      <div className='employment__card'>
        <h3>Company</h3>
        <p>Madder Startup</p>
        <h4>Date employed</h4>
        <p>Mar 2017 - Present</p>
        <h4>title</h4>
        <p>Junior Developer</p>
        <h4>Achievements</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac sem
          in leo elementum molestie. Interdum et malesuada fames ac ante ipsum
          primis in faucibus. Proin vel tortor eget turpis cursus pulvinar.
          Fusce nec ex vitae diam feugiat bibendum. Integer libero mi, iaculis
          sed libero ac, mattis varius mi. Sed fringilla, ex eget finibus
          auctor, ipsum enim interdum dui, ut dignissim nulla ante sed sem.
          Aliquam suscipit dictum erat, at rhoncus nibh imperdiet ac.
        </p>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className='skills' id='skills'>
      <h2>Skills</h2>
      <div>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>React</li>
          <li>Node</li>
        </ul>
      </div>
    </section>
  );
}

function Interests() {
  return (
    <section className='interests' id='interests'>
      <h2>Interests</h2>
      <div>
        <h4>6 things I love</h4>
        <ul>
          <li>
            <a href='https://en.wikipedia.org/wiki/Bengal_cat'>Bengal cats</a>
          </li>
          <li>
            <a href='https://code.visualstudio.com/'>My code editor</a>
          </li>
          <li>
            <a href='https://en.wikipedia.org/wiki/Attack_on_Titan'>
              Attack on Titan
            </a>
          </li>
          <li>
            <a href='https://www.youtube.com/watch?v=aAxGTnVNJiE'>Crocheting</a>
          </li>
          <li>
            <a href='https://wesbos.com/'>Wes Bos</a>
          </li>
          <li>
            <a href='https://www.youtube.com/watch?v=jJKPLgxVO7c'>
              Body Boarding
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <p>* References available upon request</p>
    </footer>
  );
}

ReactDOM.render(
  <App className='container'>
    <Header name='Sally Student' title='Web Developer' />
    <Nav />
    <Education school1='MIT' degree1='Computer Science' />
    <Employment />
    <Skills />
    <Interests />
    <Footer />
  </App>,
  document.querySelector('#application-root')
);
