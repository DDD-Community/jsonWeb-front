export default function BoldText({ children }: { children: any }) {
  return (
    <span style={{ fontWeight: 'semiBold', color: 'black' }}>{children}</span>
  );
}
