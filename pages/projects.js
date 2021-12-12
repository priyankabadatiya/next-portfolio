var I = require('react-fontawesome');

export default function aboutme() {
  return (
    <section className="services" id="services" >
      <div className="max-width">
        <h2 className="title">My Projects</h2>
        <div className="serv-content" >
          <div className="card" style={{ zIndex:99}}>
          <a href='https://expense-tracker-by-piku.herokuapp.com/' style={{color: 'white'}}>
            <div className="box">
            <a href='https://github.com/priyabadatiya/expenseTracker'><I className="fas fa-code"></I> </a>
              <div className="text">Expense Tracker</div>
              <p>
                Using Front-End library (Tailwind) and EJS. I
                use Node JS and Express app in Back-End side and mongDB in database.
              </p>
            </div>
            </a>
          </div>
          <div className="card" style={{ zIndex:99}}>
          <a href='https://live-code-editor-by-priyanka.netlify.app/' style={{color: 'white'}}>
            <div className="box">
            <a href='https://github.com/priyabadatiya/live-code-editor'><I className="fas fa-code"></I> </a>
              <div className="text">Live Code Editor</div>
              <p>
              Using external library like codemirror, react-codemirror2 to implement code editor like UI. It have three section HTML, CSS and OUTPUT.
              </p>
            </div>
            </a>
          </div>
          <div className="card" style={{ zIndex:99}}>
          <a href='https://todoapp-by-priyanka.netlify.app/' style={{color: 'white'}}>
            <div className="box">
            <a href='https://github.com/priyabadatiya/todoapp-with-hooks-'><I className="fas fa-code"></I> </a>
              <div className="text">Todo app</div>
              <p>
              Created a To Do application in which we can add, edit and delete to-do’s using React hooks.
              </p>
            </div>
            </a>
          </div>
          <div className="card" style={{ zIndex:99}}>
          <a href='https://blogapp-by-priyanka.netlify.app/' style={{color: 'white'}}>
            <div className="box">
            <a href='https://github.com/priyabadatiya/blogApp'><I className="fas fa-code"></I> </a>
              <div className="text">BlogApp</div>
              <p>
              Created a client side blog application which fetches data from an API and displays content accordingly using ReactJS, API, JavaScript, HTML, CSS.
              </p>
            </div>
            </a>
          </div>
          <div className="card" style={{ zIndex:99}}>
          <a href='https://priyabadatiya.github.io/GOT/' style={{color: 'white'}}>
            <div className="box">
            <a href='https://github.com/priyabadatiya/GOT'><I className="fas fa-code"></I> </a>
              <div className="text">Game of thrones</div>
              <p>
              Created a dynamic web page of Game of Thrones using DOM manipulation. Added tags on the top with the name of the houses.
              </p>
            </div>
            </a>
          </div>
          <div className="card" style={{ zIndex:99}}>
          <a href='https://priyabadatiya.github.io/Events-respo/' style={{color: 'white'}}>
            <div className="box">
            <a href='https://github.com/priyabadatiya/Events-respo'><I className="fas fa-code"></I> </a>
              <div className="text">Alt Events</div>
              <p>
              Created a static clone of a conference landing page that is responsive and adaptive according to the different screen sizes.
              </p>
            </div>
            </a>
          </div>
          
        </div>
      </div>
    </section>
  )
}