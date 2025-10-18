import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Contact from '@/models/Contact';

export async function POST(request) {
  try {
    // Connect to database
    await dbConnect();

    // Parse request body
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Please fill in all required fields' 
        },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Please provide a valid email address' 
        },
        { status: 400 }
      );
    }

    // Create new contact submission
    const contact = await Contact.create({
      name,
      email,
      subject,
      message
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Message sent successfully! I\'ll get back to you soon.',
        data: {
          id: contact._id,
          name: contact.name,
          createdAt: contact.createdAt
        }
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Contact API Error:', error);

    // Handle validation errors
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message);
      return NextResponse.json(
        { 
          success: false, 
          message: messages.join(', ') 
        },
        { status: 400 }
      );
    }

    // Handle other errors
    return NextResponse.json(
      { 
        success: false, 
        message: 'Something went wrong. Please try again later.' 
      },
      { status: 500 }
    );
  }
}

// Optional: GET endpoint to fetch all contact submissions (for admin purposes)
export async function GET(request) {
  try {
    await dbConnect();

    // Get query parameters for filtering
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const limit = parseInt(searchParams.get('limit') || '10');

    // Build query
    const query = status ? { status } : {};

    // Fetch contacts
    const contacts = await Contact.find(query)
      .sort({ createdAt: -1 })
      .limit(limit);

    return NextResponse.json(
      {
        success: true,
        count: contacts.length,
        data: contacts
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to fetch contacts' 
      },
      { status: 500 }
    );
  }
}
