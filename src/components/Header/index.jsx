import { Link } from 'gatsby';
import React from 'react';
import useSiteMetadata from 'src/hooks/useSiteMetadata';

const Header = () => {
  const { logo, siteUrl, navLinks } = useSiteMetadata();

  return (
    <div>
      <nav
        className="db flex justify-between w-100 ph5-l"
        style={{ marginTop: '3rem' }}
      >
        <div className="dib w-25 v-mid">
          <Link to={siteUrl} className="link dim">
            <picture>
              <img className="dib w3 h3 br-100" alt="logo" src="https://www.gravatar.com/avatar/e2677dbb4c7d7115ffab00d0c99f8607dc91bc4de80b656e1d37010f81d230b5" />
            </picture>
          </Link>
        </div>
        <div className="dib w-75 v-mid tr">
          {navLinks.map((n, i) => (
            <a
              key={i}
              href={n.url}
              className="light-gray link dim f6 f5-l mr3 mr4-l"
            >
              {n.name}
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Header;
