import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    // Get session
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user) {
      return NextResponse.json(
        { error: "Non authentifié" },
        { status: 401 }
      );
    }

    // Parse request body
    const body = await req.json();
    const { name, slug } = body;

    // Validation
    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { error: "Le nom du workspace est requis" },
        { status: 400 }
      );
    }

    if (!slug || typeof slug !== "string" || !slug.trim()) {
      return NextResponse.json(
        { error: "Le slug est requis" },
        { status: 400 }
      );
    }

    // Create organization using Better Auth
    const organization = await auth.api.createOrganization({
      body: {
        name: name.trim(),
        slug: slug.trim(),
        userId: session.user.id,
      },
      headers: await headers(),
    });

    if (!organization) {
      return NextResponse.json(
        { error: "Erreur lors de la création du workspace" },
        { status: 500 }
      );
    }

    // Mark onboarding as completed
    await prisma.user.update({
      where: { id: session.user.id },
      data: {
        onboardingCompleted: true,
      },
    });

    return NextResponse.json({
      success: true,
      organization: {
        id: organization.id,
        name: organization.name,
        slug: organization.slug,
      },
    });
  } catch (error) {
    console.error("Error creating workspace:", error);
    return NextResponse.json(
      { error: "Erreur lors de la création du workspace" },
      { status: 500 }
    );
  }
}
