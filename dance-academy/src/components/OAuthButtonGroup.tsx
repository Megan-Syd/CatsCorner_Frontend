import React from 'react';
import { GitHubIcon, GoogleIcon, TwitterIcon } from './ProviderIcons';

const providers = [
  { name: 'Google', icon: <GoogleIcon /> },
  { name: 'Twitter', icon: <TwitterIcon /> },
  { name: 'GitHub', icon: <GitHubIcon /> },
];

export const OAuthButtonGroup = () => (
  <div className="btn-group" role="group">
    {providers.map(({ name, icon }) => (
      <button key={name} type="button" className="btn btn-outline-primary">
        <span className="visually-hidden">Sign in with {name}</span>
        {icon}
      </button>
    ))}
  </div>
);

export default OAuthButtonGroup;