import { ButtonHTMLAttributes } from 'react';
import './button.scss';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Type of the button
   */
  mode: 'primary' | 'rounded' | 'text' | 'dangerous' | 'cancelling' | 'special' | 'invisible' | 'reset' | 'blue';
  /**
   * Is the button outlined?
   */
  outlined?: boolean;
  /**
   * How large should the button be?
   */
  size: 'small' | 'medium' | 'large' | 'XS' | 'fill';
  /**
   * Where is the icon positioned?
   */
  iconPosition?: 'left' | 'right';
  /**
   * Button contents
   */
  label: string;
  isLoading?: boolean;
  disabled?: boolean;
  icon?: string;
  hoverIcon?: string;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
  isHint?: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  mode = 'primary',
  handleClick,
  size = 'large',
  outlined = false,
  iconPosition = 'left',
  label,
  icon,
  hoverIcon,
  children,
  isLoading = false,
  disabled = false,
  isHint = false,
  ...props
}: ButtonProps) => {
  const isButtonOulined = outlined
    ? 'careerOS-button--outlined'
    : 'careerOS-button--normal';

  const isButtonDisabled = disabled || isLoading
    ? 'careerOS-button--disabled'
    : 'careerOS-button--not-disabled';

  const doesButtonHaveIcon = icon
    ? 'careerOS-button--has-icon'
    : 'careerOS-button--no-icon';

  const isTextHint = isHint ? 'careerOS-button--hint' : '';

  return (
    <button
      type="button"
      onClick={handleClick}
      className={[
        'careerOS-button',
        `careerOS-button--mode-${mode}`,
        `careerOS-button--size-${size}`,
        `careerOS-button--icon-position-${iconPosition}`,
        doesButtonHaveIcon,
        isButtonOulined,

        isButtonDisabled,
        isTextHint,
      ].join(' ')}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && (
        <span className="careerOS-button__loader" />
      )}
      {(icon || hoverIcon) ? (
        <>
          <i className={`${icon} careerOS-button__icon`} />
          <i className={`${hoverIcon || icon} careerOS-button__icon careerOS-button__icon--hover`} />
        </>
      ) : null}
      {!!label && (
        <span className="careerOS-button__label">
          {' '}
          {label}
        </span>
      )}
    </button>
  );
};