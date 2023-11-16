export async function getNanoId() {
  const nanoid = (await import('nanoid')).nanoid;
  return nanoid();
}
