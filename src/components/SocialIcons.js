const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <a className="icon" style={styles.icon} href="https://github.com/riishika">
        <i className="fa-brands fa-github" aria-hidden="true" title="Rishika Kumar's GitHub Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.linkedin.com/in/riishika/">
        <i className="fa-brands fa-linkedin" aria-hidden="true" title="Rishika Kumar's LinkedIn Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.instagram.com/riisshika/">
        <i className="fa-brands fa-instagram" aria-hidden="true" title="Rishika Kumar's Instagram Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://twitter.com/Riisshika">
        <i className="fa-brands fa-twitter" aria-hidden="true" title="Rishika Kumar's Twitter Profile"></i>
      </a>
    </div>
  );
};

export default SocialIcons;
