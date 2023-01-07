export const viewHeight = (value: number) => `calc(var(--var,1vh)*${value}`;

export const fullViewHeight = () => viewHeight(100);
