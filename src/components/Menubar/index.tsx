import NavigationList from './NavigationList';

/**
 * Menubar component.
 *
 * This functional component renders a navigation list inside a div element.
 *
 * @component
 * @example
 * return (
 *   <Menubar />
 * )
 */
const Menubar: React.FC = () => {
  return (
    <div>
      <NavigationList />
    </div>
  );
};

export default Menubar;
