import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';

const Admin = async () => {
  const session = await getServerSession(authOptions);
  if (session?.user) {
    return (
      <h2 className="text-2xl font-semibold">
        Welcome Back - Admin <span className='capitalize'>{session?.user.username}</span>
      </h2>
    );
  }
  return <div className="text-2xl font-semibold">Please log in first...</div>;
};

export default Admin;
