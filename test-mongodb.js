// Test MongoDB Connection
// Run this with: node test-mongodb.js

const mongoose = require('mongoose');
require('dotenv').config({ path: '.env.local' });

const MONGODB_URI = process.env.MONGODB_URI;

console.log('🔍 Testing MongoDB Connection...\n');

// Show connection string (hide password)
if (MONGODB_URI) {
  const maskedUri = MONGODB_URI.replace(/:([^@]+)@/, ':****@');
  console.log('📝 Connection String:', maskedUri);
  console.log('');
  
  // Check for common issues
  console.log('🔧 Checking connection string format...');
  
  if (!MONGODB_URI.includes('mongodb+srv://')) {
    console.log('❌ Missing protocol. Should start with: mongodb+srv://');
  } else {
    console.log('✅ Protocol correct (mongodb+srv://)');
  }
  
  if (!MONGODB_URI.includes('@cluster')) {
    console.log('❌ Missing cluster address. Should contain: @cluster0.xxxxx.mongodb.net');
  } else {
    console.log('✅ Cluster address found');
  }
  
  if (!MONGODB_URI.includes('/portfolio')) {
    console.log('⚠️  Database name missing or different. Expected: /portfolio');
  } else {
    console.log('✅ Database name correct (/portfolio)');
  }
  
  if (!MONGODB_URI.includes('?retryWrites=true')) {
    console.log('⚠️  Query parameters missing. Expected: ?retryWrites=true&w=majority');
  } else {
    console.log('✅ Query parameters present');
  }
  
  console.log('\n🔌 Attempting to connect...\n');
  
  // Attempt connection
  mongoose.connect(MONGODB_URI)
    .then(() => {
      console.log('✅ SUCCESS! Connected to MongoDB Atlas!');
      console.log('📊 Database:', mongoose.connection.db.databaseName);
      console.log('🌐 Host:', mongoose.connection.host);
      console.log('\n✨ Your MongoDB connection is working correctly!');
      console.log('👉 You can now use the contact form on your portfolio.\n');
      process.exit(0);
    })
    .catch((error) => {
      console.log('❌ CONNECTION FAILED!');
      console.log('\n📋 Error Details:');
      console.log('Error:', error.message);
      console.log('Code:', error.code || 'N/A');
      
      console.log('\n💡 Common Solutions:');
      
      if (error.message.includes('ENOTFOUND') || error.message.includes('querySrv')) {
        console.log('   1. Check your cluster address in MongoDB Atlas');
        console.log('   2. Go to: Connect → Connect your application');
        console.log('   3. Copy the FULL connection string');
        console.log('   4. Make sure it includes: cluster0.xxxxx.mongodb.net');
      }
      
      if (error.message.includes('Authentication failed')) {
        console.log('   1. Verify username and password are correct');
        console.log('   2. Go to Database Access in MongoDB Atlas');
        console.log('   3. Reset password if needed');
      }
      
      if (error.message.includes('ETIMEDOUT') || error.message.includes('timeout')) {
        console.log('   1. Check Network Access in MongoDB Atlas');
        console.log('   2. Add IP address: 0.0.0.0/0 (for development)');
        console.log('   3. Or add your current IP address');
      }
      
      console.log('\n📖 See MONGODB_FIX.md for detailed troubleshooting.\n');
      process.exit(1);
    });
  
} else {
  console.log('❌ ERROR: MONGODB_URI not found in .env.local');
  console.log('\n📝 Steps to fix:');
  console.log('   1. Make sure .env.local file exists in project root');
  console.log('   2. Add your MongoDB connection string:');
  console.log('      MONGODB_URI=mongodb+srv://user:pass@cluster0.xxxxx.mongodb.net/portfolio?retryWrites=true&w=majority');
  console.log('\n📖 See MONGODB_SETUP.md for detailed instructions.\n');
  process.exit(1);
}
