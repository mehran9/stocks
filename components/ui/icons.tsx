import {
  Zap,
  ChevronDown,
  ChevronUp,
  ChevronsUpDown,
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  ArrowLeft,
  ArrowDown,
  ArrowUp,
  RefreshCw,
  Download,
  Link,
  MapPin,
  LineChart,
  BarChart,
  Bell,
  DollarSign,
  Bitcoin,
  Briefcase,
  AlertTriangle,
  Settings,
  TrendingUp,
  TrendingDown,
  Calendar,
  HelpCircle,
  Shield,
  Activity,
  Eye,
  LucideProps,
} from "lucide-react"

export const Icons = {
  zap: Zap,
  chevronDown: ChevronDown,
  chevronUp: ChevronUp,
  chevronsUpDown: ChevronsUpDown,
  chevronRight: ChevronRight,
  chevronLeft: ChevronLeft,
  arrowRight: ArrowRight,
  arrowLeft: ArrowLeft,
  arrowDown: ArrowDown,
  arrowUp: ArrowUp,
  download: Download,
  link: Link,
  mapPin: MapPin,
  lineChart: LineChart,
  stock: LineChart,
  barChart: BarChart,
  bell: Bell,
  dollarSign: DollarSign,
  bitcoin: Bitcoin,
  crypto: ({ ...props }: LucideProps) => (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="crypto"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill="currentColor"
      {...props}
    >
      <path
        d="m247.64 299.82-35.461-35.461c-11.145-11.145-29.215-11.145-40.359 0l-35.461 35.461c-11.145 11.145-11.145 29.215 0 40.359l35.461 35.461c11.145 11.145 29.215 11.145 40.359 0l35.461-35.461c11.145-11.145 11.145-29.215 0-40.359zm-86.207 20.18 30.566-30.566 30.566 30.566-30.566 30.566z"
        fill-rule="evenodd"
      />
      <path
        d="m16 320c0-82.453 56.699-151.66 133.23-170.77 19.105-76.531 88.312-133.23 170.77-133.23 97.203 0 176 78.797 176 176 0 82.453-56.699 151.66-133.23 170.77-19.109 76.531-88.316 133.23-170.77 133.23-97.203 0-176-78.797-176-176zm176-176c-2.6367 0-5.2578 0.058594-7.8672 0.17188 19.719-56.02 73.105-96.172 135.87-96.172 79.531 0 144 64.473 144 144 0 62.762-40.152 116.15-96.172 135.87 0.11328-2.6094 0.17188-5.2305 0.17188-7.8672 0-97.203-78.797-176-176-176zm0 32c-79.527 0-144 64.473-144 144s64.473 144 144 144 144-64.473 144-144-64.473-144-144-144z"
        fill-rule="evenodd"
      />
    </svg>
  ),
  currencyDollar: DollarSign,
  options: Briefcase,
  help: HelpCircle,
  refresh: RefreshCw,
  briefcase: Briefcase,
  alertTriangle: AlertTriangle,
  settings: Settings,
  trendingUp: TrendingUp,
  trendingDown: TrendingDown,
  calendar: Calendar,
  shield: Shield,
  activity: Activity,
  eye: Eye,
}
