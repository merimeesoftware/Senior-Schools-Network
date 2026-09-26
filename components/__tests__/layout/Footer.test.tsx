import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../../layout/Footer';

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

jest.mock('../../layout/FooterContent', () => ({
  __esModule: true,
  default: function FooterContent() {
    return <div>Scripture waypoints</div>;
  },
}));

describe('Footer', () => {
  it('places a GitHub repo link beside Privacy and Contact', () => {
    render(<Footer />);

    const privacy = screen.getByRole('link', { name: 'Privacy Policy' });
    const contact = screen.getByRole('link', { name: 'Contact' });
    const github = screen.getByRole('link', { name: /GitHub/ });

    expect(privacy).toHaveAttribute('href', '/privacy');
    expect(contact).toHaveAttribute('href', '/contact');
    expect(github).toHaveAttribute(
      'href',
      'https://github.com/merimeesoftware/Senior-Schools-Network'
    );
    expect(github).toHaveAttribute('target', '_blank');
    expect(github).toHaveAttribute('rel', 'noopener noreferrer');

    [privacy, contact, github].forEach((link) => {
      expect(link).toHaveClass('min-h-11');
      expect(link).toHaveClass('min-w-11');
      expect(link).toHaveClass('focus-visible-ring');
    });
  });
});
