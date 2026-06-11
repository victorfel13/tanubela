export type ShopItem = {
  id: string
  src: string
  fileName: string
}

const storeModules = {
  ...import.meta.glob<{ default: string }>('../assets/store/*.png', { eager: true }),
  ...import.meta.glob<{ default: string }>('../assets/store/*.PNG', { eager: true }),
  ...import.meta.glob<{ default: string }>('../assets/store/*.jpg', { eager: true }),
  ...import.meta.glob<{ default: string }>('../assets/store/*.jpeg', { eager: true }),
  ...import.meta.glob<{ default: string }>('../assets/store/*.webp', { eager: true }),
}

function itemsFromStoreFolder(): ShopItem[] {
  const items = Object.entries(storeModules)
    .map(([path, mod]) => ({
      id: path,
      src: mod.default,
      fileName: path.split('/').pop() ?? path,
    }))
    .filter((item) => !item.fileName.includes(' (1)'))

  items.sort((a, b) =>
    a.fileName.localeCompare(b.fileName, undefined, { sensitivity: 'base' }),
  )

  return items
}

export const shopItems: ShopItem[] = itemsFromStoreFolder()
