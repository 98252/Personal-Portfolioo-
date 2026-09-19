import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !name.trim()) {
      return NextResponse.json(
        { success: false, message: 'Please provide your name.' },
        { status: 400 }
      );
    }
    if (!email || !email.trim() || !email.includes('@')) {
      return NextResponse.json(
        { success: false, message: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }
    if (!message || !message.trim()) {
      return NextResponse.json(
        { success: false, message: 'Please provide a message.' },
        { status: 400 }
      );
    }

    const recipientEmail = 'sahr67568@gmail.com';

    // Forward to FormSubmit.co
    const formSubmitRes = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Origin: request.headers.get('origin') || 'http://localhost:3000',
        Referer: request.headers.get('referer') || 'http://localhost:3000',
      },
      body: JSON.stringify({
        name: name.trim(),
        email: email.trim(),
        subject: subject?.trim() || 'New Portfolio Message',
        message: message.trim(),
        _subject: `New Portfolio Message from ${name.trim()}: ${subject?.trim() || 'General Inquiry'}`,
        _template: 'table',
        _captcha: 'false',
      }),
    });

    const data = await formSubmitRes.json();

    // Check if form requires initial email activation from owner
    if (data.success === 'false' && typeof data.message === 'string' && data.message.includes('Activation')) {
      return NextResponse.json({
        success: false,
        needsActivation: true,
        message:
          "FormSubmit has sent a one-time activation link to sahr67568@gmail.com. Please check your Gmail inbox (or Spam folder) and click 'Activate Form'. After that, messages will arrive automatically!",
      });
    }

    if (data.success === 'true' || data.success === true) {
      return NextResponse.json({
        success: true,
        message: 'Your message has been sent successfully to Rahul Kumar Sah!',
      });
    }

    return NextResponse.json({
      success: false,
      message: data.message || 'Unable to send message at this moment. Please try emailing directly.',
    });
  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'A network error occurred while sending your message. Please try sending via direct email.',
      },
      { status: 500 }
    );
  }
}
