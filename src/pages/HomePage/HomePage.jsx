import css from "./HomePage.module.css";

export default function () {
  return (
    <div className={css.container}>
      <h1 className={css.heading}>Welcome to Your Contacts Hub!</h1>
      <p className={css.paragraph}>
        Stay connected with the people who matter most. Our intuitive and
        user-friendly platform makes it easy to manage all your contacts in one
        place. Whether you're organizing personal connections, business
        networks, or both, we provide the tools you need to keep your
        information up-to-date and easily accessible.
      </p>
      <h2 className={css.subHeading}>Why Choose Us?</h2>
      <ul className={css.list}>
        <li className={css.listItem}>
          Seamless Organization: Effortlessly categorize and sort your contacts
          with customizable tags and groups.
        </li>
        <li className={css.listItem}>
          Seamless Organization: Effortlessly categorize and sort your contacts
          with customizable tags and groups.
        </li>
        <li className={css.listItem}>
          Accessible Anywhere: Sync your contacts across all your devices and
          access them anytime, anywhere.
        </li>
        <li className={css.listItem}>
          Smart Features: Utilize advanced features like contact sharing,
          reminders for important dates, and integrated communication options.
        </li>
      </ul>
      <h2 className={css.subHeading}>Get Started Today</h2>
      <p className={css.cta}>
        Join our community and take control of your contacts. Sign up now and
        experience the convenience of having all your connections at your
        fingertips.
      </p>
    </div>
  );
}
