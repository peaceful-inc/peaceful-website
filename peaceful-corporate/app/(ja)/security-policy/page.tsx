import { Metadata } from "next"
import SecurityPolicy from "@/components/hp/security-policy"

export const metadata: Metadata = {
  title: '情報セキュリティ基本方針 | peaceful inc.',
  alternates: { canonical: '/security-policy' },
}

export default function SecurityPolicyPage() {
  return <SecurityPolicy />
}
