# Project Specification: User and Data Management System with Next.js, Material Kit React, Node.js, and MongoDB

## 1. Objective
Develop a web application for user management and basic data operations, featuring registration, login, and CRUD (Create, Read, Update, Delete) functionality using Next.js, **Material Kit React**, Node.js, and MongoDB within a **2-day timeline**. The project will build upon and enhance the structure provided in the specified repository.

## 2. Initial Setup
- **Clone the Template Repository**:
  - Clone the starter template from the GitHub repository:  
    `https://github.com/tanqory/quickstart-template-nextjs-express-mongoose-crudify-mongodb`
  - Run the following commands to set up the project:
    ```bash
    git clone https://github.com/tanqory/quickstart-template-nextjs-express-mongoose-crudify-mongodb.git
    cd quickstart-template-nextjs-express-mongoose-crudify-mongodb
    npm install
    ```
- **Modify the Template**:
  - Use the code and structure from this repository as the foundation.
  - Enhance and modify the code to meet the requirements outlined below.
- **Install Material Kit React**:
  - In the `client` folder, install dependencies required for Material Kit React:
    ```bash
    npm install @mui/material @mui/lab @mui/icons-material @emotion/react @emotion/styled
    ```
  - Copy the `layouts`, `theme`, and necessary components from the [Material Kit React repository](https://github.com/minimal-ui-kit/material-kit-react) to the `client` folder.
  - Refer to the Material Kit React README for theme and layout setup instructions.
- **Set Up Environment Variables**:
  - Create a `server/.env` file:
    ```env
    MONGODB_URI=mongodb://localhost:27017/myapp
    JWT_SECRET=your_jwt_secret
    PORT=5000
    ```
  - Create a `client/.env` file:
    ```env
    NEXT_PUBLIC_API_URL=http://localhost:5000/api
    ```

## 3. System Requirements
### 3.1 Frontend
- Use **Next.js** for UI and routing (build upon the template).
- Use **Material Kit React** ([https://github.com/minimal-ui-kit/material-kit-react](https://github.com/minimal-ui-kit/material-kit-react)) for the component library and styling.
  - Utilize components such as `Card`, `Table`, `TextField`, and layouts like `AuthLayout` and `DashboardLayout`.
  - Design a modern, visually appealing, and responsive UI following Material Kit React's style.
- Include three main pages:
  - **Login**: Form for user login (email and password) using `AuthLayout`.
  - **Register**: Form for user registration (name, email, password) using `AuthLayout`.
  - **Dashboard**: Page to display, add, edit, and delete data using `DashboardLayout`.
- The UI must be responsive, supporting both desktop and mobile devices.

### 3.2 Backend
- Use **Node.js** with **Express** to create a REST API (build upon the template).
- Use **MongoDB** as the database, connected via Mongoose.
- Required API endpoints:
  - `/api/auth/register`: Register a new user.
  - `/api/auth/login`: Authenticate user and return JWT token.
  - `/api/items`: CRUD operations for data (GET, POST, PUT, DELETE).
- Implement **JWT** for authentication.
- Hash passwords using **bcrypt**.

### 3.3 Data Management
- Example data: "Items" (e.g., product list) with fields:
  - `name` (string): Item name.
  - `description` (string): Item description.
  - `price` (number): Item price.
- Authenticated users can:
  - View all items.
  - Add new items.
  - Edit existing items.
  - Delete items.

## 4. Project Structure
```
project/
├── client/                     # Next.js frontend
│   ├── pages/
│   │   ├── index.js          # Login page
│   │   ├── register.js       # Register page
│   │   └── dashboard.js      # Dashboard page
│   ├── components/           # Material Kit React components
│   ├── layouts/              # Layouts like AuthLayout, DashboardLayout
│   ├── theme/                # Material Kit React theme
│   └── package.json
├── server/                     # Node.js backend
│   ├── routes/
│   │   ├── auth.js          # Authentication routes
│   │   └── items.js         # Items CRUD routes
│   ├── models/
│   │   ├── User.js          # User schema
│   │   └── Item.js          # Item schema
│   ├── config/
│   │   └── db.js            # MongoDB connection
│   └── package.json
```

## 5. Required Features
### 5.1 Login Page
- Form fields: Email, Password.
- Use `AuthLayout` from Material Kit React.
- Include a "Login" button and a link to the Register page.
- Display error messages for invalid credentials.
- Redirect to Dashboard upon successful login.

### 5.2 Register Page
- Form fields: Name, Email, Password.
- Use `AuthLayout` from Material Kit React.
- Include a "Register" button and a link to the Login page.
- Validate input (e.g., email must be unique).
- Redirect to Login page upon successful registration.

### 5.3 Dashboard Page
- Display a table of Items (name, description, price) using the `Table` component.
- Provide a form for adding/editing items using `Card` and `TextField`.
- Include edit and delete buttons for each item.
- Use `DashboardLayout` from Material Kit React.
- Require JWT authentication to access this page.

## 6. Technical Requirements
### 6.1 Frontend
- **Modify the Template**:
  - Update files in `client/pages/` and `client/components/` to use Material Kit React components and layouts.
  - Import the Material Kit React theme and configure it in `_app.js`.
- Use Next.js API routes or `axios` to call backend API.
- Manage state with React hooks (useState, useEffect).

### 6.2 Backend
- **Modify the Template**:
  - Verify and update `server/config/db.js` to use `MONGODB_URI` from `.env`.
  - Update `server/models/` and `server/routes/` to support the required schemas and endpoints.
  - Add JWT authentication and bcrypt if not present in the template.
- Use environment variables for MongoDB URI and JWT secret.
- Implement error handling for API requests.

### 6.3 Security
- Hash passwords with bcrypt.
- Use JWT for authentication.
- Protect unauthorized API access.

## 7. Timeline
- **Duration**: The project must be completed within **2 days** from the start date.
- Prioritize essential features (Login, Register, basic CRUD) to meet the deadline.
- Test locally to ensure functionality before submission.

## 8. Expected Outcomes
- Users can register and log in successfully.
- Authenticated users can perform CRUD operations on Items.
- The UI is modern, visually appealing, and responsive using Material Kit React.
- The backend API functions correctly and securely.
- The modified code from the template is complete and well-structured.

## 9. Evaluation Criteria
- Completeness of Login, Register, and CRUD functionalities.
- Quality of UI/UX (modern, responsive, aligned with Material Kit React).
- System security (JWT, bcrypt).
- Accuracy in modifying the template code from the repository.
- Clean and well-structured code.
- Proper error handling on both frontend and backend.

## 10. Notes
- **Using Material Kit React**:
  - Copy the `layouts`, `theme`, and components from the [Material Kit React repository](https://github.com/minimal-ui-kit/material-kit-react).
  - Adapt the code for Next.js (e.g., replace React Router with Next.js routing).
  - Refer to the repository's README and examples for setup.
- **Modifying the Template**:
  - Inspect the structure of `https://github.com/tanqory/quickstart-template-nextjs-express-mongoose-crudify-mongodb`.
  - Add missing components (e.g., JWT, bcrypt, or Mongoose schemas) as needed per the requirements.
- Additional libraries like `axios` or `react-hook-form` may be used as appropriate.


## Setup
1. Clone: `git clone https://github.com/tanqory/quickstart-template-nextjs-express-mongoose-crudify-mongodb.git`
2. Install: `npm install` in `client` and `server`
3. Set `.env` (see `server/.env.example`, `client/.env.example`)
4. Copy `layouts` and `theme` from https://github.com/minimal-ui-kit/material-kit-react to `client`
5. Run backend: `cd server && npm start`
6. Run frontend: `cd client && npm run dev`
7. Access at `http://localhost:3000`

## Test the project in a local environment:
### Backend
  ```
  cd server && npm start
  ```
### Frontend
  ```
  cd client && npm run dev
  ```