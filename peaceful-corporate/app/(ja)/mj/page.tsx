import { Metadata } from "next"
import MjProfile from "@/components/mj-profile"

export const metadata: Metadata = {
  title: 'Masanari Jinnouchi | peaceful inc.',
  description: "その手の温もり、語りかける声。我々の葛藤のすべてが、未来の医療の礎を築く。",
  robots: { index: false, follow: false },
}

export default function MjPage() {
  return <MjProfile />
}
