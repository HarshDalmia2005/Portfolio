import P1 from '../assets/P1.png'
import airCanvas from '../assets/maxresdefault.jpg'
import news from '../assets/news.jpg'
import budget from '../assets/budget.jpg'
import weather from '../assets/weather.webp'
import currency from '../assets/currency.png'
import rps from '../assets/rps.png'
import ttt from '../assets/ttt.png'
import todo from '../assets/todo.jpg'

export const projectData=[
    {
      "img": P1,
      "link": "https://github.com/HarshDalmia2005/Face_Attendance_App",
      "title": "Face Attendance System",
      "info": "This project involves developing a face recognition-based attendance system using a combination of Tkinter for the graphical user interface (GUI), Firebase Realtime Database for data storage, and OpenCV for facial recognition. The system captures images using OpenCV, processes them in grayscale, and trains a Local Binary Patterns Histograms (LBPH) face recognition model. User attendance is then tracked by recognizing faces through the GUI and recording the data in Firebase. It also contains attendance register which automatically gets updated on attendance and a=consists of all of student's info along with attendance time.First we have to register the student using the student register page to avail the face attendance facility for that particular student."
    },
    {
      "img":airCanvas,
      "link": "https://github.com/HarshDalmia2005/AIR_CANVAS",
      "title":"Air Canvas",
      "info":"The Air Canvas project using OpenCV is an innovative application that allows users to draw on a virtual canvas using hand gestures. By utilizing a webcam, the application captures real-time video and processes it to detect and track the user's hand movements. OpenCV, a powerful computer vision library, is used to identify the hand and its gestures, such as pointing or waving. These gestures are then interpreted as drawing commands on a digital canvas. The system can track the movement of the user's finger or a colored object held in their hand, translating these motions into lines or shapes on the screen, creating a seamless and intuitive drawing experience without the need for traditional input devices."
    },
    {
      "img":news,
      "link":"https://github.com/HarshDalmia2005?tab=repositories",
      "title":"NewsWave",
      "info":"NewsWave is a dynamic and interactive web application built using the React framework that aggregates and displays the latest news articles from various sources. The app is designed to provide users with a seamless browsing experience, allowing them to explore news across different categories such as technology, sports, entertainment, politics, and more. With React's efficient rendering capabilities, the app ensures fast loading times and smooth transitions between different news sections. Users can typically filter news based on their interests, search for specific topics, and stay updated with real-time news updates.The use of modern React libraries and APIs ensures that the news content is always current and relevant."
    },
    {
      "img":budget,
      "link":"https://github.com/HarshDalmia2005/BudgetBuddy_Backend",
      "title":"Budget Buddy",
      "info":"Budget Buddy is a finance tracker app built using React, designed to help users manage their personal finances effectively. The app offers a user-friendly interface for tracking expenses, setting budgets, and monitoring financial goals. With Budget Buddy, users can categorize their spending, visualize their financial habits through charts and graphs, and receive insights on how to save money. The app also supports user authentication, ensuring that each user's financial data is secure and personalized. By integrating with a backend service, Budget Buddy can store and retrieve financial data, making it accessible from any device. The app aims to provide a comprehensive solution for personal finance management, helping users achieve their financial goals with ease."
    },
    {
      "img":weather,
      "link":"https://github.com/HarshDalmia2005/Forecastify_frontend",
      "title":"Forecastify",
      "info":"Forecastify is a weather web app developed using React, designed to provide users with accurate and up-to-date weather forecasts. The app allows users to search for and view the current weather conditions, as well as detailed forecasts for multiple locations. With a clean and intuitive interface, Forecastify presents weather data such as temperature, humidity, wind speed, and precipitation in an easily digestible format. Users can also view extended forecasts, helping them plan ahead with confidence. The app integrate APIs to fetch real-time weather data, ensuring that the information displayed is always current. Forecastify aims to be a reliable tool for anyone needing quick and accurate weather information, whether for daily use or planning special events."
    },
    {
      "img":currency,
      "link":"https://github.com/HarshDalmia2005/Currency-Converter",
      "title":"Currency Converter",
      "info":"A currency converter built with HTML, CSS, and JavaScript is a simple yet powerful tool that allows users to quickly and easily convert amounts between different currencies. The interface, created with HTML and styled with CSS, provides a clean and intuitive layout where users can input the amount they wish to convert and select their desired currencies. JavaScript handles the core functionality, including fetching the latest exchange rates from an API and performing the conversion calculations in real-time. The app is lightweight, responsive, and designed for fast performance, making it an ideal solution for users who need quick access to accurate currency conversions."
    },
    // {
    //   "img":rps,
    //   "link":"https://github.com/HarshDalmia2005/Rock-Paper-Scissors",
    //   "title":"Rock Paper Scissors",
    //   "info":"The Rock, Paper, Scissors web app is an engaging online game where users can play against a computer or another player by selecting rock, paper, or scissors. The app features an intuitive interface with clickable buttons for each choice, a result display showing the outcome of each round, and score tracking to keep a record of wins, losses, and ties. Built using HTML, CSS, and JavaScript, the app generates a random choice for the computer, evaluates the results based on the classic game rules, and updates the score accordingly. Its responsive design ensures a seamless experience across various devices, making it a fun and interactive way to play the classic game online."
    // },
    {
      "img":ttt,
      "link":"https://github.com/HarshDalmia2005/TIC-TAC-TOE",
      "title":"Tic Tac Toe",
      "info":"Tic Tac Toe is a classic two-player game featured on website where players alternately mark a 3x3 grid with X or O to achieve a line of three of their symbols horizontally, vertically, or diagonally. The web-based version includes an interactive grid where players click to place their symbols, displays whose turn it is, and announces the game’s outcome, such as a win, loss, or draw. Utilizing HTML for layout, CSS for styling, and JavaScript for game logic, the app handles user interactions, win conditions, and turn management, providing a simple yet engaging gaming experience."
    },
    {
      "img":todo,
      "link":"https://github.com/HarshDalmia2005/TaskMate-App",
      "title":"TaskMate",
      "info":"TaskMate is a sleek and efficient To-Do List app built with React and styled using Tailwind CSS. The app allows users to manage their tasks effectively by providing features to add, edit, and delete tasks, as well as mark them as completed. With a user-friendly interface, TaskMate leverages React’s component-based architecture to ensure a responsive and interactive experience. Tailwind CSS is used to create a modern, visually appealing design with customizable and utility-first styling.TaskMate aims to enhance productivity with its clean and intuitive design, making task management a seamless experience."
    }

]