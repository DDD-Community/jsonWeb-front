interface Props {
  themeId: Readonly<number | undefined>;
}

export default function ReviewDetailBottom({ themeId }: Props) {
  return (
    <div>
      <div>{themeId}</div>
    </div>
  );
}
