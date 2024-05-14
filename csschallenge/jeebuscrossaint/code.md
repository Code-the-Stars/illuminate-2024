```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Illuminate - Virtual Hackathon for High-Schoolers</title>
    <link rel="stylesheet" href="styles.css">
    <style>
      /* Reset default browser styles */
body, h1, p {
    margin: 0;
    padding: 0;
}

/* Set a background color */
body {
    background-color: #ffffff; /* Dark blue */
}

/* Center the content */
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

/* Style the heading */
h1 {
    font-size: 32px;
    color: #333;
    margin-bottom: 20px;
}

/* Style the paragraph */
p {
    font-size: 18px;
    color: #666;
}

/* Add some padding to the container */
.container {
    padding: 20px;
}
html {
    margin: 50px;
    content: 0px;
    padding: auto;
}
h1, h2, h3, h4, h5, h6, p, a {
    color: #272963;
}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  nav {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    background-color: #ffffff;
    justify-content: space-between;
    overflow: auto;
  }
  ul li {
    position: relative;
    margin: 0 20px;
    list-style: none;
    display: inline-block;
    padding: 14px;
    font-size: 17px;
  }
  ul li a{
  text-decoration: none; 
  cursor: pointer;
  color: rgb(0, 0, 0);
  }
  ul li a:hover {
     background-color: rgb(129, 123, 123);
  }
  #CLICKHERE {
    color: rgb(30, 131, 131);
    text-decoration: none;
  }
  #email {
    text-decoration: none;
  }
    </style>
</head>
<body>
    <header>
        <nav>
            <img id="Logo" src="Illuminate.png" width="40px" height="40px" alt="Logo" >
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#schedule">Schedule</a></li>
                <li><a href="#register">Register</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
        <h1>Illuminate</h1>
       

    <main>
        <section id="about">
            <h2>About Illuminate</h2>
            <p>Welcome to Illuminate, a virtual hackathon designed for high-schoolers to showcase their coding skills and creativity. Join us for an exciting weekend of coding challenges, workshops, and networking opportunities.</p>
        </section>

        <section id="schedule">
            <h2>Schedule</h2>
            <p>Coming Soon! The event starts at 6:00 pm on Friday, June 7th, and ends at 12:00 pm on Sunday, June 9th. All times are EST.</p>
            <ul>
               <!--insert schedule pic Here! - example below
                <li>Friday, 6:00 PM - Opening Ceremony</li>
                <li>Friday, 7:00 PM - Coding Challenge #1</li>
                <li>Saturday, 10:00 AM - Workshop: Web Development</li>
                <li>Saturday, 1:00 PM - Coding Challenge #2</li>
                <li>Sunday, 9:00 AM - Workshop: Mobile App Development</li>
                <li>Sunday, 12:00 PM - Closing Ceremony</li> -->
            </ul>
        </section>

        <section id="register">
            <h2>Register</h2>
            <p>Ready to join Illuminate? Click <a href="https://codethestars.fillout.com/illuminatesignup" id="CLICKHERE">here!</a></p>
            <form>
                
        </section>

        <section id="contact">
            <h2>Contact</h2>
            <p>If you have any questions or need further information, feel free to reach out to us:</p>
                <a href="mailto:shayan@codethestars.org" id="email">Shayan@codethestars.org</a>
            <p>If you are registered for the hackathon, you will get an invite to a discord server. This is where the entire hackathon will be hosted. </p>
                <p>The lack of css is intentional. We want YOU to help make this website! Click <a href="https://github.com/Code-the-Stars/illuminate">HERE</a> to go to the Github Page.</p>
        </section>
    </main>

    <footer>
        <p>&copy; 2024 Code the Stars. This project falls under the MIT License!</p>
    </footer>
</body>
</html>
```
