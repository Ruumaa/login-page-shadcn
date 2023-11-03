import Link from 'next/link';
import { Button } from '@/app/components/ui/button';
import { Gamepad2 } from 'lucide-react';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import HandleSignOut from './HandleSignOut';

const Navbar = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div className="fixed w-full bg-zinc-100 py-2 border-b border-s-zinc-200 z-10 top-0 ">
      <div className="container flex justify-between items-center">
        <Link href="/">
          <Gamepad2 />
        </Link>
        {session?.user ? (
          <HandleSignOut />
        ) : (
          <Button asChild>
            <Link href="/sign-in">Sign In</Link>
          </Button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
