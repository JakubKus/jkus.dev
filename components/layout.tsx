import Meta from "./meta";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen mt-8 max-w-2xl mx-auto">
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
