/**
 * Renders a button component with optional loader and value element.
 *
 * @param {IButtonsProps} onClick - The click event handler.
 * @param {React.ReactNode} children - The content of the button.
 * @param {boolean} loader - Whether to show a loader.
 * @param {React.ReactNode} valueElement - The value element.
 * @return {JSX.Element} The rendered button component.
 */
import { IButtonProps } from './interface';

const Button = ({
  children,
  isLoading,
  buttonClassNames = `p-2 bg-amber-400 rounded-md mt-2 hover:bg-purple-400 ${
    isLoading ? 'cursor-not-allowed hover:bg-gray-400' : 'cursor-pointer'
  }`,
  ...restProps
}: IButtonProps) => {
  return (
    <button className={buttonClassNames} disabled={isLoading} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
