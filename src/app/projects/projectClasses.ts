export class Framework {
  id: number
  title: string
  isChecked = false

  constructor(id: number, title: string) {
    this.id = id
    this.title = title
  }
}

export class Capability {
  id: number
  title: string
  isChecked = false

  constructor(id: number, title: string) {
    this.id = id
    this.title = title
  }
}

export class Project {
  id: number
  image: string
  title: string
  description: string
  tags: string[]
  isDeployed: boolean
  websiteLink?: string
  githublink?: string
  details: ProjectDetail

  constructor(id: number, image: string, title: string, description: string, tags: string[], isDeployed: boolean, details: ProjectDetail, websiteLink?: string, githublink?: string,) {
    this.id = id
    this.image = image
    this.githublink = githublink
    this.title = title
    this.description = description
    this.tags = tags
    this.isDeployed = isDeployed
    this.details = details
    this.websiteLink = websiteLink
  }
}

export class ProjectDetail {
  longDescription: string[]
  stackImageStrings: string[]
  stackTechnologyTitles: string[]
  extras?: string[]
  extrasImageStrings?: string[]
  designLink?: string

  constructor(longDescription: string[], stackImageStrings: string[], stackTechnologyTitles: string[], extras?: string[], extrasImageStrings?: string[], designLink?: string) {
    this.longDescription = longDescription
    this.stackImageStrings = stackImageStrings
    this.stackTechnologyTitles = stackTechnologyTitles
    this.extras = extras
    this.extrasImageStrings = extrasImageStrings
    this.designLink = designLink
  }
}