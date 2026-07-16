import { agentManifestResponse } from "@/lib/agentManifest";

export const dynamic = "force-static";

export function GET() {
  return agentManifestResponse();
}
