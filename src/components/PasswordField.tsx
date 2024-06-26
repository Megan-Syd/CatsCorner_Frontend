import React, { forwardRef, useRef, useState } from 'react';
import { HiEye, HiEyeOff } from 'react-icons/hi';

interface PasswordFieldProps {
  id: string;
  name: string;
  autoComplete?: string;
  required?: boolean;
  className?: string;
}

export const PasswordField = forwardRef<HTMLInputElement, PasswordFieldProps>((props, ref) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const { id, name, autoComplete, required, className, ...rest } = props;

  return (
    <div className="mb-3">
      <div className="input-group">
        <input
          id={id} 
          ref={(element) => {
            inputRef.current = element;
            if (typeof ref === 'function') {
              ref(element);
            } else if (ref) {
              ref.current = element;
            }
          }}
          name={name}
          type={showPassword ? 'text' : 'password'}
          className={`form-control ${className || ''}`}
          autoComplete={autoComplete || 'current-password'}
          required={required}
          {...rest} 
        />
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? <HiEyeOff /> : <HiEye />}
        </button>
      </div>
    </div>
  );
});

PasswordField.displayName = 'PasswordField';