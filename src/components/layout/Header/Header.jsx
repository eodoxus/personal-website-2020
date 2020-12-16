import React from "react";
import cx from "classnames";
import { Link } from "@reach/router";

import { LinkButton } from "../../forms/controls/Buttons";

import styles from "./Header.module.scss";

export default ({ email, name, phone, portrait, slogan, url }) => {
  return (
    <header className={cx(styles.header, "header")}>
      <div className={styles.selfie}>
        <Link to={url} className={styles.frame}>
          <img src={portrait} alt={`${name} portrait`} />
        </Link>
      </div>
      <div className={styles.messaging}>
        <h1 className={styles.title}>
          <a href={url}>{name}</a>
        </h1>
        <h2 className={styles.subtitle}>{slogan}</h2>
      </div>
      <p className={styles.contactIcons}>
        <LinkButton
          icon="facebook"
          size="sm"
          url="https://facebook.com/eodoxus"
        />
        <LinkButton
          icon="linkedin"
          size="sm"
          url="https://www.linkedin.com/in/jasongordon"
        />
        <LinkButton icon="github" size="sm" url="https://github.com/eodoxus" />
        <span className={styles.phone}>
          <LinkButton
            icon="phone"
            size="sm"
            target="_top"
            url={`tel: ${phone}`}
          />
        </span>
        <LinkButton
          icon="envelope"
          size="sm"
          target="_top"
          url={`mailto: ${email}`}
        />
      </p>
    </header>
  );
};
