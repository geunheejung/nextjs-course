"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  console.log(pathname, router);

  return (
    <header>
      <section>
        <div>logo</div>
        <div>search</div>
        <div>write</div>
        <div>profile</div>
      </section>
      <section>
        {pathname !== "/blog" && <button onClick={handleBack}>back</button>}
        {pathname === "/blog" && (
          <Link href="/blog/post/write">새 글 작성</Link>
        )}
      </section>
    </header>
  );
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
