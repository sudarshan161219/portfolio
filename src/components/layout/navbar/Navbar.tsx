import { useState } from "react";
import { Code2, Menu, X, Terminal } from "lucide-react";
import { BRAND_NAME } from "../../../constants/data";
import styles from "./index.module.css";

export const Navbar = () => {
  const [activeTab, setActiveTab] = useState("#services");
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Services", href: "#services", cmd: "cd ./services" },
    { name: "Work", href: "#work", cmd: "cd ./work" },
    { name: "Contact", href: "#contact", cmd: "./contact.sh" },
  ];

  const handleLinkClick = (href: string) => {
    setActiveTab(href);
    setIsOpen(false); // Close terminal on selection
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logoGroup}>
          <Code2 size={24} />
          <span className={styles.brandName}>{BRAND_NAME}</span>
        </div>

        {/* Desktop Nav (Hidden on Mobile) */}
        <nav className={`${styles.nav} ${styles.desktopOnly}`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActiveTab(link.href)}
              className={`${styles.link} ${
                activeTab === link.href ? styles.active : ""
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle Button (Visible on Mobile) */}
        <button
          className={styles.mobileToggle}
          onClick={() => setIsOpen(true)}
          aria-label="Open Menu"
        >
          <span className={styles.cmdPrompt}>$</span> menu
        </button>
      </header>

      {/* TERMINAL MODAL (Mobile Overlay) */}
      {isOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.terminalWindow}>
            {/* Terminal Title Bar */}
            <div className={styles.terminalHeader}>
              <div className={styles.terminalTitle}>
                <Terminal size={14} />
                <span>MENU.EXE</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className={styles.closeBtn}
              >
                <X size={16} />
              </button>
            </div>

            {/* Terminal Content */}
            <div className={styles.terminalBody}>
              <p className={styles.terminalText}>Select a destination:</p>

              <nav className={styles.terminalNav}>
                {navLinks.map((link, index) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => handleLinkClick(link.href)}
                    className={styles.terminalLink}
                  >
                    <span className={styles.cmdIndex}>[{index + 1}]</span>
                    <span className={styles.cmdText}>{link.cmd}</span>
                  </a>
                ))}

                {/* Exit Option */}
                <button
                  onClick={() => setIsOpen(false)}
                  className={styles.terminalLink}
                >
                  <span className={styles.cmdIndex}>[4]</span>
                  <span className={styles.cmdText}>exit</span>
                </button>
              </nav>

              <div className={styles.cursorBlock}>
                <span className={styles.cmdPrompt}>{">"}</span>
                <span className={styles.blinkingCursor}>_</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
