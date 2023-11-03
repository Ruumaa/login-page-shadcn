import Link from 'next/link';
import { buttonVariants } from './components/ui/button';
import ClientSession from './components/ClientSession';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export default async function Home() {
  const getSession = await getServerSession(authOptions);
  return (
    <div>
      <h1 className="text-2xl">Home</h1>
      <Link href="/admin" className={buttonVariants()}>
        Open admin
      </Link>
      <h1>Server session</h1>
      {JSON.stringify(getSession)}
      <h1>Client session</h1>
      <ClientSession />
    </div>
  );
}
