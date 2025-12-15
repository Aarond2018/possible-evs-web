export function isActiveLink(pathname: string, itemPath: string) {
  if (!itemPath) return false;
  return pathname === itemPath || pathname.startsWith(itemPath + "/");
  // return pathname === itemPath || pathname.startsWith(itemPath + "/") || pathname.startsWith(itemPath + "?");
}
