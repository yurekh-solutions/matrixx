# Firebase Setup Instructions for MaterialMatrix

## Step 1: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add Project"
3. Name it "MaterialMatrix" or your preferred name
4. Complete the setup wizard

## Step 2: Enable Authentication

1. In Firebase Console, go to **Authentication**
2. Click "Get Started"
3. Enable **Email/Password** sign-in method

## Step 3: Create Firestore Database

1. Go to **Firestore Database**
2. Click "Create Database"
3. Start in **production mode** or **test mode**
4. Choose your preferred location

## Step 4: Get Firebase Configuration

1. Go to **Project Settings** (gear icon)
2. Scroll down to "Your apps"
3. Click the web icon `</>`
4. Register your app
5. Copy the `firebaseConfig` object

## Step 5: Update Configuration in Code

Open `src/lib/firebase.ts` and replace the config:

```typescript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

## Features Implemented

✅ Firebase Authentication (Email/Password)
✅ User roles (Buyer/Seller)
✅ Product catalog with 100+ items
✅ Shopping cart functionality
✅ RFQ (Request for Quotation) system
✅ WhatsApp integration for quotes
✅ Seller dashboard
✅ Responsive design
✅ Protected routes

## Default Test Flow

1. Visit `/login` to create an account (buyer or seller)
2. Browse products at `/products`
3. Add items to cart (login required)
4. Submit RFQ with customer details
5. Receive quote via WhatsApp

**Note:** Replace WhatsApp number `917021341409` and email `soniajaiswal2222@gmail.com` in the codebase with your actual contact details.
