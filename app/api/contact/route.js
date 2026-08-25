import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields.' },
        { status: 400 }
      );
    }

    // In a production serverless environment on Vercel, this logs the lead and returns a 200 OK.
    console.log('[LEAD RECEIVED]:', {
      timestamp: new Date().toISOString(),
      name,
      email,
      subject,
      message,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you! Your project inquiry has been recorded. We will reply within 4 hours.',
      },
      { status: 200 }
    );
  } catch (err) {
    console.error('Contact API Error:', err);
    return NextResponse.json(
      { error: 'Internal server error while recording inquiry.' },
      { status: 500 }
    );
  }
}
