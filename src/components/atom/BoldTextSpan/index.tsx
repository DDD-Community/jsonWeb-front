export default function BoldText({ children }: { children: string | number }) {
  return (
    <span style={{ fontWeight: 'semiBold', color: 'black' }}>{children}</span>
  );
}
