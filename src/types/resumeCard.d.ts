interface DataGroupText {
  type: 'text'
  title: string
  description: string | string[]
}
interface DataGroupFlow {
  type: 'flow'
  title: string
  data: {
    title: string
    info: string
    startTime: string
    endTime: string
    description: string | string[]
  }[]
}

interface ResumeBodyProps {
  key: string
  name: string
  subInfo: string | string[]
  avatar: string
  location: string
  email: string
  phone: string
  dataGroup: (DataGroupText | DataGroupFlow)[] | null
}

export type { DataGroupText, DataGroupFlow, ResumeBodyProps }
