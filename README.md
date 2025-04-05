# 🛠️ Backend Setup Guide

Follow these steps to set up and run the backend locally:

---

## 📦 1. Install Dependencies

Open your terminal in the backend project directory and run:

```bash
npm install
```

This installs all the required packages listed in your `package.json`.

---

## 🔐 2. Create a `.env` File

Inside the root of your backend folder, create a file named `.env` and add the following environment variables:

```env
DATABASE=your_mongodb_database_url
JWT_SECRET=3ef3541a3a1f3f4d11fddcf23dcff91ee534fe50d96a63bfaf2cc4db269ee1119390851c466002184345849982c203e9e622c51cc25ba8d35780f820e33413bc
```

Replace `your_mongodb_database_url` with your actual MongoDB connection string.

---

## 🚀 3. Start the Server

To start the backend server in development mode, run:

```bash
npm run dev
```

Make sure the server starts without errors and connects to the MongoDB database successfully.
