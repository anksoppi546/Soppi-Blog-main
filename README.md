## Project Overview:
This project is a simple yet functional blogging platform that allows users to read, create, and view posts with ease. It's designed with a clean and modern interface which is flexible with devices.

# *Project Dependencies:*
1. Navigate to your project directory : cd path/to/your/project
2. Create a package.json (if not present) : npm init -y
3. Install lodash : npm install express body-parser ejs mongoose lodash
4. Ensure MongoDB is installed and running.
5. If you want to automatically restart your server when changes are made, you can install nodemon : npm install -g nodemon

## To run the project
1. All the above dependencies should be satisfied.
2. Run the command : node app.js *OR* nodemon app.js *OR* npx nodemon app.js
3. Go to the website : http://localhost:3001/

# *Technical Details:*
## 1. Frontend:
EJS Templates: EJS (Embedded JavaScript) templates are used to render HTML dynamically. This allows for reusable components and dynamic content rendering.
CSS Styling: Custom CSS provides a professional look with features like responsive design, hover effects, and animations.
## 2. Backend:
Node.js and Express.js: The server-side logic is handled by Node.js with the Express.js framework. This setup handles routing, server-side rendering with EJS, and interactions with the MongoDB database.
MongoDB: A NoSQL database used to store blog posts. Each post document includes a title, content, and a creation timestamp.

 # Home Page:
  The homepage showcases a list of blog posts fetched from the MongoDB database. Posts are displayed in reverse chronological order, so the most recent ones appear at the top.
  Each post preview includes a title, a short snippet of the content, and a "Read more" link. This allows users to quickly browse through available posts.
 ![Home page](https://github.com/user-attachments/assets/e6495653-a70a-4f40-ab3c-ce0da1451453)

 # Compose Page:
 Users can access a form to create new posts by navigating to the "Compose" page.
 After filling out the title and content fields, users can submit the form. The new post is then saved to the MongoDB database and appears on the homepage.
 ![Compose Page](https://github.com/user-attachments/assets/67fbb03b-3c68-438c-8be0-3c7094407d81)

 ## Similarly there are About Us page and Contact Us page which provides information about the blog or its creator. It includes a welcome message and an optional section for additional details. Users can find contact information to get in touch with the blog owner.

 # *Workflow*
1. User Interaction: Users visit the homepage to view the latest posts. They can click on "Read more" to view a full post or navigate to the "Compose" page to create new content.
2. Data Handling: When a user submits a new post, the backend processes the data and saves it to MongoDB. This data is then retrieved and displayed on the homepage.
3. Page Rendering: EJS templates render dynamic content on the client-side, ensuring that the latest posts and user actions are reflected in real-time.
