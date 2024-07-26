import { auth } from "@/libs/auth";

export const Header = () => {
  const serverAuth = auth();

  return (
    <header className="bg-base-100 shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-xl font-bold">Brief AI</div>
        {!serverAuth ? (
          <div>
            <a href="/login">
              <button className="btn btn-primary mr-2">LogIn</button>
            </a>
            <a href="/register">
              <button className="btn btn-secondary">Register</button>
            </a>
          </div>
        ) : (
          <div>
            <a href="/dashboard">
              <button className="btn btn-primary mr-2">Dashboard</button>
            </a>
            <a href="/bookmark">
              <button className="btn btn-primary">Bookmark</button>
            </a>
          </div>
        )}
      </div>
    </header>
  );
};
