# Project Setup

This repository contains a Django backend along with a Vite/React frontend. Follow the instructions below to set up and run the project.

### 1. Clone the Repository
```bash
git clone https://github.com/michaelcao512/LanguageLearn.git
```

## Backend Setup
### 1. cd to the backend

### 2. Set up python virtual environment
```bash
# On macOS/Linux
python3 -m venv venv
```
```bash
# On Windows
python -m venv venv
```

### 3. Activate python virtual environment
```bash
# On macOS/Linux
source venv/bin/activate
```
```bash
# On Windows
venv\Scripts\activate
```

### 4. Install dependcies
```bash
pip3 install -r requirements.txt
```

### 5. Apply migrations
```bash
python3 manage.py migrate
```

### 6. Run the server
```bash
python3 manage.py runserver
```
The backend server will start running at http://localhost:8000.

## Frontend Setup
### 1. cd to frontend
### 2. Install dependecies
```bash
npm install
```
### 3. Run the server
```
npm run dev
```
