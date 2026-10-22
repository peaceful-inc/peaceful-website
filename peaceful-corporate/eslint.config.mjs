import { FlatCompat } from "@eslint/eslintrc"
import { dirname } from "path"
import { fileURLToPath } from "url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const compat = new FlatCompat({ baseDirectory: __dirname })

const eslintConfig = compat.extends("next/core-web-vitals", "next/typescript")

export default eslintConfig.map((config) => {
  if (!config.rules) return config
  const downgraded = {}
  for (const [key, value] of Object.entries(config.rules)) {
    const severity = Array.isArray(value) ? value[0] : value
    if (severity === "error" || severity === 2) {
      downgraded[key] = Array.isArray(value) ? ["warn", ...value.slice(1)] : "warn"
    } else {
      downgraded[key] = value
    }
  }
  return { ...config, rules: downgraded }
})
