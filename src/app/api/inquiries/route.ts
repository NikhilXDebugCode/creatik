import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, organization, serviceOrProgram, timeline, message, audience, sourcePage } = body;

    // Server-side validation
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return NextResponse.json({ error: 'Name is required.' }, { status: 400 });
    }

    if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return NextResponse.json({ error: 'A valid email address is required.' }, { status: 400 });
    }

    if (!serviceOrProgram || typeof serviceOrProgram !== 'string') {
      return NextResponse.json({ error: 'Service or program selection is required.' }, { status: 400 });
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return NextResponse.json({ error: 'Message must be at least 10 characters long.' }, { status: 400 });
    }

    // Structured lead record
    const inquiryRecord = {
      id: `inq_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      receivedAt: new Date().toISOString(),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone ? phone.trim() : null,
      organization: organization ? organization.trim() : null,
      audience: audience === 'learning' ? 'learning' : 'business',
      serviceOrProgram: serviceOrProgram.trim(),
      timeline: timeline || 'Not specified',
      message: message.trim(),
      sourcePage: sourcePage || 'Website Direct',
      dispatchTarget: 'sharan@creatikai.com',
      status: 'received_logged',
    };

    // Log the structured event securely on server
    console.log('[Creatik AI Inquiry Received]', JSON.stringify(inquiryRecord, null, 2));

    // Return successful response with tracking ID
    return NextResponse.json({
      success: true,
      inquiryId: inquiryRecord.id,
      message: 'Your inquiry has been received. Our team will contact you within 1 business day.',
    });
  } catch (err: unknown) {
    console.error('[Inquiry Submission Handler Error]', err);
    return NextResponse.json(
      { error: 'Internal processing error. Please contact us directly at sharan@creatikai.com' },
      { status: 500 }
    );
  }
}
