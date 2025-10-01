# 📝 GitHub Repository Setup Guide

## Step 1: Create a New GitHub Repository

1. Go to [GitHub](https://github.com) and log in with your account (@ashvajeet2722)
2. Click the **"+"** icon in the top-right corner
3. Select **"New repository"**
4. Fill in the details:
   - **Repository name**: `portfolio-website` (or any name you prefer)
   - **Description**: "Professional portfolio website built with Next.js, Tailwind CSS, and Framer Motion"
   - **Visibility**: Choose **Public** (so others can see your work)
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
5. Click **"Create repository"**

## Step 2: Connect Your Local Repository to GitHub

After creating the repository, GitHub will show you some commands. You need to run these in your terminal:

### Option 1: If you see "…or push an existing repository from the command line"

Copy and run these commands in your PowerShell terminal (replace YOUR-USERNAME with ashvajeet2722):

```powershell
git remote add origin https://github.com/ashvajeet2722/portfolio-website.git
git branch -M main
git push -u origin main
```

### Option 2: Manual Steps

Run these commands one by one in your PowerShell:

```powershell
# Add the remote repository
git remote add origin https://github.com/ashvajeet2722/portfolio-website.git

# Rename branch from master to main (GitHub default)
git branch -M main

# Push your code to GitHub
git push -u origin main
```

## Step 3: Verify Upload

1. Refresh your GitHub repository page
2. You should see all your files uploaded
3. The README.md will be displayed on the repository homepage

## Step 4: Enable GitHub Pages (Optional)

If you want to host your portfolio on GitHub Pages:

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **main** branch
5. Click **Save**
6. Your site will be available at: `https://ashvajeet2722.github.io/portfolio-website/`

Note: For Next.js, you might need to configure static export first.

## Alternative: Use Vercel (Recommended for Next.js)

Vercel is the recommended platform for Next.js applications:

1. Go to [vercel.com](https://vercel.com)
2. Sign in with your GitHub account
3. Click **"Add New Project"**
4. Import your `portfolio-website` repository
5. Vercel will automatically detect Next.js and configure settings
6. Click **"Deploy"**
7. Your site will be live at: `https://your-project-name.vercel.app`

## Quick Commands Reference

```powershell
# Check current remote
git remote -v

# View commit history
git log --oneline

# Check status
git status

# Add a new file
git add filename.js

# Commit changes
git commit -m "Your message"

# Push to GitHub
git push origin main
```

## Troubleshooting

### If you get authentication errors:

1. GitHub may require a Personal Access Token instead of password
2. Go to GitHub Settings → Developer settings → Personal access tokens
3. Generate a new token with `repo` permissions
4. Use this token instead of your password when prompted

### If remote already exists:

```powershell
git remote remove origin
git remote add origin https://github.com/ashvajeet2722/portfolio-website.git
```

### To see your remote URL:

```powershell
git remote -v
```

## What's Next?

After pushing to GitHub:

1. ✅ Your code is backed up on GitHub
2. ✅ Others can see your work
3. ✅ You can deploy to Vercel/Netlify
4. ✅ You can collaborate with others
5. ✅ Track changes and version history

## Repository Features to Enable

On your GitHub repository:

1. **Add Topics**: Click the gear icon next to "About" and add topics like:
   - `nextjs`
   - `react`
   - `portfolio`
   - `tailwindcss`
   - `framer-motion`
   
2. **Add Website URL**: After deploying, add your live site URL in the repository settings

3. **Enable Issues**: For bug tracking and feature requests

4. **Add License**: MIT License is recommended for portfolio projects

---

Need help? Feel free to ask! 🚀
