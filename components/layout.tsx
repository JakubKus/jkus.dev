import Meta from "./meta";

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ preview, children }: Props) => {
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
