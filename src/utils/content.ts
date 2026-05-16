export function slugFromContentId(id: string) {
  return id.replace(/\.(md|mdx)$/, '');
}
