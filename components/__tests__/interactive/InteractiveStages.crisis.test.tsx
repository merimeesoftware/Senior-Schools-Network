import { render, screen, fireEvent } from '@testing-library/react';
import InteractiveStages from '../../interactive/InteractiveStages';

describe('InteractiveStages - Crisis Mode Enhancement', () => {
  describe('Default Mode', () => {
    it('renders in default mode without toggle', () => {
      render(<InteractiveStages />);
      
      // Should show solution content by default
      expect(screen.getByText(/teaches repose/i)).toBeInTheDocument();
      
      // Should NOT show crisis indicator
      expect(screen.queryByText(/Crisis Mode/i)).not.toBeInTheDocument();
    });

    it('shows default descriptions for all stages', () => {
      render(<InteractiveStages />);
      
      // Click gymnasium stage
      const gymnasticButton = screen.getByRole('button', { name: /Gymnastic \(7–13\)/i });
      fireEvent.click(gymnasticButton);
      
      expect(screen.getByText(/teaches adventure/i)).toBeInTheDocument();
      expect(screen.queryByText(/7 hrs\/day screens/i)).not.toBeInTheDocument();
    });

    it('displays shield icon in default mode', () => {
      const { container } = render(<InteractiveStages />);
      
      const shieldIcons = Array.from(container.querySelectorAll('[aria-hidden="true"]'))
        .filter((el) => el.textContent === '🛡️');
      expect(shieldIcons.length).toBeGreaterThan(0);
    });
  });

  describe('Crisis Mode (Static)', () => {
    it('renders in crisis mode when mode prop is crisis', () => {
      render(<InteractiveStages mode="crisis" />);
      
      // Should show crisis content
      expect(screen.getByText(/Screens invade the musical garden/i)).toBeInTheDocument();
      
      // Should show crisis indicator
      expect(screen.getByText(/Crisis Mode/i)).toBeInTheDocument();
    });

    it('shows crisis descriptions for all stages', () => {
      render(<InteractiveStages mode="crisis" />);
      
      // Click poetic stage
      const poeticButton = screen.getByRole('button', { name: /Poetic \(~12–15\)/i });
      fireEvent.click(poeticButton);
      
      expect(screen.getByText(/Specialization forces analysis before wonder/i)).toBeInTheDocument();
      expect(screen.queryByText(/teaches the first look/i)).not.toBeInTheDocument();
    });

    it('displays warning icon in crisis mode', () => {
      const { container } = render(<InteractiveStages mode="crisis" />);
      
      const warningIcons = Array.from(container.querySelectorAll('[aria-hidden="true"]'))
        .filter((el) => el.textContent === '⚠️');
      expect(warningIcons.length).toBeGreaterThan(0);
    });

    it('applies red border and background in crisis mode', () => {
      const { container } = render(<InteractiveStages mode="crisis" />);
      
      const contentDiv = container.querySelector('.stage-content-enter');
      expect(contentDiv).toHaveClass('bg-red-100/50');
      expect(contentDiv).toHaveClass('border-red-600');
    });
  });

  describe('Toggle Functionality', () => {
    it('renders toggle button when allowModeToggle is true', () => {
      render(<InteractiveStages allowModeToggle={true} />);
      
      expect(screen.getByRole('button', { name: /View Crisis/i })).toBeInTheDocument();
    });

    it('does not render toggle button when allowModeToggle is false', () => {
      render(<InteractiveStages allowModeToggle={false} />);
      
      expect(screen.queryByRole('button', { name: /View Crisis/i })).not.toBeInTheDocument();
    });

    it('switches from default to crisis mode on toggle click', () => {
      render(<InteractiveStages allowModeToggle={true} />);
      
      // Initially in default mode
      expect(screen.getByText(/teaches repose/i)).toBeInTheDocument();
      
      // Click toggle
      const toggleButton = screen.getByRole('button', { name: /View Crisis/i });
      fireEvent.click(toggleButton);
      
      // Now in crisis mode
      expect(screen.getByText(/Screens invade the musical garden/i)).toBeInTheDocument();
      expect(screen.getByText(/Crisis Mode/i)).toBeInTheDocument();
    });

    it('switches from crisis to default mode on toggle click', () => {
      render(<InteractiveStages allowModeToggle={true} />);
      
      // Click toggle to crisis
      const toggleButton = screen.getByRole('button', { name: /View Crisis/i });
      fireEvent.click(toggleButton);
      
      expect(screen.getByText(/Screens invade the musical garden/i)).toBeInTheDocument();
      
      // Click toggle back to solution
      const solutionButton = screen.getByRole('button', { name: /View Solution/i });
      fireEvent.click(solutionButton);
      
      expect(screen.getByText(/teaches repose/i)).toBeInTheDocument();
      expect(screen.queryByText(/Crisis Mode/i)).not.toBeInTheDocument();
    });

    it('toggle button text changes based on mode', () => {
      render(<InteractiveStages allowModeToggle={true} />);
      
      // Initially shows "View Crisis"
      expect(screen.getByRole('button', { name: /View Crisis/i })).toBeInTheDocument();
      
      // Click to switch
      fireEvent.click(screen.getByRole('button', { name: /View Crisis/i }));
      
      // Now shows "View Solution"
      expect(screen.getByRole('button', { name: /View Solution/i })).toBeInTheDocument();
    });

    it('toggle button has correct aria-pressed attribute', () => {
      render(<InteractiveStages allowModeToggle={true} />);
      
      const toggleButton = screen.getByRole('button', { name: /View Crisis/i });
      expect(toggleButton).toHaveAttribute('aria-pressed', 'false');
      
      fireEvent.click(toggleButton);
      
      const updatedButton = screen.getByRole('button', { name: /View Solution/i });
      expect(updatedButton).toHaveAttribute('aria-pressed', 'true');
    });

    it('toggle button changes color scheme', () => {
      render(<InteractiveStages allowModeToggle={true} />);
      
      const crisisButton = screen.getByRole('button', { name: /View Crisis/i });
      expect(crisisButton).toHaveClass('bg-red-100');
      expect(crisisButton).toHaveClass('border-red-600');
      
      fireEvent.click(crisisButton);
      
      const solutionButton = screen.getByRole('button', { name: /View Solution/i });
      expect(solutionButton).toHaveClass('bg-green-100');
      expect(solutionButton).toHaveClass('border-green-600');
    });
  });

  describe('Stage Navigation', () => {
    it('maintains mode when switching stages', () => {
      render(<InteractiveStages allowModeToggle={true} />);
      
      // Switch to crisis mode
      fireEvent.click(screen.getByRole('button', { name: /Crisis View/i }));
      
      const gymnasticButton = screen.getByRole('button', { name: /Gymnastic \(7–13\)/i });
      fireEvent.click(gymnasticButton);
      
      // Should still show crisis content
      expect(screen.getByText(/Screens evacuate the gymnasium/i)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /Crisis View/i })).toHaveAttribute('aria-pressed', 'true');
    });

    it('shows correct crisis description for virtuous mode', () => {
      render(<InteractiveStages mode="crisis" />);
      
      const virtuousButton = screen.getByRole('button', { name: /Virtuous \(youth onward\)/i });
      fireEvent.click(virtuousButton);
      
      expect(screen.getByText('Justice and governing never ripen — household and city go untended; faith is never kept.')).toBeInTheDocument();
    });
  });

  describe('Visual Indicators', () => {
    it('shows mode indicator icon on stage card', () => {
      const { container } = render(<InteractiveStages mode="crisis" />);
      
      const contentDiv = container.querySelector('.stage-content-enter');
      const iconDiv = contentDiv?.querySelector('[aria-hidden="true"]');
      expect(iconDiv?.textContent).toBe('⚠️');
    });

    it('mode indicator icon changes with toggle', () => {
      const { container } = render(<InteractiveStages allowModeToggle={true} />);
      
      // Initially shield
      let contentDiv = container.querySelector('.stage-content-enter');
      let iconDiv = contentDiv?.querySelector('.absolute.top-4.right-4');
      expect(iconDiv?.textContent).toBe('🛡️');
      
      // Toggle to crisis
      fireEvent.click(screen.getByRole('button', { name: /View Crisis/i }));
      
      // Now warning
      contentDiv = container.querySelector('.stage-content-enter');
      iconDiv = contentDiv?.querySelector('.absolute.top-4.right-4');
      expect(iconDiv?.textContent).toBe('⚠️');
    });

    it('crisis mode indicator text appears only in crisis mode', () => {
      const { rerender } = render(<InteractiveStages mode="default" />);
      expect(screen.queryByText(/Crisis Mode/i)).not.toBeInTheDocument();
      
      rerender(<InteractiveStages mode="crisis" />);
      expect(screen.getByText(/Crisis Mode/i)).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('toggle button is keyboard accessible', () => {
      render(<InteractiveStages allowModeToggle={true} />);
      
      const toggleButton = screen.getByRole('button', { name: /View Crisis/i });
      toggleButton.focus();
      expect(toggleButton).toHaveFocus();
    });

    it('toggle button has focus ring styles', () => {
      render(<InteractiveStages allowModeToggle={true} />);
      
      const toggleButton = screen.getByRole('button', { name: /View Crisis/i });
      expect(toggleButton).toHaveClass('focus:outline-none');
      expect(toggleButton).toHaveClass('focus:ring-4');
    });

    it('icons have aria-hidden attribute', () => {
      const { container } = render(<InteractiveStages mode="crisis" />);
      
      const icons = container.querySelectorAll('[aria-hidden="true"]');
      expect(icons.length).toBeGreaterThan(0);
    });

    it('mode indicator is visible to screen readers', () => {
      render(<InteractiveStages mode="crisis" />);
      
      const indicator = screen.getByText(/Crisis Mode: Showing modern education failures/i);
      expect(indicator).toBeInTheDocument();
    });
  });

  describe('Integration', () => {
    it('accepts className prop', () => {
      const { container } = render(<InteractiveStages className="test-class" />);
      
      const rootDiv = container.firstChild;
      expect(rootDiv).toHaveClass('test-class');
    });

    it('works with all five modes', () => {
      render(<InteractiveStages mode="crisis" />);
      
      const stages = [
        { name: 'Musical (0–7)', text: 'Screens invade the musical garden' },
        { name: 'Gymnastic (7–13)', text: 'Screens evacuate the gymnasium' },
        { name: 'Poetic (~12–15)', text: 'Specialization forces analysis before wonder' },
        { name: 'Romantic (~15–18+)', text: 'The romantic collapses into premature sexualization' },
        { name: 'Virtuous (youth onward)', text: 'Justice and governing never ripen — household and city go untended; faith is never kept.' }
      ];
      
      stages.forEach((stage) => {
        const stageButton = screen.getByRole('button', { name: stage.name });
        expect(stageButton).toBeInTheDocument();
        
        fireEvent.click(stageButton);
        expect(screen.getByText(new RegExp(stage.text, 'i'))).toBeInTheDocument();
      });
    });

    it('maintains smooth transitions between modes', () => {
      const { container } = render(<InteractiveStages allowModeToggle={true} />);
      
      const contentDiv = container.querySelector('.stage-content-enter');
      expect(contentDiv).toHaveClass('transition-all');
      expect(contentDiv).toHaveClass('duration-300');
    });
  });
});
