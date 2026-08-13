/**
 * Guest side of the Grok preview postMessage bridge.
 * Noops when the app is not embedded in a Grok preview iframe.
 */

export const PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge" as const;
export const PREVIEW_BRIDGE_VERSION = 1 as const;

export type PreviewHostBridgeOptions = {
  navigate?: (path: string) => void;
  getRoutePaths?: () => string[];
};

export function isGrokEmbedderOrigin(origin: string): boolean {
  try {
    const url = new URL(origin);
    if (url.protocol !== "https:" && url.protocol !== "http:") return false;
    const host = url.hostname.toLowerCase();
    return host === "grok.com" || host.endsWith(".grok.com");
  } catch {
    return false;
  }
}

export function installPreviewHostBridge(
  _options: PreviewHostBridgeOptions = {},
): () => void {
  return () => {};
}

export function collectRoutePathsFromTree(routeTree: unknown): string[] {
  const paths = new Set<string>();
  const walk = (node: unknown) => {
    if (!node || typeof node !== "object") return;
    const record = node as {
      fullPath?: unknown;
      path?: unknown;
      children?: unknown;
    };
    const full =
      typeof record.fullPath === "string"
        ? record.fullPath
        : typeof record.path === "string"
          ? record.path
          : null;
    if (full !== null && full !== "") {
      paths.add(full.startsWith("/") ? full : `/${full}`);
    } else if (full === "") {
      paths.add("/");
    }
    const children = record.children;
    if (Array.isArray(children)) {
      for (const child of children) walk(child);
    } else if (children && typeof children === "object") {
      for (const child of Object.values(children as Record<string, unknown>)) {
        walk(child);
      }
    }
  };
  walk(routeTree);
  return [...paths];
}
