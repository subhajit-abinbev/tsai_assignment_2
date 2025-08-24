# Animal Selector & File Upload Web App

## Overview
This project is a simple web application built with FastAPI (Python) and a modern HTML/CSS/JavaScript frontend. It demonstrates two main features:

1. **Animal Selector**: Choose between Cat, Dog, or Elephant and view the corresponding image.
2. **File Upload**: Upload any file and instantly see its name, size, and type.

## Features
- Responsive, modern UI with two main sections.
- Animal images are stored locally and displayed upon selection.
- File upload with instant feedback (name, size, type) using FastAPI backend.

## Project Structure
```
Assignment 2/
├── main.py                # FastAPI backend
├── requirements.txt       # Python dependencies
├── .gitignore             # Git ignore rules
├── static/                # Static files (CSS, JS, images)
│   ├── style.css
│   ├── script.js
│   ├── cat.jpg
│   ├── dog.jpg
│   └── elephant.jpg
├── templates/             # HTML templates
│   └── index.html
```

## Setup Instructions

### 1. Clone the Repository
```
git clone <repo-url>
cd "Assignment 2"
```

### 2. Create & Activate Python Environment (Recommended)
Using Conda:
```
conda create -n assignment_2 python=3.9
conda activate assignment_2
```

### 3. Install Dependencies
```
pip install -r requirements.txt
```

### 4. Add Animal Images
Replace the placeholder `cat.jpg`, `dog.jpg`, and `elephant.jpg` in `static/` with real images for best results.

### 5. Run the Server
```
uvicorn main:app --reload
```

### 6. Access the App
Open your browser and go to:
```
http://127.0.0.1:8000/
```

## Notes
- The file upload feature only displays file info; it does not save files on the server.
- For production, consider using environment variables and proper static file handling.

## License
MIT
