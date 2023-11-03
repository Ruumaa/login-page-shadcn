'use client';
import { useSession } from 'next-auth/react';

const ClientSession = () => {
  const { data: session, status } = useSession();
  return <pre>{JSON.stringify(session, status)}</pre>;
};

export default ClientSession;
