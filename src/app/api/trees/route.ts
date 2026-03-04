import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Tree from "@/lib/Tree";

export async function GET() {
  await dbConnect();
  const trees = await Tree.find().lean();
  return NextResponse.json(trees);
}

export async function POST(req: NextRequest) {
  await dbConnect();
  const body = await req.json();
  const tree = await Tree.create(body);
  return NextResponse.json(tree, { status: 201 });
}
