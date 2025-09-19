import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-200">
      <h1 className="text-xl font-semibold">ALX Project</h1>
      <nav className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/posts">Posts</Link>
        <Link href="/users">Users</Link>
      </nav>
    </header>
  );
};

export default Header;
