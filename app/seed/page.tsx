import { prisma } from "@/lib/prisma"; // Adjust path if needed
import bcrypt from "bcryptjs";

export default async function SeedPage() {
  // Seed logic runs on page load (server-side)
  const hashedPassword = await bcrypt.hash("12345678", 10);
  try {
    await prisma.user.create({
      data: {
        email: "admin@test.com",
        name: "Admin",
        password: hashedPassword,
      },
    });
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h1 className="text-2xl font-bold text-green-600">Seed successful</h1>
      </div>
    );
  } catch (error) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h1 className="text-2xl font-bold text-red-600">
          Seed failed: {String(error)}
        </h1>
      </div>
    );
  }
}
