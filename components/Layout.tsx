// import Header from "./Header";
import Header from "./header";

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Header />
      <main className="w-[100vw] flex flex-col items-center justify-center mt-[70px]">
        {children}
      </main>
    </>
  );
}
