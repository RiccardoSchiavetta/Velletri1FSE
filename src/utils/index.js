export const createPageUrl = (pageName) => {
  // Converte il nome della pagina in uno slug per l'URL
  const slug = pageName.toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
  return `/${slug}`;
};

// Utility per gestire gli URL
export const getPagePath = (pageName) => {
  const pages = {
    'contatti': '/contatti',
    'magazzino': '/magazzino',
    'lupetti': '/lupetti',
    'esploratori': '/esploratori',
    'rover': '/rover',
    'coccinelle': '/coccinelle',
    'guide': '/guide',
    'scolte': '/scolte'
  };
  return pages[pageName.toLowerCase()] || '/';
};
const storage = window.localStorage;
const entities = {
  ContactRequest: [],
  OrderRequest: []
}; // Mock in-memory (ricarica pagina resetta)

export function createEntity(entityName, data) {
  entities[entityName].push(data);
  storage.setItem(entityName, JSON.stringify(entities[entityName]));
  console.log(`Creato in ${entityName}:`, data);
}

export function getEntities(entityName) {
  return JSON.parse(storage.getItem(entityName)) || entities[entityName];
}

// Nelle pagine, sostituisci chiamate Base44 con queste.