import MainHeader from "./MainHeader";

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <MainHeader />
      <main className="w-[100vw] flex flex-col items-center justify-center mt-[70px]">
        {children}
      </main>
    </>
  );
}
