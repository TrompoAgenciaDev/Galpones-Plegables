import { useEffect } from 'react';

const DEFAULT_TITLE = 'Galpones Plegables';
const DEFAULT_DESCRIPTION =
  'Especialistas en la fabricación y montaje de galpones modulares y plegables para uso industrial, logístico y minero.';

const ROUTE_META = [
  { match: /^\/$/, title: 'Inicio | Galpones Plegables', description: DEFAULT_DESCRIPTION },
  { match: /^\/nosotros\/?$/, title: 'Nosotros | Galpones Plegables', description: DEFAULT_DESCRIPTION },
  { match: /^\/productos\/?$/, title: 'Productos | Galpones Plegables', description: DEFAULT_DESCRIPTION },
  { match: /^\/proyectos\/?$/, title: 'Proyectos | Galpones Plegables', description: DEFAULT_DESCRIPTION },
  { match: /^\/montaje\/?$/, title: 'Montaje | Galpones Plegables', description: DEFAULT_DESCRIPTION },
  { match: /^\/contacto\/?$/, title: 'Contacto | Galpones Plegables', description: DEFAULT_DESCRIPTION },
];

function setMetaDescription(content) {
  const head = document.head;
  let meta = head.querySelector('meta[name="description"]');
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('name', 'description');
    head.appendChild(meta);
  }
  meta.setAttribute('content', content);
}

export default function SeoRoute({ pathname }) {
  useEffect(() => {
    const hit = ROUTE_META.find((r) => r.match.test(pathname));
    document.title = hit?.title ?? DEFAULT_TITLE;
    setMetaDescription(hit?.description ?? DEFAULT_DESCRIPTION);
  }, [pathname]);

  return null;
}

