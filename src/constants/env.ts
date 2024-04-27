const ENV_VARS = {
  mapboxToken: String(import.meta.env.VITE_MAPBOX_TOKEN),
  backendRoute: String(import.meta.env.VITE_BACKEND_ROUTE),
};

export const getEnvVars = (key: keyof typeof ENV_VARS) => {
  return ENV_VARS[key];
};
