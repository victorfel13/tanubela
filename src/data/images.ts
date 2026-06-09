/**
 * Origen de los items de la galeria (no es el componente visual).
 * En 'local', Vite incluye en el bundle los archivos de:
 * - `src/assets/galery/`
 * - `src/assets/GaleryRegistrer/`
 * al compilar.
 * En 'api', usa fetch desde el componente (useEffect) en lugar de `galleryItems`.
 */
export type GalleryItemsSourceMode = "local" | "api";

export const galleryItemsSourceMode: GalleryItemsSourceMode = "local";

export type GalleryItem = {
  id: string;
  src: string;
  /** Nombre del archivo, util como etiqueta interna */
  fileName: string;
};

/** Dos globs: en algunos sistemas `*.WEBP` no coincide con `*.webp`. */
const localModules = {
  ...import.meta.glob<{ default: string }>("../assets/galery/*.webp", {
    eager: true,
  }),
  ...import.meta.glob<{ default: string }>("../assets/galery/*.WEBP", {
    eager: true,
  }),
  ...import.meta.glob<{ default: string }>("../assets/GaleryRegistrer/*.webp", {
    eager: true,
  }),
  ...import.meta.glob<{ default: string }>("../assets/GaleryRegistrer/*.WEBP", {
    eager: true,
  }),
};

function itemsFromLocalFolder(): GalleryItem[] {
  const items = Object.entries(localModules).map(([path, mod]) => ({
    id: path,
    src: mod.default,
    fileName: path.split("/").pop() ?? path,
  }));
  items.sort((a, b) =>
    a.fileName.localeCompare(b.fileName, undefined, { sensitivity: "base" }),
  );
  return items;
}

/** Lista estatica mientras `galleryItemsSourceMode === 'local'`. */
export const galleryItems: GalleryItem[] =
  galleryItemsSourceMode === "local" ? itemsFromLocalFolder() : [];

// Cuando galleryItemsSourceMode sea 'api', descomenta y usalo con useEffect:
// export async function fetchGalleryItems(): Promise<GalleryItem[]> {
//   const res = await fetch('https://tu-api.com/gallery')
//   if (!res.ok) throw new Error('Galeria no disponible')
//   return res.json()
// }

/** Logos placeholder para footer. Sustituye por urls reales o local imports. */
export const pressLogos: string[] = ["LOGO 1", "LOGO 2", "LOGO 3"];
