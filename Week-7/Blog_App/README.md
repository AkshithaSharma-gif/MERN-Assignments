This project is a full-stack Blog Application backend built using Node.js, Express.js, MongoDB, and Cloudinary.

The application includes:

User Authentication
Author and Admin APIs
Blog Article Management
JWT Token Verification
Image Upload using Cloudinary
Protected Routes
Project Structure
week7/
│
└── blogapp-backend/
    │
    ├── APIs/
    │   ├── AdminAPI.js
    │   ├── AuthorApi.js
    │   ├── CommonAPI.js
    │   └── UserAPI.js
    │
    ├── config/
    │   ├── cloudinary.js
    │   ├── cloudinaryUpload.js
    │   └── multer.js
    │
    ├── middlewares/
    │   └── VerifyToken.js
    │
    ├── models/
    │   ├── ArticleModel.js
    │   └── UserModel.js
    │
    ├── admin-req.http
    ├── author-req.http
    ├── server.js
    ├── package.json
    └── .env
Features
User Features
User Registration
User Login
JWT Authentication
Protected Access
Author Features
Create Articles
Update Articles
Delete Articles
View Articles
Admin Features
Manage Users
Manage Articles
Administrative Controls
Media Upload
Upload images using Cloudinary
File handling with Multer
Technologies Used
JavaScript
Node.js
Express.js
MongoDB
Mongoose
JWT Authentication
Cloudinary
Multer
REST APIs
Installation
1. Clone Repository
git clone <repository-url>
2. Move into Project Folder
cd week7/blogapp-backend
3. Install Dependencies
npm install
Required Packages
Install packages if needed:

npm install express mongoose cors dotenv jsonwebtoken bcryptjs multer cloudinary multer-storage-cloudinary
For development:

npm install nodemon --save-dev
Environment Variables
Create a .env file in the root folder.

Example:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
Run the Project
Start Server
node server.js
or

npm start
For development:

npx nodemon server.js
Server URL
http://localhost:5000
API Endpoints
User APIs
Register User
POST /user/register
Login User
POST /user/login
Author APIs
Create Article
POST /author/article
Get Articles
GET /author/articles
Update Article
PUT /author/article/:id
Delete Article
DELETE /author/article/:id
Admin APIs
Manage Users
GET /admin/users
Manage Articles
GET /admin/articles
Authentication
This project uses JWT authentication.

After login, a token is generated.

Send token in request headers:

Authorization: Bearer <token>
Middleware
VerifyToken.js
Used for:

Token verification
Route protection
Authorized access control
Database Models
UserModel.js
Stores:

Username
Email
Password
Role
ArticleModel.js
Stores:

Article Title
Content
Author
Image URL
Created Date
Cloudinary Configuration
Cloudinary is used for image uploads.

Files:

config/cloudinary.js
config/cloudinaryUpload.js
Multer handles file uploads before sending them to Cloudinary.

API Testing
Use:

Postman
Thunder Client
VS Code REST Client
Testing files included:

admin-req.http
author-req.http
Learning Outcomes
After completing this project, you will understand:

Backend API Development
JWT Authentication
MongoDB Integration
Cloudinary Image Uploads
Middleware Protection
REST API Architecture
File Upload Handling
Express Routing
