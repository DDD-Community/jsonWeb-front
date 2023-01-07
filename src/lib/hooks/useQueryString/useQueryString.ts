export function useQueryString(name: string) {
  return new URLSearchParams(window.location.search).get(name);
}
