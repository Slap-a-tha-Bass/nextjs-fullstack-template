export interface IFooter extends React.ComponentPropsWithoutRef<'footer'> {}

export default function Footer({ ...footerProps }) {
  return (
    <footer {...footerProps}>
      <p>USA</p>
    </footer>
  );
}
