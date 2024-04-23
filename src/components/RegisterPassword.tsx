import React, { forwardRef, useRef, useState, ChangeEvent } from 'react';
import { HiEye, HiEyeOff } from 'react-icons/hi';

interface RegisterPasswordProps {
    id: string;
    name: string;
    value?: string;
    autoComplete?: string;
    required?: boolean;
    className?: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  }

  export const RegisterPassword = forwardRef<HTMLInputElement, RegisterPasswordProps>((props, ref) => {
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
              autoComplete={autoComplete || 'new-password'}
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
    
    RegisterPassword.displayName = 'RegisterPassword';
