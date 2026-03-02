# UI Garden Component Library  
Created by: SAURAVDEEP SINGH  
Assignment 12 – Web Component Library  

## Running the Project (Local Development)

### Install dependencies
npm install

Code

### Run Storybook
npm run storybook

Code

### Run the React App (optional)
npm start

Code

---

## Running the Production Build with Docker (Required)

### Build the Docker image
docker build -t singh_sauravdeep_ui_garden .

Code

### Run the container on port 8083
docker run -p 8083:80 --name singh_sauravdeep_coding_assignment12 singh_sauravdeep_ui_garden

Code

### Open the site
Visit:
http://localhost:8083

Code

---

## Project Structure
Each component includes:
- ComponentName.tsx  
- ComponentName.styles.ts  
- ComponentName.types.ts  
- ComponentName.stories.tsx  
- ComponentName.test.tsx  
- index.ts  

---

## Technologies Used
React  
Storybook  
Styled-components  
Jest + React Testing Library  
Docker  
Nginx  