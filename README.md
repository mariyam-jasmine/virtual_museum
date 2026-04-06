Project Overview:

The Virtual Museum Tour is a full-stack web application that allows users to explore a museum virtually using 360° panoramic images.
Users can navigate between rooms via interactive hotspots, simulating a realistic museum experience.

This project demonstrates frontend-backend integration using:

Frontend: HTML, CSS, JavaScript (Pannellum.js)
Backend: Python Flask (serves static files and frontend)

It is designed to be lightweight, scalable, and easy to extend, making it suitable for educational and professional demonstrations.

Key Features:
360° Panoramic Rooms: Entrance, History, Gallery, Futuristic Rooms.
Interactive Hotspots: Smooth navigation between scenes.
Responsive Layout: Works on desktops and tablets.
Backend Integration: Flask serves HTML, CSS, JS, and images efficiently.
Scalable: New rooms and images can be added without changing core code.

Technologies Used:

| Layer           | Technology / Library           | Purpose                        |
| --------------- | ------------------------------ | ------------------------------ |
| Frontend        | HTML5, CSS3, JS                | UI/UX, Interactivity           |
| Panorama Viewer | Pannellum.js                   | 360° image rendering           |
| Backend         | Python 3.x, Flask              | Serve static files & frontend  |
| Image Assets    | PNG Equirectangular            | 360° panoramic images          |
| Development     | Git, VS Code, Flask Dev Server | Version control & local server |

Challenges & Learnings:

Aligning hotspots in 360° coordinates for accurate navigation.
Serving static files in Flask without CORS errors.
Integrating Pannellum.js with a Python backend.
Maintaining responsive design for different screen sizes.

Future Enhancements:

Add MongoDB or SQLite for storing room metadata and exhibits.
Include audio guides or video walkthroughs.
Implement mobile-friendly touch navigation.
Deploy project to cloud platforms like Heroku, AWS, or PythonAnywhere.
Add dynamic room creation via JSON configuration files.
