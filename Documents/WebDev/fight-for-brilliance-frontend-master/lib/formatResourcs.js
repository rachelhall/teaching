export function formatResources(data) {
  let books = [];
  let resources = [];
  const { edges = null } = data.resources;

  if (edges) {
    edges.forEach(e => {
      const id = e.node.id;
      const r = e.node.Resource;
      const tags = r.tags.map(t => t.name);

      if (r.category === "book") {
        books.push({ ...r, tags });
      }

      if (r.category === "resource") {
        resources.push({ ...r, tags });
      }
    });
  }

  console.log({ books, resources });

  return { books, resources };
}
