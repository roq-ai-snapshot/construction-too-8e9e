const mapping: Record<string, string> = {
  companies: 'company',
  invitations: 'invitation',
  rentals: 'rental',
  tools: 'tool',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
