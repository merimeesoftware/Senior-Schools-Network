import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { usePathname } from 'next/navigation';
import Navigation from '../../layout/Navigation';

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ alt }: { alt?: string }) => <img alt={alt ?? ''} />,
}));

jest.mock('next/link', () => {
  const MockLink = ({
    children,
    href,
    ...rest
  }: {
    children: ReactNode;
    href: string;
  } & AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a href={href} {...rest}>
      {children}
    </a>
  );
  MockLink.displayName = 'MockLink';
  return MockLink;
});

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}));

const mockedUsePathname = usePathname as jest.Mock;

describe('Navigation', () => {
  beforeEach(() => {
    mockedUsePathname.mockReturnValue('/');
  });

  it('marks the current route on desktop links', () => {
    mockedUsePathname.mockReturnValue('/philosophy');
    render(<Navigation />);

    expect(screen.getByRole('link', { name: 'Philosophy' })).toHaveAttribute(
      'aria-current',
      'page'
    );
    expect(screen.getByRole('link', { name: 'Home' })).not.toHaveAttribute(
      'aria-current'
    );
    const philosophy = screen.getByRole('link', { name: 'Philosophy' });
    expect(philosophy).toHaveClass('text-gold');
    expect(philosophy).toHaveClass('min-h-11');
    expect(philosophy).toHaveClass('focus-visible-ring');
  });

  it('marks only the home link for the index route', () => {
    render(<Navigation />);

    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute(
      'aria-current',
      'page'
    );
    expect(screen.getByRole('link', { name: 'Engage' })).not.toHaveAttribute(
      'aria-current'
    );
  });

  it('marks the same route in the mobile menu and keeps a 44px control', () => {
    mockedUsePathname.mockReturnValue('/network-directory/example');
    render(<Navigation />);

    fireEvent.click(screen.getByRole('button', { name: 'Open navigation menu' }));

    const directoryLinks = screen.getAllByRole('link', {
      name: 'Schools & Programs',
    });
    expect(directoryLinks).toHaveLength(2);
    directoryLinks.forEach((link) => {
      expect(link).toHaveAttribute('aria-current', 'page');
      expect(link).toHaveClass('min-h-11');
      expect(link).toHaveClass('focus-visible-ring');
    });

    const menuButton = screen.getByRole('button', { name: 'Close navigation menu' });
    expect(menuButton).toHaveClass('min-h-11');
    expect(menuButton).toHaveClass('min-w-11');
    expect(menuButton).toHaveClass('focus-visible-ring');
  });
});
