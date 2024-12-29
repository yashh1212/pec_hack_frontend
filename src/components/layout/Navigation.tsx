import React from "react";
import LoginButton from "./LoginButton";
import { useAuth0 } from "@auth0/auth0-react";

const Navigation = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <nav className="bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2">
            <a href="/" className="text-2xl font-bold text-green-600">
              EnviroEarn
            </a>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <NavLink href="/#dashboard">Dashboard</NavLink>
            <NavLink href="/#learn">Learn</NavLink>
            <NavLink href="/UpcomingEvents">Upcoming Events</NavLink>
            <NavLink href="/ReportSection">Report</NavLink>
            {isAuthenticated && <ConnectButton />}
            <LoginButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({
  href,
  children,
}) => (
  <a href={href} className="text-white hover:text-green-600 transition-colors">
    {children}
  </a>
);

const ConnectButton = () => (
  <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2">
    Connect Wallet
  </button>
);

export default Navigation;
