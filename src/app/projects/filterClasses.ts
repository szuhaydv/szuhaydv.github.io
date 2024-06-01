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
  githublink: string
  title: string
  description: string
  tags: string[]
  isDeployed: boolean
  websiteLink?: string

  constructor(id: number, image: string, githublink: string, title: string, description: string, tags: string[], isDeployed: boolean, websiteLink?: string) {
    this.id = id
    this.image = image
    this.githublink = githublink
    this.title = title
    this.description = description
    this.tags = tags
    this.isDeployed = isDeployed
    if (websiteLink) {
      this.websiteLink = websiteLink
    }
  }
}