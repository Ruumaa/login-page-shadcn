import prisma from '@/lib/prisma';
import { hash } from 'bcrypt';
import { NextResponse } from 'next/server';
import { z } from 'zod';

const userSchema = z.object({
  username: z.string().min(1, 'Username is required').max(100),
  email: z.string().min(1, 'Email is required').email('Invalid email'),
  password: z.string().min(8, 'Password must have at least 8 characters'),
});

export const POST = async (request) => {
  try {
    const body = await request.json();
    const { username, email, password } = userSchema.parse(body);

    const existingUsername = await prisma.user.findUnique({
      where: {
        username: username,
      },
    });
    if (existingUsername) {
      return NextResponse.json(
        {
          user: null,
          message: 'Username already exist',
        },
        { status: 409 }
      );
    }

    const existingEmail = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (existingEmail) {
      return NextResponse.json(
        {
          user: null,
          message: 'Email already exist',
        },
        { status: 409 }
      );
    }

    const hashedPassword = await hash(password, 10);
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    const { password: userPassword, ...rest } = newUser;

    return NextResponse.json({
      user: rest,
      message: 'User created successfully',
      status: 201,
    });
  } catch (error) {
    return NextResponse({ message: 'Something wrong in POST', error });
  }
};
