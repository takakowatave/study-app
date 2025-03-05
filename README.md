# Study-app

## Preview

![Study App](src/assets/study-app.jpg)

### Outline

This is an application for all learners.

## Spec

- **Vite**（Front-End）
- **React**（UI library）
- **Supabase**（Back-End）
- **Firebase**（Deployment & Authentication）

## Environment

1. Clone repository
   ```sh
   git clone https://github.com/your-repo.git
   cd your-repo
   ```
2. Set the necessary environment variables (create `.env` file)
   ```sh
   cp .env.example .env
   ```
   Add the following settings to .env:
   ```env
   REACT_APP_API_KEY=your-api-key
   REACT_APP_FIREBASE_PROJECT_ID=your-project-id
   ```
3. Install dependencies
   ```sh
   npm install
   ```

## How to start

### Run in Local Environment

```sh
npm start
```

### Deploy to Production Environment

```sh
npm run build
firebase deploy
```

