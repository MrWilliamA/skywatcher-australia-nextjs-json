import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  const leftNavLinks = [
    { name: "HOME", path: "/" },
    {
      name: "PRODUCTS",
      path: "/products",
    },
    {
      name: "FIRST TIME BUYERS GUIDE",
      path: "/first-time-buyers-guide",
    },
  ];

  const rightNavLinks = [
    { name: "NEWS", path: "/news" },
    {
      name: "KNOWLEDGE BASE",
      path: "/knowledge-base",
    },
    {
      name: "CONTACT",
      path: "/contact",
    },
  ];

  const logoUrl = "/images/logos/Skywatcher-logo-white.png";

  return (
    <section className="navContainer">
      <div className="innerNavContainer">
        <div className="leftMenuContainer">
          <ul>
            {leftNavLinks.map((link, index) => {
              return (
                <Link key={index} href={link.path}>
                  <li>{link.name}</li>
                </Link>
              );
            })}
          </ul>
        </div>
        <div className="logoContainer">
          <Link href="/">
            <Image
              src={logoUrl}
              alt="SkyWatcher Australia"
              width={200}
              height={70}
            />
          </Link>
        </div>
        <div className="rightMenuContainer">
          <ul>
            {rightNavLinks.map((link, index) => {
              return (
                <Link key={index} href={link.path}>
                  <li>{link.name}</li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Nav;
