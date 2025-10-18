# Portfolio Setup Guide

## MongoDB Integration Setup

### 1. Create MongoDB Database

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account or sign in
3. Create a new cluster (free tier is fine)
4. Create a database user:
   - Database Access → Add New Database User
   - Set username and password (save these!)
   - Grant read/write permissions

### 2. Get Connection String

1. Click "Connect" on your cluster
2. Choose "Connect your application"
3. Copy the connection string
4. It will look like:
   ```
   mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```

### 3. Configure Environment Variables

1. Open `.env.local` in your project root
2. Replace the placeholder with your actual MongoDB URI:
   ```
   MONGODB_URI=mongodb+srv://your-username:your-password@cluster0.xxxxx.mongodb.net/portfolio?retryWrites=true&w=majority
   ```
3. Make sure to:
   - Replace `<username>` with your database username
   - Replace `<password>` with your database password
   - Replace `cluster0.xxxxx` with your actual cluster address
   - Add `/portfolio` after `.mongodb.net` to specify database name

### 4. Whitelist IP Address

In MongoDB Atlas:
1. Go to Network Access
2. Add IP Address
3. For development: Click "Allow Access from Anywhere" (0.0.0.0/0)
4. For production: Add your specific server IP

### 5. Test the Connection

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Go to http://localhost:3000
3. Fill out the contact form and submit
4. You should see:
   - A success toast notification
   - Form fields clearing
   - Data saved in MongoDB (check Atlas dashboard)

## Features Implemented

✅ **Backend API**
- `/api/contact` POST endpoint to receive form submissions
- `/api/contact` GET endpoint to fetch all submissions (for admin)
- MongoDB schema validation
- Error handling

✅ **Frontend Integration**
- React state management for form
- Form validation
- Loading states during submission
- Toast notifications for success/error
- Form reset after successful submission

✅ **Security**
- Environment variables for sensitive data
- .env.local in .gitignore
- Input validation on both client and server
- Mongoose schema validation

## Toast Notifications

The portfolio uses `react-toastify` for user feedback:

- **Success**: Green toast when message is sent successfully
- **Error**: Red toast when there's an error
- **Position**: Bottom-right corner
- **Auto-close**: 5 seconds
- **Theme**: Dark mode to match portfolio design

## Checking Submissions

### Via MongoDB Atlas Dashboard:
1. Go to your cluster
2. Click "Browse Collections"
3. Select `portfolio` database → `contacts` collection
4. View all submissions

### Via API (for admin):
Send GET request to: `http://localhost:3000/api/contact`

Optional query parameters:
- `?status=new` - Filter by status
- `?limit=20` - Limit results

## Deployment Notes

When deploying to Vercel:

1. Add environment variable in Vercel dashboard:
   - Go to Project Settings → Environment Variables
   - Add `MONGODB_URI` with your connection string

2. Redeploy after adding environment variable

3. Make sure MongoDB Atlas whitelists Vercel's IP or allows all IPs

## Troubleshooting

**Error: "Please define the MONGODB_URI environment variable"**
- Make sure `.env.local` exists and has `MONGODB_URI`
- Restart development server after creating `.env.local`

**Error: "Failed to connect to MongoDB"**
- Check connection string format
- Verify username/password are correct
- Check if IP is whitelisted in MongoDB Atlas

**Form not submitting:**
- Check browser console for errors
- Verify API route is accessible at `/api/contact`
- Check MongoDB connection

**Toast not showing:**
- Make sure `ToastContainer` is in layout.js
- Check that `react-toastify/dist/ReactToastify.css` is imported

## Database Schema

```javascript
{
  name: String (required, max 100 chars),
  email: String (required, valid email),
  subject: String (required, max 200 chars),
  message: String (required, max 1000 chars),
  createdAt: Date (auto-generated),
  status: String (enum: 'new', 'read', 'replied', default: 'new')
}
```

## Contact

For issues or questions, contact: ashvajeetathawale7@gmail.com
