import styles from "./styles.module.css";

const AboutLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <nav className="text-3xl">About Navbar</nav>
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default AboutLayout;
