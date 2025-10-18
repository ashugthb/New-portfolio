# How to Fix MongoDB Connection Error

## Error Explanation
```
querySrv ENOTFOUND _mongodb._tcp.cluster.mongodb.net
```

This error means your MongoDB connection string is **incomplete or incorrect**.

---

## ✅ SOLUTION - Step by Step

### **Step 1: Go to MongoDB Atlas Dashboard**

1. Visit: https://cloud.mongodb.com/
2. Sign in with your account
3. You should see your cluster (e.g., "Cluster0")

---

### **Step 2: Get the Correct Connection String**

1. Click the **"Connect"** button on your cluster
2. Select **"Connect your application"**
3. Choose:
   - **Driver:** Node.js
   - **Version:** 5.5 or later
4. **Copy the connection string** - it will look like this:
   ```
   mongodb+srv://username:<password>@cluster0.abc123.mongodb.net/?retryWrites=true&w=majority
   ```

---

### **Step 3: Identify Your Cluster Address**

Your connection string should contain a cluster address that looks like:
- `cluster0.abc123.mongodb.net` OR
- `cluster0.a1b2c3d.mongodb.net` OR
- `cluster1.xyz456.mongodb.net`

**The key part is:** `cluster0.xxxxx` where `xxxxx` is a unique identifier for your cluster.

---

### **Step 4: Update `.env.local` File**

Replace the `MONGODB_URI` in your `.env.local` with the correct format:

```env
MONGODB_URI=mongodb+srv://ashvajeetathawale7:ashu1234@YOUR-CLUSTER-ADDRESS.mongodb.net/portfolio?retryWrites=true&w=majority
```

**Example (replace with YOUR actual cluster address):**
```env
MONGODB_URI=mongodb+srv://ashvajeetathawale7:ashu1234@cluster0.a1b2c3d.mongodb.net/portfolio?retryWrites=true&w=majority
```

---

### **Step 5: Important Parts of the Connection String**

Your MONGODB_URI must have ALL these parts:

1. **Protocol:** `mongodb+srv://`
2. **Username:** `ashvajeetathawale7`
3. **Password:** `ashu1234` (your password)
4. **Cluster Address:** `cluster0.xxxxx.mongodb.net` ← **THIS IS MISSING!**
5. **Database Name:** `/portfolio`
6. **Query Params:** `?retryWrites=true&w=majority`

**Current (WRONG):**
```
mongodb+srv://ashvajeetathawale7:ashu1234@cluster.mongodb.net
```
❌ Missing cluster subdomain
❌ Missing database name
❌ Missing query parameters

**Correct Format:**
```
mongodb+srv://ashvajeetathawale7:ashu1234@cluster0.abc123.mongodb.net/portfolio?retryWrites=true&w=majority
```
✅ Has cluster subdomain (cluster0.abc123)
✅ Has database name (/portfolio)
✅ Has query parameters

---

## 🔍 Where to Find Your Cluster Address

### Option 1: From MongoDB Atlas Dashboard
1. Go to your cluster
2. Click "Connect"
3. Select "Connect your application"
4. Look at the connection string - copy everything between `@` and `/`

Example:
```
mongodb+srv://user:pass@cluster0.abc123.mongodb.net/...
                          ^^^^^^^^^^^^^^^^^^^^^^
                          This is your cluster address
```

### Option 2: From Cluster Overview
1. In MongoDB Atlas, look at your cluster name
2. Below the cluster name, you'll see the cluster connection info
3. It will show something like: `cluster0.abc123.mongodb.net`

---

## 📝 Quick Fix Checklist

- [ ] I have a MongoDB Atlas account
- [ ] I have created a cluster
- [ ] I have created a database user with username and password
- [ ] I have the FULL connection string from "Connect your application"
- [ ] My connection string includes the cluster subdomain (e.g., cluster0.abc123)
- [ ] My connection string ends with `/portfolio?retryWrites=true&w=majority`
- [ ] I have updated `.env.local` with the complete connection string
- [ ] I have restarted the development server (`npm run dev`)

---

## 🔄 After Updating `.env.local`

1. **Save the file**
2. **Restart your dev server:**
   ```bash
   # Stop current server (Ctrl+C)
   npm run dev
   ```
3. **Test the contact form**
4. **Check for success message**

---

## ✅ How to Verify It's Working

After updating the connection string and restarting:

1. Go to http://localhost:3000
2. Fill out the contact form
3. Submit
4. You should see:
   - ✅ Green success toast notification
   - ✅ Form clears automatically
   - ✅ No errors in terminal
5. Check MongoDB Atlas:
   - Collections → Browse Collections
   - Database: `portfolio`
   - Collection: `contacts`
   - Your submission should appear!

---

## 🆘 Still Getting Errors?

### Error: "Bad auth: Authentication failed"
- Your username or password is incorrect
- Go to Database Access in MongoDB Atlas
- Verify username and reset password if needed

### Error: "Network timeout"
- Check Network Access in MongoDB Atlas
- Add IP address `0.0.0.0/0` (for development)

### Error: "MongoServerError: user is not allowed"
- Go to Database Access
- Make sure your user has "Read and write to any database" permissions

---

## 📧 Need Help?

If you're still stuck, provide:
1. Your cluster name (visible in MongoDB Atlas)
2. The error message from terminal
3. Screenshot of MongoDB Atlas connection screen

---

## Example of a CORRECT `.env.local` file:

```env
MONGODB_URI=mongodb+srv://ashvajeetathawale7:ashu1234@cluster0.a1b2c3d.mongodb.net/portfolio?retryWrites=true&w=majority
```

Replace `cluster0.a1b2c3d` with YOUR actual cluster address!
