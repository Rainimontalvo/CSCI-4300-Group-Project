import { NextResponse } from 'next/server';
import connectToDatabase from '@/src/lib/mongodb';
import Partner from '@/src/models/Partner';

export async function GET(req: Request, { params }: { params: { id: string } }) {
    try {
      await connectToDatabase();
      const partner = await Partner.findById(params.id);
      if (!partner) return NextResponse.json({ error: "Partner not found" }, { status: 404 });
      return NextResponse.json(partner);
    } catch (err) {
      return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
  }
  
export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    await connectToDatabase();
    const updatedData = await req.json();
    const partner = await Partner.findByIdAndUpdate(params.id, updatedData, { new: true });

    if (!partner) {
      return NextResponse.json({ error: "Partner not found" }, { status: 404 });
    }

    return NextResponse.json(partner);
  } catch (error) {
    console.error("Edit error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    await connectToDatabase();
    const result = await Partner.findByIdAndDelete(params.id);

    if (!result) {
      return NextResponse.json({ error: "Partner not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Partner deleted successfully" });
  } catch (error) {
    console.error("Delete error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
